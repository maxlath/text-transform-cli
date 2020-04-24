var cb = require('./copy')
var disabledCbOption = ' --no-cb'

module.exports = function (transform) {
  var args = process.argv.slice(2)
  var text = args.join(' ')
  var disabledCb = text.match(disabledCbOption) != null
  text = text.replace(disabledCbOption, '')
  if (disabledCb) {
    process.stdout.write(transform(text))
  } else {
    cb(transform(text))
  }
}
