// Take arg and return an array of the sums of even and odd numbers
// ex. evenOddSums(50, 60, 60, 45, 71) == [170, 116]


function evenOddSums(...arr) {
    let evenSum = 0
    let oddSum = 0

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)))

    return [evenSum, oddSum]
}

console.log(evenOddSums(50, 60, 60, 45, 71))