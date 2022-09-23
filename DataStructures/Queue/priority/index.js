const priorityQ = require('./priorityQ')

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
