const ghPages = require('gh-pages');

function publish(path, branch) {
  ghPages.clean();
  return new Promise((resolve, reject) => {
    ghPages.publish(path, { branch }, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

module.exports = publish;
