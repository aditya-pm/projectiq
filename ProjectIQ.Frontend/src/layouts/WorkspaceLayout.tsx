import Navbar from "@/components/Navbar"
// import { Outlet } from "react-router"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import ExecutiveSummary from "@/modules/ExecutiveSummary"
import Architecture from "@/modules/Architecture"

function WorkspaceLayout() {
  return (
    <>
      <Navbar />
      <div className="mt-(--pq-navbar-height)">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="p-8">
              {/* <ExecutiveSummary /> */}
              <Architecture />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  )
}

export default WorkspaceLayout
