/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const shelljs = require('shelljs');

const currentDir = __dirname;
const localDirname = currentDir.split(path.sep).reverse()[0];
const rootDir = path.resolve(__dirname, '../..');
const localBuildDir = path.join(currentDir, 'public');
const rootAppBuildDir = path.join(rootDir, `dist/apps/${localDirname}`);

exports.onPostBuild = () => {
  shelljs.rm('-rf', rootAppBuildDir);
  shelljs.mkdir('-p', rootAppBuildDir);
  shelljs.cp('-R', `${localBuildDir}/*`, rootAppBuildDir);
};
