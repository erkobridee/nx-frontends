const exec = require('./libs/execute-sync-command');
const [
  appName = '',
  target = '',
  environment = 'development',
] = require('./libs/get-cli-args');

if (
  !appName ||
  !['lint', 'test', 'build', 'build-storybook'].includes(target)
) {
  process.exit();
}

if (['build', 'build-storybook'].includes(target)) {
  require('./libs/fs-toolkit').removeSync('dist');
}

if (target === 'test') {
  require('./libs/fs-toolkit').removeSync('coverage');
}

const buildOutput = ['prod', 'production'].includes(environment)
  ? ' --prod'
  : '';

let cmdStr = '';
switch (target) {
  case 'lint':
    cmdStr = `./node_modules/.bin/nx run-many --target=${target} --parallel --projects=${[
      appName,
      `${appName}-e2e`,
    ].join(',')}`;
    break;
  case 'build-storybook':
    cmdStr = `./node_modules/.bin/nx run ${appName}:${target}${buildOutput}`;
    break;
  default:
    cmdStr = `./node_modules/.bin/nx ${target} ${appName}${buildOutput}`;
    break;
}

try {
  exec(cmdStr, {
    stdio: [0, 1, 2],
  });

  if (target === 'test') {
    require('./libs/merge-cobertura')();
  }

  console.log('\n\n');
  console.log('success');
  console.log('\n\n');
} catch (e) {
  console.log('\n\n');
  console.error('failure');
  console.log('\n\n');
  process.exit(1);
}
