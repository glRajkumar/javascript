// check whether the string has non repeatitive charcter
// isCharcterUnique("abcde") === true
// isCharcterUnique("abcded") === false

function isCharcterUnique(str = '') {
  // return str.length === new Set(str).size

  // let obj = {}
  // let len = str.length
  // for (let i = 0; i < len; i++) {
  //   if (obj[str[i]]) {
  //     return false
  //   }
  //   obj[str[i]] = str[i]
  // }
  // return true


  let len = str.length

  for (let i = 0; i < len; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false
    }
  }

  return true
}

console.log(isCharcterUnique("abcde"))
console.log(isCharcterUnique("abcded"))