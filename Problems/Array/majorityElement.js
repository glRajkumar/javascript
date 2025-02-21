// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// ex. 1: [3,2,3] => 3
// ex. 2: [2,2,1,1,1,2,2] => 2

function majorityElement(arr = []) {
  // const mapped = new Map()

  // for (let i = 0; i < arr.length; i++) {
  //   const val = mapped.get(arr[i])
  //   if (val) {
  //     mapped.set(arr[i], val + 1)
  //   }
  //   else {
  //     mapped.set(arr[i], 1)
  //   }
  // }

  // let final = 0
  // let finalVal = 0

  // mapped.keys().forEach(key => {
  //   const val = mapped.get(key)
  //   if (val > finalVal) {
  //     final = key
  //     finalVal = val
  //   }
  // })

  // return final




  // const mapped = new Map()
  // mapped.set(arr[0], 1)

  // let max = arr[0]
  // let maxCount = 1

  // for (let i = 1; i < arr.length; i++) {
  //   const val = mapped.get(arr[i]) || 0
  //   const newVal = val + 1
  //   mapped.set(arr[i], newVal)

  //   if (newVal > maxCount) {
  //     max = arr[i]
  //     maxCount = newVal
  //   }
  // }

  // return max




  // Boyer-Moore Voting Algorithm
  let res = 0, count = 0;

  for (let num of arr) {
    if (count === 0) {
      res = num
    }

    count += (num === res) ? 1 : -1;
  }

  return res;
}


console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
