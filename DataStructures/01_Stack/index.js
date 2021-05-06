class Stack {
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
            this.data.pop()
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


const stack = new Stack()

function justCheck() {
    console.log(stack.getData())
    console.log(stack.getLength())
    console.log(stack.isEmpty())
}

justCheck()

stack.push(1)
stack.push(2)

justCheck()

stack.push(3)
stack.push(4)


console.log("has")
console.log(stack.has(3))
console.log(stack.has(0))

console.log("find")
console.log(stack.find(3))
console.log(stack.find(0))

console.log("findAt")
console.log(stack.findAt(3))
console.log(stack.findAt(0))
console.log(stack.findAt(null))
console.log(stack.findAt("x"))


justCheck()

stack.pop()
stack.pop()
stack.pop()
stack.pop()

justCheck()

stack.pop()
console.log("stack pop", stack.pop())
justCheck()

