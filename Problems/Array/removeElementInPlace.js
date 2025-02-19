// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// ex. 1: nums = [3,2,2,3], val = 3 => 2 ([2,2,_,_])
// ex. 2: nums = [0,1,2,2,3,0,4,2], val = 2 => 5 ([0,1,4,0,3,_,_,_])

function removeElementInPlace(nums = [], val = 0) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}


console.log(removeElementInPlace([3, 2, 2, 3], 2))
console.log(removeElementInPlace([0, 1, 2, 2, 3, 0, 4, 2], 2))
