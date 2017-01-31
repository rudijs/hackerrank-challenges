'use strict'

const tc = require('./time-conversion')

describe('time conversion', () => {
  it('should', () => {
    // console.log(tc('07:05:45AM'));
    // console.log(tc('12:05:39AM'));
    console.log(tc('12:00:00AM'));
    // console.log(tc('04:59:59PM'));
    console.log(tc('12:45:54PM'));
  })
});