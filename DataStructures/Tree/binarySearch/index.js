const BST = require('./binarySearchTree')

const tree = new BST()

console.log(tree.length)

tree.insert(10)
tree.insert(5)
tree.insert(15)

tree.print()

// console.log(tree.includes(108))

// tree.debthFirstPreOrder()
// console.log("")
// tree.debthFirstInOrder()
// console.log("")
// tree.debthFirstPostOrder()
// console.log("")
// tree.breathFirstSeach()
// console.log("")
console.log("min", tree.min())
console.log("max", tree.max())

