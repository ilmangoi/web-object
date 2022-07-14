function selectionSort(arr) {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    let maxIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[maxIndex]) maxIndex = j
    }
    ;[arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
  }
  return arr
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(selectionSort(arr))
