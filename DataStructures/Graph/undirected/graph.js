class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    let vertexChk = vertex !== 0 ? !vertex : false
    if (vertexChk) return;

    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(v1, v2) {
    let v1Chk = v1 !== 0 ? !v1 : false
    let v2Chk = v2 !== 0 ? !v2 : false
    if (v1Chk || v2Chk) return;

    this.addVertex(v1)
    this.addVertex(v2)

    this.adjacencyList[v1].add(v2)
    this.adjacencyList[v2].add(v1)
  }

  removeEdge(v1, v2) {
    let v1Chk = v1 !== 0 ? !v1 : false
    let v2Chk = v2 !== 0 ? !v2 : false
    if (v1Chk || v2Chk) return;

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
    let v1Chk = v1 !== 0 ? !v1 : false
    let v2Chk = v2 !== 0 ? !v2 : false
    if (v1Chk || v2Chk) return;

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