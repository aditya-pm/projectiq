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

const nodeColors = {
  client: "blue",
  gateway: "purple",
  service: "slate",
  database: "green",
  cache: "orange",
  queue: "amber",
  external: "cyan",
  infrastructure: "red",
  generic: "gray",
}

interface ArchitectureNodeData extends Record<string, unknown> {
  label: string
  technology?: string
  description?: string
}

interface ArchitectureNode extends Node<ArchitectureNodeData> {
  type: ArchitectureNodeKind
}

function ArchitectureNodeComponent() {
  return <div></div>
}

function ClientNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-blue-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-blue-400",
        !selected && "shadow-lg hover:shadow-blue-300"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-blue-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-blue-700 uppercase">
          CLIENT
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-blue-100 p-2">
          <HugeiconsIcon
            icon={UserIcon}
            className="size-5 text-blue-600"
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

function GatewayNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-purple-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-purple-200"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-purple-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-purple-700 uppercase">
          GATEWAY
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-purple-100 p-2">
          <HugeiconsIcon
            icon={Door01Icon}
            className="size-5 text-purple-600"
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

function ServiceNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-slate-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-slate-400"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-slate-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-700 uppercase">
          SERVICE
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-blue-100 p-2">
          <HugeiconsIcon
            icon={ServiceIcon}
            className="size-5 text-slate-600"
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

function DatabaseNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-green-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-green-200"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-green-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-green-700 uppercase">
          DATABASE
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-green-100 p-2">
          <HugeiconsIcon
            icon={DatabaseIcon}
            className="size-5 text-green-600"
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

function CacheNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-orange-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-orange-200"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-orange-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-orange-700 uppercase">
          CACHE
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-orange-100 p-2">
          <HugeiconsIcon
            icon={LayerIcon}
            className="size-5 text-orange-600"
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

function QueueNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-amber-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-orange-200"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-amber-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-amber-700 uppercase">
          QUEUE
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-amber-100 p-2">
          <HugeiconsIcon
            icon={Notification01Icon}
            className="size-5 text-amber-600"
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

function StorageNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-md border border-l-2 border-olive-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-olive-400"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-olive-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-olive-700 uppercase">
          STORAGE
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-olive-100 p-2">
          <HugeiconsIcon
            icon={FolderFileStorageIcon}
            className="size-5 text-olive-600"
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

function ExternalNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-cyan-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-cyan-200"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-cyan-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-cyan-700 uppercase">
          EXTERNAL
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-cyan-100 p-2">
          <HugeiconsIcon
            icon={CloudIcon}
            className="size-5 text-cyan-600"
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

function InfrastructureNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border border-l-2 border-red-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-red-200"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-red-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-red-700 uppercase">
          INFRASTRUCTURE
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="mt-2 flex items-start gap-3 p-3">
        <div className="rounded-md bg-red-100 p-2">
          <HugeiconsIcon
            icon={ServerStack01Icon}
            className="size-5 text-red-600"
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

function GenericNode({ data, selected }: NodeProps<ArchitectureNode>) {
  return (
    <div
      className={cn(
        "min-w-56 rounded-sm border-2 border-dashed border-gray-600 bg-white shadow-sm transition-all",
        selected && "shadow-lg shadow-gray-200"
      )}
    >
      <div className="absolute -top-3 left-4">
        <span className="rounded-full border border-gray-500 bg-white px-2.5 py-0.5 text-xs font-semibold text-gray-700 uppercase">
          GENERAL
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="flex items-start gap-3 p-3">
        <div className="rounded-md bg-gray-100 p-2">
          <HugeiconsIcon
            icon={MailQuestionMarkIcon}
            className="size-5 text-gray-600"
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
    position: { x: 760, y: 570 },
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
