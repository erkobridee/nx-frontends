const exec = require('./libs/execute-sync-command');
const [isPR] = require('./libs/get-cli-args');
const isMaster = isPR === 'false';
const baseSha = isMaster ? 'origin/master~1' : 'origin/master';

const getAffectedProjects = (target = 'build') => {
  return {
    [target]: JSON.parse(
      exec(`npx nx print-affected --base=${baseSha} --target=${target}`)
    ).tasks.map(t => t.target.project)
  };
};

console.log(
  JSON.stringify({
    ...getAffectedProjects('lint'),
    ...getAffectedProjects('test'),
    ...getAffectedProjects('build')
  })
);
