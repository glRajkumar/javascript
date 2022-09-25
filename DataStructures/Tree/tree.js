const uniqueId = (() => {
  function* generateId() {
    let id = 0;

    while (true) {
      yield id++
    }
  }

  const gen = generateId()

  return () => gen.next().value
})()

class Tree {
  #parentNode = null
  #children = new Map()
  #id = uniqueId()
  #name

  constructor(name) {
    this.#name = name
  }

  get name() {
    return this.#name
  }

  get id() {
    return this.#id
  }

  get parentNode() {
    return this.#parentNode
  }

  get children() {
    return this.#children
    // return Array.from(this.#children.values())
  }

  get directChildrenCount() {
    return this.#children.size
  }

  allChildrenCount(node = null) {
    let currentChilds = node?.children || this.#children
    let count = 0

    for (let [id, childTree] of currentChilds) {
      count++

      if (childTree.directChildrenCount > 0) {
        count = count + this.allChildrenCount(childTree)
      }
    }

    return count
  }

  set parentNode(newParent) {
    if (newParent !== this.#parentNode && newParent instanceof Tree) {
      this.#parentNode = newParent
    }
  }

  createChildNode(name) {
    const newNode = new Tree(name)
    this.#children.set(newNode.id, newNode)
    newNode.parentNode = this;

    return newNode
  }

  #getTreeStr(node, spaceCount = 0) {
    if (!node.children) return ""
    let str = "\n"

    node?.children?.forEach(child => {
      str += `${" ".repeat(spaceCount)}${child.name} (${child.id})${this.#getTreeStr(child, spaceCount + 2)}`
    })

    return str
  }

  printTree() {
    console.log(`\n${this.name} (${this.id}) ${this.#getTreeStr(this, 2)}`)
  }

  isInTree(needle, node = null) { // will check deeply
    let currentId = node?.id || this.id
    let currentName = node?.name || this.name
    let currentChilds = node?.children || this.children
    let searchBy = needle

    if (needle instanceof Tree) {
      searchBy = needle.id
    }

    if (currentId === searchBy || currentName === searchBy) {
      return true
    }

    for (let [id, childTree] of currentChilds) {
      console.log(childTree.id, childTree.name)
      if (childTree.id === searchBy || childTree.name === searchBy) {
        return true
      }

      if (childTree.directChildrenCount > 0) {
        let childHasNeedle = this.isInTree(searchBy, childTree)
        if (childHasNeedle) return true
      }
    }

    return false
  }

  getNode(nameOrId, node = null) {
    let currentChilds = node?.children || this.children

    for (let [id, childTree] of currentChilds) {
      if (childTree.id === nameOrId || childTree.name === nameOrId) {
        return childTree
      }

      if (childTree.directChildrenCount > 0) {
        let foundTree = this.getNode(nameOrId, childTree)
        if (foundTree) return foundTree
      }
    }

    return null
  }

  getChildNodes(nameOrId) {
    return this.getNode(nameOrId)?.children || null
  }

  removeNode(needle) {
    let toBeRemovedNode = this.getNode(needle)
    if (!toBeRemovedNode) return null

    toBeRemovedNode.parentNode.children.delete(toBeRemovedNode.id)
    return toBeRemovedNode
  }

  removeChildNodes(needle) {
    // let toBeRemovedNode = this.getNode(needle)
    // if (!toBeRemovedNode) return null
    // toBeRemovedNode.children.clear()
    // return toBeRemovedNode.children

    let toBeRemovedNode = this.getChildNodes(needle)
    if (!toBeRemovedNode) return null
    toBeRemovedNode.clear()
    return toBeRemovedNode
  }
}

module.exports = Tree