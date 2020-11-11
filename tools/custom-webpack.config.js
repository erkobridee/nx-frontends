const path = require('path');
const reactWebpackConfig = require('@nrwl/react/plugins/webpack');
const loadDotEnvConfig = require('./scripts/libs/load-dotenv-config');
const webpack = require('webpack');

module.exports = (config) => {
	const rootPath = `${process.env.PWD}` || path.resolve(__dirname, '..');

	const dotenvParsed = loadDotEnvConfig(rootPath);
	if (dotenvParsed) {
		const webpackDefinePluginConfig = {};
		Object.keys(dotenvParsed).forEach((key) => {
			webpackDefinePluginConfig[`process.env.${key}`] = JSON.stringify(
				process.env[key]
			);
		});
		config.plugins = [
			new webpack.DefinePlugin(webpackDefinePluginConfig),
			...config.plugins,
		];
	}

	return reactWebpackConfig(config);
};
