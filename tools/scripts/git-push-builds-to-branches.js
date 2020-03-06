const exec = require('./libs/execute-sync-command');
const listDirectoriesFrom = require('./libs/list-directories-from');
const publishToBranch = require('./libs/git-publish-to-branch');

const [appsDir = '', environment = 'dev'] = require('./libs/get-cli-args');

if (!appsDir) {
  process.exit();
}

// Why Using reduce() to Sequentially Resolve Promises Works
// https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/

console.log('');

const STATUS_SUCCESS = 'success';
const STATUS_FAILURE = 'failure';

const publishApp = async appName => {
  console.log(`\npublishing ${appName}`);
  const toBranch = `build/${environment}/${appName}`;
  console.log(`to branch: ${toBranch}`);
  const fromAppPath = `${appsDir}/${appName}`;
  console.log(`from location: ${fromAppPath}`);
  try {
    await publishToBranch(fromAppPath, toBranch);
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

  const failures = await apps.reduce(async (failures, appName) => {
    const status = await publishApp(appName);
    console.log(status);
    return failures + (status === STATUS_FAILURE ? 1 : 0);
  }, 0);

  if (failures > 0) {
    console.error(`\nFAILURE count: ${failures}\n`);
    process.exit(1);
  } else {
    console.log('\nDONE');
    try {
      exec('git fetch', {
        stdio: [0, 1, 2]
      });
    } catch (e) {}
  }
})();
