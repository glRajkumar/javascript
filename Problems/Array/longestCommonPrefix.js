// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""

// ex 1. ["flower","flow","flight"] => "fl"
// ex 2. ["dog","racecar","car"] => ""


function longestCommonPrefix(arr = []) {
  const firstEl = arr[0]

  let final = ""
  for (let i = 0; i < firstEl.length; i++) {
    const has = arr.every(el => el[i] === firstEl[i])
    if (!has) return final

    final += firstEl[i]
  }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
