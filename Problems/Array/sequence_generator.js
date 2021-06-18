// creating an array by the sequence

function range(start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))
}

range(0, 4, 1) // [0, 1, 2, 3, 4]

range(1, 10, 2) // [1, 3, 5, 7, 9]

range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x))
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
