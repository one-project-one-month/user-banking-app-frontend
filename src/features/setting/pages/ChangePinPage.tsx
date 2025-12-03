import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PinForm from "../components/change-pin/PinForm";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import MobileHeader from "@/components/core/MobileHeader";
import { useSetPin, useVerifyPin } from "@/queries/users.query";
import { useIsMobile } from "@/hooks/use-mobile";

type Step = "verifyPin" | "kycUpload" | "changePin";

const ChangePinPage: React.FC = () => {
  const [step, setStep] = useState<Step>("verifyPin");
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  //verify api
  const { mutateAsync: verifyPin, isPending: isVerifyPending } = useVerifyPin();

  //change pin
  const { mutateAsync: setPin, isPending: isSetPinPending } = useSetPin();

  const handleVerifyPin = useCallback(async (data: { pin: string }) => {
    await verifyPin({ oldPin: data.pin });
    setStep("changePin");
  }, []);

  const handleChangePin = useCallback(
    async (data: { pin: string }) => {
      await setPin(data);
      navigate("/settings");
    },
    [navigate]
  );

  const renderStep = () => {
    switch (step) {
      case "verifyPin":
        return (
          <PinForm
            key="verify"
            onSubmit={handleVerifyPin}
            isLoading={isVerifyPending}
            actionLabel="Verify"
            title="Verify your old pin"
          />
        );
      case "changePin":
        return (
          <PinForm
            key="change"
            onSubmit={handleChangePin}
            isLoading={isSetPinPending}
            actionLabel="Change"
            title="Enter your new pin"
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="h-full text-black-pearl-700 flex flex-col justify-between md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      {isMobile ? (
        <MobileHeader title="Change Transaction Pin" backTo="/settings" />
      ) : (
        <SettingWedHeader
          title="Change Transaction PIN"
          description="Keep your account safe by updating your transaction PIN from time to time."
        />
      )}

      <div className="flex justify-center items-center min-h-[300px] flex-1">
        {renderStep()}
      </div>
    </main>
  );
};

export default ChangePinPage;
