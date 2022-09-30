const Graph = require('./graph')

let graph = new Graph()

function justCheck() {
  graph.print()
  console.log("")
}

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

justCheck()

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "C")

justCheck()

graph.removeEdge("A", "C")

justCheck()

graph.removeVertex("C")

justCheck()
