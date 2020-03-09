const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupBabel(folder) {
  console.log(chalk.green('Setting up .babelrc'));

  const babel = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  };
  fs.writeFileSync(
    path.join(folder, '.babelrc'),
    JSON.stringify(babel, null, 2));
}

module.exports = setupBabel;
