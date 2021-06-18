const {
    isSuperset,
    union,
    intersection,
    symmetricDifference,
    difference
} = require('./set_operation')

const setA = new Set([1, 2, 3, 4])
const setB = new Set([2, 3])
const setC = new Set([3, 4, 5, 6])

console.log("isSuperset          ->", isSuperset(setA, setB))
console.log("union               ->", union(setA, setC))
console.log("intersection        ->", intersection(setA, setC))
console.log("symmetricDifference ->", symmetricDifference(setA, setC))
console.log("difference          ->", difference(setA, setC))
