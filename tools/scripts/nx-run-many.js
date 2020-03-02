const exec = require('./libs/execute-sync-command');
const [
  commandsStr = '[]',
  target = '',
  environment = 'development'
] = require('./libs/get-cli-args');
const commands = JSON.parse(commandsStr);
const projects = commands[target];

if (!projects) {
  process.exit();
}

if (target === 'build') {
  require('rimraf').sync('./dist/');
}

const buildOutput = ['prod', 'production'].includes(environment)
  ? ' --prod'
  : '';

exec(
  `npx nx run-many --target=${target}${buildOutput} --projects=${projects.join(
    ','
  )} --parallel`,
  {
    stdio: [0, 1, 2]
  }
);
