import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default DashboardLayout
