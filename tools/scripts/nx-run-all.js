const exec = require('./libs/execute-sync-command');
const [
  target = '',
  environment = 'development'
] = require('./libs/get-cli-args');

if (!['lint', 'test', 'build'].includes(target)) {
  process.exit();
}

if (target === 'build') {
  require('./libs/fs-toolkit').removeSync('dist');
}

const buildOutput = ['prod', 'production'].includes(environment)
  ? ' --prod'
  : '';

try {
  exec(`npx nx run-many --target=${target}${buildOutput} --all --parallel`, {
    stdio: [0, 1, 2]
  });
  console.log('success');
} catch (e) {
  console.log('\n\n');
  console.error('failure');
  console.log('\n\n');
  process.exit(1);
}
