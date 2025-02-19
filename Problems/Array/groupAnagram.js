// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// ex. 1: ["act","pots","tops","cat","stop","hat"] => [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// ex. 2: ["x"] => [["x"]]
// ex. 3: [""] => [[""]]

function groupAnagram(arr = [""]) {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    const toMap = el.split("").sort((a, b) => a.localeCompare(b)).join("")

    if (map.has(toMap)) {
      map.get(toMap).push(el)
    } else {
      map.set(toMap, [el])
    }
  }

  return [...map.values()]
}

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]))
console.log(groupAnagram(["x"]))
console.log(groupAnagram([""]))
