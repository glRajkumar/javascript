// Write a function that reverses a array.
// You must do this by modifying the input array in-place with O(1) extra memory.

// ex. 1: ["h","e","l","l","o"] => ["o","l","l","e","h"]
// ex. 2: ["H","a","n","n","a","h"] => ["h","a","n","n","a","H"]


function reverseInPlace(arr = [""]) {
  // return arr.reverse()

  const half = Math.round(arr.length / 2)
  const len = arr.length - 1
  for (let i = 0; i < half; i++) {
    [arr[i], arr[len - i]] = [arr[len - i], arr[i]]
  }

  return arr
}


console.log(reverseInPlace(["h", "e", "l", "l", "o"]))
console.log(reverseInPlace(["H", "a", "n", "n", "a", "h"]))

