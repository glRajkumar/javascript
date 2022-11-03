function bubbleSort(arr = []) {
  let swapped = false
  let len = arr.length

  do {
    swapped = false

    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp

        swapped = true
      }
    }
  } while (swapped)

  return arr
}

console.log(bubbleSort([-2, 5, 8, 9, 4, -8, -2, 5]))