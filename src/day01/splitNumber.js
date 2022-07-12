/**
 * @param {Number} number
 * @return {number[]}
 */
function splitNumber(number) {
  const res = []
  while (number) {
    const remainder = number % 10
    number = parseInt(number / 10)
    res.unshift(remainder)
  }
  return res
}
// console.log(splitNumber(1161427614))

module.exports = splitNumber
