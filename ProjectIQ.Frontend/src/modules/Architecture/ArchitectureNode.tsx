import { Handle, Position } from "@xyflow/react"
import type { ArchitectureNodeData, ArchitectureNodeKind } from "./types"
import { nodeIcons, nodeTheme } from "./nodeStyles"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"

interface ArchitectureNodeProps {
  nodeType: ArchitectureNodeKind
  data: ArchitectureNodeData
  selected: boolean
}

function ArchitectureNode({
  nodeType,
  data,
  selected,
}: ArchitectureNodeProps) {
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

export default ArchitectureNode
