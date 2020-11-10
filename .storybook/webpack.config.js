const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
	// Make whatever fine-grained changes you need

	const tsPaths = new TsconfigPathsPlugin({
		configFile: './tsconfig.base.json',
	});

	config.resolve.plugins
		? config.resolve.plugins.push(tsPaths)
		: (config.resolve.plugins = [tsPaths]);

	config.module.rules.push({
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader'],
		include: path.resolve(__dirname, '../'),
	});

	// Alternately, for an alias:
	config.resolve.alias = {
		'@nx-frontends/shared/assets': path.resolve(
			__dirname,
			'../',
			'libs/shared/assets'
		),
	};

	// Return the altered config
	return config;
};
