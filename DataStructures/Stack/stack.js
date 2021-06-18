const Node = require('../Node/node')

class Stack {
    constructor() {
        this.data = null
        this.length = 0
    }

    push(data) {
        const node = new Node(data, this.data)
        this.data = node
        this.length++
    }

    pop() {
        if (this.isEmpty()) return undefined;
        this.data = this.data.next
        this.length--
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.data.data
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

module.exports = Stack