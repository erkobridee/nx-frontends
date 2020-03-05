const listDirectoriesFrom = require('./libs/list-directories-from');
const publishToBranch = require('./libs/git-publish-to-branch');

const [appsDir = '', environment = 'dev'] = require('./libs/get-cli-args');

if (!appsDir) {
  process.exit();
}

// Why Using reduce() to Sequentially Resolve Promises Works
// https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/

console.log('');

const publishApp = async appName => {
  console.log(`\npublishing ${appName}`);
  const toBranch = `build/${environment}/${appName}`;
  console.log(`to branch: ${toBranch}`);
  const fromAppPath = `${appsDir}/${appName}`;
  console.log(`from location: ${fromAppPath}`);
  try {
    await publishToBranch(fromAppPath, toBranch);
    console.log(`${appName} published`);
  } catch (e) {
    console.error(e);
  }
  return appName;
};

(async () => {
  const apps = listDirectoriesFrom(appsDir);
  if (apps.length === 0) {
    console.log('there is no application to publish to any branch');
  }

  console.log(`appsDir: ${appsDir}`);
  console.log(`environment: ${environment}`);
  console.log(`apps to publish: ${apps.join(', ')}`);

  await apps.reduce(async (previousPromise, appName) => {
    await previousPromise;
    return publishApp(appName);
  }, Promise.resolve());

  console.log('\nDONE');
})();
