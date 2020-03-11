const path = require('path');
const [dir = undefined] = require('./libs/get-cli-args');

const { removeSync } = require('./libs/fs-toolkit');

if (dir) {
  removeSync(dir);
  process.exit();
}

const glob = require('glob');

const deleteReports = fromFolder =>
  !fromFolder
    ? undefined
    : glob
        .sync('**/reports', { cwd: fromFolder })
        .map(dir => path.resolve(fromFolder, dir))
        .forEach(dir => {
          removeSync(dir);
        });

removeSync('dist');
removeSync('coverage');
deleteReports('apps');
deleteReports('libs');
