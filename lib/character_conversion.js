#!/usr/bin/env node
const transformText = require('../lib/transform_text')

const scriptConversion = charMap => input => {
  let text = ''
  for (const i in input) {
    const char = input[i]
    text += charMap[char] || char
  }
  return text
}

module.exports = charMap => transformText({ transform: scriptConversion(charMap) })
