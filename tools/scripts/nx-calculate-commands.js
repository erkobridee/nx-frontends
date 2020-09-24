const exec = require('./libs/execute-sync-command');
const [branchName = 'master'] = require('./libs/get-cli-args');

const LAST_COMMITS_AMOUNT = 1;
const headParam = branchName === 'merge' ? 'HEAD' : `origin/${branchName}`;
let baseParam = '';
switch (branchName) {
  case 'master':
  case 'develop':
    baseParam = `origin/${branchName}~${LAST_COMMITS_AMOUNT}`;
    break;
  default:
    baseParam = 'origin/develop';
    break;
}

const getAffectedProjects = (target = 'build') => {
  return {
    [target]: JSON.parse(
      exec(
        `npx nx print-affected --base=${baseParam} --head=${headParam} --target=${target}`
      )
    ).tasks.map((t) => t.target.project),
  };
};

console.log(
  JSON.stringify({
    ...getAffectedProjects('lint'),
    ...getAffectedProjects('test'),
    ...getAffectedProjects('build'),
  })
);
