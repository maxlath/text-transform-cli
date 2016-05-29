var cb = require('./copy')

module.exports = function (transform) {
  var args = process.argv.slice(2)
  var text = args.join(' ')
  cb(transform(text))
}
