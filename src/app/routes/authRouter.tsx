const authRouter = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <div>Hello auth</div>,
      },
      {
        path: "register",
        element: <div>Hello register</div>,
      },
    ],
  },
];

export default authRouter;
