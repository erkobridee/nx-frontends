const [startsWith = 'ci-build/'] = require('./libs/get-cli-args');

const exec = require('./libs/execute-sync-command');
const updateLocalRepository = require('./libs/git-update-local-repository');

const getAvailableTags = () =>
  exec('git tag')
    .split('\n')
    .filter((tag) => tag.length > 0);

updateLocalRepository();

let tags = getAvailableTags();

console.log('all available tags: ', tags);

if (tags.length === 0) {
  process.exit();
}

console.log(`\nshould remove the tags started with:  ${startsWith}`);

tags = tags.filter((tag) => tag.startsWith(startsWith));

console.log('\ntags to remove: ', tags);

tags.forEach((tag) => {
  exec(`git push origin :refs/tags/${tag}`);
  exec(`git tag -d ${tag}`);
  console.log(`\ntag ${tag} removed`);
});

updateLocalRepository();

console.log('\ncurrent available tags: ', getAvailableTags());
