const Heap = require('./heap-array-method')

const heap = new Heap()

heap.print()

heap.push(3)
heap.push(6)
heap.push(8)

heap.print()

heap.push(1)
heap.push(2)
heap.push(5)

heap.print()
console.log("")

let deletedArr = []
deletedArr.push(heap.poll())
deletedArr.push(heap.poll())
deletedArr.push(heap.poll())

console.log("deletedArr")
console.log(deletedArr)
heap.print()
