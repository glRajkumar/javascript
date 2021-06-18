// The Set is a basic data structure which store unique values of any type.
// NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

// creating a set
let set1 = new Set()

// methods 
// add    - it appends a new element with a specified value to the end of a Set.
// has    - it returns a boolean indicating whether an element with the specified value exists in a Set.
// size   - it returns the number of elements in a Set.
// clear  - it removes all elements from a Set.
// delete - it removes a specified value from a Set object, if it is in the Set and returns boolean.

set1.add(42)
set1.add(42)
set1.add(13)
set1.add(5).add('some text')

set1           // { 42, 13, 5, 'some text'}
set1.has(42)   // true
set1.has(66)   // false
set1.size      // 4
set1.delete(42)// true
set1.clear()
set1.size      // 0


// entries - it returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. (Set hasn't keys)
// values  - it returns a new iterator object that contains the values for each element in the Set object in insertion order.
// keys    - since set doesn't have keys, it will check by values. 
// For Set -> so use values method only

// forEach - it executes a provided function once for each value in the Set object, in insertion order.
// syntax - forEach(callbackFn, thisArg)
// syntax full - forEach((value, ?key, ?set) => { ... }, ?thisArg)
// callbackFn has three arguments
// values and keys are equal

let set2 = new Set([42, "forty two"])

let iterator1 = set2.values()
let iterator2 = set2.entries()

iterator1.next().value // 42
iterator1.next().value // "forty two"

for (let entry of iterator2) {
    console.log(entry)
}
// [42, 42]
// ["forty two", "forty two"]

set2.forEach(value => console.log(value))  // 42, "forty two"

for (let item of set2.values()) {
    console.log(item)
}
// 42, "forty two"
