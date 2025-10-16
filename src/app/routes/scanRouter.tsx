import { ScanLayout } from "../constants/lazyload";
import {
  QRToPayPage,
  QRToRecievePage,
  ScanToPayPage,
} from "../constants/lazyload";

const scanRouter = [
  {
    path: "/scan",
    element: <ScanLayout />,
    children: [
      {
        path: "scan-to-pay",
        element: <ScanToPayPage />,
      },
      {
        path: "qr-to-pay",
        element: <QRToPayPage />,
      },
      {
        path: "qr-to-recieve",
        element: <QRToRecievePage />,
      },
    ],
  },
];

export default scanRouter;
