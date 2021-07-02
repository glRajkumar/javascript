// const LinkedList = require('./linkedlist2')

// const ll = new LinkedList()

// function justCheck() {
//     console.log("isEmpty->", ll.isEmpty)
//     console.log("data -> ", ll.getData())
//     console.log("length", ll.size)
//     console.log("")
// }

// justCheck()

// ll.push(1)
// ll.push(2)
// ll.push(3)
// ll.push(4)
// ll.push(5)

// justCheck()

// ll.print()
// ll.remove()
// ll.remove(1)
// justCheck()

// ll.reverse()
// justCheck()

// console.log(ll.get(2))
// console.log(ll.get(3))

// console.log(ll.indexOf(2))
// console.log(ll.indexOf(4))




// const DoublyLL = require('./doublyLinkedList')

// const dl = new DoublyLL()

// function justCheck() {
//     console.log("isEmpty->", dl.isEmpty)
//     console.log("data -> ", dl.getData())
//     console.log("length", dl.size)
//     console.log("")
// }

// justCheck()

// dl.push(1)
// dl.push(2)
// dl.push(3)
// dl.push(4)
// dl.push(5)

// dl.insertAt(2, 6)
// dl.insertAt(10, 6)
// dl.insertAt(-1, 6)

// justCheck()

// console.log(dl.getNodeAt(3))
// dl.print()

// dl.remove()
// dl.remove(1)
// dl.remove(1)

// dl.reverse()
// justCheck()





const SortedLL = require('./sortedLinkedList')

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

// console.log(sl.getNodeAt(3))
// sl.print()

// sl.remove()
// sl.remove(3)
// sl.remove(1)

// sl.reverse()
// justCheck()
