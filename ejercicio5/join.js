function join(arr) {
  let concat = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      concat += `${arr[i]}`
    } else {
      concat += ` ${arr[i]}`
    }
  }
  return concat
}

console.log(join(['Hola', 'mundo']))
console.log(join(['Make', 'it', 'real']))
