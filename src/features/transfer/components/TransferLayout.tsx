import { Outlet } from "react-router-dom";

const TransferLayout = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Outlet />
    </div>
  );
};

export default TransferLayout;
