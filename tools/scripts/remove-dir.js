const [dir = 'dist'] = require('./libs/get-cli-args');

require('./libs/fs-toolkit').removeSync(dir);
