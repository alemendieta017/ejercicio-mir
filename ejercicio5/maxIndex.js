function maxIndex(arr) {
  if (arr === 0) {
    return undefined
  }

  let max = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return arr.indexOf(max)
}

console.log(maxIndex([1, 3, 2]))
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]))
console.log(maxIndex([]))
