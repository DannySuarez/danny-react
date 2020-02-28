const chalk = require('chalk');
const { execSync } = require('child_process');

function installDependencies(folder) {
  const devDependencies = [
    '@babel/core',
    '@babel/plugin-proposal-class-properties',
    '@babel/preset-env',
    '@babel/preset-react',
    '@types/jest',
    'autoprefixer',
    'babel-eslint',
    'babel-loader',
    'clean-webpack-plugin',
    'copy-webpack-plugin',
    'css-loader',
    'dotenv-webpack',
    'enzyme',
    'enzyme-adapter-react-16',
    'enzyme-to-json',
    'eslint',
    'eslint-plugin-babel',
    'eslint-plugin-react',
    'file-loader',
    'html-webpack-plugin',
    'identity-obj-proxy',
    'jest',
    'postcss-loader',
    'postcss-import',
    'postcss-nested',
    'postcss-simple-vars',
    'prop-types',
    'style-loader',
    'url-loader',
    'webpack',
    'webpack-cli',
    'webpack-dev-server'
  ];

  const dependencies = [
    'react',
    'react-dom'
  ];

  console.log(chalk.green('Installing devDependencies'));
  execSync(`npm i -D ${devDependencies.join(' ')}`, {
    cwd: folder,
    stdio: 'inherit'
  });

  console.log(chalk.green('Installing dependencies'));
  execSync(`npm i ${dependencies.join(' ')}`, {
    cwd: folder,
    stdio: 'inherit'
  });
}

module.exports = installDependencies;
