const exec = require('./libs/execute-sync-command');
const [
  commandsStr = '[]',
  target = '',
  environment = 'development',
] = require('./libs/get-cli-args');
const commands = JSON.parse(commandsStr);
const projects = commands[target];

if (!projects) {
  process.exit();
}

if (['build', 'build-storybook'].includes(target)) {
  require('./libs/fs-toolkit').removeSync('dist');
}

if (target === 'test') {
  require('./libs/fs-toolkit').removeSync('coverage');
}

const buildOutput = ['prod', 'production'].includes(environment)
  ? ' --prod'
  : '';

const parallel = target !== 'build-storybook' ? ' --parallel' : '';

try {
  exec(
    `npx nx run-many --target=${target}${buildOutput} --projects=${projects.join(
      ','
    )}${parallel}`,
    {
      stdio: [0, 1, 2],
    }
  );

  if (target === 'test') {
    require('./libs/merge-cobertura')();
  }

  console.log('\n\n');
  console.log('success');
  console.log('\n\n');
} catch (e) {
  console.log('\n\n');
  console.error('failure');
  console.log('\n\n');
  process.exit(1);
}
