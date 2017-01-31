'use strict'

module.exports = () => {
  // const arr = [-4, 3, -9, 0, 4, 1]
  //   const res = arr.reduce((prev, curr) => {
  //     if(curr > 0) prev.positive = prev.positive + 1
  //     if(curr < 0) prev.negative = prev.negative + 1
  //     if(curr == 0) prev.zero = prev.zero + 1
  //     return prev
  //   }, {positive: 0, negative: 0, zero: 0})

  //   console.log((res.positive/arr.length).toFixed(5))
  //   console.log((res.negative/arr.length).toFixed(5))
  //   console.log((res.zero/arr.length).toFixed(5))

  const num = 6
  let n = 0

  while(n < 6) {
    console.log(n++)
    console.log('n', n)
  }

}
