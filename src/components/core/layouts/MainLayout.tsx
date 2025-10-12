import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../sidebar/app-sidebar";
import Header from "@/components/core/sidebar/header";
import { Outlet } from "react-router-dom";
import FooterNav from "../FooterNav";
export default function MainLayout() {
  return (
    <SidebarProvider
      style={{
        background: "linear-gradient(180.32deg, #0A3D62 6.69%, #1888D9 99.72%)",
      }}
    >
      <AppSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <FooterNav />
      </div>
    </SidebarProvider>
  );
}
