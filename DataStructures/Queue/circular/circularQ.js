class CircularQueue {
  tail = -1
  head = -1
  size = 0

  constructor(capacity) {
    this.capacity = Math.max(capacity, 0) || 10
    this.list = Array(this.capacity).fill(null)
  }

  getSize() {
    return this.size
  }

  isFull() {
    return this.capacity === this.size
  }

  isEmpty() {
    return this.size === 0
  }

  enqueue(data) {
    if (!this.isFull()) {
      this.tail = (this.tail + 1) % this.capacity
      this.list[this.tail] = data
      this.size++

      if (this.head === -1) {
        this.head = this.tail
      }
    }
  }

  dequeue() {
    let item = null

    if (!this.isEmpty()) {
      item = this.list[this.head]

      this.list[this.head] = null
      this.head = (this.head + 1) % this.capacity
      this.size--

      if (!this.size) {
        this.tail = -1
        this.head = -1
      }
    }
    return item
  }

  peek() {
    return this.list[this.head]
  }

  getData() {
    return this.list
  }

  print() {
    console.log(this.list.filter(el => el !== null))
  }
}

module.exports = CircularQueue