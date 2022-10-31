// find the index of the element in the sorted array

function binarySearch(arr = [], targetNo = 0) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middle = Math.floor((leftIndex + rightIndex) / 2)

    if (targetNo === arr[middle]) return middle

    if (targetNo < arr[middle]) {
      rightIndex = middle - 1
    } else {
      leftIndex = middle + 1
    }
  }

  return -1
}

console.log(binarySearch([1, 3, 5, 6, 8], 1))
console.log(binarySearch([1, 3, 5, 6, 8], 5))
console.log(binarySearch([1, 3, 5, 6, 8], 8))
console.log(binarySearch([1, 3, 5, 6, 8], 7))