const LinkedList = require('./linkedlist2')

const ll = new LinkedList()

function justCheck() {
    console.log("isEmpty->", ll.isEmpty)
    console.log("data -> ", ll.getData())
    console.log("length", ll.size)
    console.log("")
}

justCheck()

ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)

justCheck()

// ll.insert(6, 2)
// justCheck()

// ll.print()
// ll.remove()
// ll.remove(1)
// ll.remove(2)
// ll.remove(1)
// ll.remove()
// justCheck()

// ll.reverse()
// justCheck()

// console.log(ll.get(2))
// console.log(ll.get(3))

// console.log(ll.indexOf(2))
// console.log(ll.indexOf(4))
