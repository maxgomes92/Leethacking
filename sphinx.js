const fs = require('fs')

const text = fs.readFileSync('./sphinx_data.txt', { encoding: 'utf-8' })
const result = text
  .replace(/\n/g, '')
  .replace(/-/g, '')

console.log(result)