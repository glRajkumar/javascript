// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of 
// the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// ex. s = "abc", t = "ahbgdc" => true
// ex. s = "axc", t = "ahbgdc" => false

function isSubsequence(s = "", t = "") {
  if (s.length > t.length) return false

  // let currIndex = 0
  // let sliced = ""
  // const splited = s.split("")

  // for (let i = 0; i < splited.length; i++) {
  //   sliced = t.slice(i + currIndex)
  //   const index = sliced.indexOf(splited[i])

  //   if (index === -1) return false
  //   currIndex = currIndex + index
  // }

  // return true



  let i = 0
  let j = 0

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("adc", "ahfshsgfsdbgghjjkgkhgkgkgdc"))