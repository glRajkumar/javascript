const Node = require('./node')

let node = new Node("hi")
console.log(node)


let node1 = new Node("hi2", node)
console.log(node1)
console.log(node1.next)
console.log(node1.next.data)
console.log(node1.next.next)
