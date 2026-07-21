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
  Background,
  BackgroundVariant,
  Controls,
  type NodeProps,
  Handle,
  Position,
  Panel,
  type NodeTypes,
} from "@xyflow/react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import layoutGraph from "@/modules/Architecture/layout"
import { initialEdges, initialNodes } from "./data"
import {
  type ArchitectureNodeKind,
  type ArchitectureNodeData,
  type ArchitectureNode,
} from "./types"
import { nodeTheme, nodeIcons } from "./nodeStyles"

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

interface ArchitectureNodeComponentProps {
  nodeType: ArchitectureNodeKind
  data: ArchitectureNodeData
  selected: boolean
}

function ArchitectureNodeComponent({
  nodeType,
  data,
  selected,
}: ArchitectureNodeComponentProps) {
  return (
    <div
      className={cn(
        "relative min-w-56 rounded-sm border border-l-2 bg-white shadow-sm transition-all",
        nodeTheme[nodeType].border,
        selected && nodeTheme[nodeType].selectedShadow,
        !selected && nodeTheme[nodeType].hoverShadow
      )}
    >
      <div className="absolute -top-3 left-4">
        <span
          className={cn(
            "rounded-full border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase",
            nodeTheme[nodeType].badge
          )}
        >
          {nodeType}
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div
          className={cn("rounded-md p-2", nodeTheme[nodeType].iconBackground)}
        >
          <HugeiconsIcon
            icon={nodeIcons[nodeType]}
            className={nodeTheme[nodeType].iconClass}
            strokeWidth={2}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{data.label}</p>

          <p className="text-sm text-muted-foreground">{data.technology}</p>

          {data.description && (
            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
              {data.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function createNodeComponent(nodeType: ArchitectureNodeKind) {
  return function Node(props: NodeProps<ArchitectureNode>) {
    return <ArchitectureNodeComponent nodeType={nodeType} {...props} />
  }
}

const ClientNode = createNodeComponent("client")
const GatewayNode = createNodeComponent("gateway")
const ServiceNode = createNodeComponent("service")
const DatabaseNode = createNodeComponent("database")
const CacheNode = createNodeComponent("cache")
const QueueNode = createNodeComponent("queue")
const StorageNode = createNodeComponent("storage")
const ExternalNode = createNodeComponent("external")
const InfrastructureNode = createNodeComponent("infrastructure")
const GenericNode = createNodeComponent("generic")

const nodeTypes: NodeTypes = {
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

const initialLayout = layoutGraph(initialNodes, initialEdges)

function ArchitectureLayout() {
  const [nodes, setNodes] = useState<ArchitectureNode[]>(initialLayout.nodes)
  const [edges, setEdges] = useState(initialLayout.edges)

  const onNodesChange = useCallback(
    (changes: NodeChange<ArchitectureNode>[]) =>
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
