const exec = require('./libs/execute-sync-command');
const [commandsStr = '[]', target = ''] = require('./libs/get-cli-args');
const commands = JSON.parse(commandsStr);
const projects = commands[target];

if (!projects) {
  process.exit();
}

exec(
  `npx nx run-many --target=${target} --projects=${projects.join(
    ','
  )} --parallel`,
  {
    stdio: [0, 1, 2]
  }
);
