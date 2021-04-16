const exec = require('./execute-sync-command');

const updateLocalRepository = () => {
  exec('git remote update --prune');
  exec('git fetch --all');
  exec("git fetch origin 'refs/tags/*:refs/tags/*'");
};

module.exports = updateLocalRepository;
