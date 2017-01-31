'use strict'

module.exports = circularArrayRotation

function circularArrayRotation() {
    var n_temp = '3 2 3'.split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);

    var a = '1 2 3'.split(' ');
    a = a.map(Number);

    for(var i = 0; i < k; i++) {
      a = rotateArray(a)
    }

    [0,1,2].forEach(function(i) {
      console.log(a[i]);
    })

}

function rotateArray(arr) {
  var popped = arr.pop()
  arr.unshift(popped)
  return arr
}
