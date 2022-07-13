const numStr = [null, '一', '二', '三', '四', '五', '六', '七', '八', '九']
function parseNumber(num) {
  if (num < 10) {
    return `得${numStr[num]}`
  } else if (!(num % 10)) {
    return `${numStr[num / 10]}十`
  } else if (num < 20) {
    return `十${numStr[num % 10]}`
  } else {
    return `${numStr[parseInt(num / 10)]}十${numStr[num % 10]}`
  }
}
function multiplicationTable() {
  for (let i = 1; i <= 9; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
      str += `${numStr[j]}${numStr[i]}${parseNumber(i * j)}\t`
    }
    console.log(str)
  }
}
multiplicationTable()
