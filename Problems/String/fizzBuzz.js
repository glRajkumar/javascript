// Write a program that prints all the numbers from 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", 
// for multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()