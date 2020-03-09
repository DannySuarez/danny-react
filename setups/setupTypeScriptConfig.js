const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupTypeScriptConfig(folder) {
  console.log(chalk.green('Setting up .tsconfig.json'));

  const tsconfigJson =
  {
    'compilerOptions': {
      'sourceMap': true,
      'target': 'es5',
      'lib': [
        'dom',
        'dom.iterable',
        'esnext'
      ],
      'allowJs': true,
      'skipLibCheck': true,
      'esModuleInterop': true,
      'allowSyntheticDefaultImports': true,
      'strictNullChecks': false,
      'forceConsistentCasingInFileNames': true,
      'module': 'esnext',
      'moduleResolution': 'node',
      'resolveJsonModule': true,
      'isolatedModules': true,
      'noEmit': false,
      'jsx': 'react'
    },
    'include': [
      'src'
    ],
    'exclude': [
      'node_modules',
      'dev_server.js'
    ],
    'compileOnSave': false
  };

  fs.writeFileSync(
    path.join(folder, '.tscongfig.json'),
    JSON.stringify(tsconfigJson, null, 2)
  );
}

module.exports = setupTypeScriptConfig;
