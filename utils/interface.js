const figlet = require('figlet');
const clearConsole = require('react-dev-utils/clearConsole');
const chalk = require('chalk')

function display(callback) {
  clearConsole();
  figlet('Amplefuture', 'Jazmine', function(err, text) {
    console.log(chalk.yellow(text) + '\n');
    callback();
  });

}

module.exports = {
  display
}
