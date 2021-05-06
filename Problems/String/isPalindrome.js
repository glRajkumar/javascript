// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function reverseString(str = "") {
    return [...str].reverse().join('')
}

function isPalindrome(str = "") {
    let revStr = reverseString(str)
    return str === revStr
}

console.log(isPalindrome("racecar"))



function isPalindromeWithOutCase(str = "") {
    let revStr = reverseString(str).toLowerCase()
    return str.toLowerCase() === revStr
}

console.log(isPalindromeWithOutCase("Racecar"))