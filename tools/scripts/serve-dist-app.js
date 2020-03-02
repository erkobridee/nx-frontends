const exec = require('./libs/execute-sync-command');
const [appName = ''] = require('./libs/get-cli-args');

if (!appName) {
  process.exit();
}

exec(`npx http-server dist/apps/${appName} -o`, {
  stdio: [0, 1, 2]
});
