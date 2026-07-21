import type { ArchitectureNode } from "./types"
import dagre from "@dagrejs/dagre"
import type { Edge } from "@xyflow/react"

function layoutGraph(
  nodes: ArchitectureNode[],
  edges: Edge[]
): { nodes: ArchitectureNode[]; edges: Edge[] } {
  const nodeHeight = 100
  const nodeWidth = 250

  const graph = new dagre.graphlib.Graph()
    .setGraph({
      rankdir: "LR",
    })
    .setDefaultEdgeLabel(() => ({}))

  nodes.forEach((node) =>
    graph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  )

  edges.forEach((edge) => graph.setEdge(edge.source, edge.target))

  dagre.layout(graph)

  const newNodes: ArchitectureNode[] = nodes.map((node) => {
    const dagreNodeWithPosition = graph.node(node.id)
    const newNode = {
      ...node,
      position: {
        x: dagreNodeWithPosition.x - nodeWidth / 2,
        y: dagreNodeWithPosition.y - nodeHeight / 2,
      },
    }

    return newNode
  })

  return { nodes: newNodes, edges }
}

export default layoutGraph
