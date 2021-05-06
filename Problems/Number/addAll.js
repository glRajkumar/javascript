// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...numbers) {
    console.log(numbers)
    return numbers.reduce((acc, cur) => acc + cur);
}

console.log(addAll(2, 5, 6, 7))
console.log(addAll(2, -5, -6, 7))
