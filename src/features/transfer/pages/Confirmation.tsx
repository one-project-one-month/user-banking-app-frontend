import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MoveDown } from "lucide-react";
import { PinDialog } from "../components/PinDialog";
import { Textarea } from "@/components/ui/textarea";
import useGetUserData from "@/hooks/useGetUserData";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";

import { setAmount, setNote } from "../redux/accountTransferSlice";
import useNickNameData from "@/hooks/useNicknameData";

const Confirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { info, accountDetail } = useGetUserData();
    const { nicknameList } = useNickNameData();
  const fullname = useSelector((state: RootState) => state.transfer.fullname);
  const toAccount = useSelector((state: RootState) => state.transfer.toAccount);
   const selectedNickname = useSelector((state: RootState) => state.transfer.selectedNickname)

  const amount = useSelector((state: RootState) => state.transfer.amount);
  const note = useSelector((state: RootState) => state.transfer.note);
  const selectedNicknameValue = nicknameList?.find(
  (n) => n.id === selectedNickname
)?.nickname;

  return (
    <div className=" mx-8 mt-10 space-y-6">
      <div className="mb-4">
        <Button
          type="button"
          variant="ghost"
          onClick={() => navigate("/transfer")}
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back
        </Button>
      </div>
      <h1 className="text-2xl font-bold">Confirmation</h1>

      <div className="flex items-center justify-between rounded-md   mb-5  transition-colors">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-md  font-medium">From : </span>
          <img
            src="/public/360_F_1535955058_LwMFa9B6kPoHXCmCQpB1CwPuUi57TEBJ.webp"
            alt="Sender"
            className="w-12 h-12 rounded-full object-cover border"
          />
        </div>
        <div className="text-right space-y-1">
          <p className="text-lg font-semibold leading-none">{info?.fullname}</p>
          <p className="text-sm text-muted-foreground">
            Account No : {accountDetail?.accountNumber}
          </p>
          <p className="text-md font-medium text-yellow-500">
            {info?.currentBalance} mmk
          </p>
        </div>
      </div>
      <MoveDown size={24} className="ml-2 text-yellow-500" />
      <div className="flex items-center justify-between rounded-md  mb-5  transition-colors">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-md  font-medium">To : </span>
          <img
            src="/public/360_F_1535955058_LwMFa9B6kPoHXCmCQpB1CwPuUi57TEBJ.webp"
            alt="Sender"
            className="w-12 h-12 rounded-full object-cover border"
          />
        </div>
        <div className="text-right space-y-1">
          <p className="text-lg font-semibold leading-none"> {selectedNicknameValue ? selectedNicknameValue : fullname}</p>
          <p className="text-sm text-muted-foreground">
            Account No: {toAccount}
          </p>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h1>Amount (Ks) </h1>
          <Input placeholder="enter your amount" type='number' value={amount} onChange={(e)=> dispatch(setAmount(e.target.value))} />
        </div>
        <div className="">
          <h1>Note</h1>
          <Textarea placeholder="enter your note" type="text" value={note} onChange={(e)=> dispatch(setNote(e.target.value))}/>
        </div>
      </div>
      <div className="w-full">
        <PinDialog />
      </div>
    </div>
  );
};

export default Confirmation;
