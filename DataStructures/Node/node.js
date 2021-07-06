class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

// const createNode = (data, next = null) => {
//     return { data, next }
// }

module.exports = Node