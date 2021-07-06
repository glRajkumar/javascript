const DoublyLL = require('./doublyLL')

const dl = new DoublyLL()

function justCheck() {
    console.log("isEmpty->", dl.isEmpty)
    console.log("data -> ", dl.getData())
    console.log("length", dl.size)
    console.log("")
}

justCheck()

dl.push(1)
dl.push(2)
dl.push(3)
dl.push(4)
dl.push(5)

// dl.insertAt(3, 6)
// dl.insertAt(10, 6)
// dl.insertAt(-1, 6)

justCheck()

// console.log(dl.getNodeAt(3))
// dl.print()

// dl.remove()
// dl.remove(1)
// dl.remove(1)
// dl.remove(1)
// dl.remove()

// dl.reverse()

// justCheck()
