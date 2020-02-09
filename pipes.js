// data = '||\n1|1|\n||1|1|'

const fs = require('fs')

const data = fs.readFileSync('./data.txt', { encoding: 'utf-8' })

const lines = data.split(/\n/g)

let pipes = 0
lines.forEach((line, i) => {
  let debug = 'Linha: ' + (i+1)
  if (line[0] !== '|') {
    debug += ' Ignorou ' + line[0]
  } else {
    const leu = line.split('').reduce((acc, cur) => {
      return cur === '|' ? acc + 1 : acc
    }, 0)
    debug += ' Leu ' + leu + ' pipes'
    pipes += leu
  }

  console.log(debug)
})

console.log('total', pipes)