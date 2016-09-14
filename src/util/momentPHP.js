import moment from 'moment'
const formatMap = {
  d: 'DD',
  D: 'ddd',
  j: 'D',
  l: 'dddd',
  N: 'E',
  S: () => '[' + this.format('Do').replace(/\d*/g, '') + ']',
  w: 'd',
  z: () => this.format('DDD') - 1,
  W: 'W',
  F: 'MMMM',
  m: 'MM',
  M: 'MMM',
  n: 'M',
  t: () => this.daysInMonth(),
  L: () => this.isLeapYear() ? 1 : 0,
  o: 'GGGG',
  Y: 'YYYY',
  y: 'YY',
  a: 'a',
  A: 'A',
  B: () => {
    var thisUTC = this.clone().utc()
      // Shamelessly stolen from http://javascript.about.com/library/blswatch.htm
    var swatch = ((thisUTC.hours() + 1) % 24) + (thisUTC.minutes() / 60) + (thisUTC.seconds() / 3600)
    return Math.floor(swatch * 1000 / 24)
  },
  g: 'h',
  G: 'H',
  h: 'hh',
  H: 'HH',
  i: 'mm',
  s: 'ss',
  u: '[u]', // not sure if moment has this
  e: '[e]', // moment does not have this
  I: () => this.isDST() ? 1 : 0,
  O: 'ZZ',
  P: 'Z',
  T: '[T]', // deprecated in moment
  Z: () => parseInt(this.format('ZZ'), 10) * 36,
  c: 'YYYY-MM-DD[T]HH:mm:ssZ',
  r: 'ddd, DD MMM YYYY HH:mm:ss ZZ',
  U: 'X'
}
let formatEx = /[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g

moment.fn.formatPHP = function (format) {
  let that = this
  return this.format(format.replace(formatEx, (phpStr) => {
    return typeof formatMap[phpStr] === 'function' ? formatMap[phpStr].call(that) : formatMap[phpStr]
  }))
}
