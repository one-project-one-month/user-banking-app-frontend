import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import logo from "@/assets/images/app_logo.svg";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-[400px] md:bg-white rounded-lg md:shadow-md p-5 sm:p-10">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-16" />
        </div>
        <h1 className="w-full text-center mb-4 text-black-pearl-700">Login</h1>
        <LoginForm onSubmit={handleRedirect} />
      </div>
    </div>
  );
};

export default LoginPage;
