'use strict'

module.exports = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(buildString(n - i, ' ') + buildString(i, '#'))
  }
}

function buildString(num, char) {
  let str = ''
  for (let i = 1; i <= num; i++) {
    str = str + char
  }
  return str
}
