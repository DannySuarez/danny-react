const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupFileMock(folder) {
  console.log(chalk.green('Setting up file mocks'));
  const file = `
// eslint-disable-next-line
module.exports = '/path/image';
`.trimStart();
  fs.mkdirSync(path.join(folder, '__mocks__'));
  fs.writeFileSync(path.join(folder, '__mocks__/fileMock.js'), file);
}

module.exports = setupFileMock;
