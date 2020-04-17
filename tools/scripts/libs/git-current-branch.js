const exec = require('./execute-sync-command');

const gitCurrentBranch = () => exec('git rev-parse --abbrev-ref HEAD');

module.exports = gitCurrentBranch;
