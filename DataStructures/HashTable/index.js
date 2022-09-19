const HashTable = require('./hashTable')

const ht = new HashTable()

// console.log(ht)

function justCheck() {
  console.log("isEmpty ->", ht.isEmpty())
  console.log("data -> ", ht.getData())
  console.log("length", ht.getLength())
  console.log("")
}


justCheck()

ht.add("firstName", "Raj")
ht.add("lastName", "Kumar")
ht.add("age", 22)
ht.add("fav-lang", "Javascript")
ht.add("fav-lang2", "Python")
ht.add("best-lang", "Javascript")
ht.add("best-lang2", "Javascript2")
ht.add("best-lang3", "Javascript3")

justCheck()

ht.remove("age")
ht.remove("fav-lang")

console.log(ht.find("best-lang2"))
// console.log(ht.find("lastName"))
// console.log(ht.find("age"))
// console.log(ht.find("fav-lang"))

justCheck()

// console.log(ht)