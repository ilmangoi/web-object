const insertSort = require('./insertSort')

class hyArray extends Array {
  hyMap(callBack) {
    hyArray.hyMap(this, callBack)
  }

  hyInsert(data) {
    hyArray.hyInsert(this, data)
  }

  hyHas(data) {
    hyArray.hyHas(this, data)
  }

  hyRemoveDuplication() {
    hyArray.hyRemoveDuplication(this)
  }

  static hyMap(arr, callBack) {
    const newArr = []
    let index = 0
    for (const value of arr) {
      newArr.push(callBack(value, index++, arr))
    }
    return newArr
  }

  static hyInsert(arr, data) {
    // 边界情况判断
    arr.forEach((value) => {
      if (typeof value !== 'number') throw new Error('please input a number[]')
    })

    // 重排未排序的数组(保留原本顺序)
    let isPositiveOrder
    for (let i = 0; i < arr.length - 1; i++) {
      const flag = arr[i] >= arr[i + 1]
      if (isPositiveOrder === undefined) {
        isPositiveOrder = flag
      } else if (isPositiveOrder !== flag) {
        // 插入排序
        insertSort(arr, isPositiveOrder)
        break
      }
    }

    // 插入数据(使用插入排序的思想)
    arr.push(data)
    let i = arr.length - 2
    const temp = arr[arr.length - 1]
    while (i >= 0 && isPositiveOrder ? temp > arr[i] : temp < arr[i]) {
      arr[i + 1] = arr[i]
      i--
    }
    arr[i + 1] = temp

    // 返回
    return arr
  }

  static hyHas(arr, data, ignore) {
    for (let i = 0; i < arr.length; i++) {
      if (i === ignore) continue
      if (arr[i] === data) return true
    }
    return false
  }

  static hyRemoveDuplication(arr) {
    let i = 0
    while (true) {
      if (this.hyHas(arr, arr[i], i)) {
        arr.splice(i, 1)
      } else {
        i++
        if (i >= arr.length) return arr
      }
    }
  }
}

module.exports = hyArray
