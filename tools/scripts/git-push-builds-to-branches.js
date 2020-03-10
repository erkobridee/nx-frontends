const [
  environment = 'dev',
  appsDir = 'dist/apps',
  githubPat = ''
] = require('./libs/get-cli-args');

require('gh-pages').clean();

const { copy, move } = require('./libs/fs-toolkit');
const exec = require('./libs/execute-sync-command');
const listDirectoriesFrom = require('./libs/list-directories-from');
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
const buildPublishOptions = branch => {
  const ciOptions = githubPat
    ? {
        repo: buildGitPatRepoUrl(githubPat),
        silent: true,
        message: `[Azure DevOps] ${new Date().toISOString()} - Auto-generated commit`,
        user: {
          name: 'Azure Pipelines',
          email: 'azuredevops@microsoft.com'
        }
      }
    : {};
  return {
    branch,
    history: false,
    dotfiles: true,
    message: `[dev machine] ${new Date().toISOString()} - Auto-generated commit`,
    ...ciOptions
  };
};

const prepareToPublishApp = async appName => {
  console.log('\npreparing to publish: ', appName);

  const appPath = `${appsDir}/${appName}`;
  await move(appPath, `${appsDir}/tmp/${appName}`);
  await move(`${appsDir}/tmp/${appName}`, `${appPath}/dist`);
  await copy(
    `${appsDir}/.azure-pipelines/cd`,
    `${appPath}/.azure-pipelines/cd`
  );
};

const publishApp = async appName => {
  await prepareToPublishApp(appName);

  console.log(`\npublishing ${appName}`);
  const toBranch = `build/${environment}/${appName}`;
  console.log(`to branch: ${toBranch}`);
  const fromAppPath = `${appsDir}/${appName}`;
  console.log(`from location: ${fromAppPath}`);
  try {
    await publishToBranch(fromAppPath, buildPublishOptions(toBranch));
    console.log(`${appName} published`);
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

  await copy('.azure-pipelines', 'dist/apps/.azure-pipelines');
};

(async () => {
  await prepareLocalRun();

  let apps = listDirectoriesFrom(appsDir);

  if (apps.filter(dir => dir === '.azure-pipelines').length === 0) {
    console.error('the .azure-pipelines directory is not present');
    process.exit(1);
  }

  apps = apps.filter(dir => dir !== '.azure-pipelines');

  if (apps.length === 0) {
    console.log('there is no application to publish to any branch');
  }

  console.log(`appsDir: ${appsDir}`);
  console.log(`environment: ${environment}`);
  console.log(`apps to publish: ${apps.join(', ')}`);

  // Why Using reduce() to Sequentially Resolve Promises Works
  // https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/
  const failures = await apps.reduce(async (previousPromise, appName) => {
    const failures = await previousPromise;
    const status = await publishApp(appName);
    console.log(status);
    return Promise.resolve(status === STATUS_FAILURE ? failures + 1 : failures);
  }, Promise.resolve(0));

  if (failures > 0) {
    console.error(`\nFAILURE count: ${failures}\n`);
    process.exit(1);
  } else {
    console.log('\nDONE\n');
    try {
      exec('git fetch', {
        stdio: [0, 1, 2]
      });
    } catch (e) {}
  }
})();
