'use strict'

module.exports = arraysDs

function arraysDs() {
    var n = 4;
    var arr = '1 4 3 2'.split(' ');
    arr = arr.map(Number);  

    arr.reverse()

    var res = '';

    for(var i = 0; i < n; i++) {
      res = res + arr[i];
      if (i !== n - 1) {
        res = res + ' ';
      }
    }

    console.log(res);

}