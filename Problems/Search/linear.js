// find the index of the element in the array

function linearSearch(arr = [], targetNo = 0) {
  // return arr.findIndex(el => el === targetNo)

  let len = arr.length

  for (let i = 0; i < len; i++) {
    if (targetNo === arr[i]) {
      return i
    }
  }

  return -1
}

console.log(linearSearch([1, 3, 5, 6, 8], 1))
console.log(linearSearch([1, 3, 5, 6, 8], 5))
console.log(linearSearch([1, 3, 5, 6, 8], 8))
console.log(linearSearch([1, 3, 5, 6, 8], 7))