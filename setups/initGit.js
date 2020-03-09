const chalk = require('chalk');
const { execSync } = require('child_process');

function initGit(folder) {
  console.log(chalk.green('Initializing git'));

  execSync('git init', {
    cwd: folder,
    stdio: 'inherit'
  });

}

module.exports = initGit;
