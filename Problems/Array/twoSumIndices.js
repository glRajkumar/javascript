// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

// ex. 1: input = [3, 4, 5, 6], target = 7  => [0, 1]
// ex. 2: input = [4, 5, 6], target = 10      => [0, 2]

function twoSumIndices(input = [], target = 0) {
  // for (let i = 0; i < input.length - 1; i++) {
  //   for (let j = i + 1; j < input.length; j++) {
  //     if (input[i] + input[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }

  // return []


  const indices = input.reduce((prev, curr, i) => {
    prev[curr] = i
    return prev
  }, {})

  for (let i = 0; i < input.length - 1; i++) {
    let diff = target - input[i]
    if (indices[diff] && indices[diff] !== i) {
      return [i, indices[diff]]
    }
  }

  return []
}

console.log(twoSumIndices([3, 4, 5, 6], 7))
console.log(twoSumIndices([4, 5, 6], 10))
