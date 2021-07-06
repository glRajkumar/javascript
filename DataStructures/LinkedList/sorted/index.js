const SortedLL = require('./sortedLL')

const sl = new SortedLL() // ?"des"

function justCheck() {
    console.log("isEmpty->", sl.isEmpty)
    console.log("data -> ", sl.getData())
    console.log("length", sl.size)
    console.log("")
}

justCheck()

sl.insert(10)
sl.insert(72)
sl.insert(3.1)
sl.insert(46)
sl.insert(35)
sl.insert(3)

justCheck()

// console.log(sl.getNodeAt(3)?.data)
// sl.print()

// sl.remove()
// sl.remove(3)
// sl.remove(1)
// sl.remove(1)
// sl.remove()
// sl.remove()

// sl.reverse()
// justCheck()



// const sortFn = (a, b) => a.age > b.age

// const sl2 = new SortedLL("", sortFn)

// function justCheck() {
//     console.log("isEmpty->", sl2.isEmpty)
//     console.log("data -> ", sl2.getData())
//     console.log("length", sl2.size)
//     console.log("")
// }

// justCheck()

// sl2.insert({ name: "name1", age: 3 })
// sl2.insert({ name: "name2", age: 30 })
// sl2.insert({ name: "name3", age: 30 })
// sl2.insert({ name: "name4", age: 73 })
// sl2.insert({ name: "name5", age: 33 })
// sl2.insert({ name: "name6", age: 23 })

// justCheck()

// console.log(sl2.getNodeAt(3)?.data)
// sl2.print()

// sl2.remove()
// sl2.remove(3)
// sl2.remove(1)
// sl2.remove(1)
// sl2.remove()
// sl2.remove()

// sl2.reverse()
// justCheck()