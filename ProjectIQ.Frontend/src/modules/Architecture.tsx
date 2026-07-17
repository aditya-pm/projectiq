import { Button } from "@/components/ui/button"
import {
  CopyIcon,
  Download01Icon,
  FlowConnectionIcon,
  Forward01Icon,
  Refresh01Icon,
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
  type Node,
  type Edge,
  Background,
  BackgroundVariant,
  Controls,
} from "@xyflow/react"
import { Separator } from "@/components/ui/separator"

export default function Architecture() {
  return (
    <div>
      <Heading />
      <ArchitectureLayout />
    </div>
  )
}

function Heading() {
  return (
    <div className="flex justify-between gap-4 border-b pb-4">
      <div>
        <h1 className="display-lg">System Architecture</h1>
        <span className="font-medium text-gray-500">
          High-level synthesis of the project goals, scope, stakeholders, and
          key insights derived from the source documentation
        </span>
      </div>
      <div className="flex items-center gap-2">
        <PageActions />
      </div>
    </div>
  )
}

function PageActions() {
  return (
    <>
      <Button className="rounded-sm p-4">
        <HugeiconsIcon icon={Forward01Icon} strokeWidth={2.0} />
        Run Analysis
      </Button>
      <Button className="rounded-sm p-4" variant="outline">
        <HugeiconsIcon icon={Refresh01Icon} strokeWidth={2.0} />
        Regenerate
      </Button>
      <Button className="rounded-sm" variant="outline">
        <HugeiconsIcon icon={Download01Icon} strokeWidth={2.0} />
      </Button>
      <Button className="rounded-sm" variant="outline">
        <HugeiconsIcon icon={CopyIcon} strokeWidth={2.0} />
      </Button>
    </>
  )
}

type ArchitectureNodeKind =
  | "client"
  | "gateway"
  | "service"
  | "database"
  | "cache"
  | "queue"
  | "storage"
  | "external"
  | "infrastructure"
  | "generic"

const nodeTypes = {
  client: ClientNode,
  gateway: GatewayNode,
  service: ServiceNode,
  database: DatabaseNode,
  cache: CacheNode,
  queue: QueueNode,
  storage: StorageNode,
  external: ExternalNode,
  infrastructure: InfrastructureNode,
  generic: GenericNode,
}

interface ArchitectureNodeData {
  label: string
  technology?: string
  description?: string
  metadata?: Record<string, string>
}

interface ArchitectureNode {
  id: string
  type: ArchitectureNodeKind
  data: ArchitectureNodeData
}

function ClientNode() {}

function GatewayNode() {}

function ServiceNode() {}

function DatabaseNode() {}

function CacheNode() {}

function QueueNode() {}

function StorageNode() {}

function ExternalNode() {}

function InfrastructureNode() {}

function GenericNode() {}



const initialNodes: Node[] = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
]
const initialEdges: Edge[] = [{ id: "n1-n2", source: "n1", target: "n2" }]

function ArchitectureLayout() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
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
          >
            <Background variant={BackgroundVariant.Dots} />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}
