import type { NodeProps, NodeTypes } from "@xyflow/react"
import type { ArchitectureFlowNode, ArchitectureNodeKind } from "./types"
import ArchitectureNodeComponent from "./ArchitectureNode"

function createNodeComponent(nodeType: ArchitectureNodeKind) {
  return function Node(props: NodeProps<ArchitectureFlowNode>) {
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

export const nodeTypes: NodeTypes = {
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
