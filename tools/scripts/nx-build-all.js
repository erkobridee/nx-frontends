const exec = require('./libs/execute-sync-command');
const [environment = 'development'] = require('./libs/get-cli-args');

require('rimraf').sync('./dist/');

const buildOutput = ['prod', 'production'].includes(environment)
  ? ' --prod'
  : '';

exec(`npx nx run-many --target=build${buildOutput} --all --parallel`, {
  stdio: [0, 1, 2]
});
