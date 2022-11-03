function insertionSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let noToBeInserted = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > noToBeInserted) {
      arr[j + 1] = arr[j]
      j = j - 1
    }

    arr[j + 1] = noToBeInserted
  }

  return arr
}

console.log(insertionSort([-2, 5, 8, 9, 4, -8, -4, 3]))