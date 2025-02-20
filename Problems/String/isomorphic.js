// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// ex. 1: s = "egg", t = "add" => true
// Explanation: The strings s and t can be made identical by: Mapping 'e' to 'a', Mapping 'g' to 'd'.

// ex. 2: s = "foo", t = "bar" => false
// Explanation: The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// ex. 3: s = "paper", t = "title" => true
// ex. 4: s = "badc", t = "baba" => false

function helper(s = "", t = "") {
  const maped = new Map()

  for (let i = 0; i < s.length; i++) {
    const val = maped.get(s[i])
    if (!val) {
      maped.set(s[i], t[i])
      continue
    }

    if (val !== t[i]) return false
  }

  return true
}

function isomorphic(s = "", t = "") {
  // return helper(s, t) && helper(t, s)


  const sMap = new Map()
  const tMap = new Map()

  for (let i = 0; i < s.length; i++) {
    const sVal = s[i]
    const tVal = t[i]

    if (sMap.has(sVal) && sMap.get(sVal) !== tVal) return false
    if (tMap.has(tVal) && tMap.get(tVal) !== sVal) return false

    sMap.set(sVal, tVal)
    tMap.set(tVal, sVal)
  }

  return true;
}


console.log(isomorphic("egg", "add"))
console.log(isomorphic("foo", "bar"))
console.log(isomorphic("paper", "title"))
console.log(isomorphic("badc", "baba"))
