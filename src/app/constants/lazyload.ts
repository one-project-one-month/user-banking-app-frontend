import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";

export const MainLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/MainLayout"))
);

export const Home = PageLoader(lazy(() => import("@/features/home/Home")));

export const Service = PageLoader(
  lazy(() => import("@/features/service/Service"))
);
