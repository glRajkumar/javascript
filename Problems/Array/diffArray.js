// return array with only unique values from given two array
// ex. diffArray([1, 2, 3, 4, 5, 6],  [2, 5, 6, 7, 8]) === [1, 3, 4, 7, 8]

function diffArray(arr1 = [], arr2 = []) {
  let combined = [...arr1, ...arr2]
  return combined.filter(n => !arr1.includes(n) || !arr2.includes(n))

  // let final = []
  // let arr1Len = arr1.length
  // let arr2Len = arr2.length

  // for (let i = 0; i < arr1Len; i++) {
  //   if (!arr2.includes(arr1[i])) {
  //     final.push(arr1[i])
  //   }
  // }

  // for (let i = 0; i < arr2Len; i++) {
  //   if (!arr1.includes(arr2[i])) {
  //     final.push(arr2[i])
  //   }
  // }

  // return final
}

console.log(diffArray([1, 2, 3, 4, 5, 6], [2, 5, 6, 7, 8]))