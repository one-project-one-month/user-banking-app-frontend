import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PinForm from "../components/change-pin/PinForm";
import VerifyKYCForm from "../components/change-pin/VerifyKYCForm";
import { toast } from "sonner";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import MobileHeader from "@/components/core/MobileHeader";

type Step = "verifyPin" | "kycUpload" | "changePin";

const ChangePinPage: React.FC = () => {
  const [step, setStep] = useState<Step>("verifyPin");
  const [verifiedPin, setVerifiedPin] = useState<string | null>(null);
  const [kycData, setKycData] = useState<File | null>(null);
  const navigate = useNavigate();

  /** Step 1: Verify PIN */
  const handleVerifyPin = useCallback(async (data: { pin: string }) => {
    try {
      console.log("Verifying PIN:", data.pin);
      setVerifiedPin(data.pin);
      toast.success("PIN verified!");
      setStep("kycUpload");
    } catch (err) {
      console.error(err);
      toast.error("PIN verification failed");
    }
  }, []);

  /** Step 2: Upload KYC */
  const handleKycSubmit = useCallback(async (data: { kyc: File }) => {
    try {
      console.log("KYC uploaded:", data.kyc);
      setKycData(data.kyc);
      toast.success("KYC uploaded successfully!");
      setStep("changePin");
    } catch (err) {
      console.error(err);
      toast.error("KYC verification failed");
    }
  }, []);

  const handleChangePin = useCallback(
    async (data: { pin: string }) => {
      try {
        console.log("Changing PIN to:", data.pin, {
          verifiedPin,
          kycData,
        });
        toast.success("PIN changed successfully!");
        navigate("/dashboard"); // redirect after success
      } catch (err) {
        console.error(err);
        toast.error("Failed to change PIN");
      }
    },
    [verifiedPin, kycData, navigate]
  );

  const renderStep = () => {
    switch (step) {
      case "verifyPin":
        return <PinForm onSubmit={handleVerifyPin} />;
      case "kycUpload":
        return <VerifyKYCForm onSubmit={handleKycSubmit} />;
      case "changePin":
        return <PinForm onSubmit={handleChangePin} />;
      default:
        return null;
    }
  };

  return (
    <main className="h-full md:h-auto text-black-pearl-700 flex flex-col justify-between md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      <SettingWedHeader
        title="Change Transaction Pin"
        description="Update your password regularly to keep your account secure."
      />

      <MobileHeader title="Change Transaction Pin" backTo="/settings" />

      <div className="w-full">{renderStep()}</div>
    </main>
  );
};

export default ChangePinPage;
