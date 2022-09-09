// Return boolean of the state when the given phrase is ending with the targeted value
// confirmEnding("I am testing you", "you") === true
// confirmEnding("I am testing you", "u") === true
// confirmEnding("I am testing you", "am") === false

function confirmEnding(phr = "", target = '') {
  // return phr.endsWith(target)

  // return phr.substring(phr.length - target.length) === target

  return phr.slice(-target.length) === target
}

console.log(confirmEnding("I am testing you", "you"))
console.log(confirmEnding("I am testing you", "u"))
console.log(confirmEnding("I am testing you", "am"))


// --  using recursion  --
// function confirmEndingRec(phr = "", target = '', isParent = true) {
//   let splited = isParent ? phr.split(" ") : phr.split('')
//   let finalWord = splited[splited.length - 1]

//   if (finalWord === target) return true
//   if (finalWord.length > 1 && isParent) return confirmEndingRec(finalWord, target, false)
//   return false
// }

// console.log(confirmEndingRec("I am testing you", "you"))
// console.log(confirmEndingRec("I am testing you", "u"))
// console.log(confirmEndingRec("I am testing you", "am"))