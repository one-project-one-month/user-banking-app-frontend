import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";


//*layouts
export const MainLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/MainLayout"))
);


//*pages
export const Home = PageLoader(lazy(() => import("@/features/home/Home")));


export const TransactionPage = PageLoader(lazy(() => import("@/features/transactions/pages/TransactionHistoryPage")));
export const TransactionDetailPage = PageLoader(lazy(() => import("@/features/transactions/pages/TransactionHistoryDetailPage")));

export const Service = PageLoader(
  lazy(() => import("@/features/service/Service"))
);
