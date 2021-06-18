// Arrays are basic data structure which can hold different data types as a collections. It is dynamic and 0 index based.


// creating array
let arr1 = new Array()
let arr2 = [] // recommended

// creating n elements
let arr3 = new Array(8) // -> [,,,,,,,]

// if the argument consists of more than one element than it will taken as elements
let arr4 = new Array(1, 2, 3, 4) // -> [1, 2, 3, 4]

// accessing an array element
let arr5 = [1, 2, 3]
arr5[0] // -> 1
arr5[1] // -> 2
arr5[2] // -> 3


// Instance properties
// length - returns the length of the array
let arr6 = [1, 2, 3, 4, 5]
arr6.length // -> 5



// Static methods
// isArray - check the given data is array
Array.isArray(arr6) // -> true
Array.isArray({ h: "g" }) // -> false

// of - it creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
Array.of(7) // -> [7]
Array.of(1, 2, 3) // -> [1, 2, 3]

// from - it is static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// syntax -> Array.from(arrayLike, ?mapFn, ?thisArg)
// Array.from(obj).map(mapFn, thisArg) is equal to the above syntax except that it does not create an intermediate array.
// we can create an array with any iterables like set, map, nodeList, etc.
Array.from('foo') // -> ['f', 'o', 'o']
Array.from([1, 2, 3], x => x + x) // -> [2, 4, 6]

let images = document.getElementsByTagName('img')
let sources = Array.from(images, image => image.src)

Array.from({ length: 5 }, (_, i) => i) // [0, 1, 2, 3, 4]



// Basic methods
let arr7 = [1, 2, 3, 4, 5]
// push - Add an item to the end of an Array
arr7.push(6) // -> [1, 2, 3, 4, 5, 6]

// pop - Remove an item from the end of an Array
arr7.pop() // -> [1, 2, 3, 4, 5]

// shift - Remove an item from the beginning of an Array
arr7.shift() // -> [2, 3, 4, 5]

// unshift - Add an item to the beginning of an Array
arr7.unshift(0) // -> [0, 2, 3, 4, 5]



// Advanced methods
// join - it creates and returns a new string by concatenating all of the elements in an array.
// syntax - join(?separator = ",")
// If an element is undefined, null or an empty array [], it is converted to an empty string.
let a = ['Wind', 'Water', 'Fire']
a.join()      // 'Wind,Water,Fire'
a.join(', ')  // 'Wind, Water, Fire'
a.join('')    // 'WindWaterFire'


// indexOf - it returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax - indexOf(searchElement, ?fromIndex = 0)
// If the fromIndex is greater than or equal to the array's length, -1 is returned, which means the array will not be searched.
// If the fromIndex is negative, it is taken as the offset from the end of the array. (ie it will start at the given position counting from the end, and search to the end)
let nums1 = [2, 9, 9]
nums1.indexOf(2)     // 0
nums1.indexOf(7)     // -1
nums1.indexOf(9, 2)  // 2
nums1.indexOf(2, -1) // -1
nums1.indexOf(2, -3) // 0
nums1.indexOf(9, -1) // 2
nums1.indexOf(9, -2) // 1


// lastIndexOf - it returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// syntax - lastIndexOf(searchElement, ?fromIndex = (arr.length - 1))
// If the fromIndex is greater than or equal to the length of the array, the whole array will be searched.
// Even when the fromIndex is negative, the array is still searched from back to front. 
// If the calculated fromIndex is less than 0, -1 is returned, i.e. the array will not be searched.
let nums2 = [2, 5, 9, 2]
nums2.lastIndexOf(2)     // 3
nums2.lastIndexOf(7)     // -1
nums2.lastIndexOf(2, 3)  // 3
nums2.lastIndexOf(2, 2)  // 0
nums2.lastIndexOf(2, -2) // 0
nums2.lastIndexOf(2, -1) // 3


// includes - Check whether an element is in array
// syntax - includes(searchElement, ?fromIndex = 0)
// If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
// If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less or equal than -1 * arr.length, the entire array will be searched.
[1, 2, 3].includes(4)      // false
[1, 2, 3].includes(2)      // true
[1, 2, 3].includes(3, -1)  // true
[1, 2, NaN].includes(NaN)  // true
['a', 'b', 'c'].includes('c', 3)    // false
['a', 'b', 'c'].includes('a', -2)   // false
['a', 'b', 'c'].includes('a', -100) // true


// fill - it changes all elements in an array to a static value and returns the modified array.
// syntax -> fill(value, ?startIndex, ?endIndex)
// If startIndex|endIndex is negative, it is treated as array.length + startIndex|endIndex.
// If the first parameter is an object, each slot in the array will reference that object.
// It mutates the original array.
[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
let arr8 = new Array(3).fill(4)  // [4, 4, 4]

// A single object, referenced by each slot of the array:
let arrEx = Array(3).fill({}) // [{}, {}, {}]
arrEx[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


// concat - it is used to merge two or more arrays and return new array. (prefer spread method)
// syntax -> concat(arr1, arr2, ..., arrN)
let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
let num3 = [7, 8, 9]
let num4 = [10, [11, 12]]

let numbers1 = num1.concat(num2, num3, num4)
let numbers2 = [...num1, ...num2, ...num3, ...num4]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12]] (both will same output)


// copyWithin - it shallow copies part of an array to another location in the same array and returns it without modifying its length.
// syntax - copyWithin(target, ?start, ?end)
// If target|start|end is negative, then target|start|end will be counted from the end. 
// If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.
// copyWithin copies up to but not including end.
// It mutates the original array.
[1, 2, 3, 4, 5].copyWithin(-2) // [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1) // [1, 2, 3, 3, 4]


// reverse - it reverses an array.
// It mutates the original array.
[1, 2, 3].reverse() // [3, 2, 1]


// slice - it returns a shallow copy of a portion of an array into a new array. from start to end (end not included) where start and end represent the index of items in that array.
// syntax - slice(?startIndex, ?endIndex)
// If startIndex is greater than the index range of the sequence, an empty array is returned.
// it extracts up to but not including endIndex.
// if endindex is negative, it will select from the end of an array.
let frs = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
frs.slice()        // [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
frs.slice(1)       // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]
frs.slice(7)       // []
frs.slice(-2)      // [ 'Apple', 'Mango' ]
frs.slice(2, 4)    // [ 'Lemon', 'Apple' ]
frs.slice(1, 7)    // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]
frs.slice(1, -1)   // [ 'Orange', 'Lemon', 'Apple' ]
frs.slice(-1, -3)  // []
frs.slice(-3, -1)  // [ 'Lemon', 'Apple' ]


// splice - it changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// syntax - splice(startIndex, ?deleteCount, ?item1, ?item2, ..., ?itemN)
// It mutates the original array

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]


// toString - it returns a string representing the specified array and its elements.
[1, 2, 'a', '1a'].toString() // "1,2,a,1a"


// toLocaleString - it returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).
// syntax - toLocaleString(?locales, ?options)
// see mdn docs for futher read.
[1, 'a', new Date('21 Dec 1997 14:12:00 UTC')].toLocaleString('en', { timeZone: 'UTC' })
// "1,a,12/21/1997, 2:12:00 PM"


// entries -  it returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// keys    -  it returns a new Array Iterator object that contains the keys for each index in the array.
// values  -  it returns a new Array Iterator object that contains the values for each index in the array.
let alpha = ['a', 'b', 'c']
let iteraterByEntries = alpha.entries()
let iteratorByKeys = alpha.keys()
let iteratorByValues = alpha.values()

for (let entry of iteraterByEntries) {
    console.log(entry)  // [0, 'a'] -> [1, 'b'] -> [2, 'c']
}

for (let key of iteratorByKeys) {
    console.log(key)  // 0 -> 1 -> 2
}

for (let value of iteratorByValues) {
    console.log(value)  // "a" -> "b" -> "c"
}

// Key iterator doesn't ignore holes
let arr = ['a', , 'c']
let sparseKeys = Object.keys(arr) // ['0', '2']
let denseKeys = [...arr.keys()] // [0, 1, 2]


// forEach - it executes a provided function once for each array element. It returns nothing.
// There is no way to stop or break a forEach() loop other than by throwing an exception.
// it expects a synchronous function.
[5, 12, 8, 130, 44].forEach(x => console.log(x)) // 5 -> 12 -> 8 -> 130 -> 44


// flat - it creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// syntax - flat(?depth = 1)
[1, 2, [3, 4], 5, 6].flat()    // [1, 2, 3, 4, 5, 6]
[1, 2, [3, 4, [5, 6]]].flat()  // [1, 2, 3, 4, [5, 6]]
[1, 2, [3, 4, [5, 6]]].flat(2) // [1, 2, 3, 4, 5, 6]
[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// flatMap - it returns a new array formed by applying a given callback function to each element of the array, 
// and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, 
// but slightly more efficient than calling those two methods separately.
let arrfm1 = ["it's Sunny in", "", "California"]
arrfm1.map(x => x.split(" "))     // [["it's","Sunny","in"],[""],["California"]]
arrfm1.flatMap(x => x.split(" ")) // ["it's","Sunny","in", "", "California"]

[1, 2, 3, 4].flatMap(x => [x, x * 2]) // [1, 2, 2, 4, 3, 6, 4, 8]


// sort - it sorts the elements of an array and returns the sorted array. 
// syntax - sort(?compareFunction)
// compareFunction has two arguments. firstElement and secondElement
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
[4, 2, 5, 1, 3].sort((a, b) => a - b) // [1, 2, 3, 4, 5]



// reduce - it executes a reducer function on each element of the array, resulting in a single output value.
// syntax - reduce(callbackFn, ?initialValue)
// syntax full - reduce((accumulator, currentValue, index, array) => { ... }, ?initialValue)
// If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue.
[1, 2, 3, 4].reduce((prev, current, index) => prev + current + index, 0)  // 16
[1, 2, 3, 4].reduce((prev, current, i) => prev - current, 0)  // -10

// reduceRight - it applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// syntax - reduce(callbackFn, ?initialValue)
// syntax full - reduce((accumulator, currentValue, index, array) => { ... }, ?initialValue)
// If no initial value is supplied, the last element in the array will be used and skipped.
// Calling reduce or reduceRight on an empty array without an initial value creates a TypeError
[1, 2, 3, 4].reduceRight((prev, current, index) => prev + current + index, 0)  // 16
[1, 2, 3, 4].reduceRight((prev, current, i) => prev - current, 0)  // -10


// the following methods have same syntax
// syntax - method(callbackFn, ?thisArg)
// syntax full - method((element, ?index, ?array) => { ... }, ?thisArg)
// callbackFn has three arguments like mentioned above and should have return statement.

// filter - it creates a new array with all elements that pass the test implemented by the provided function.
[12, 5, 8, 130, 44].filter(x => x >= 10) // [12, 130, 44]


// map - it creates a new array populated with the results of calling a provided function on every element in the calling array.
[1, 4, 9, 16].map(x => x * 2) // [2, 8, 18, 32]


// every - it checks whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
[12, 5, 8, 130, 44].every(x => x >= 100)   // false
[12, 54, 18, 130, 44].every(x => x >= 10)  // true


// find - it returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
[5, 12, 8, 130, 44].find(x => x >= 10)   // 12
[5, 12, 8, 130, 44].find(x => x >= 1000) // undefined


// findIndex - it returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
[5, 12, 8, 130, 44].findIndex(x => x >= 100)  // 3
[5, 12, 8, 130, 44].findIndex(x => x >= 1000) // -1


// some - it tests whether at least one element in the array passes the test implemented by the provided function. It returns boolean.
[1, 2, 3, 4, 5].some(x => x > 3) // true
[1, 2, 3, 4, 5].some(x => x > 5) // false
