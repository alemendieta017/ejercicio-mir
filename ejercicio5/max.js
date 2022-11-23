function max(arr) {
  if (arr === 0) {
    return undefined
  }

  let max = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}

console.log(max([1, 3, 2]))
console.log(max([10, 9, 8, 7, 6, 5, 4]))
console.log(max([]))
