// The WeakSet is a basic data structure which store weakly held objects in a collection (cannot contain arbitrary values of any type).

// add    - it appends a new object to the end of a WeakSet.
// delete - it removes the specified element from a WeakSet.
// has    - it returns a boolean indicating whether an object exists in a WeakSet or not.

let ws = new WeakSet()
let foo = {}
let bar = {}

ws.add(foo)
ws.add(bar)
ws.add(1) // throws error

ws.has(foo)    // true
ws.has(bar)    // true

ws.delete(foo) // removes foo from the set
ws.has(foo)    // false
