const LinkedList = require('./linkedlist')

let ll = new LinkedList()

function justCheck() {
    console.log("isEmpty->", ll.isEmpty())
    console.log("data -> ", ll.getData())
    console.log("length", ll.getLength())
    console.log("")
}

function inHeadHlp(arr) {
    arr.forEach(e => {
        ll.insertAtHead(e)
        // console.log(ll)
    })
}

inHeadHlp([1, 2, 3])

justCheck()

function inTailHlp(arr) {
    arr.forEach(e => {
        ll.insertAtTail(e)
        // console.log(ll)
    })
}

inTailHlp([5, 6, 7])
justCheck()

// console.log(ll.getByIndex(5))
// console.log(ll.getValByIndex(5))

function delHeadHlp(num) {
    for (let i = num; i > 0; i--) {
        ll.popHead()
    }
}

// delHeadHlp(3)

function delTailHlp(num) {
    for (let i = num; i > 0; i--) {
        ll.popTail()
    }
}

// delTailHlp(3)

// ll.insertAt(2, 10)
// ll.popAt(2)

// ll.clear()
// ll.print()

// console.log(ll.getData())
