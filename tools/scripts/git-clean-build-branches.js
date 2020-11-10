const [startsWith = 'build/'] = require('./libs/get-cli-args');

if (startsWith.startsWith('master') || startsWith.startsWith('develop')) {
	console.error(`not allowed: ${startsWith}`);
	process.exit(1);
}

const exec = require('./libs/execute-sync-command');
const updateLocalRepository = require('./libs/git-update-local-repository');

const getAvailableRemoteBranches = () =>
	exec('git branch -r')
		.split('\n')
		.filter((branch) => branch.length > 0)
		.map((branch) => branch.replace('origin/', '').trim());

const getAvailableLocalBranches = () =>
	exec('git branch -l')
		.split('\n')
		.map((branch) => branch.trim().replace('* ', ''));

const localBranchesCache = getAvailableLocalBranches();
const removeLocalBranch = (branch) => {
	if (localBranchesCache.includes(branch)) {
		exec(`git branch -D ${branch}`);
	}
};

console.log(getAvailableLocalBranches());

updateLocalRepository();

let branches = getAvailableRemoteBranches();

console.log('all available branches: ', branches);

if (branches.length === 0) {
	process.exit();
}

console.log(`\nshould remove the branches started with:  ${startsWith}`);

branches = branches.filter((branch) => branch.startsWith(startsWith));

console.log('\nbranches to remove: ', branches);

if (branches.length === 0) {
	process.exit();
}

branches.forEach((branch) => {
	exec(`git push origin :${branch}`);
	removeLocalBranch(branch);
});

updateLocalRepository();

console.log('\ncurrent available branches: ', getAvailableRemoteBranches());
