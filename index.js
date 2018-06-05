'use strict'

const path = require('path')

module.exports = (robot) => {
  const scriptsPath = path.resolve(__dirname, 'src')
  robot.loadFile(scriptsPath, 'diagnostics.js')
  robot.loadFile(scriptsPath, 'version.js')
  robot.loadFile(scriptsPath, 'example.js')

}
