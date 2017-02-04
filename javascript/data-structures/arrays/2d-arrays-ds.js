'use strict'

module.exports = arraysDs2d

function arraysDs2d(arr) {

  let largestHourGlassSum

  // starting y point
  let y = 0
  // max x and y
  const maxX = arr[0].length - 2
  const maxY = arr.length - 2

  // move down
  while (y < maxY) {
    // starting x point
    let x = 0

    // move across
    while (x < maxX) {
      // console.log('x', x, 'y', y, 'cursor', `arr[${y}][${x}]`, arr[y][x]);
      const hourGlass = getHourGlass(arr, x, y)
      const hourGlassSum = sumHourGlass(hourGlass)
      if (largestHourGlassSum === undefined) {
        largestHourGlassSum = hourGlassSum
      } 
      else if (hourGlassSum > largestHourGlassSum) {
        largestHourGlassSum = hourGlassSum
      }
      x++
    }
    y++
  }

  console.log(largestHourGlassSum);

}

function getHourGlass(arr, x, y) {
  // top row
  const top = [arr[y][x], arr[y][x + 1], arr[y][x + 2]]
  // middle row
  const middle = [arr[y + 1][x + 1]]
  // bottom row
  const bottom = [arr[y + 2][x], arr[y + 2][x + 1], arr[y + 2][x + 2]]

  return [].concat(top).concat(middle).concat(bottom)
}

function sumHourGlass(arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr
  }, 0)
}