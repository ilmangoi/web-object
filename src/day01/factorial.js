function factorial(n) {
  if (n <= 0) throw new Error('Please Pass in a value greater than 0')
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
console.log(factorial(4))
