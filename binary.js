const axe = '01000101 01100001 01110100 00100000 01101101 01111001 00100000 01100010 01110101 01110010 01100111 01100101 01110010 01110011 00101100 00100000 01100110 01101111 01110010 00100000 01101001 01110100 00100000 01101001 01110011 00100000 01101101 01111001 00100000 01100110 01101100 01100101 01110011 01101000 00101110 00100000 01000100 01110010 01101001 01101110 01101011 00100000 01101101 01111001 00100000 01100010 01101100 01101111 01101111 01100100 00101100 00100000 01100110 01101111 01110010 00100000 01101001 01110100 00100000 01101001 01110011 00100000 01101101 01111001 00100000 01101101 01101001 01101100 01101011 00101110 00100000 01001111 01100010 01100101 01111001 00100000 01110100 01101000 01100101 00100000 01000011 01101111 01110111 00100000 01000111 01101111 01100100 00100001 00100000 01001100 01101111 01101111 01101011 00100000 01100110 01101111 01110010 00100000 01110100 01101000 01100101 00100000 01101000 01101111 01101100 01111001 00100000 01110111 01101111 01110010 01100100 01110011 00100000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01110011 01101111 01110101 01110010 01100011 01100101 00100001 00100000 01001001 01110100 00100000 01110111 01101001 01101100 01101100 00100000 01000011 01001111 01001110 01010100 01010010 01001111 01001100 00100000 01010101 00100001'
const text = 'When Moohses came down from Muck Sinai with the two tablets of the corporate law in his hands, he was not aware that his face was radiant because he had spoken with the board. They had decided to claim ownership of the tablets and charge a philistine fee of 25% of the retail price for every reproduced unit. Moohses put a veil over his beast face, grabbed his bovine battle axe and went ballistic in the board room. People saw this and rejoiced, and so the first struggle for a copyright reform was launched.'
const fullText = 'Cattlexodus: 34:29\nWhen Moohses came down from Muck Sinai with the two tablets of the corporate law in his hands, he was not aware that his face was radiant because he had spoken with the board. They had decided to claim ownership of the tablets and charge a philistine fee of 25% of the retail price for every reproduced unit. Moohses put a veil over his beast face, grabbed his bovine battle axe and went ballistic in the board room. People saw this and rejoiced, and so the first struggle for a copyright reform was launched.'

function binaryAgent(str) {

  var newBin = str.split(" ");
  var binCode = [];

  for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
}

function textToBinary (input) {
  let output = ''
  for (var i = 0; i < input.length; i++) {
    output += input[i].charCodeAt(0).toString(2) + " ";
  }

  return output
}

function toUTF8Array(str) {
  var utf8 = [];
  for (var i = 0; i < str.length; i++) {
    var charcode = str.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode < 0x800) {
      utf8.push(0xc0 | (charcode >> 6),
        0x80 | (charcode & 0x3f));
    }
    else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(0xe0 | (charcode >> 12),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f));
    }
    else {
      i++;
      charcode = 0x10000 + (((charcode & 0x3ff) << 10)
        | (str.charCodeAt(i) & 0x3ff));
      utf8.push(0xf0 | (charcode >> 18),
        0x80 | ((charcode >> 12) & 0x3f),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f));
    }
  }
  return utf8;
}

// const text =  binaryAgent(axe);
const binary = textToBinary(fullText)
console.log(binary)