const BST = require('./binarySearchTree')

const tree = new BST()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(13)
tree.insert(4)
tree.insert(18)
tree.insert(9)
tree.insert(20)
tree.insert(1)
tree.insert(3)
tree.insert(7)

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
// console.log("min", tree.min())
// console.log("max", tree.max())

console.log("")
tree.delete(10)
tree.print()
