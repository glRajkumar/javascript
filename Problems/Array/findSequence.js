// find whether the number of array is in arithmatic or geomatric sequence. if not matched both return "No Sequence"

function findSequence(arr = []) {
  let len = arr.length
  let arithmaticArr = []
  let geomatricArr = []

  for (let i = 0; i < len - 1; i++) {
    arithmaticArr.push(arr[i + 1] - arr[i])
    geomatricArr.push(arr[i + 1] / arr[i])
  }

  let arithmaticReduced = arithmaticArr.every(a => a === arithmaticArr[0])
  let geomatricReduced = geomatricArr.every(a => a === geomatricArr[0])

  if (arithmaticReduced) return "Arithmatic Sequence"
  if (geomatricReduced) return "Geomatric Sequence"
  return "No Sequence"
}

console.log(findSequence([2, 4, 6, 8, 10]))
console.log(findSequence([2, 4, 8, 16, 32]))
console.log(findSequence([2, 6, 8, 88, 180]))
