function quickSort(arr) {
  if (arr.length <= 1) return arr
  const left = []
  const right = []
  const centerIndex = parseInt(arr.length / 2)
  const center = arr.splice(centerIndex, 1)
  for (const num of arr) {
    if (num < center[0]) {
      left.push(num)
    } else {
      right.push(num)
    }
  }
  return [...quickSort(left), ...center, ...quickSort(right)]
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(quickSort(arr))
