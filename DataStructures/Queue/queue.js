const Node = require('../Node/node')

class Queue {
    constructor() {
        this.data = null
        this.length = 0
    }

    enqueue(data) {
        const node = new Node(data, this.data)
        this.data = node
        this.length++
    }

    dequeue() {
        let len = this.length

        if (len < 2) {
            if (len === 0) return;
            this.data = null
            this.length--

        } else {
            len -= 2
            let current = this.data
            while (len) {
                current = current.next
                len--
            }
            current.next = null
            this.length--
        }
    }

    peek() {
        if (this.isEmpty()) return undefined;
        let current = this.data
        while (current.next) {
            current = current.next
        }
        return current.data
    }

    isEmpty() {
        return this.data === null
    }

    print() {
        if (this.isEmpty()) return null;
        let current = this.data
        while (current) {
            console.log(current.data, current.next)
            current = current.next
        }
    }

    getData() {
        if (this.isEmpty()) return null;
        let current = this.data
        let data = []
        while (current) {
            data.push(current.data)
            current = current.next
        }
        return data
    }

    getLength() {
        return this.length
    }
}

module.exports = Queue