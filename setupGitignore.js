const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupGitignore(folder) {
  console.log(chalk.green('Setting up .gitignore'));
  const file = `
node_modules
.env
dist
`.trimStart();
  fs.writeFileSync(path.join(folder, '.gitignore'), file);
}

module.exports = setupGitignore;
