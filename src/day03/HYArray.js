const insertSort = require('./insertSort')

class HyArray extends Array {
  constructor(arr) {
    arr = arr ?? []
    super(...arr)
  }

  hySplice(index, delNum, ...data) {
    return HyArray.hySplice(this, index, delNum, ...data)
  }

  hyMap(callBack) {
    return HyArray.hyMap(this, callBack)
  }

  hyInsert(data) {
    return HyArray.hyInsert(this, data)
  }

  hyHas(data) {
    return HyArray.hyHas(this, data)
  }

  hyFlat(deepness) {
    return this.hyFlat(this, deepness)
  }

  hyRemoveDuplication() {
    return HyArray.hyRemoveDuplication(this)
  }

  hyReverse() {
    return HyArray.hyReverse(this)
  }

  hyPush(...data) {
    return HyArray.hyPush(this, ...data)
  }

  hyPop() {
    return HyArray.hyPop(this)
  }

  hyUnshift(...data) {
    return HyArray.hyUnshift(this, ...data)
  }

  hyShift() {
    return HyArray.hyShift(this)
  }

  hyReduce(callBack, initValue) {
    return HyArray.hyReduce(this, callBack, initValue)
  }

  static hyReduce(arr, callBack, initValue) {
    let startIndex = typeof initValue === 'undefined' ? 1 : 0
    initValue = initValue ?? arr[0]
    for (; startIndex < arr.length; startIndex++) {
      initValue = callBack(initValue, arr[startIndex], startIndex)
    }
    return initValue
  }

  static hyShift(arr) {
    const delItem = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    return delItem
  }

  static hyUnshift(arr, ...data) {
    const insertCount = data.length
    let endIndex = arr.length + insertCount - 1
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[endIndex--] = arr[i]
    }
    for (let i = 0; i < insertCount; i++) {
      arr[i] = data[i]
    }
    return arr.length
  }

  static hyPush(arr, ...data) {
    // data为空即表示没有要插入的元素
    if (data.length === 0) return arr.length

    // 插入元素
    let index = arr.length
    for (let i = 0; i < data.length; i++) {
      arr[index++] = data[i]
    }
    return arr.length
  }

  static hyPop(arr) {
    const endIndex = arr.length - 1
    const delItem = arr[endIndex]
    arr.length = endIndex
    return delItem
  }

  static hyMap(arr, callBack) {
    const newArr = new HyArray()
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
      const flag = arr[i] <= arr[i + 1]
      if (isPositiveOrder === undefined) {
        isPositiveOrder = flag
      } else if (isPositiveOrder !== flag) {
        // 插入排序
        insertSort(arr, isPositiveOrder)
        break
      }
    }

    // 插入数据
    if (isPositiveOrder && data >= arr[arr.length - 1]) {
      this.hyPush(arr, data)
    } else if (!isPositiveOrder && data <= arr[arr.length - 1]) {
      this.hyPush(arr, data)
    } else {
      for (let i = 0; i <= arr.length - 1; i++) {
        if (isPositiveOrder ? data <= arr[i] : data >= arr[i]) {
          this.hySplice(arr, i, 0, data)
          break
        }
      }
    }

    // 插入数据(使用插入排序的思想)
    // arr.push(data)
    // let i = arr.length - 2
    // const temp = arr[arr.length - 1]
    // while (i >= 0 && isPositiveOrder ? temp > arr[i] : temp < arr[i]) {
    //   arr[i + 1] = arr[i]
    //   i--
    // }
    // arr[i + 1] = temp

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
    while (i < arr.length) {
      if (this.hyHas(arr, arr[i], i)) {
        this.hySplice(arr, i, 1)
      } else {
        i++
      }
    }
    return arr
  }

  static hySplice(arr, index, delNum, ...data) {
    // 运算要返回的内容(被删除的内容)
    const delArr = new HyArray()
    for (let i = index; i < index + delNum; i++) {
      this.hyPush(delArr, arr[index])
    }

    // 连接要插入的元素与被切割的后续元素
    for (let i = index + delNum; i < arr.length; i++) {
      this.hyPush(data, arr[i])
    }

    // 切除index之后的元素
    arr.length = index

    // 运算出最终结果并返回
    this.hyPush(arr, ...data)
    return arr
  }

  static hyFlat(arr, deepness, newArr = new HyArray(), set = new WeakSet()) {
    deepness = deepness ?? 1
    if (deepness < 0 || set.has(arr) || !Array.isArray(arr)) {
      // 1. 如果到达指定深度则直接push
      // 2. 如果发现循环嵌套则直接push
      // 3. 如果发现不是数组则直接push
      this.hyPush(newArr, arr)
    } else {
      // 记录数组，防止循环嵌套
      set.add(arr)

      // 拍平数组（递归）
      for (const value of arr) {
        if (Array.isArray(value)) {
          this.hyFlat(value, deepness - 1, newArr, set)
        } else {
          this.hyPush(newArr, value)
        }
      }
    }

    return newArr
  }

  static hyReverse(arr) {
    for (let i = 0, len = parseInt(arr.length / 2); i < len; i++) {
      const endIndex = arr.length - i - 1
      ;[arr[i], arr[endIndex]] = [arr[endIndex], arr[i]]
    }
    return arr
  }
}

module.exports = HyArray
