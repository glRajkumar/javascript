// const Queue = require('./queue')

// const queue = new Queue()

// function justCheck() {
//     console.log("isEmpty ->", queue.isEmpty())
//     console.log("data -> ", queue.getData())
//     console.log("length", queue.getLength())
//     console.log("peek", queue.peek())
//     console.log("")
// }

// justCheck()

// queue.enqueue(1)
// queue.enqueue(2)

// // stack.print()

// justCheck()

// queue.enqueue(3)
// queue.enqueue(4)

// justCheck()

// queue.dequeue()
// queue.dequeue()

// justCheck()





// const circularQ = require('./circularQueue')

// const cq = new circularQ(6)

// function justCheck() {
//     console.log("isEmpty ->", cq.isEmpty())
//     console.log("isFull  ->", cq.isFull())
//     console.log("data -> ", cq.getData())
//     console.log("length", cq.getSize())
//     console.log("peek", cq.peek())
//     console.log("")
// }

// justCheck()

// cq.enqueue(1)
// cq.enqueue(2)
// cq.enqueue(3)
// cq.enqueue(4)
// cq.enqueue(5)
// cq.enqueue(6)
// cq.enqueue(7)

// justCheck()

// cq.dequeue()
// cq.dequeue()
// cq.dequeue()

// justCheck()

// cq.enqueue(6)
// cq.enqueue(7)
// cq.enqueue(8)

// justCheck()





const priorityQ = require('./priorityQueue')

const pq = new priorityQ()

function justCheck() {
    console.log("isEmpty ->", pq.isEmpty())
    console.log("data -> ", pq.getData())
    console.log("length", pq.getSize())
    console.log("peek", pq.peek())
    console.log("")
}

justCheck()

pq.enqueue(1)
pq.enqueue(2, 2)
pq.enqueue(3, 1)
pq.enqueue(4, 1)
pq.enqueue(5, 3)
pq.enqueue(6, 5)
pq.enqueue(7, 0)

justCheck()

pq.dequeue()
pq.dequeue()
pq.dequeue()

justCheck()

pq.enqueue(8)
pq.enqueue(9, 3)
pq.enqueue(10, 4)

justCheck()
