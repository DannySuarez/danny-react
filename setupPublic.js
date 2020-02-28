const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupPublic(folder) {
  console.log(chalk.green('Initializing public directory'));

  fs.mkdirSync(path.join(folder, 'public'));

  const file = '/*  /index.html   200';

  fs.writeFileSync(
    path.join(folder, 'public/_redirects'),
    file
  );
}

module.exports = setupPublic;
