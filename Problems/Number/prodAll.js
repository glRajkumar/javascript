// Return a product of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. prodAll(2,3,4,5) === 120

function prodAll(...numbers) {
    return numbers.reduce((acc, cur) => acc * cur)
}

console.log(prodAll(2, 3, 4, 5))
console.log(prodAll(2, -3, 4, 5))
