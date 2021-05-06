// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...options) {
    return arr.filter(a => !options.includes(a))
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))