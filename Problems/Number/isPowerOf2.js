// for the given non negative number, need to test that is power of two
// ex: isPowerOf2(1024) === true
// ex: isPowerOf2(46) === false

function isPowerOf2(num = 0) {
  if (num < 2) return false

  while (num > 1) {
    if (num % 2 !== 0) {
      return false
    }
    num = num / 2
  }

  return true
}


console.log(isPowerOf2(1024))
console.log(isPowerOf2(24))
console.log(isPowerOf2(5))