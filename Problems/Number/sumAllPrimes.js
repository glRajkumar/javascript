// Pass in a number to loop up to and add all of the prime numbers. 
// ex. sumAllPrimes(10) == 17

function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            return false
        }
    }
    return true
}

function sumAllPrimes(num) {
    let total = 0

    for (let i = 2; i <= num; i++) {
        if (checkForPrime(i)) {
            total += i
        }
    }
    return total
}

console.log(sumAllPrimes(10))