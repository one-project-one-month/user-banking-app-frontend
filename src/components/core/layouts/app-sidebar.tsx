import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { menu } from "@/app/constants/index";

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="h-16 flex items-center px-4 pt-5 ">
        <SidebarMenu>
          <SidebarMenuItem className="font-semibold text-lg">
            1P1M Banking System
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3 px-1 cursor-pointer">
              {menu.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  className={`${"p-2 px-2"} ${
                    location.pathname === item.link
                      ? "bg-[#D9D9D9] hover:bg-[#D9D9D9] rounded-lg"
                      : ""
                  }`}
                >
                  <Link to={item.link}>
                    <p className="text-sm color-[#000000]  font-normal">
                      {item.name}
                    </p>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="gap-3 px-1 ">
          <SidebarMenuItem>
            <SidebarMenuButton className="cursor-pointer text-sm">
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
