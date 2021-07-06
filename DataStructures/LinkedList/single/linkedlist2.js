class LinkedList {
    #size = 0
    head = null

    get size() {
        return this.#size
    }

    get isEmpty() {
        return this.#size === 0
    }

    createElement(data) {
        return { data, next: null }
    }

    push(item) {
        const element = this.createElement(item)

        if (!this.head) {
            this.head = element
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = element
        }

        this.#size += 1
        return this.size
    }

    insert(item, index = this.#size) {
        if (index < 0 || index > this.#size) return

        const element = this.createElement(item)

        if (index === 0) {
            element.next = this.head
            this.head = element

        } else if (index === this.size) {
            return this.push(item)

        } else {
            let previous = this.head

            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }

            element.next = previous.next
            previous.next = element
        }

        this.#size += 1
        return this.size
    }

    remove(index = this.#size - 1) {
        if (index < 0 || index > this.#size) return null

        let removedElement = this.head

        if (index === 0 || this.#size === index) {
            this.head = this.head.next
        } else {
            let previous = this.head

            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }

            removedElement = previous.next
            previous.next = removedElement.next
        }

        this.#size -= 1
        return removedElement.data
    }

    get(index = -1) {
        if (index < 0 || index >= this.size - 1) return null

        let element = this.head

        for (let i = 0; i < index; i++) {
            element = element.next
        }

        return element.data
    }

    indexOf(item) {
        let current = this.head

        if (current.data === item) return 0

        for (let i = 0; i < this.size; i++) {
            if (current.data === item) return i
            current = current.next
        }

        return -1
    }

    reverse() {
        let previous = this.head
        let current = this.head.next
        previous.next = null

        while (current) {
            const next = current.next
            current.next = previous
            previous = current
            current = next
        }

        this.head = previous
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

module.exports = LinkedList