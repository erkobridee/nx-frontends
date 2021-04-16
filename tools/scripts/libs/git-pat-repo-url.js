const exec = require('./execute-sync-command');

const HTTP_PREFIX = 'https://github.com/';

const repo_url = exec('git config --get remote.origin.url');

const buildPrefixUrl = (PAT = '') => `https://${PAT}@github.com/`;

const buildUrl = (PAT) => {
  if (!PAT) {
    return repo_url;
  }
  return !PAT ? repo_url : repo_url.replace(HTTP_PREFIX, buildPrefixUrl(PAT));
};

module.exports = buildUrl;
