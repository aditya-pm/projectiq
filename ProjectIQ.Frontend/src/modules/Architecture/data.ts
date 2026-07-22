import type { Edge } from "@xyflow/react"
import type { ArchitectureFlowNode } from "./types"

const DEFAULT_POSITION = { x: 0, y: 0 }

export const initialNodes: ArchitectureFlowNode[] = [
  // =========================
  // CLIENTS
  // =========================
  {
    id: "web-client",
    type: "client",
    position: DEFAULT_POSITION,
    data: {
      label: "Web Dashboard",
      technology: "React + TS",
      description: "Primary client",
    },
  },
  {
    id: "mobile-client",
    type: "client",
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
    data: {
      label: "Auth Service",
      technology: "Go",
      description: "JWT Authentication",
    },
  },
  {
    id: "order-service",
    type: "service",
    position: DEFAULT_POSITION,
    data: {
      label: "Order Service",
      technology: ".NET 9",
      description: "Order Processing",
    },
  },
  {
    id: "notification-service",
    type: "service",
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
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
    position: DEFAULT_POSITION,
    data: {
      label: "Shared Library",
      technology: ".NET / Go",
      description: "Common Utilities",
    },
  },
]

export const initialEdges: Edge[] = [
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
