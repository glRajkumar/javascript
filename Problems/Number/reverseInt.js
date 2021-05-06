// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int = 3245) {
    let revInt = int.toString().split("").reverse().join("")
    // return Number(revInt) => it is not converting sign
    return parseInt(revInt) * Math.sign(int)
}

console.log(reverseInt(12345678))
console.log(reverseInt(-12345678))
