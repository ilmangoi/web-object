const randomNumber = require('./randomNumber')

function randomColor() {
  const fixSelectionRandom = () => randomNumber(0, 255).toString(16)
  let colorStr = `#`
  for (let i = 0; i < 3; i++) {
    let temp = fixSelectionRandom()
    if (temp.length === 1) temp = `0${temp}`
    colorStr += temp
  }
  return colorStr
}

console.log(randomColor())

module.exports = randomColor
