const transformText = require('./transform_text')

module.exports = (lodashFunctionName) => {
  const transform = require(`lodash/${lodashFunctionName}`)
  transformText({ transform })
}
