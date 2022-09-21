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
      str += `${" ".repeat(spaceCount)}${child.name}${this.#getTreeStr(child, spaceCount + 2)}`
    })

    return str
  }

  printTree() {
    console.log(`\n${this.name}${this.#getTreeStr(this, 2)}`)
  }

  hasChildNode(needle, node = null) {
    let currentChilds = node?.children || this.#children

    if (needle instanceof Tree) {
      if (currentChilds.has(needle.id)) {
        return true
      }
    }

    for (let [id, childTree] of currentChilds) {
      if (id === needle || childTree.id === needle || childTree.name === needle) {
        return true
      }

      if (childTree.directChildrenCount > 0) {
        let childHasNeedle = this.hasChildNode(needle, childTree)
        if (childHasNeedle) return true
      }
    }

    return false
  }

  getChildNode(nameOrId, node = null) {
    let currentChilds = node?.children || this.#children

    for (let [id, childTree] of currentChilds) {
      if (id === nameOrId || childTree.name === nameOrId) {
        return childTree
      }

      if (childTree.directChildrenCount > 0) {
        let foundTree = this.getChildNode(nameOrId, childTree)
        if (foundTree) return foundTree
      }
    }
  }
}

module.exports = Tree