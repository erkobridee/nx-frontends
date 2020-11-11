const fs = require('fs');

const listDirectoriesFrom = (locationPath) =>
	fs.existsSync(locationPath)
		? fs
				.readdirSync(locationPath, {
					withFileTypes: true,
				})
				.reduce((a, c) => {
					c.isDirectory() && a.push(c.name);
					return a;
				}, [])
		: [];

module.exports = listDirectoriesFrom;
