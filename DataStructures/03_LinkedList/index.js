class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(data) {
        this.head = new Node(data, this.head)
        this.length++
    }

    insertAtTail(data) {
        const node = new Node(data, null)
        let current

        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    insertAt(index, data) {
        if (index < 0 || index >= this.length || (!index && index !== 0)) {
            return

        } else if (index === 0) {
            this.insertAtHead(data)

        } else if (index === (this.length - 1)) {
            this.insertAtTail(data)

        } else {
            let node = new Node(data, null)
            let { current, prev } = this.slice(index)
            node.next = current
            prev.next = node
            this.length++

            // or
            // let prev = this.getByIndex(index - 1)
            // if (!prev) return null

            // prev.next = new Node(data, prev.next)
            // this.length++
        }
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length || this.length === 0) return null
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    getValByIndex(index) {
        let current = this.getByIndex(index)
        return current?.value
    }

    getAllData() {
        let current = this.head
        let allData = []

        while (current) {
            allData.push(current.value)
            current = current.next
        }

        return allData
    }

    printEach() {
        let current = this.head
        while (current) {
            console.log(current)
            current = current.next
        }
    }

    popHead() {
        if (this.length > 1) {
            this.head = this.head.next
            this.length--
            // return this.head
        } else {
            this.clear()
        }
    }

    popTail() {
        if (this.length > 1) {
            let prevForLast = this.getByIndex(this.length - 2)
            prevForLast.next = null
            this.length--
            // return this.head
        } else {
            this.clear()
        }
    }

    popAt(index) {
        if (index < 0 || index >= this.length || (!index && index !== 0)) {
            return

        } else if (index === 0) {
            this.popHead()

        } else if (index === (this.length - 1)) {
            this.popTail()

        } else {
            let { current, prev } = this.slice(index)
            prev.next = current.next
            this.length--

            // or
            // let prev = this.getByIndex(index - 1)
            // if (!prev) return null

            // prev.next = prev.next.next
            // this.length--
        }
    }

    slice(index) {
        let current = this.head
        let count = 0
        let prev
        while (count < index) {
            count++
            prev = current
            current = current.next
        }

        return { current, prev }
    }

    clear() {
        this.head = null
        this.length = 0
        // return this.head
    }
}


let ll = new LinkedList()
// console.log(ll)

function inHeadHlp(arr) {
    arr.forEach(e => {
        ll.insertAtHead(e)
        // console.log(ll)
    })
}

inHeadHlp([1, 2, 3])

function inTailHlp(arr) {
    arr.forEach(e => {
        ll.insertAtTail(e)
        // console.log(ll)
    })
}

// inTailHlp([5, 6, 7])


console.log(ll.getAllData())
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
// ll.printEach()

console.log(ll.getAllData())
