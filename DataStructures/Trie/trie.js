class Node {
  constructor() {
    this.children = {}
    this.isWordEnd = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word = "") {
    if (!word) return;

    let current = this.root

    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i]

      if (!current.children[charToInsert]) {
        current.children[charToInsert] = new Node()
      }

      current = current.children[charToInsert]
    }

    current.isWordEnd = true
  }

  contains(word = "") {
    if (!word) return;

    let current = this.root

    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i]

      if (!current.children[charToFind]) {
        return false
      }

      current = current.children[charToFind]
    }

    return current.isWordEnd
  }

  startsWithPrefix(word = "") {
    if (!word) return;

    let current = this.root

    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i]

      if (!current.children[charToInsert]) {
        return false
      }

      current = current.children[charToInsert]
    }

    return true
  }

  print(root = this.root, startingStr = "") {
    if (Object.keys(root.children).length === 0) return
    let current = root

    for (const key in current.children) {
      let word = startingStr + key
      if (current.children[key].isWordEnd) {
        console.log(word)
      }
      this.print(current.children[key], word)
    }

    // Object.entries(current.children).forEach(([key, value]) => {
    //   let word = startingStr + key
    //   if (value.isWordEnd) {
    //     console.log(word)
    //   }
    //   this.print(value, word)
    // })
  }
}

module.exports = Trie