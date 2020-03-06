const execSync = require('child_process').execSync;

const exec = (cmd, options = undefined) => {
  const output = cmd ? execSync(cmd, options) : undefined;
  if (!output) {
    return '';
  }

  if (options) {
    return output;
  }

  return output.toString().trim();
};

module.exports = exec;
