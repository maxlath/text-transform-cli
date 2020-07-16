const cb = require('./copy')
// --no-cb is kept for legacy support
const noClipboardOptions = [ '-n', '--no-cb', '--no-clipboard' ]
const isNoClipboardOption = arg => noClipboardOptions.includes(arg)
const isntNoClipboardOption = arg => !isNoClipboardOption(arg)

module.exports = (transform, canHandleChunks = true) => {
  const args = process.argv.slice(2)
  const disabledCb = process.stdout.isTTY !== true || args.some(isNoClipboardOption)
  const text = args.filter(isntNoClipboardOption).join(' ')

  if (text !== '' && text !== '-') {
    if (disabledCb) process.stdout.write(transform(text).toString())
    else cb(transform(text))
  } else {
    if (canHandleChunks) {
      process.stdin
      .on('data', buf => {
        process.stdout.write(transform(buf.toString()))
      })
    } else {
      let aggregatedText = ''
      process.stdin
      .on('data', buf => { aggregatedText += buf.toString() })
      .on('close', () => {
        process.stdout.write(transform(aggregatedText))
      })
    }
  }
}
