const Stack = require('./stack')

const stack = new Stack()

function justCheck() {
    console.log("isEmpty ->", stack.isEmpty())
    console.log("data -> ", stack.getData())
    console.log("length", stack.getLength())
    console.log("peek", stack.peek())
    console.log("")
}

justCheck()

stack.push(1)
stack.push(2)

justCheck()

stack.push(3)
stack.push(4)

// stack.print()

justCheck()

stack.pop()
stack.pop()

justCheck()
