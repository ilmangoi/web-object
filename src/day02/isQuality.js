function isQuality(num) {
  for (let i = 2, len = parseInt(num / 2); i <= len; i++) {
    if (!(num % i)) {
      return false
    }
  }
  return true
}

module.exports = isQuality
