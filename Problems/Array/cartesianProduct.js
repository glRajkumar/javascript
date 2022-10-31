// for the given set of two arrays, return cartesian product
// ex: cartesianProduct([1,2,3], [4,5]) => [[1,4], [1,5], [2,4], [2,5], [3,4], [3,5]]

function cartesianProduct(arr1 = [], arr2 = []) {
  return arr1.reduce((prev, curr) => {
    const mapped = arr2.map(a => [curr, a])
    prev.push(...mapped)
    return prev
  }, [])

  // const final = []
  // const len1 = arr1.length
  // const len2 = arr2.length

  // for (let i = 0; i < len1; i++) {
  //   for (let j = 0; j < len2; j++) {
  //     final.push([arr1[i], arr2[j]])
  //   }
  // }

  // return final
}

console.log(cartesianProduct([1, 2, 3], [4, 5]))