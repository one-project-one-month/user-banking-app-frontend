import {
  Confirmation,
  Receipt,
  TransferLayout,
  TransferPage,
} from "../constants/lazyload";

const transferRouter = [
  {
    path: "transfer",
    element: <TransferLayout />,
    children: [
      { index: true, element: <TransferPage /> },
      { path: "confirmation", element: <Confirmation /> },
      { path : "receipt",element : <Receipt/>}
    ],
  },
];

export default transferRouter;
