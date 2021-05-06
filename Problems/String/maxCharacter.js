// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str = "") {
    const charMap = {}
    let maxChar = ''
    let maxNum = 0

    str.split('').forEach(function (char) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    });

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char
        }
    }

    return maxChar;
}

console.log(maxCharacter("aaabb"))