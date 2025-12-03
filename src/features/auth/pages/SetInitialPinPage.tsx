import PinForm from "@/features/setting/components/change-pin/PinForm";
import { useSetPin } from "@/queries/users.query";

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function SetInitialPinPage() {
  const navigate = useNavigate();

  const { mutateAsync: setPin, isPending: isSetPinPending } = useSetPin();

  const handleChangePin = useCallback(
    async (data: { pin: string }) => {
      await setPin(data);
      navigate("/");
    },
    [navigate]
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <PinForm
        key="set"
        onSubmit={handleChangePin}
        isLoading={isSetPinPending}
        actionLabel="Continue"
        title="Set your pin"
      />
    </main>
  );
}

export default SetInitialPinPage;
