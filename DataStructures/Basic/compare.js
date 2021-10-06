// Case 1: Evaluation result is the same as using ===
Object.is(25, 25)                // true
Object.is('foo', 'foo')          // true
Object.is('foo', 'bar')          // false
Object.is(null, null)            // true
Object.is(undefined, undefined)  // true
Object.is(window, window)        // true
Object.is([], [])                // false
let foo = { a: 1 }
let bar = { a: 1 }
Object.is(foo, foo)              // true
Object.is(foo, bar)              // false

// Case 2: Signed zero
Object.is(0, -0)                 // false
Object.is(+0, -0)                // false
Object.is(-0, -0)                // true
Object.is(0n, -0n)               // true

// Case 3: NaN
Object.is(NaN, 0 / 0)            // true
Object.is(NaN, Number.NaN)       // true

