const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupTravis(folder) {
  console.log(chalk.green('Setting up .travis.yml'));

  const file = `
language: node_js
node_js: node
`.trimStart();

  fs.writeFileSync(
    path.join(folder, '.travis.yml'),
    file
  );
}

module.exports = setupTravis;
