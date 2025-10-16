import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";

//*layouts
export const MainLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/MainLayout"))
);

export const ScanLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/ScanLayout"))
);

//*pages
export const Home = PageLoader(
  lazy(() => import("@/features/home/pages/HomePage"))
);

export const QRToPayPage = PageLoader(
  lazy(() => import("@/features/scan/pages/QRToPayPage"))
);

export const ScanToPayPage = PageLoader(
  lazy(() => import("@/features/scan/pages/ScanToPayPage"))
);
export const QRToRecievePage = PageLoader(
  lazy(() => import("@/features/scan/pages/QRToRecievePage"))
);

export const TransactionPage = PageLoader(
  lazy(() => import("@/features/transactions/pages/TransactionHistoryPage"))
);
export const TransactionDetailPage = PageLoader(
  lazy(
    () => import("@/features/transactions/pages/TransactionHistoryDetailPage")
  )
);

export const Service = PageLoader(
  lazy(() => import("@/features/service/Service"))
);
