// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

// ex. 1: [17,18,5,4,6,1] => [18,6,6,6,1,-1]
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.

// ex. 2: [2] => [-1]
// There are no elements to the right of index 0.

function replaceByright(arr = []) {
  if (arr.length === 1) return [-1]

  // const final = []
  // for (let i = 1; i < arr.length - 1; i++) {
  //   const max = Math.max(...arr.slice(i))
  //   final.push(max)
  // }
  // final.push(-1)
  // return final

  let maxRight = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i]
    arr[i] = maxRight
    maxRight = Math.max(maxRight, current)
  }
  return arr
}

console.log(replaceByright([17, 18, 5, 4, 6, 1]))
console.log(replaceByright([7]))
