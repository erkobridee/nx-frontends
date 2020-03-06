const exec = require('./execute-sync-command');

const HTTP_PREFIX = 'https://github.com/';
const SSH_PREFIX = 'git@github.com:';

let repo_url = exec('git config --get remote.origin.url');

repo_url = repo_url.includes(SSH_PREFIX)
  ? repo_url
  : repo_url.replace(HTTP_PREFIX, SSH_PREFIX);

module.exports = repo_url;
