class PriorityQueue {
    constructor() {
        this.list = []
    }

    getSize() {
        return this.list.length
    }

    isEmpty() {
        return this.list.length === 0
    }

    enqueue(data, priority = 0) {
        let el = { data, priority }

        if (this.isEmpty() || el.priority >= this.list[this.list.length - 1].priority) {
            this.list.push(el)
        } else {
            for (let index in this.list) {
                if (el.priority < this.list[index].priority) {
                    this.list.splice(index, 0, el)
                    break
                }
            }
        }
    }

    dequeue() {
        this.list.shift()
    }

    peek() {
        return this.list[0]
    }

    getData() {
        return this.list.map(el => el.data)
    }

    print() {
        console.log(this.list)
    }
}

module.exports = PriorityQueue