import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function WaitingApprovalPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-full">
            <Mail className="w-10 h-10 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl text-primary font-semibold  mb-3">
          Registration Submitted
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for registering! Your request is currently under review.
          Once approved, we will send a confirmation email to the address you
          provided.
        </p>

        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-500 mb-8">
          You don’t need to do anything right now. Just keep an eye on your
          inbox — we’ll notify you as soon as your account is approved.
        </div>

        {/* Buttons are now inside the centered card */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => navigate("/auth/login")}
            className="w-full py-6 rounded-xl   transition"
          >
            Go to Login
          </Button>
          <Button
            onClick={() => navigate("/auth/register")}
            className="w-full py-6 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Register a New Account
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
