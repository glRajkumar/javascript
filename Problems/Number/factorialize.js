// Return factorial value of the given input
// factorialize(3) === 6

function factorialize(num = 0) {
  if (num === 0 || num === 1) return 1

  // let final = 1
  // for (let i = 1; i <= num; i++) {
  //   final = final * i
  // }
  // return final

  return num * factorialize(num - 1)
}

console.log(factorialize(7))
