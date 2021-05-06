// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str = "") {
    // return str.split("").reverse().join("")

    // return str.split('').reduce((revString, char) => char + revString, '')

    // let revStr = ""
    // for (let i = 0; i < str.length; i++) { 
    //     revStr =  str[i] + revStr
    // }
    // return revStr

    // let revStr = ""
    // for (let char of str) {
    //     revStr = char + revStr
    // }
    // return revStr

    return [...str].reverse().join('')
}

console.log(reverseString("hello"))