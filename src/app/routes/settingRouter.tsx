import { SettingPage } from "../constants/lazyload";

const settingRouter = [
  {
    path: "/settings",
    children: [
      {
        index: true,
        element: <SettingPage />,
      },
    ],
  },
];

export default settingRouter;
