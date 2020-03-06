const [
  appsDir = '',
  environment = 'dev',
  ci = 'false'
] = require('./libs/get-cli-args');
const isCI = ci !== 'false';

if (!appsDir) {
  process.exit();
}

require('gh-pages').clean();

const exec = require('./libs/execute-sync-command');
const listDirectoriesFrom = require('./libs/list-directories-from');
const publishToBranch = require('./libs/git-publish-to-branch');
// const sshGitRepoUrl = require('./libs/git-ssh-repo-url');

console.log('');

const STATUS_SUCCESS = 'success';
const STATUS_FAILURE = 'failure';

const buildPublishOptions = branch => {
  const ciOptions = isCI
    ? {
        // repo: sshGitRepoUrl,
        message:
          'Auto-generated commit from Azure DevOps pipeline  ***NO_CI***',
        user: {
          name: 'Azure Pipelines',
          email: 'azuredevops@microsoft.com'
        }
      }
    : {};
  return {
    branch,
    history: false,
    message: 'Auto-generated commit from dev machine',
    ...ciOptions
  };
};

const publishApp = async appName => {
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

(async () => {
  const apps = listDirectoriesFrom(appsDir);
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
