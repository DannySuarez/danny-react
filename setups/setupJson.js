const chalk = require('chalk');
const path = require('path');
const fs = require('fs');


function setupPackageJson(folder) {
  console.log(chalk.green('Setting up package.json'));

  const packageJson = {
    name: folder === '.' ? path.basename(process.cwd()) : folder,
    version: '1.0.0',
    description: '',
    main: 'src/index.js',
    jest: {
      setupFilesAfterEnv: [
        '<rootDir>src/setupTests.js'
      ],
      snapshotSerializers: [
        'enzyme-to-json/serializer'
      ],
      moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
      }
    },
    scripts: {
      test: 'jest --verbose',
      'test:watch': 'npm run test -- --watch',
      start: 'webpack-dev-server --hot --mode development --devtool eval-source-map',
      build: 'webpack -p --devtool source-map'
    },
    keywords: [],
    author: '',
    license: 'ISC',
    dependencies: {},
    devDependencies: {}
  };

  fs.writeFileSync(
    path.join(folder, 'package.json'),
    JSON.stringify(packageJson, null, 2));
}

module.exports = setupPackageJson;
