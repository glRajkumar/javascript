// return new string with only the given length with ... at end if given number is less than the given string and greater than 6 else return same string.
// trancate("Rajkumar", 5) === "Rajkumar"
// trancate("Rajkumar", 10) === "Rajkumar"
// trancate("Raj kumar", 7) === "Raj ..."

function trancate(str = '', num = 0) {
  if (num <= 0 || num < 7 || num >= str.length) return str

  return str.slice(0, num - 3) + "..."
}

console.log(trancate("Rajkumar", 5))
console.log(trancate("Rajkumar", 10))
console.log(trancate("Raj kumar", 7))
console.log(trancate("Raj kumar is the best coder", 24))