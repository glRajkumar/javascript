const Trie = require('./trie')

const trie = new Trie()

trie.insert("Raj")
trie.insert("Ram")
trie.insert("Raja")
trie.insert("Ashok")
trie.insert("Ash")
trie.insert("App")
trie.insert("Apple")

trie.print()

console.log(trie.contains("App"))
console.log(trie.contains("Apps"))

console.log(trie.startsWithPrefix("App"))
console.log(trie.startsWithPrefix("Ada"))