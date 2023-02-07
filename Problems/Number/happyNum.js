// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// ex: happyNum(19) === true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// ex: happyNum(2) === false


function happyNum(num = 0) {
  const splited = `${num}`.split("")

  const reduced = splited.reduce((prev, curr) => Number(prev) + (Number(curr) ** 2), 0)

  // if (`${reduced}`.length === 1) return reduced === 1
  if (reduced < 10) return reduced === 1
  return happyNum(reduced)
}

console.log(happyNum(19))
console.log(happyNum(2))
console.log(happyNum(2091))
