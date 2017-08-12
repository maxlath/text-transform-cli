var cb = require('./copy')
var disabledCbOption = ' --no-cb'

module.exports = function (transform) {
  var args = process.argv.slice(2)
  var text = args.join(' ')
  var disabledCb = text.match(disabledCbOption) != null
  text = text.replace(disabledCbOption, '')
  if (disabledCb) {
    console.log(transform(text))
  } else {
    cb(transform(text))
  }
}
