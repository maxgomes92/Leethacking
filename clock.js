// Provide 0 or 1
// Read all clock values
// Changes from 0 to 1 read current data

const yellow_C = '0001010101010101001001001001001010010010010100101010010010010010101001001001010010010101001001001001010101001010100101001001010010010010010010010101001010010010010101001010010010010010100100101010010010101001001001001010010101010101001010010010010101010010100100101001001001001001001001001010100101010101001010010010101010101001010010101001001010010101010010010100100101010010010010010010101010010100101010010010100101001010010010010010101010010101010100100100100100101001010100101001001001001010101010101001'
const blue_D = '1100111011001110011000111011000101101100111110101011101000010010011010101101001111000111010000010001111000011110001101001100100010000100111011011110001100010101000000111011100100011100001110101000000001000011011000010010010010001000110000000011100010010111110101101010001010010111110111110011010101111110100000001000100011001100110010000101001100011110011101100011110111000000011000101100001001011111101011101000010100110110001011011000101110011111111001100100011000111100000101111111101111100011001000100010'



const output = []
for (let i = 0; i < yellow_C.length; i++) {
  const last_output = output[output.length - 1] || 0
  const previous_input = yellow_C[i-1] || 0
  const current_input = yellow_C[i]
  const isRising = previous_input == 0 && current_input == 1

  const toOutput = isRising ? blue_D[i] : last_output

  output.push(toOutput)
}

console.log(output.join(''))