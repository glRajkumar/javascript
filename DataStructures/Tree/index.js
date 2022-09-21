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

justCheck(tree)

// console.log(tree.hasChildNode(child1))
// console.log(tree.hasChildNode("Child-0-3"))
// console.log(tree.hasChildNode("Child-0-9"))
// console.log(tree.hasChildNode("Child-0-5-2-2-0-0"))
// console.log(tree.hasChildNode("Child-0-5-2-2-0-2"))

// let retrieved = tree.getChildNode("Child-0-1")
// justCheck(retrieved)

// let retrievedDeepest = tree.getChildNode("Child-0-5-2-2-0-0")
// justCheck(retrievedDeepest)
