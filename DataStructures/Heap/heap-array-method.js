class Heap {
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
    console.log(this.data)
    const temp = this.data[i1]
    this.data[i1] = this.data[i2]
    this.data[i2] = temp
    console.log(this.data)
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

  print() {
    console.log(this.data)
  }
}

module.exports = Heap