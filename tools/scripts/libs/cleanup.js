const path = require('path');
const glob = require('glob');
const { removeSync } = require('./fs-toolkit');

const deleteFrom = (fromFolder, pattern) =>
	!fromFolder
		? undefined
		: glob
				.sync(pattern, { cwd: fromFolder })
				.map((dir) => path.resolve(fromFolder, dir))
				.forEach((dir) => {
					removeSync(dir);
				});

const deleteReports = (fromFolder) => deleteFrom(fromFolder, '**/reports');

const deleteGatsbyCache = (fromFolder) =>
	deleteFrom(fromFolder, '**/{.cache,public}');

module.exports.deleteFrom = deleteFrom;
module.exports.deleteReports = deleteReports;
module.exports.deleteGatsbyCache = deleteGatsbyCache;
