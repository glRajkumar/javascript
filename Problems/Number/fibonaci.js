// fibonaci -> 1, 1, 2, 3, 5, 8 ...

// finding the nth fibonaci
// ex. 6th fib -> 8

// with memoziation
function fibonaci(n = 0, memo = {}) {
    if (n in memo) return memo[n]
    if (n <= 2) return 1

    memo[n] = fibonaci(n - 1, memo) + fibonaci(n - 2, memo)

    return memo[n]
}

console.log(fibonaci(10))
