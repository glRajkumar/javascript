class Graph {
  #vertices = new Set()
  #adjacencyList = new Map()

  get vertices() {
    return Array.from(this.#vertices)
  }

  get adjacencyList() {
    return this.#adjacencyList
  }

  addVertex(vertex) {
    let vertexChk = vertex !== 0 ? !vertex : false
    if (vertexChk) return;

    if (!this.#vertices.has(vertex)) {
      this.#vertices.add(vertex)
      this.#adjacencyList.set(vertex, new Set())
    }
  }

  addEdge(v1, v2) {
    let v1Chk = v1 !== 0 ? !v1 : false
    let v2Chk = v2 !== 0 ? !v2 : false
    if (v1Chk || v2Chk || v1 === v2) return;

    if (!this.#vertices.has(v1)) {
      this.addVertex(v1)
    }

    if (!this.#vertices.has(v2)) {
      this.addVertex(v2)
    }

    this.#adjacencyList.get(v1).add(v2)
    this.#adjacencyList.get(v2).add(v1)
  }

  removeEdge(v1, v2) {
    let v1Chk = v1 !== 0 ? !v1 : false
    let v2Chk = v2 !== 0 ? !v2 : false
    if (v1Chk || v2Chk) return;

    this.#adjacencyList.get(v1).delete(v2)
    this.#adjacencyList.get(v2).delete(v1)
  }

  removeVertex(vertex) {
    if (!this.#vertices.has(vertex)) return;

    this.#adjacencyList.get(vertex).forEach(adjacentVertex => {
      this.removeEdge(vertex, adjacentVertex)
    })

    this.#adjacencyList.delete(vertex)
  }

  hasEdge(v1, v2) {
    let v1Chk = v1 !== 0 ? !v1 : false
    let v2Chk = v2 !== 0 ? !v2 : false
    if (v1Chk || v2Chk) return;

    return (
      this.#adjacencyList.get(v1).has(v2) &&
      this.#adjacencyList.get(v2).has(v1)
    )
  }

  print() {
    this.#adjacencyList.forEach((val, key) => {
      console.log(`${key} -> ${Array.from(val).join(', ')}`)
    })
  }
}

module.exports = Graph