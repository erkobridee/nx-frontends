const exec = require('./libs/execute-sync-command');
const [appsDir = '', environment = 'dev'] = require('./libs/get-cli-args');

if (!appsDir) {
  process.exit();
}

// Why Using reduce() to Sequentially Resolve Promises Works
// https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/

console.log({
  appsDir,
  environment
});

exec(`ls ${appsDir}`, {
  stdio: [0, 1, 2]
});
