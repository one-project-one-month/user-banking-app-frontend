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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { menu } from "@/app/constants/index";
import AppLogo from "@/assets/icons/AppLogo";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AppSidebar() {
  const path = "/" + useLocation().pathname.split("/")[1];
  const childPath = path + "/" + useLocation().pathname.split("/")[2];

  return (
    <Sidebar className="md:block hidden">
      <SidebarHeader className="flex items-center px-4 pt-5 mb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <AppLogo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3 px-1 cursor-pointer">
              {menu.map((item, index) => {
                if (item.children && item?.children?.length > 0) {
                  return (
                    <Collapsible
                      key={item.name}
                      asChild
                      defaultOpen={item.isActive}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className={cn(
                              "flex items-center gap-4 py-6 px-4 text-base"
                              // path === item.link &&
                              //   "bg-primary text-white rounded-lg hover:bg-primary hover:text-white"
                            )}
                            tooltip={item.name}
                          >
                            {item.icon && <item.icon />}
                            <span>{item.name}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.name}>
                                <SidebarMenuSubButton
                                  className={cn(
                                    "flex items-center gap-4 py-6 px-4 text-sm",
                                    childPath === subItem.link &&
                                      "bg-primary text-white rounded-lg hover:bg-primary hover:text-white"
                                  )}
                                  asChild
                                >
                                  <Link to={subItem.link}>
                                    {subItem.icon && <item.icon size={16} />}
                                    <span>{subItem.name}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "flex items-center gap-4 py-6 px-4 text-base",
                        path === item.link &&
                          "bg-primary text-white rounded-lg hover:bg-primary hover:text-white"
                      )}
                    >
                      <Link to={item.link}>
                        {item.icon && <item.icon size={16} />}
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
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
