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
  useSidebar,
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
  PanelLeftIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "./ui/button"

function AppSidebar() {
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar variant="inset" className="border-r" collapsible="icon">
      <SidebarHeader className="mb-6 p-2 px-4">
        <div className="flex gap-2 group-data-[collapsible=icon]:justify-center">
          <h2 className="headline-md text-(--pq-on-surface) group-data-[collapsible=icon]:hidden">
            Apollo Infrastructure
          </h2>
          <Button onClick={toggleSidebar} variant="ghost" size="icon-lg">
            <HugeiconsIcon icon={PanelLeftIcon} strokeWidth={2.0} />
          </Button>
        </div>

        <p className="text-xs text-(--pq-on-surface)/60 group-data-[collapsible=icon]:hidden">
          Active Workspace
        </p>
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

      <SidebarFooter className="border-t border-border p-4 text-sm font-medium text-(--pq-on-surface)/80">
        <span className="flex items-center gap-2">
          <HugeiconsIcon icon={Settings01Icon} strokeWidth={2.0} size={16} />
          <span className="group-data-[collapsible=icon]:hidden">Settings</span>
        </span>
        <span className="text-(--pq-on-surface)/50 group-data-[collapsible=icon]:hidden">
          Version 1.0
        </span>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
