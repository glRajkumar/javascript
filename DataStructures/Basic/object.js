// Objects are used to store various keyed collections and more complex entities.
// The keys of an Object must be either a String or a Symbol.


// creating an object
let obj1 = new Object()
let obj2 = {} // recommended

// accessing an object element
let obj3 = {
    firstName: "Raj",
    lastName: "kumar"
}

// we can access object element by two ways. 
// 1) with dot notation
// 2) with bracket notation which is used when we accessing object by dynamically computed name
obj3.firstName // "Raj"
obj3["lastName"] // "kumar"



// static methods
// assign - copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
// syntax - Object.assign(target, ...sources)

let o1 = { a: 1 }
let o2 = { b: 2 }
let o3 = { c: 3 }

let obj = Object.assign(o1, o2, o3)
obj // { a: 1, b: 2, c: 3 }
o1  // { a: 1, b: 2, c: 3 }, target object itself is changed.

// copying an object (prefer spread sytax.)
let copied = Object.assign({}, o3)
copied // { c: 3 }


// defineProperties - it defines new or modifies existing properties directly on an object, returning the object.
// defineProperty - it defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// see mdn for full explanation

let object0 = {}

Object.defineProperty(object0, 'property0', {
    value: 42,
    writable: false
})

Object.defineProperties(object0, {
    property1: {
        value: 42,
        writable: true
    },
    property2: {}
})


// hasOwnProperty - it returns a boolean indicating whether the object has the specified property as its own property.
let obj5 = { a: 1, b: 2, c: 3 }
obj5.hasOwnProperty("a")  // true


// is - it determines whether two values are the same value.
// syntax - Object.is(value1, value2)
// see the compare.js


// entries - it returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// keys    - it returns an array of a given object's keys as string.
// values  - it returns an array of a given object's values.
let obj4 = { a: 1, b: 2, c: 3 }

Object.entries(obj4) // [[a, 1], [b, 2], [c, 3]]
Object.keys(obj4)    // ["a", "b", "c"]
Object.values(obj4)  // [1, 2, 3]


// fromEntries - it transforms a list of key-value pairs into an object.
let entries = new Map([['foo', 'bar'], ['baz', 42]])
let newObj = Object.fromEntries(entries)
newObj // { foo: "bar", baz: 42 }


// freeze - it freezes an object. A frozen object can no longer be changed freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
// isFrozen - it determines if an object is frozen.
let obj5 = { prop: 42 }

Object.isFrozen(obj5) // false
Object.freeze(obj)
Object.isFrozen(obj5) // true

obj5.prop = 33 // Throws an error in strict mode
obj5.prop      // 42


// preventExtensions - it prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).
// isExtensible - it determines if an object is extensible (whether it can have new properties added to it).
let object1 = {}

Object.isExtensible(object1) // true
Object.preventExtensions(object1)
Object.isExtensible(object1) // false

Object.defineProperty(object1, 'property1', { value: 42 }) // throws TypeError: Cannot define property property1, object is not extensible


// seal - it seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
// isSealed - it determines if an object is sealed.
let obj6 = { prop: 42 }

Object.isSealed(obj6) // false
Object.seal(obj)
Object.isSealed(obj6) // true

obj6.prop = 33
obj6.prop             // 33
Object.isSealed(obj6) // true
delete obj6.prop      // cannot delete when sealed
obj6.prop             // 33
