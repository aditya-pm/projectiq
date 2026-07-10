import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  Home03Icon,
  DocumentAttachmentIcon,
  ParagraphBulletsPoint01Icon,
  DatabaseIcon,
  Compass01Icon,
  ApiIcon,
  MapingIcon,
  Alert01Icon,
  TextAlignLeft01Icon,
  Target02Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r">
      <SidebarHeader className="mb-6 p-2 px-4">
        <h2 className="headline-md text-(--pq-on-surface)">Project Apollo</h2>
        <p className="text-xs text-(--pq-on-surface)/60">Active Workspace</p>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">WORKSPACE</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="font-medium text-(--pq-on-surface)/60">
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={Home03Icon} strokeWidth={2.0} />
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon
                    icon={DocumentAttachmentIcon}
                    strokeWidth={2.0}
                  />
                  Documentation
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">
            AI MODULES
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="font-medium text-(--pq-on-surface)/60">
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={TextAlignLeft01Icon} strokeWidth={2.0} />
                  Executive Summary
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon
                    icon={ParagraphBulletsPoint01Icon}
                    strokeWidth={2.0}
                  />
                  Feature Extraction
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={Target02Icon} strokeWidth={2.0} />
                  Core Objectives
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={DatabaseIcon} strokeWidth={2.0} />
                  Database Design
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={Compass01Icon} strokeWidth={2.0} />
                  Architecture
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={ApiIcon} strokeWidth={2.0} />
                  API Design
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={MapingIcon} strokeWidth={2.0} />
                  Roadmap
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton>
                  <HugeiconsIcon icon={Alert01Icon} strokeWidth={2.0} />
                  Risk Analysis
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="flexitems-center border-t border-border p-4 text-sm font-medium text-(--pq-on-surface)/80">
        <span className="flex items-center gap-2">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2.0} size={16} />
          Settings
        </span>

        <span className="text-(--pq-on-surface)/50">Version 1.0</span>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
