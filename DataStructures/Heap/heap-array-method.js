class Heap { // max heap
  constructor() {
    this.data = []
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex(i) {
    return (i * 2) + 1
  }

  getRightChildIndex(i) {
    return (i * 2) + 2
  }

  swap(i1, i2) {
    const temp = this.data[i1]
    this.data[i1] = this.data[i2]
    this.data[i2] = temp
  }

  push(value) {
    this.data.push(value)
    this.heapifyUp(value)
  }

  heapifyUp() {
    let currentIndex = this.data.length - 1
    let currentParentIndex = this.getParentIndex(currentIndex)

    while (this.data[currentIndex] > this.data[currentParentIndex]) {
      this.swap(currentIndex, currentParentIndex)
      currentIndex = currentParentIndex
    }
  }

  poll() {
    let deletedVal = this.data[0]
    this.data[0] = this.data.pop()
    this.heapifyDown()

    return deletedVal
  }

  heapifyDown() {
    let currentIndex = 0
    let currentLeftIndex = this.getLeftChildIndex(currentIndex)

    while (currentLeftIndex !== undefined) {
      let currentRightIndex = this.getRightChildIndex(currentIndex)

      if (currentRightIndex !== undefined && this.data[currentLeftIndex] < this.data[currentRightIndex]) {
        currentLeftIndex = currentRightIndex
      }

      if (!(this.data[currentIndex] < this.data[currentLeftIndex])) return;

      this.swap(currentIndex, currentLeftIndex)
    }
  }

  print() {
    console.log(this.data)
  }
}

module.exports = Heap