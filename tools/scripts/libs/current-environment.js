const gitCurrentBranch = require('./git-current-branch');

const PROD = 'production';
const DEV = 'development';

const envMap = {
  master: PROD,
  production: PROD,
  prod: PROD,

  develop: DEV,
  development: DEV,
  dev: DEV
};

const getEnv = () => {
  const envVar =
    process.env.ACTIVE_ENV ||
    process.env.NODE_ENV ||
    gitCurrentBranch() ||
    'dev';
  return envMap[envVar] || DEV;
};

module.exports = getEnv;
