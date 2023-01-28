// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.
// ex. MaxNoOfBallon("nlaebolko") => 1
// ex. MaxNoOfBallon("loonbalxballpoon") => 2
// ex. MaxNoOfBallon("length") => 0

function MaxNoOfBallon(str = "") {
  let final = 0
  const len = str.length
  const obj = new Map([
    ["b", 0],
    ["a", 0],
    ["l", 0],
    ["o", 0],
    ["n", 0],
  ])

  for (let i = 0; i < len; i++) {
    if (obj.has(str[i])) {
      obj.set(str[i], obj.get(str[i]) + 1)
    }
  }

  let min = Math.min(
    obj.get("b"),
    obj.get("a"),
    obj.get("n"),
    Math.floor(obj.get("l") / 2),
    Math.floor(obj.get("o") / 2)
  )

  return min || final
}

console.log(MaxNoOfBallon("nlaebolko"))
console.log(MaxNoOfBallon("loonbalxballpoon"))
console.log(MaxNoOfBallon("length"))