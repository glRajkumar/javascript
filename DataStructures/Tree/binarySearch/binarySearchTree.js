class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  #size = 0
  constructor() {
    this.root = null
  }

  get length() {
    return this.#size
  }

  insert(value) {
    let newNode = new Node(value)

    if (this.length === 0) {
      this.root = newNode
    } else {
      this.#insertNode(this.root, newNode)
    }

    this.#size++
    return newNode
  }

  #insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode
      } else {
        this.#insertNode(root.left, newNode)
      }
    } else {
      if (!root.right) {
        root.right = newNode
      } else {
        this.#insertNode(root.right, newNode)
      }
    }
  }

  includes(value, root = this.root) {
    if (!root) return false
    if (root.value === value) return true

    if (value < root.value) return this.includes(value, root.left)
    return this.includes(value, root.right)
  }

  min(root = this.root) {
    if (!root.left) return root.value
    return this.min(root.left)
  }

  max(root = this.root) {
    if (!root.right) return root.value
    return this.max(root.right)
  }

  print(root = this.root, space = 0, parent = "root") {
    if (root) {
      console.log(`${"-".repeat(space)} ${root.value} (${parent})`)
      this.print(root.left, space + 2, `${root.value} - L`)
      this.print(root.right, space + 2, `${root.value} - R`)
    }
  }

  debthFirstPreOrder(root = this.root) {
    if (root) {
      console.log(root.value)
      this.debthFirstPreOrder(root.left)
      this.debthFirstPreOrder(root.right)
    }
  }

  debthFirstInOrder(root = this.root) {
    if (root) {
      this.debthFirstInOrder(root.left)
      console.log(root.value)
      this.debthFirstInOrder(root.right)
    }
  }

  debthFirstPostOrder(root = this.root) {
    if (root) {
      this.debthFirstPostOrder(root.left)
      this.debthFirstPostOrder(root.right)
      console.log(root.value)
    }
  }

  breathFirstSeach() {
    const queue = []
    queue.push(this.root)

    while (queue.length) {
      let current = queue.shift()
      console.log(current.value)
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  delete(value) {
    this.root = this.#deleteNode(this.root, value)
  }

  #deleteNode(root, value) {
    if (!root) return null

    if (value < root.value) {
      root.left = this.#deleteNode(root.left, value)
    } else if (value > root.value) {
      root.right = this.#deleteNode(root.right, value)
    } else {
      if (!root.left && !root.right) return null

      if (!root.left) return root.right
      if (!root.right) return root.left

      root.value = this.min(root.right)
      root.right = this.#deleteNode(root.right, root.value)
    }

    return root
  }

  findMinHeight(root = this.root) {
    if (!root) return -1
    let left = this.findMinHeight(root.left)
    let right = this.findMinHeight(root.right)

    if (left < right) return left + 1
    return right + 1
  }

  findMaxHeight(root = this.root) {
    if (!root) return -1
    let left = this.findMaxHeight(root.left)
    let right = this.findMaxHeight(root.right)

    if (left > right) return left + 1
    return right + 1
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
}

module.exports = BST