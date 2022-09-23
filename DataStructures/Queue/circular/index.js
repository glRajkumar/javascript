const circularQ = require('./circularQ')

const cq = new circularQ(6)

function justCheck() {
  console.log("isEmpty ->", cq.isEmpty())
  console.log("isFull  ->", cq.isFull())
  console.log("data -> ", cq.getData())
  console.log("length", cq.getSize())
  console.log("peek", cq.peek())
  console.log("")
}

justCheck()

cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.enqueue(5)
cq.enqueue(6)
cq.enqueue(7)

justCheck()

cq.dequeue()
cq.dequeue()
cq.dequeue()

justCheck()

cq.enqueue(6)
cq.enqueue(7)
cq.enqueue(8)

justCheck()
