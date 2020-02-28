#!/usr/bin/env node


const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const setupPackageJson = require('./setupJson');
const installDependencies = require('./installDependencies');
const setupWebpack = require('./setupWebpack');
const setupBabel = require('./setupBabel');
const setupEslint = require('./setupEslint');


const setupApp = require('./setupApp');
const setupAppTest = require('./setupAppTest');
const setupFileMock = require('./setupFileMock');
const setupGitignore = require('./setupGitignore');
const setupTravis = require('./setupTravis');
const initGit = require('./initGit');
const initTest  = require('./initTest');
const setupPublic = require('./setupPublic');


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
