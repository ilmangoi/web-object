/**
 * @param {Number} secs
 * @return {String}
 */
function calcTime(secs) {
  const timeStr = ['day', 'hour', 'minute', 'second']
  const division = [86400, 3600, 60, 1]
  let time = [0, 0, 0, 0]
  let formatStr = ``
  let left = 0
  let right = 3

  // 解析secs，并把解析结果存入time数组
  for (let i = 0; i < 4; i++) {
    if (secs >= division[i]) {
      time[i] = parseInt(secs / division[i])
      secs %= division[i]
    }
  }

  // 去掉time数组前后的0(优化显示)
  while (!time[left]) left++
  while (!time[right]) right--
  time = time.slice(left, right + 1)

  // 输出结果
  for (const item of time) {
    formatStr += `${item}${timeStr[left++]}  `
  }
  return formatStr
}

module.exports = calcTime
