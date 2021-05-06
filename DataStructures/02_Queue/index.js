class Queue {
    constructor() {
        this.data = []
        this.length = 0
    }

    push(data) {
        this.data.push(data)
        this.length++
        return this.length
    }

    pop() {
        if (this.length) {
            this.data.shift()
            this.length--
            return this.length
        }
        return undefined
    }

    getLength() {
        return this.length
    }

    getData() {
        return this.data
    }

    isEmpty() {
        return this.length === 0
    }

    has(data) {
        return this.data.some(ele => ele === data)
    }

    find(data) {
        return this.data.find(ele => ele === data)
    }

    findAt(i) {
        return this.data[i]
    }
}


const queue = new Queue()

function justCheck() {
    console.log(queue.getData())
    console.log(queue.getLength())
    console.log(queue.isEmpty())
}

justCheck()

queue.push(1)
queue.push(2)

justCheck()

queue.push(3)
queue.push(4)


console.log("has")
console.log(queue.has(3))
console.log(queue.has(0))

console.log("find")
console.log(queue.find(3))
console.log(queue.find(0))

console.log("findAt")
console.log(queue.findAt(3))
console.log(queue.findAt(0))
console.log(queue.findAt(null))
console.log(queue.findAt("x"))


justCheck()

queue.pop()
queue.pop()

justCheck()

queue.pop()
queue.pop()

justCheck()

queue.pop()
console.log("queue pop", queue.pop())
justCheck()
