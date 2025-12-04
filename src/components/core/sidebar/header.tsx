import ConfirmDialog from "@/components/common/ConfirmDialog";
import CustomBreadCrumb from "@/components/common/CustomBreadCrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { logout } from "@/features/auth/redux/authSlice";
import useGetUserData from "@/hooks/useGetUserData";
import { LogOut } from "lucide-react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { info } = useGetUserData();
  const currentPathName = useLocation().pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const segments = currentPathName.split("/").filter(Boolean);
  const displaySegments = segments[0] === "bank" ? segments.slice(1) : segments;

  const crumbs = displaySegments.map((segment, index) => ({
    name: segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    path: displaySegments.filter((_, i) => i <= index).join("/"),
  }));

  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/auth/login");
  }, []);

  return (
    <header className="hidden md:block bg-white/60 dark:bg-background/60 backdrop-blur-md border-b border-border px-6 py-3">
      <div className="flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="h-10 w-10 rounded-xl border hover:bg-muted transition" />

          <div className="flex flex-col">
            <h1 className="text-xl font-semibold tracking-tight">
              {crumbs[crumbs.length - 1]?.name || "Dashboard"}
            </h1>

            <CustomBreadCrumb
              currentPageTitle={crumbs[crumbs.length - 1]?.name}
              links={crumbs.slice(0, -1)}
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <ConfirmDialog
          title="Are you sure?"
          description="This action cannot be undone."
          actionLabel="Logout"
          onConfirm={handleLogout}
          trigger={
            <div className="flex items-center gap-3 pr-1 cursor-pointer group">
              <div className="flex flex-col items-end leading-tight">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition">
                  {info?.username}
                </p>
                <span className="text-xs text-muted-foreground group-hover:text-primary/80 transition">
                  Click to logout
                </span>
              </div>

              <Avatar className="w-10 h-10 shadow-sm border rounded-xl group-hover:scale-105 transition">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@avatar"
                />
                <AvatarFallback className="rounded-xl bg-primary/10 text-primary">
                  {info?.username?.slice(0, 2)?.toUpperCase() || "??"}
                </AvatarFallback>
              </Avatar>
            </div>
          }
        />
      </div>
    </header>
  );
};

export default Header;
