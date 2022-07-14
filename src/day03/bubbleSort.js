function bubbleSort(arr) {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    for (let j = 0, len = arr.length - i - 1; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(bubbleSort(arr))
