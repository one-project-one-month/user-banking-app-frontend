import { QRToPayPage, QRToRecievePage } from "../constants/lazyload";

const scanRouter = [
  {
    path: "scan-to-pay",
    element: <QRToPayPage />,
  },
  {
    path: "qr-to-pay",
    element: <QRToPayPage />,
  },
  {
    path: "qr-to-recieve",
    element: <QRToRecievePage />,
  },
];

export default scanRouter;
