import { useEffect, useCallback } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Delete, LockKeyhole } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/app/store/store"
import { setPin } from "../redux/accountTransferSlice"
import { errorToast } from "@/lib/helper/customToasts"
import { useTransferConfirm } from "@/queries/transfer.query"
import PageLoading from "@/components/core/PageLoading"

export function PinDialog() {
  const dispatch = useDispatch()
 

  const pin = useSelector((state: RootState) => state.transfer.pin);
  const amount = useSelector((state: RootState) => state.transfer.amount);
  const note = useSelector((state: RootState) => state.transfer.note);
  const toAccountId = useSelector((state: RootState) => state.transfer.toAccountId);
  const  isLoading  =useTransferConfirm();
   const { mutate } = useTransferConfirm();
  const handleDigitClick = (digit: string) => {
      if ( pin.length < 6) {
      dispatch(setPin(pin + digit))
    }
  }

  const handleBackspace = () => {
    dispatch(setPin(pin.slice(0, -1)))
  }

const submitTransfer = useCallback(() => {
  if (toAccountId === null) {
    return errorToast("Recipient missing", "Please select a recipient account");
  }

  mutate({
    amount: Number(amount),
    toAccountId,
    note,
    pin,
  });
}, [toAccountId, pin, amount, note, mutate]); 

useEffect(() => {
  if (pin.length === 6) {
    submitTransfer(); 
    dispatch(setPin(''))
  }
}, [pin, submitTransfer,dispatch]);

  const keypad = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "x", "0"
  ]

  const handleKeyPress = (key: string) => {
    if (key === "x") return handleBackspace()
    handleDigitClick(key)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Confirm</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">

               <DialogHeader>
          <DialogTitle className="text-center flex flex-col justify-center gap-3 items-center my-3">
            {pin.length === 6 ? isLoading && <PageLoading/> : <span></span>}
            <LockKeyhole className="bg-blue-900 text-white rounded-md w-12 h-12 p-3" />
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Enter your PIN to confirm transaction
          </DialogDescription>
        </DialogHeader>

        <div className="text-center text-2xl font-mono border p-3 rounded bg-gray-100 dark:bg-gray-800 tracking-widest">
          {pin.padEnd(6, "•")}
        </div>

        <div className="grid grid-cols-6 gap-3 mt-4">
          {keypad.slice(0, 9).map((key) => (
            <Button
              key={key}
              variant="ghost"
              onClick={() => handleKeyPress(key)}
              className={`col-span-2 text-lg py-6 rounded-full 
                ${key === "x"
                  ? "bg-red-100 hover:bg-red-200 text-red-500"
                  : "bg-gray-200 hover:bg-gray-300 text-blue-950"}`}
            >
              {key === "x" ? <Delete className="w-8 h-8" /> : key}
            </Button>
          ))}

          <Button
            key="x"
            variant="ghost"
            onClick={() => handleKeyPress("x")}
            className="col-span-2 col-start-2 text-lg py-6 rounded-full bg-red-100 hover:bg-red-200 text-red-900"
          >
            <Delete className="w-8 h-8" />
          </Button>

          <Button
            key="0"
            variant="ghost"
            onClick={() => handleKeyPress("0")}
            className="col-span-2 col-start-4 text-lg py-6 rounded-full bg-gray-200 hover:bg-gray-300 text-blue-950"
          >
            0
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
