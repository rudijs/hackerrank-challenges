'use strict'

module.exports = compareTheTriplets

function compareTheTriplets() {
  var a0_temp = '5 6 7'.split(' ');
  var a0 = parseInt(a0_temp[0]);
  var a1 = parseInt(a0_temp[1]);
  var a2 = parseInt(a0_temp[2]);
  var b0_temp = '3 6 9'.split(' ');
  var b0 = parseInt(b0_temp[0]);
  var b1 = parseInt(b0_temp[1]);
  var b2 = parseInt(b0_temp[2]);

  var results = [
    [a0, b0],
    [a1, b1],
    [a2, b2]
  ]

  var report = results.reduce(function(acc, curr) {
    if (curr[0] === curr[1]) return acc
    if (curr[0] > curr[1]) {
      acc.alice++
    } else {
      acc.bob++
    }
    return acc
  }, { alice: 0, bob: 0})

  console.log(report.alice, report.bob)
}