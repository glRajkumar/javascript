// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// ex. 1: "aba" => true
// ex. 2: "abca" => true
// Explanation: You could delete the character 'c'.
// ex. 3: "abc" => false

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}

function isPalindromeByRemovingOneChar(s = "") {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)
    }
    l++
    r--
  }

  return true
}

console.log(isPalindromeByRemovingOneChar("aba"))
console.log(isPalindromeByRemovingOneChar("abca"))
console.log(isPalindromeByRemovingOneChar("abc"))
