// Return array by combining largest number in each sub array of two dimentional array
// let arr = [
//   [2, 6, 8, 22],
//   [44, 65, 33, 5],
//   [5, 88, 4, 6]
// ]

// LargestNumsInTwoDimentional(arr) = [22, 65, 88]


function LargestNumsInTwoDimentional(arr = []) {
  // return arr.reduce((prev, current) => {
  //   prev.push(Math.max(...current))
  //   return prev
  // }, [])

  let len = arr.length
  let final = []

  for (let i = 0; i < len; i++) {
    let temp = arr[i][0]
    let innerLen = arr[i].length

    for (let j = 0; j < innerLen; j++) {
      let current = arr[i][j]
      if (current > temp) {
        temp = current
      }
    }

    final.push(temp)
  }

  return final
}

console.log(LargestNumsInTwoDimentional([[2, 6, 8, 22], [44, 65, 33, 5], [5, 88, 4, 6]]))