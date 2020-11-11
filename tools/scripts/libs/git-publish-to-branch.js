const ghPages = require('gh-pages');

function publish(path, options) {
	// for DEBUG propose
	// console.log('git-publish-to-branch: ', { path, options });
	// return Promise.resolve();

	return new Promise((resolve, reject) => {
		ghPages.publish(path, options, (err) => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}

module.exports = publish;
