const path = require('path');
const [
	buildDir = path.resolve('./dist'),
	githubPat = '',
] = require('./libs/get-cli-args');

require('gh-pages').clean();

const { copy, move, pathExistsSync } = require('./libs/fs-toolkit');
const exec = require('./libs/execute-sync-command');
const publishToBranch = require('./libs/git-publish-to-branch');
const buildGitPatRepoUrl = require('./libs/git-pat-repo-url');

console.log('');

const STATUS_SUCCESS = 'success';
const STATUS_FAILURE = 'failure';
/*
  MS Azure DevOps - Run Git commands in a script
  https://docs.microsoft.com/en-us/azure/devops/pipelines/scripts/git-commands?view=azure-devops&tabs=yaml

  MS Azure DevOps -  skip CI
  https://docs.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops&tabs=yaml#skipping-ci-for-individual-commits
*/
const buildPublishOptions = (branch) => {
	const ciOptions = githubPat
		? {
				repo: buildGitPatRepoUrl(githubPat),
				silent: true,
				message: `[Azure DevOps] ${new Date().toISOString()} - Auto-generated commit`,
				user: {
					name: 'pmi-automate',
					email: 'automate@pm-international.com',
				},
		  }
		: {};
	return {
		branch,
		history: false,
		dotfiles: true,
		message: `[dev machine] ${new Date().toISOString()} - Auto-generated commit`,
		...ciOptions,
	};
};

const publishStorybook = async () => {
	const toBranch = 'build/storybook';
	try {
		await publishToBranch(buildDir, buildPublishOptions(toBranch));
		console.log('published');
		return STATUS_SUCCESS;
	} catch (e) {
		console.error(e);
		return STATUS_FAILURE;
	}
};

const prepareLocalRun = async () => {
	if (githubPat) {
		return;
	}

	await copy('.azure-pipelines/cd', 'dist/.azure-pipelines/cd');
};

(async () => {
	await prepareLocalRun();

	if (!pathExistsSync(buildDir)) {
		console.error('the .azure-pipelines directory is not present');
		process.exit(1);
	}

	console.log(`buildDir: ${buildDir}`);

	await move(`${buildDir}/storybook`, `${buildDir}/dist`);

	const status = await publishStorybook();

	if (status === STATUS_FAILURE) {
		console.error(`\nFAILURE\n`);
		process.exit(1);
	} else {
		console.log('\nDONE\n');
		try {
			exec('git fetch', {
				stdio: [0, 1, 2],
			});
		} catch (e) {}
	}
})();
