import { errorToast, successToast } from "@/lib/helper/customToasts";
import {
  autoSaveReceipt,
  changePassword,
  createNickname,
  deleteNickname,
  getCurrentUser,
  getFromAccounts,
  getNicknameList,
  mediaUpload,
  setPin,
  switchAccount,
  updateCurrentUser,
  updateNickname,
  verifyPin,
} from "@/services/users.service";
import type {
  UserDetailResponse,
  ChangePasswordPayload,
  NicknameListResponse,
  NicknameEditPayload,
  NicknameCreatePayload,
  SwitchAccountsResponse,
  UserUpdatePayload,
} from "@/types/User";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (payload: ChangePasswordPayload) => changePassword(payload),
    onSuccess: () => {
      successToast("Success", "Change password successful.");
    },
    onError: (error) => {
      errorToast("Failed to Change Password", error.message);
    },
  });
};

export const useAutoSaveReceipt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (flag: boolean) => autoSaveReceipt(flag),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
    onError: (error) => {
      errorToast("Failed to switch", error.message);
    },
  });
};

export const useGetCurrentUser = () => {
  return useQuery<UserDetailResponse>({
    queryKey: ["me"],
    queryFn: getCurrentUser,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UserUpdatePayload) => updateCurrentUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      successToast("Success", "User info updated successfully");
    },
    onError: (error) => {
      errorToast("Error", error.message);
    },
  });
};

export const useGetNicknameList = () => {
  return useQuery<NicknameListResponse>({
    queryKey: ["nickname"],
    queryFn: getNicknameList,
  });
};

export const useCreateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NicknameCreatePayload) => createNickname(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["nickname"],
      });
      successToast("Success", "Nickname created successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useUpdateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NicknameEditPayload) => updateNickname(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nickname"] });
      successToast("Success", "Nickname updated successfully.");
    },
    onError: () => {
      errorToast("Failed", "Nickname update failed.");
    },
  });
};

export const useDeleteNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteNickname(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nickname"] });
      successToast("Success", "Nickname deleted successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useGetFromAccounts = (props?: any) => {
  return useQuery<SwitchAccountsResponse>({
    queryKey: ["from-accounts"],
    queryFn: getFromAccounts,
    ...props,
  });
};

export const useSwitchAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (accountId: number) => switchAccount(accountId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [] });
      successToast("Success", "Account switched successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useMediaUpload = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) => mediaUpload(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      successToast("Success", "Media uploaded successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useVerifyPin = () => {
  return useMutation({
    mutationFn: (data: { oldPin: string }) => verifyPin(data),
    onSuccess: () => {
      successToast("Success", "verified");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useSetPin = () => {
  return useMutation({
    mutationFn: (data: { pin: string }) => setPin(data),
    onSuccess: () => {
      successToast("Success", "Pin changed successfully");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};
