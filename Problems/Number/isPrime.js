// A prime number is a whole number greater than 1 whose only factors are 1 and itself

function isPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            return false
        }
        console.log(j)
    }
    return true

    // let root = Math.ceil(Math.sqrt(i))
    // for (let j = 2; j <= root; j++) {
    //     console.log(j)
    //     if (i % j === 0) {
    //         return false
    //     }
    // }
    // return true
}

console.log(isPrime(127))