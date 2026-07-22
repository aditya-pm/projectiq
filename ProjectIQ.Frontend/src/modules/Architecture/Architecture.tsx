import { Button } from "@/components/ui/button"
import {
  CopyIcon,
  Download01Icon,
  FlowConnectionIcon,
  Forward01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState, useCallback } from "react"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  Background,
  BackgroundVariant,
  Controls,
  Panel,
} from "@xyflow/react"
import { Separator } from "@/components/ui/separator"
import layoutGraph from "@/modules/Architecture/layout"
import { initialEdges, initialNodes } from "./data"
import { type ArchitectureFlowNode } from "./types"
import { nodeTypes } from "./nodeTypes"
import ModuleHeader from "@/components/ModuleHeader"

export default function Architecture() {
  return (
    <div>
      <ModuleHeader
        heading="System Architecture"
        description="Visual representation of the system topology, application components, data stores, external integrations, and the relationships between them."
      >
        <Button className="rounded-sm p-4">
          <HugeiconsIcon icon={Forward01Icon} strokeWidth={2.0} />
          Generate
        </Button>
        <Button className="rounded-sm" variant="outline">
          <HugeiconsIcon icon={Download01Icon} strokeWidth={2.0} />
        </Button>
        <Button className="rounded-sm" variant="outline">
          <HugeiconsIcon icon={CopyIcon} strokeWidth={2.0} />
        </Button>
      </ModuleHeader>
      <TopologyDiagram />
    </div>
  )
}

const initialLayout = layoutGraph(initialNodes, initialEdges)

function TopologyDiagram() {
  const [nodes, setNodes] = useState<ArchitectureFlowNode[]>(
    initialLayout.nodes
  )
  const [edges, setEdges] = useState(initialLayout.edges)

  const onNodesChange = useCallback(
    (changes: NodeChange<ArchitectureFlowNode>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  )
  const onLayout = useCallback(() => {
    const { nodes: newLayoutedNodes, edges: newLayoutedEdges } = layoutGraph(
      nodes,
      edges
    )
    setNodes(newLayoutedNodes)
    setEdges(newLayoutedEdges)
  }, [nodes, edges])

  return (
    <div className="mt-4 flex gap-2">
      <div className="flex flex-1 flex-col gap-4 rounded-lg bg-white p-6 shadow-sm inset-shadow-2xs">
        <div className="flex items-center gap-2">
          <HugeiconsIcon
            icon={FlowConnectionIcon}
            className="size-6 text-(--pq-primary)"
            strokeWidth={2.0}
          />
          <h2 className="headline-md font-bold">Topology Diagram</h2>
        </div>

        <Separator />

        <div className="h-150 w-full border border-dashed bg-(--pq-surface-container-low)">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            nodeTypes={nodeTypes}
          >
            <Background variant={BackgroundVariant.Dots} />
            <Controls />
            <Panel position="top-left">
              <Button
                variant="secondary"
                onClick={onLayout}
                className="rounded-none bg-white font-semibold text-black shadow-2xs inset-shadow-2xs"
              >
                Auto Layout
              </Button>
            </Panel>
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}
