import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";

export const MainLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/MainLayout"))
);

export const TransferLayout = PageLoader(lazy(()=>import("@/features/transfer/components/TransferLayout")))
export const TransferPage = PageLoader(lazy(()=> import("@/features/transfer/pages/TransferPage")))
export const TransferAccount = PageLoader(lazy(()=>import("@/features/transfer/pages/TransferAccount")))
export const Confirmation = PageLoader(lazy(()=>import("@/features/transfer/pages/Confirmation")))