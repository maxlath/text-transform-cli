var transformText = require('./transform_text')

module.exports = function (lodashFunctionName) {
  transformText(require(`lodash/${lodashFunctionName}`))
}
