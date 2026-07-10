import Navbar from "@/components/Navbar"
// import { Outlet } from "react-router"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"

function WorkspaceLayout() {
  return (
    <>
      <Navbar />
      <div className="mt-(--pq-navbar-height)">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="p-4">
              <h2>Executive Summary</h2>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  )
}

export default WorkspaceLayout
