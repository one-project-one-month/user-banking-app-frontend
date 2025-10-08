import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import Header from "@/components/core/layouts/header";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="flex-1 p-6 ">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
