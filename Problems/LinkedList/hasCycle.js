// Find whether the linked list has cycle or not

const Node = require("../../DataStructures/Node/node")

function hasCycle(list) {
  let slow = list
  let fast = list

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)

const list = new Node(0, node1)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node2

console.log(hasCycle(list))
