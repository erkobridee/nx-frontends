const ghPages = require('gh-pages');

function publish(path, branch) {
  return new Promise((resolve, reject) => {
    ghPages.publish(
      path,
      {
        branch,
        history: false,
        message: 'Auto-generated commit',
        user: {
          name: 'Azure Pipelines',
          email: 'azuredevops@microsoft.com'
        }
      },
      err => {
        if (err) {
          return reject(err);
        }
        resolve();
      }
    );
  });
}

module.exports = publish;
