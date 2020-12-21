const cb = require('./copy')
const commonOptionsMap = {
  n: 'noClipboard',
  'no-clipboard': 'noClipboard',
  // Legacy
  'no-cb': 'noClipboard'
}

module.exports = ({ transform, optionsMap = {}, canHandleChunks = true }) => {
  Object.assign(optionsMap, commonOptionsMap)
  const program = require('./program')(optionsMap)
  const { args } = program
  let { noClipboard } = program.options
  const disabledCb = noClipboard || process.stdout.isTTY !== true
  const text = args.join(' ')

  if (text !== '' && text !== '-') {
    const result = transform(text, program.options).toString()
    if (disabledCb) process.stdout.write(result)
    else cb(result)
  } else {
    if (canHandleChunks) {
      process.stdin
      .on('data', buf => {
        process.stdout.write(transform(buf.toString(), program.options).toString())
      })
    } else {
      let aggregatedText = ''
      process.stdin
      .on('data', buf => { aggregatedText += buf.toString() })
      .on('close', () => {
        process.stdout.write(transform(aggregatedText, program.options))
      })
    }
  }
}
