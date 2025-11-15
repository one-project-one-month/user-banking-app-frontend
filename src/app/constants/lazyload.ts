import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";

//*layouts
export const MainLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/MainLayout"))
);

export const ScanLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/ScanLayout"))
);

export const SettingLayout = PageLoader(
  lazy(() => import("@/components/core/layouts/SettingLayout"))
);

export const TransferLayout = PageLoader(
  lazy(() => import("@/features/transfer/components/TransferLayout"))
);
export const TransferPage = PageLoader(
  lazy(() => import("@/features/transfer/pages/TransferPage"))
);

export const Confirmation = PageLoader(
  lazy(() => import("@/features/transfer/pages/Confirmation"))
);

export const Receipt = PageLoader(
  lazy(()=>import("@/features/transfer/pages/Receipt"))
)
//*pages
export const Home = PageLoader(
  lazy(() => import("@/features/home/pages/HomePage"))
);

//* Scan Module
export const QRToPayPage = PageLoader(
  lazy(() => import("@/features/scan/pages/QRToPayPage"))
);

export const ScanToPayPage = PageLoader(
  lazy(() => import("@/features/scan/pages/ScanToPayPage"))
);
export const QRToRecievePage = PageLoader(
  lazy(() => import("@/features/scan/pages/QRToRecievePage"))
);
export const ScanToRecievePage = PageLoader(
  lazy(() => import("@/features/scan/pages/ScanToRecievePage"))
);

//* FAQ Module
export const FaqPage = PageLoader(
  lazy(() => import("@/features/faq/pages/FaqPage"))
);

//* History Module
export const TransactionPage = PageLoader(
  lazy(() => import("@/features/transactions/pages/TransactionHistoryPage"))
);
export const TransactionDetailPage = PageLoader(
  lazy(() => import("@/features/transactions/pages/TransactionDetailPage"))
);

//* Setting Module
export const SettingPage = PageLoader(
  lazy(() => import("@/features/setting/pages/SettingPage"))
);
export const ProfilePage = PageLoader(
  lazy(() => import("@/features/setting/pages/ProfilePage"))
);
export const ProfileEditPage = PageLoader(
  lazy(() => import("@/features/setting/pages/ProfileEditPage"))
);
export const NickNamesPage = PageLoader(
  lazy(() => import("@/features/setting/pages/NickNamesPage"))
);
export const ChangePasswordPage = PageLoader(
  lazy(() => import("@/features/setting/pages/ChangePasswordPage"))
);
export const ChangePinPage = PageLoader(
  lazy(() => import("@/features/setting/pages/ChangePinPage"))
);
