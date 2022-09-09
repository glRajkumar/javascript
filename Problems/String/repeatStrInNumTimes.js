// return repeated new string by given string in n number of times
// repeatStrInNumTimes("ab", 3) === "ababab"

function repeatStrInNumTimes(str = '', num = 0) {
  if (num <= 0) return ""

  // return str.repeat(num)

  // recursion
  // return str + repeatStrInNumTimes(str, num-1)

  let final = str
  for (let i = 1; i < num; i++) {
    final = final + str
  }

  return final
}

console.log(repeatStrInNumTimes("abc", 1))