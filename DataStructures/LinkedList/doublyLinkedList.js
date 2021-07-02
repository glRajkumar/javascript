class DoublyLinkedList {
    head = null
    tail = null
    length = 0

    get size() {
        return this.length
    }

    get isEmpty() {
        return this.length === 0
    }

    createNode(data) {
        return { data, next: null, prev: null }
    }

    push(data) {
        const node = this.createNode(data)

        if (!this.head) {
            this.head = node
        } else {
            let prevForLast = this.getNodeAt(this.length - 1)
            prevForLast.next = node
            node.prev = prevForLast
        }

        this.tail = node
        this.length++
    }

    insertAt(index, data) {
        if (index < 0 || index > this.length) return

        const element = this.createNode(data)

        if (index === 0) {
            element.next = this.head
            this.head.prev = element
            this.head = element

        } else if (index === this.size) {
            this.tail.next = element
            element.prev = this.tail
            this.tail = element

        } else {
            let previous = this.head

            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }

            element.next = previous.next
            previous.next.prev = element
            previous.next = element
            element.prev = previous
        }

        this.length++
    }

    remove(index = this.length - 1) {
        if (index >= this.length || index < 0 || !this.head) return null

        let removedNode = this.head

        if (index === 0) {
            if (this.length === 1) {
                this.tail = null
                this.head = null
            } else {
                this.head = removedNode.next
                this.head.prev = null
            }

            // Or
            // this.head.next.prev = null
            // this.head = this.head.next

        } else if (index === this.length - 1) {
            removedNode = this.tail
            this.tail = removedNode.prev
            this.tail.next = null

            // Or
            // this.tail.prev.next = null
            // this.tail = this.tail.prev

        } else {
            removedNode = this.getNodeAt(index)
            const previous = removedNode.prev
            const next = removedNode.next

            previous.next = next
            next.prev = previous
        }

        this.length--
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.length || this.length === 0) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }

    reverse() {
        let current = this.head
        this.head = this.tail
        this.tail = current

        for (let i = 0; i < this.length; i++) {
            const prev = current.prev
            const next = current.next

            current.prev = next
            current.next = prev
            current = next
        }
    }

    getData() {
        let current = this.head
        let allData = []

        while (current) {
            allData.push(current.data)
            current = current.next
        }

        return allData
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current)
            current = current.next
        }
    }
}

module.exports = DoublyLinkedList