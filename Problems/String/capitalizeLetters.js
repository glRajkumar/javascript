// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str = "hello") {
    // return str.replace(/\b[a-z]/gi, function (char) {
    //     return char.toUpperCase();
    // })

    let spltStr = str.toLowerCase().trim().split(" ")
    return spltStr.map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
}

console.log(capitalizeLetters("i love you"))
