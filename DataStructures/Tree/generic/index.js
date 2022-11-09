const Tree = require('./tree')

const tree = new Tree("Root")

function justCheck(node) {
  if (!(node instanceof Tree)) return console.log("not tree", node)

  console.log("")
  console.log("name ->", node.name)
  console.log("id -> ", node.id)
  console.log("parent -> ", node?.parentNode?.id)
  console.log("direct childs -> ", node?.directChildrenCount)
  console.log("all children -> ", node?.allChildrenCount())
  console.log("child ->", node?.children)
  console.log("Tree view")
  node.printTree()
}

const child1 = tree.createChildNode("Child-0-1")
const child2 = tree.createChildNode("Child-0-2")

// justCheck(child1)
// justCheck(child2)

tree
  .createChildNode("Child-0-3")
  .createChildNode("Child-0-3-0")
  .createChildNode("Child-0-3-0-0")
  .parentNode.parentNode.parentNode
  .createChildNode("Child-0-4")

let lastChild = tree.createChildNode("Child-0-5")
lastChild.createChildNode("Child-0-5-0")
lastChild.createChildNode("Child-0-5-1")

let deep = lastChild.createChildNode("Child-0-5-2")
deep.createChildNode("Child-0-5-2-0")
deep.createChildNode("Child-0-5-2-1")

let deeper = deep.createChildNode("Child-0-5-2-2")
let deepest = deeper.createChildNode("Child-0-5-2-2-0")
deepest.createChildNode("Child-0-5-2-2-0-0")
deeper.createChildNode("Child-0-5-2-2-1")

// justCheck(tree)

// console.log(tree.isInTree(child1))
// console.log(tree.isInTree("Child-0-3"))
// console.log(tree.isInTree("Child-0-9"))
// console.log(tree.isInTree("Child-0-5-2-2-0-0"))
// console.log(tree.isInTree("Child-0-5-2-2-0-2"))

// let retrieved = tree.getNode("Child-0-5")
// justCheck(retrieved)

// let retrievedDeepest = tree.getNode("Child-0-5-2-2-0-0")
// justCheck(retrievedDeepest)

// let retrievedChilds = tree.getChildNodes("Child-0-5")
// console.log(retrievedChilds)

// let removed = tree.removeNode("Child-0-3")
// justCheck(removed)

// let removed = deep.removeNode("Child-0-5-2-2")
// justCheck(removed)

// let removedChilds = tree.removeChildNodes("Child-0-3")
// console.log(removedChilds)

// let removedChilds = deep.removeChildNodes("Child-0-5-2-2")
// console.log(removedChilds)

// justCheck(tree)


// console.log(tree.findAllNodesByName("Child-0-5"))

// let foundNode = null

// tree.traverse(node => {
//   console.log(node.id)
//   if (node.id === 2) {
//     foundNode = node
//     return true
//   }
// })

// console.log(foundNode)

const child1Child0 = new Tree("Child-0-1-0")

// child1.appendChildNode(child1) // throw error

child1.appendChildNode(child1Child0)

// child2.appendChildNode(child1Child0) // throw error

justCheck(tree)
