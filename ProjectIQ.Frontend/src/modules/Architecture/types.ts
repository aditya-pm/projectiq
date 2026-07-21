import type { Node } from "@xyflow/react"

export type ArchitectureNodeKind =
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

export interface ArchitectureNodeData extends Record<string, unknown> {
  label: string
  technology?: string
  description?: string
}

export interface ArchitectureNode extends Node<ArchitectureNodeData> {
  type: ArchitectureNodeKind
}

export interface NodeStyle {
  border: string
  badge: string
  selectedShadow: string
  hoverShadow: string
  iconClass: string
  iconBackground: string
}