import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/app_logo.svg";

const TopPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isRootAuth =
    location.pathname === "/auth" || location.pathname === "/auth/";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo with some margin below */}
      <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-16 mb-6" />

      {/* Buttons with a reasonable gap */}
      <div className="w-full max-w-xs flex flex-col gap-4">
        <Button
          onClick={() => navigate("/auth/register")}
          className="w-full hover:bg-primary/80  text-white  py-6 rounded-lg"
        >
          Create Account
        </Button>

        <Button
          onClick={() => navigate("/auth/login")}
          className="w-full hover:bg-primary/80  text-white py-6 rounded-lg"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default TopPage;
