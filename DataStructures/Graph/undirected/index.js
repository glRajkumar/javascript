// const Graph = require('./graph')
const Graph = require('./graph2')

let graph = new Graph()

function justCheck() {
  console.log('vertices', graph.vertices)
  console.log('adjacencyList', graph.adjacencyList)
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

console.log(graph.hasEdge("A", 'B'))
console.log(graph.hasEdge("A", 'D'))
