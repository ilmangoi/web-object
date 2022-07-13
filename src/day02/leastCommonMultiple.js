const greatestCommonDivisor = require('./greatestCommonDivisor')
const isQuality = require('./isQuality')

// plan A
function leastCommonMultiplePlanA(maxNum, minNum) {
  const gcdNumber = greatestCommonDivisor(maxNum, minNum)
  return (maxNum * minNum) / gcdNumber
}

// plan B
function leastCommonMultiplePlanB(maxNum, minNum) {
  // 边界情况判断
  if (!(maxNum && minNum))
    throw new Error('Please Pass in a value greater than 0')
  if (maxNum < minNum) leastCommonMultiplePlanB(minNum, maxNum)

  const temp = maxNum % minNum

  // 1. 可整除
  if (!temp) return maxNum

  // 2. 有质数
  if (isQuality(minNum) || isQuality(maxNum)) return minNum * maxNum

  // 3. 其它情况
  for (let i = 2; i < minNum; i++) {
    // maxNum扩张的位数只为minNum的约数(算法优化)
    if (!(minNum % i)) {
      const temp = i * maxNum
      if (!(temp % minNum)) return temp
    }
  }
}

// 设置对照
// => plan A
console.log(leastCommonMultiplePlanA(8, 4))
console.log(leastCommonMultiplePlanA(8, 3))
console.log(leastCommonMultiplePlanA(25, 10))
// => plan B
console.log(leastCommonMultiplePlanB(8, 4))
console.log(leastCommonMultiplePlanB(8, 3))
console.log(leastCommonMultiplePlanB(25, 10))

module.exports = {
  leastCommonMultiplePlanA,
  leastCommonMultiplePlanB
}
