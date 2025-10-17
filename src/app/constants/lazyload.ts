import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";

//*layouts
export const MainLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/MainLayout"))
);

export const ScanLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/ScanLayout"))
);

export const TransferLayout = PageLoader(
  lazy(() => import("@/features/transfer/components/TransferLayout"))
);
export const TransferPage = PageLoader(
  lazy(() => import("@/features/transfer/pages/TransferPage"))
);
export const TransferAccount = PageLoader(
  lazy(() => import("@/features/transfer/pages/TransferAccount"))
);
export const Confirmation = PageLoader(
  lazy(() => import("@/features/transfer/pages/Confirmation"))
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
export const SettingPage = PageLoader(
  lazy(() => import("@/features/setting/pages/SettingPage"))
);

export const Service = PageLoader(
  lazy(() => import("@/features/service/Service"))
);
