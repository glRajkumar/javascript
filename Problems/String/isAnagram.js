// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// ex. s = 'elbow', t = 'below' => true
// ex. s = 'Dormitory', t = 'dirty room##'
// ex. s = "racecar", t = "carrace" => true
// ex. s = "jar", t = "jam" => false

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Anagram is a word or phrase formed by rearranging the letters of a diffirent word or phrase, 
// typically using the original letters exactly once.


// function formatStr(str = "") {
//   return str
//     .replace(/[^\w]/g, '') // only access the alphabets
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
// }

function isAnagram(str1 = "", str2 = "") {
  // return formatStr(str1) === formatStr(str2)

  if (s.length !== t.length) return false
  let sSort = s.split("").sort().join();
  let tSort = t.split("").sort().join();
  return sSort == tSort
}

console.log(isAnagram("elbow", "below"))
console.log(isAnagram("Dormitory", "dirty room##"))
console.log(isAnagram("racecar", "carrace"))
console.log(isAnagram("jar", "jam"))
