const [site = undefined] = require('./libs/get-cli-args');

if (!site) {
	process.exit();
}

require('./libs/cleanup').deleteGatsbyCache(`apps/${site}`);
