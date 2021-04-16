const [dir = undefined] = require('./libs/get-cli-args');

const { removeSync } = require('./libs/fs-toolkit');

if (dir) {
  removeSync(dir);
  process.exit();
}

//----------------------------------------------------------------------------//

const { deleteReports, deleteGatsbyCache } = require('./libs/cleanup');

removeSync('dist');
removeSync('coverage');
deleteGatsbyCache('apps');
deleteReports('apps');
deleteReports('libs');
