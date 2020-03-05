// const exec = require('./libs/execute-sync-command');
const listDirectoriesFrom = require('./libs/list-directories-from');

const [appsDir = '', environment = 'dev'] = require('./libs/get-cli-args');

if (!appsDir) {
  process.exit();
}

// Why Using reduce() to Sequentially Resolve Promises Works
// https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/

console.log('');

console.log({
  appsDir,
  environment
});

console.log('');

console.log(listDirectoriesFrom(appsDir));

console.log('');
