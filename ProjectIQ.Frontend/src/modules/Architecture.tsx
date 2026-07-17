import { Button } from "@/components/ui/button"
import {
  CloudIcon,
  CopyIcon,
  DatabaseIcon,
  Door01Icon,
  Download01Icon,
  FlowConnectionIcon,
  FolderFileStorageIcon,
  Forward01Icon,
  LayerIcon,
  MailQuestionMarkIcon,
  Notification01Icon,
  Refresh01Icon,
  ServerStack01Icon,
  ServiceIcon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState, useCallback, cache } from "react"
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
  type NodeProps,
  Handle,
  Position,
} from "@xyflow/react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

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

const nodeIcons: Record<ArchitectureNodeKind, typeof UserIcon> = {
  client: UserIcon,
  gateway: Door01Icon,
  service: ServiceIcon,
  database: DatabaseIcon,
  cache: LayerIcon,
  queue: Notification01Icon,
  storage: FolderFileStorageIcon,
  external: CloudIcon,
  infrastructure: ServerStack01Icon,
  generic: MailQuestionMarkIcon,
}

interface NodeStyle {
  border: string
  badge: string
  selectedShadow: string
  hoverShadow: string
  iconClass: string
}

const nodeStyles: Record<ArchitectureNodeKind, NodeStyle> = {
  client: {
    border: "border-blue-600",
    badge: "border-blue-500 text-blue-700",
    selectedShadow: "shadow-lg shadow-blue-400",
    hoverShadow: "shadow-lg hover:shadow-blue-300",
    iconClass: "size-5 text-blue-600",
  },
  gateway: {
    border: "border-purple-600",
    badge: "border-purple-500 text-purple-700",
    selectedShadow: "shadow-lg shadow-purple-400",
    hoverShadow: "shadow-lg hover:shadow-purple-300",
    iconClass: "size-5 text-purple-600",
  },
  service: {
    border: "border-slate-600",
    badge: "border-slate-500 text-slate-700",
    selectedShadow: "shadow-lg shadow-slate-400",
    hoverShadow: "shadow-lg hover:shadow-slate-300",
    iconClass: "size-5 text-slate-600",
  },
  database: {
    border: "border-green-600",
    badge: "border-green-500 text-green-700",
    selectedShadow: "shadow-lg shadow-green-400",
    hoverShadow: "shadow-lg hover:shadow-green-300",
    iconClass: "size-5 text-green-600",
  },
  cache: {
    border: "border-orange-600",
    badge: "border-orange-500 text-orange-700",
    selectedShadow: "shadow-lg shadow-orange-400",
    hoverShadow: "shadow-lg hover:shadow-orange-300",
    iconClass: "size-5 text-orange-600",
  },
  queue: {
    border: "border-amber-600",
    badge: "border-amber-500 text-amber-700",
    selectedShadow: "shadow-lg shadow-amber-400",
    hoverShadow: "shadow-lg hover:shadow-amber-300",
    iconClass: "size-5 text-amber-600",
  },
  storage: {
    border: "border-olive-600",
    badge: "border-olive-500 text-olive-700",
    selectedShadow: "shadow-lg shadow-olive-400",
    hoverShadow: "shadow-lg hover:shadow-olive-300",
    iconClass: "size-5 text-olive-600",
  },
  external: {
    border: "border-cyan-600",
    badge: "border-cyan-500 text-cyan-700",
    selectedShadow: "shadow-lg shadow-cyan-400",
    hoverShadow: "shadow-lg hover:shadow-cyan-300",
    iconClass: "size-5 text-cyan-600",
  },
  infrastructure: {
    border: "border-red-600",
    badge: "border-red-500 text-red-700",
    selectedShadow: "shadow-lg shadow-red-400",
    hoverShadow: "shadow-lg hover:shadow-red-300",
    iconClass: "size-5 text-red-600",
  },
  generic: {
    border: "border-2 border-dashed border-gray-600",
    badge: "border-gray-500 text-gray-700",
    selectedShadow: "shadow-lg shadow-gray-400",
    hoverShadow: "shadow-lg hover:shadow-gray-300",
    iconClass: "size-5 text-gray-600",
  },
}

interface ArchitectureNodeData extends Record<string, unknown> {
  label: string
  technology?: string
  description?: string
}

interface ArchitectureNode extends Node<ArchitectureNodeData> {
  type: ArchitectureNodeKind
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
        "min-w-56 rounded-sm border border-l-2 bg-white shadow-sm transition-all",
        nodeStyles[nodeType].border,
        selected && nodeStyles[nodeType].selectedShadow,
        !selected && nodeStyles[nodeType].hoverShadow
      )}
    >
      <div className="absolute -top-3 left-4">
        <span
          className={cn(
            "rounded-full border bg-white px-2.5 py-0.5 text-xs font-semibold uppercase",
            nodeStyles[nodeType].badge
          )}
        >
          {nodeType}
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-blue-100 p-2">
          <HugeiconsIcon
            icon={nodeIcons[nodeType]}
            className={nodeStyles[nodeType].iconClass}
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

function ClientNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="client"
      data={data}
      selected={selected}
    />
  )
}

function GatewayNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="gateway"
      data={data}
      selected={selected}
    />
  )
}

function ServiceNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="service"
      data={data}
      selected={selected}
    />
  )
}

function DatabaseNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="database"
      data={data}
      selected={selected}
    />
  )
}

function CacheNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="cache"
      data={data}
      selected={selected}
    />
  )
}

function QueueNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="queue"
      data={data}
      selected={selected}
    />
  )
}

function StorageNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="storage"
      data={data}
      selected={selected}
    />
  )
}

function ExternalNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="external"
      data={data}
      selected={selected}
    />
  )
}

function InfrastructureNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="infrastructure"
      data={data}
      selected={selected}
    />
  )
}

function GenericNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <ArchitectureNodeComponent
      nodeType="generic"
      data={data}
      selected={selected}
    />
  )
}

const initialNodes: ArchitectureNode[] = [
  // =========================
  // CLIENTS
  // =========================
  {
    id: "web-client",
    type: "client",
    position: { x: 0, y: 260 },
    data: {
      label: "Web Dashboard",
      technology: "React + TS",
      description: "Primary client",
    },
  },
  {
    id: "mobile-client",
    type: "client",
    position: { x: 0, y: 480 },
    data: {
      label: "Mobile App",
      technology: "Flutter",
      description: "Customer app",
    },
  },

  // =========================
  // GATEWAY
  // =========================
  {
    id: "gateway",
    type: "gateway",
    position: { x: 360, y: 370 },
    data: {
      label: "API Gateway",
      technology: "NGINX",
      description: "Routing & Authentication",
    },
  },

  // =========================
  // SERVICES
  // =========================
  {
    id: "auth-service",
    type: "service",
    position: { x: 760, y: 170 },
    data: {
      label: "Auth Service",
      technology: "Go",
      description: "JWT Authentication",
    },
  },
  {
    id: "order-service",
    type: "service",
    position: { x: 760, y: 370 },
    data: {
      label: "Order Service",
      technology: ".NET 9",
      description: "Order Processing",
    },
  },
  {
    id: "notification-service",
    type: "service",
    position: { x: 1500, y: 570 },
    data: {
      label: "Notification Service",
      technology: "Node.js",
      description: "Emails & Push",
    },
  },

  // =========================
  // DATABASE
  // =========================
  {
    id: "postgres",
    type: "database",
    position: { x: 1180, y: 170 },
    data: {
      label: "PostgreSQL",
      technology: "v16",
      description: "Primary Database",
    },
  },

  // =========================
  // CACHE
  // =========================
  {
    id: "redis",
    type: "cache",
    position: { x: 1180, y: 370 },
    data: {
      label: "Redis",
      technology: "7.2",
      description: "Distributed Cache",
    },
  },

  // =========================
  // QUEUE
  // =========================
  {
    id: "rabbitmq",
    type: "queue",
    position: { x: 1180, y: 570 },
    data: {
      label: "RabbitMQ",
      technology: "AMQP",
      description: "Event Bus",
    },
  },

  // =========================
  // STORAGE
  // =========================
  {
    id: "s3",
    type: "storage",
    position: { x: 1600, y: 170 },
    data: {
      label: "Amazon S3",
      technology: "Object Storage",
      description: "Media & Documents",
    },
  },

  // =========================
  // EXTERNAL
  // =========================
  {
    id: "stripe",
    type: "external",
    position: { x: 1600, y: 430 },
    data: {
      label: "Stripe API",
      technology: "REST",
      description: "Payment Processing",
    },
  },

  // =========================
  // INFRASTRUCTURE
  // =========================
  {
    id: "kubernetes",
    type: "infrastructure",
    position: { x: 760, y: 850 },
    data: {
      label: "Kubernetes",
      technology: "AWS EKS",
      description: "Production Cluster",
    },
  },

  // =========================
  // GENERIC
  // =========================
  {
    id: "shared-lib",
    type: "generic",
    position: { x: 1180, y: 850 },
    data: {
      label: "Shared Library",
      technology: ".NET / Go",
      description: "Common Utilities",
    },
  },
]

const initialEdges: Edge[] = [
  // Clients
  { id: "e1", source: "web-client", target: "gateway" },
  { id: "e2", source: "mobile-client", target: "gateway" },

  // Gateway
  { id: "e3", source: "gateway", target: "auth-service" },
  { id: "e4", source: "gateway", target: "order-service" },

  // Auth
  { id: "e5", source: "auth-service", target: "postgres" },

  // Orders
  { id: "e6", source: "order-service", target: "postgres" },
  { id: "e7", source: "order-service", target: "redis" },
  { id: "e8", source: "order-service", target: "rabbitmq" },
  { id: "e9", source: "order-service", target: "stripe" },

  // Notifications
  { id: "e10", source: "rabbitmq", target: "notification-service" },

  // Storage
  { id: "e11", source: "order-service", target: "s3" },
]

function ArchitectureLayout() {
  const [nodes, setNodes] = useState<ArchitectureNode[]>(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

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
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}
