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
            <p>
              AI module details will be displayed here! This text is temporary
            </p>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  )
}

export default WorkspaceLayout
