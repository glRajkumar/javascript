// Find the middle of the linked list

const LinkedList = require("../../DataStructures/LinkedList/single/linkedlist2")

function findMiddle(list = new LinkedList()) {
  let slow = list.head
  let fast = list.head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow.data
}

const list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)

console.log(findMiddle(list))
