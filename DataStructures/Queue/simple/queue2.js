class Queue {
  constructor() {
    this.items = {}
    this.head = 0
    this.tail = 0
  }

  enqueue(data) {
    this.items[this.tail] = data
    this.tail++
  }

  dequeue() {
    let item = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return item
  }

  isEmpty() {
    return this.tail - this.head === 0
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.head]
  }

  print() {
    if (this.isEmpty()) return null;
    let data = ''

    for (const key in this.items) {
      data = data + this.items[key] + " -> "
    }

    return data.slice(0, -3)
  }

  getData() {
    if (this.isEmpty()) return null;
    return this.items
  }

  getLength() {
    return this.tail - this.head
  }
}

module.exports = Queue