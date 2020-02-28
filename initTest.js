const chalk = require('chalk');
const { execSync } = require('child_process');

function initTest(folder) {
  console.log(chalk.green('Initializing App.js test'));

  execSync('npm run test', {
    cwd: folder,
    stdio: 'inherit'
  });

}

module.exports = initTest;
