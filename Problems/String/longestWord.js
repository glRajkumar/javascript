// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is RajKumar') === 'RajKumar'
// ex. longestWord('Hello there, my name is Raj') === ['hello', 'there']

function longestWord(sen = "") {
    // createing an array of words without special characters
    let words = sen.toLowerCase().match(/[a-z0-9]+/g)

    let sorted = words.sort((a, b) => b.length - a.length)

    let longWrArr = sorted.filter(word => word.length === sorted[0].length)

    if (longWrArr.length === 1) return longWrArr[0]
    return longWrArr
}

console.log(longestWord("Hello there, my name is RajKumar"))
