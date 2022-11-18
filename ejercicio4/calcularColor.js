function calcularColor(numero) {
  let color
  if (numero === 1) {
    color = 'black'
  } else if (numero === 2) {
    color = 'blanco'
  } else if (numero === 3) {
    color = 'azul'
  } else {
    color = 'verde'
  }

  return 'El color es ' + color
}

console.log(calcularColor(1))
console.log(calcularColor(2))
console.log(calcularColor(3))
console.log(calcularColor(8))
