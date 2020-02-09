const axios = require('axios')

const url = 'http://game.leethack.party/challenge/orderly-powerless-blueshark/archive/request'

axios.get(url).then(({data}) => {
  const blocks = data.split(/ /g).splice(1, data.length-1).filter(b => b.length > 0)
  const evenBlocks = blocks.filter(b => b.length % 2 === 0)
  const smallestBlock = evenBlocks.reduce((smallest, block) => {
    return block < smallest ? block : smallest
  }, evenBlocks[0])

  let total = evenBlocks.reduce((total, block) => {
    return total + block.length
  }, 0)  

  if (total < 7) {
    total += smallestBlock.length
  }

  console.log(blocks)
  console.log(evenBlocks)
  console.log(smallestBlock)
  console.log(total)

  axios.post(url, total.toString(), { headers: { 'Content-Type': 'text/plain' } }).then(({data}) => {
    console.log(data)
  })
})

