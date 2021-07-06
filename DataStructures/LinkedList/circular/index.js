const CircularLL = require('./circularLL')

const cll = new CircularLL()

function justCheck() {
    console.log("isEmpty->", cll.isEmpty)
    console.log("data -> ", cll.getData())
    console.log("length", cll.size)
    console.log("")
}

justCheck()

cll.push(1)
cll.push(2)
cll.push(3)
cll.push(4)
cll.push(5)

justCheck()

// cll.insert(3, 6)
// cll.insert(0, 72)
// cll.insert(9, 3.1)
// cll.insert(7, 46)

// justCheck()

// cll.remove()
// cll.remove(1)
// cll.remove(1)
// cll.remove(1)
// cll.remove()

// justCheck()
