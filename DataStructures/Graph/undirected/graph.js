class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(v1, v2) {
    if (!v1 || !v2) return;

    this.addVertex(v1)
    this.addVertex(v2)

    this.adjacencyList[v1].add(v2)
    this.adjacencyList[v2].add(v1)
  }

  removeEdge(v1, v2) {
    if (!v1 || !v2) return;

    this.adjacencyList[v1].delete(v2)
    this.adjacencyList[v2].delete(v1)
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
  }

  hasEdge(v1, v2) {
    if (!v1 || !v2) return;

    return (
      this.adjacencyList[v1].has(v2) &&
      this.adjacencyList[v2].has(v1)
    )
  }

  print() {
    for (const key in this.adjacencyList) {
      console.log(key + "  ->  " + [...this.adjacencyList[key]].join(", "))
    }
  }
}

module.exports = Graph