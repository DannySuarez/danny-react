#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const setupPackageJson = require('./setups/setupJson');
const installDependencies = require('./setups/installDependencies');
const setupWebpack = require('./setups/setupWebpack');
const setupBabel = require('./setups/setupBabel');
const setupEslint = require('./setups/setupEslint');


const setupApp = require('./setups/setupApp');
const setupAppTest = require('./setups/setupAppTest');
const setupFileMock = require('./setups/setupFileMock');
const setupGitignore = require('./setups/setupGitignore');
const setupTravis = require('./setups/setupTravis');
const initGit = require('./setups/initGit');
const initTest  = require('./setups/initTest');
const setupPublic = require('./setups/setupPublic');

const args = process.argv;
const folderName = args[args.length - 1];
const folder = folderName;

if(folderName !== '.') fs.mkdirSync(folder);

setupPackageJson(folder);
installDependencies(folder);
setupWebpack(folder);
setupBabel(folder);
setupEslint(folder);
setupSrc(folder);
setupFileMock(folder);
setupGitignore(folder);
setupTravis(folder);
initGit(folder);
initTest(folder);
setupPublic(folder);

function setupSrc(folder) {
  console.log(chalk.green('Setting up src'));

  fs.mkdirSync(path.join(folder, 'src'));

  setupIndexJs(folder);
  setupIndexHtml(folder);
  setupTests(folder);
  setupComponents(folder);
}

function setupIndexJs(folder) {
  console.log(chalk.green('Setting up index.js'));

  const indexJs = `
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
  <App />,
  document.getElementById('root')
);
`.trimStart();

  fs.writeFileSync(
    path.join(folder, 'src/index.js'),
    indexJs);
}

function setupIndexHtml(folder) {
  console.log(chalk.green('Setting up index.html'));

  const indexHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${folder}</title>
</head>

<body>
  <div id="root"></div>
</body>

</html>
`.trimStart();

  fs.writeFileSync(
    path.join(folder, 'src/index.html'),
    indexHtml);
}

function setupTests(folder) {
  console.log(chalk.green('Setting up enzyme tests'));

  const file = `
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
`.trimStart();

  fs.writeFileSync(
    path.join(folder, 'src/setupTests.js'),
    file);
}

function setupComponents(folder) {
  console.log(chalk.green('Setting up components'));

  fs.mkdirSync(path.join(folder, 'src/components'));
  setupApp(folder);
  setupAppTest(folder);
}
