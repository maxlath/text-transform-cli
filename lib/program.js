const shortOptionPattern = /^-\w{1}$/
const longOptionPattern = /^--[\w-]{2,20}$/
const argv = process.argv.slice(2)

module.exports = optionsMap => {
  const program = {}
  const args = program.args = []
  const options = program.options = {}
  for (const arg of argv) {
    if (shortOptionPattern.test(arg)) {
      const shortOptionKey = arg[1]
      const optionKey = optionsMap[shortOptionKey]
      if (optionKey) options[optionKey] = true
      else args.push(arg)
    } else if (longOptionPattern.test(arg)) {
      const longOptionKey = arg.slice(2)
      const optionKey = optionsMap[longOptionKey]
      if (optionKey) options[optionKey] = true
      else args.push(arg)
    } else {
      args.push(arg)
    }
  }
  return program
}
