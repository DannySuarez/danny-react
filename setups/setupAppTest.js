const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupAppTest(folder) {
  console.log(chalk.green('Setting up App.test.js'));
  const AppTest = `
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
`.trimStart();
  fs.writeFileSync(path.join(folder, 'src/components/App.test.js'), AppTest);
}

module.exports = setupAppTest;
