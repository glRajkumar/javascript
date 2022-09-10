let myFun = new Function('5 + 2')
let shape = 'round'
let size = 1
let foo = ['Apple', 'Mango', 'Orange']
let today = new Date()

typeof myFun       // "function"
typeof shape       // "string"
typeof size        // "number"
typeof foo         // "object"
typeof today       // "object"
typeof doesntExist // "undefined"
typeof true        // "boolean"
typeof null        // "object"

typeof shape // string
typeof String('Hello world') // string
typeof new String('Hello world') // object


// The instanceof operator returns true if the specified object is of the specified object type. The syntax is: