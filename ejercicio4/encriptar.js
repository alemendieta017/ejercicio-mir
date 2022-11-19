function encriptar(palabra) {
  const abecedario = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  let password = ''

  for (let i = 0; i < palabra.length; i++) {
    let char = palabra[i].toUpperCase()
    let letterIndex = abecedario.findIndex((letra) => char === letra)

    if (char === ' ') {
      char = ''
    } else if (char === 'A') {
      char = 'Z'
    } else {
      char = abecedario[letterIndex - 1]
    }

    password = password + char
  }

  return password
}

console.log(encriptar('hola mundo'))
console.log(encriptar('Preparacion programa'))
