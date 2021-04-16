const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const getEnv = require('./current-environment');

const loadDotEnvConfig = (rootPath) => {
  const envName = getEnv();
  const dotenvFallbackFilename = path.join(rootPath, `/.env`);
  const dotenvSelectedFilename = path.join(rootPath, `/.env.${envName}`);

  const dotenvPath = fs.existsSync(dotenvSelectedFilename)
    ? dotenvSelectedFilename
    : fs.existsSync(dotenvFallbackFilename)
    ? dotenvFallbackFilename
    : undefined;

  if (!dotenvPath) {
    return;
  }

  const dotenvConfig = dotenv.config({
    path: dotenvPath,
  });

  if (dotenvConfig.error) {
    console.error('loadDotEnvConfig error:', dotenvConfig.error);
    return;
  }

  return dotenvConfig.parsed;
};

module.exports = loadDotEnvConfig;
