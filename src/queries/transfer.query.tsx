import { setPin } from "@/features/transfer/redux/accountTransferSlice";
import { errorToast, successToast } from "@/lib/helper/customToasts";
import { accountTransfer, confirmTransfer, nicknameTransfer, transferValidate } from "@/services/transfer.service";
import type { BaseResponse } from "@/types/Common";
import type { TransferPayload} from "@/types/Transfer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useNicknameTransferQuery = (nicknameId?: number) => {
  return useQuery({
    queryKey: ['nicknameTransfer', nicknameId],
    queryFn: () => nicknameTransfer(nicknameId!),
    enabled: !!nicknameId, 
  });
};

export const useAccountTransferQuery = (accountNumber?: string) => {
  return useQuery({
    queryKey: ['accountTransfer', accountNumber],
    queryFn: () => accountTransfer(accountNumber!),
    enabled: false, // run auto if there is accNo
  });
};


export const useTransferValidateMutation = () => {
  return useMutation({
    mutationFn: (toAccountId : number) => transferValidate(toAccountId),
    // onSuccess: () => {
    //   successToast("Success", "Change password successful.");
    // },
    onError: (error) => {
      errorToast("Failed to Change Password", error.message);
    },
  });
};

export const useTransferConfirm = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch()
   const navigate = useNavigate()

   return useMutation<BaseResponse<TransferPayload>, Error, TransferPayload>({
    mutationFn: confirmTransfer,
    onSuccess: (response) => {
  if (response.code === 200) {
    dispatch(setPin(''));
    queryClient.invalidateQueries({ queryKey: ["transactions"] });
    successToast("Success", response.message || "Transfer successful!");
    navigate('/transfer/receipt');
  } else {
    successToast("Error", response.message || "Unknown error");
  }
},
    onError: (error) => {
      errorToast("Network error", error.message);
      console.log(error.message)
      dispatch(setPin(''))
    },
  });
};