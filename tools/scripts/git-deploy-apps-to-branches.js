// const exec = require('./libs/execute-sync-command');
const [appsDir = '', environment = 'dev'] = require('./libs/get-cli-args');

// if (!appsDir) {
//   process.exit();
// }

console.log({
  appsDir,
  environment
});

// TODO: define the execution code flow
