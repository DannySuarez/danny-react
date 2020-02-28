const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupApp(folder) {
  console.log(chalk.green('Setting up App.js'));
  const App = `
import React from 'react';

export default function App() {
  return <h1>Hello World</h1>;
}
  `.trimStart();
  fs.writeFileSync(path.join(folder, 'src/components/App.js'), App);
}

module.exports = setupApp;
