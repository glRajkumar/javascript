// encode/decode the message (only encode alphabets not special charaters)
// encode the message cipher("G Raj Kumar") === "T Enw Xhzne"
// decode the encoded message cipher("T Enw Xhzne") === "G Raj Kumar"

function cipher(str = '') {
  let len = str.length
  let final = ""

  for (let i = 0; i < len; i++) {
    let ascNum = str.charCodeAt(i)

    if (ascNum > 64 && ascNum < 91) {
      let replaceNum = ascNum > 77 ? ascNum - 13 : ascNum + 13
      final += String.fromCharCode(replaceNum)
    } else if (ascNum >= 97 && ascNum <= 122) {
      let replaceNum = ascNum > 109 ? ascNum - 13 : ascNum + 13
      final += String.fromCharCode(replaceNum)
    } else {
      final += str[i]
    }

  }

  return final
}

console.log(cipher("G Raj Kumar"))
console.log(cipher("T Enw Xhzne"))
