// The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.
// Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed


// The get - it returns a specified element from a WeakMap object.
// The set - it adds a new element with a specified key and value to a WeakMap object.
// The has - it returns a boolean indicating whether an element with the specified key exists in the WeakMap object or not.
// The delete - it removes the specified element from a WeakMap object.


let wm1 = new WeakMap()

let o1 = {},
    o2 = function () { },
    o3 = window

// wm.set(obj, 'foo').set(window, 'bar'); // chainable
wm1.set(o1, 37)
wm1.set(o2, 'azerty')
wm1.set(o3, undefined)
wm1.set(["hi"], "i am Raj")
wm1.set("hi", 44)  // throws error
wm1.set(o3, "hi")  // it will update the value

wm1              // {{} => 37, f => "azerty", window => "hi", ["hi"] => "i am Raj"}
wm1.get(o1)      // 37
wm1.get(o2)      // "azerty"
wm1.get(o3)      // "hi" (undefined at first but update then)
wm1.has(o1)      // true
wm1.has({})      // false
wm1.delete(o1)
wm1.has(o1)      // false
