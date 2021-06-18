// The Map  is a basic data structure which holds key-value pairs and remembers the original insertion order of the keys.
// A Map's keys can be any value (including functions, objects, or any primitive).
// A Map is an iterable, so it can be directly iterated.


// set - it adds or updates an element with a specified key and a value to a Map object.
// get - it returns a specified element from a Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.
// has - it returns a boolean indicating whether an element with the specified key exists or not.
// size - it returns the number of elements in a Map.
// clear - it removes all elements from a Map.
// delete - it removes the specified element from a Map object by key.

let map1 = new Map()
map1.set('a', "b")
map1.set('a2', "b2")
map1              // {"a" => "b", "a2" => "b2"}
map1.has('a')     // true
map1.size         // 2
map1.get('c')     // undefined
map1.get('a')     // "b"
map1.delete('d')  // false
map1.delete('a')  // true
map1.clear()
map1.size         // 0


// The entries - it returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.
// The values - it returns a new Iterator object that contains the values for each element in the Map object in insertion order.
// The keys - it returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

// The forEach - it executes a provided function once per each key/value pair in the Map object, in insertion order.
// syntax - forEach(callbackFn, thisArg)
// syntax full - forEach((value, ?key, ?map) => { ... }, ?thisArg)
// callbackFn has three arguments

let map2 = new Map()
map2.set('0', 'foo')
map2.set(1, 'bar')

let iterator1 = map2.entries()
let iterator2 = map2.values()
let iterator3 = map2.keys()

iterator1.next().value  // ["0", "foo"]
iterator1.next().value  // [1, "bar"]

for (let [key, val] of iterator1) {
    console.log(key, val)
}
// 0 foo
// 1 bar

let map3 = new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
map3.forEach((val, key, map) => console.log(val, key))
// 3, 'foo'
// {}, 'bar'
// undefined, 'baz'
