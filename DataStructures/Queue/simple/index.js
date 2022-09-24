// const Queue = require('./queue')
const Queue = require('./queue2')

const queue = new Queue()

function justCheck() {
    console.log("isEmpty ->", queue.isEmpty())
    console.log("data -> ", queue.getData())
    console.log("length", queue.getLength())
    console.log("peek", queue.peek())
    console.log("")
}

justCheck()

queue.enqueue(1)
queue.enqueue(2)

justCheck()

queue.enqueue(3)
queue.enqueue(4)

justCheck()

queue.dequeue()
queue.dequeue()

justCheck()

// console.log(queue.print())
