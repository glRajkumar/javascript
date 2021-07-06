const DoublyLinkedList = require("../double/doublyLL")

class SortedLikedList extends DoublyLinkedList {
    constructor(sortType = "asc", sortByFn = null) {
        // sortType can be "asc" or "des"
        super()
        this.sortType = sortType
        this.sortingFunction = sortByFn
        this.push = undefined

        if (!sortByFn) {
            this.sortingFunction = (a, b) => {
                if (this.sortType === "asc") return a > b
                return a < b
            }
        }
    }

    // sortingFunction = (a, b) => {
    //     if (this.sortType === "asc") return a > b
    //     return a < b
    // }

    insert(data) {
        if (this.length === 0) return super.push(data)

        const index = this.#getNextElementIndex(data)
        return super.insertAt(index, data)
    }

    #getNextElementIndex(data) {
        let current = this.head
        let i = 0

        for (; i < this.length; i++) {
            const res = this.sortingFunction(data, current.data)
            if (!res) return i

            current = current.next
        }

        return i
    }
}

module.exports = SortedLikedList