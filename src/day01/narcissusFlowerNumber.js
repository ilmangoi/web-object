const splitNumber = require('./splitNumber')

/**
 * @param {Number} num
 * @returns {Boolean}
 */
function narcissusFlowerNumber(num) {
  if (num <= 1) return false
  const nums = splitNumber(num)
  let sum = 0
  for (const item of nums) {
    sum += Math.pow(item, 3)
  }
  return sum === num
}

for (let i = 100; i < 1000; i++) {
  if (narcissusFlowerNumber(i)) console.log(i)
}

module.exports = narcissusFlowerNumber
