const fse = require('fs-extra');

/**
 * remove the given path
 *
 * @param {string} path
 */
const remove = async path => {
  try {
    await fse.remove(path);
  } catch (e) {
    console.error(e);
  }
};
module.exports.remove = remove;
module.exports.removeSync = fse.removeSync;

/**
 * move the files from the `src` to `dest`
 *
 * @param {string} src
 * @param {string} dest
 */
const move = async (src, dest) => {
  try {
    await fse.move(src, dest, { overwrite: true });
  } catch (e) {
    console.error(e);
  }
};
module.exports.move = move;

/**
 * copy the files from the `src` to `dest`
 *
 * @param {string} src
 * @param {string} dest
 */
const copy = async (src, dest) => {
  try {
    await fse.copy(src, dest, { overwrite: true });
  } catch (e) {
    console.error(e);
  }
};
module.exports.copy = copy;
