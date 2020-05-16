const cb = require('./copy')
const disabledCbOption = ' --no-cb'

module.exports = transform => {
  const args = process.argv.slice(2)
  const text = args.join(' ')
  const disabledCb = text.match(disabledCbOption) != null
  text = text.replace(disabledCbOption, '')
  if (disabledCb) {
    process.stdout.write(transform(text))
  } else {
    cb(transform(text))
  }
}
