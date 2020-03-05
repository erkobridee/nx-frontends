const exec = require('./libs/execute-sync-command');
const [
  appName = '',
  target = '',
  environment = 'development'
] = require('./libs/get-cli-args');

if (!appName || !['lint', 'test', 'build'].includes(target)) {
  process.exit();
}

if (target === 'build') {
  require('rimraf').sync('./dist/');
}

const buildOutput = ['prod', 'production'].includes(environment)
  ? ' --prod'
  : '';

const cmdStr =
  target === 'lint'
    ? `npx nx run-many --target=${target} --parallel --projects=${[
        appName,
        `${appName}-e2e`
      ].join(',')}`
    : `npx nx ${target} ${appName}${buildOutput}`;

try {
  exec(cmdStr, {
    stdio: [0, 1, 2]
  });
  console.log('success');
} catch (e) {
  console.error('failure');
  process.exit(1);
}
