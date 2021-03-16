const transformText = require('./transform_text')

module.exports = ({ default: defaultDecorator, decorators }) => {
  const transform = (text, options) => {
    const decoratorName = Object.keys(options)[0] || defaultDecorator
    const { hex, prefix, postfix } = decorators[decoratorName]
    const decorator = Buffer.from(hex, 'hex').toString()
    return decorate(text, decorator, prefix, postfix)
  }

  const optionsMap = {}
  const addOption = (key, value) => {
    if (optionsMap[key] != null) throw new Error(`duplicated option key: ${key}`)
    optionsMap[key] = value
  }

  Object.keys(decorators).forEach(decoratorName => {
    const shortOption = decorators[decoratorName].shortOption || decoratorName[0]
    addOption(decoratorName, decoratorName)
    addOption(shortOption, decoratorName)
  })

  transformText({ transform, optionsMap })
}

const decorate = (text, decorator, prefix, postfix) => {
  let transformedText = ''
  if (prefix) transformedText += decorator
  transformedText += text.split('').join(decorator)
  if (postfix) transformedText += decorator
  return transformedText
}
