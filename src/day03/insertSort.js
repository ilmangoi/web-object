// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     const temp = arr[i]
//     for (let j = i - 1; j >= 0; j--) {
//       if (temp < arr[j]) {
//         arr[j + 1] = arr[j]
//         if (!j) arr[j] = temp
//       } else {
//         arr[j + 1] = temp
//         break
//       }
//     }
//   }
//   return arr
// }

function insertSort(arr, isPositiveOrder) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    while (j >= 0 && isPositiveOrder ? temp < arr[j] : temp > arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(insertSort(arr, false))

module.exports = insertSort
