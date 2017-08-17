//const paths = require('path')
const fs = require('fs')

// This is our current working folder, where we do our stuff
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const projectDirectory = fs.realpathSync(process.cwd());

//const resolve = relativePath => path.resolve(projectDirectory, relativePath);

module.exports = {
  projectDirectory
}
