import { Confirmation, TransferAccount, TransferLayout, TransferPage } from "../constants/lazyload";

const transferRouter = [
{
  path: "transfer",
  element: <TransferLayout />,
  children: [
    { path: "sender", element: <TransferPage /> },
    { path: "recipient", element: <TransferAccount /> },
    { path: "confirmation", element: <Confirmation /> },
  ],
}

];

export default transferRouter;
