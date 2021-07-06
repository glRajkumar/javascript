class CircularLinkedList {
    head = null
    length = 0

    get size() {
        return this.length
    }

    get isEmpty() {
        return this.length === 0
    }

    createNode(data) {
        return { data, prev: null, next: null }
    }

    push(data) {
        const node = this.createNode(data)

        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.tail.next = this.head
        this.head.prev = this.tail
        this.length++
    }

    insert(index, data) {
        if (index < 0 || index > this.length) return null

        const element = this.createNode(data)

        if (index === 0) {
            element.next = this.head

            if (this.head) this.head.prev = element
            else this.tail = element
            this.head = element

        } else if (index === this.length) {
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

        this.tail.next = this.head
        this.head.prev = this.tail
        this.length++
    }

    remove(index = this.length - 1) {
        if (index >= this.length || index < 0 || !this.head) return null

        let removedNode = this.head

        if (index === 0) {
            this.head.next.prev = null
            this.head = this.head.next

        } else if (index === this.length - 1) {
            this.tail.prev.next = null
            this.tail = this.tail.prev

        } else {
            let previous = this.head

            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }

            removedNode = previous.next
            previous.next = removedNode.next
            removedNode.next.prev = previous
        }

        if (this.head && this.tail) {
            this.tail.next = this.head
            this.head.prev = this.tail
        } else {
            this.head = null
            this.tail = null
        }

        this.length--
    }

    getData() {
        let current = this.head
        let allData = []
        let len = this.length

        while (len) {
            allData.push(current.data)
            current = current.next
            len--
        }

        return allData
    }
}

module.exports = CircularLinkedList