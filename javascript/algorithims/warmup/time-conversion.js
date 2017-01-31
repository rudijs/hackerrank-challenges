'use strict'

module.exports = timeConversion

function timeConversion(time) {
  return box(time)
    .map(function (t) {
      return {
        meridian: t.match(/AM/),
        hoursAdjustment: (t.match(/AM/)) ? 0 : 12,
        timeParts: t.replace(/(AM|PM)/, '').split(':')
      }
    })
    .map(function (o) {
      // handle 00 hours
      if (o.timeParts[0] === '12' && o.meridian) {
        o.timeParts[0] = 0
      }
      // handle 12PM hours
      if (o.timeParts[0] === '12' && !o.meridian) {
        o.hoursAdjustment = 0
      }
      return [
        o.hoursAdjustment + Number(o.timeParts[0]),
        String(o.timeParts[1]),
        String(o.timeParts[2])
      ]
    })
    .map(function (t) {
      return [
        (t[0] >= 12) ? String(t[0]) : '0' + t[0],
        t[1],
        t[2]
      ].join(':')
    })
    .fold(function (r) { return r })
}

function box(x) {
  return {
    map: function (f) { return box(f(x)) },
    inspect: function () { return `box(${x})` },
    fold: function (f) { return f(x) }
  }
}
