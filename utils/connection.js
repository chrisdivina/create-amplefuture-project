const client = require('scp2')
const chalk = require('chalk')

function Connection(host, username, password, port = '22') {

  // Set up the client
  client.defaults({
    port,
    host,
    username,
    password
  })

}

Connection.prototype.test = function(callback) {

  client.on('error', function(err) {
    console.log( chalk.red('\nCould not connect to server.\n') )
    console.log( '\n1) If you are behind a proxy, please check that npm is set up correctly: https://jjasonclark.com/how-to-setup-node-behind-web-proxy/' )
    console.log( '\n2) If it is all fine, please check your internet connection')
    console.log( '\n\n' )
    process.exit(1)
  });

  client.sftp( function(err) {
    if (!err) {
      client.close()
      callback()
    }
  });

}

module.exports = Connection;
