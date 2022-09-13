// return Roman represtation of the given number

function numToRoman(num = 1) {
  const romanLetterConstructor = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  let final = ""

  for (const key in romanLetterConstructor) {
    while (romanLetterConstructor[key] <= num) {
      final = final + key
      num = num - romanLetterConstructor[key]
    }
  }

  return final
}

console.log(numToRoman(706))