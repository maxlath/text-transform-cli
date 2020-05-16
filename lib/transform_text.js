const cb = require('./copy')
// --no-cb is kept for legacy support
const noClipboardOptions = [ '-n', '--no-cb', '--no-clipboard' ]
const isNoClipboardOption = arg => noClipboardOptions.includes(arg)
const isntNoClipboardOption = arg => !isNoClipboardOption(arg)

module.exports = transform => {
  const args = process.argv.slice(2)
  const disabledCb = args.some(isNoClipboardOption)
  const text = args.filter(isntNoClipboardOption).join(' ')

  if (text !== '' && text !== '-') {
    if (disabledCb) process.stdout.write(transform(text))
    else cb(transform(text))
  } else {
    process.stdin
    .on('data', buf => {
      process.stdout.write(transform(buf.toString()))
    })
  }
}
