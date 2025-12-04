import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";
import type {
  ChangePasswordPayload,
  NicknameCreatePayload,
  NicknameEditPayload,
  UserUpdatePayload,
} from "@/types/User";

export const changePassword = async (payload: ChangePasswordPayload) => {
  try {
    const response = await API.post(
      "personal-banking/users/change-password",
      payload
    );
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const autoSaveReceipt = async (flag: boolean) => {
  try {
    const response = await API.put(
      `/personal-banking/users/autoSaveRecepit?flag=${flag}`
    );
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await API.get("personal-banking/users/me");
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const updateCurrentUser = async (data: UserUpdatePayload) => {
  try {
    const response = await API.put("personal-banking/users/me", data);
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const getNicknameList = async () => {
  try {
    const response = await API.get("personal-banking/users/nickname");
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const createNickname = async (data: NicknameCreatePayload) => {
  try {
    const response = await API.post(`personal-banking/users/nickname`, data);
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const updateNickname = async (data: NicknameEditPayload) => {
  try {
    const response = await API.put(
      `personal-banking/users/nickname/${data.id}`,
      {
        toAccountId: data.toAccountId,
        nickname: data.nickName,
      }
    );
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const deleteNickname = async (id: number) => {
  try {
    const response = await API.delete(`personal-banking/users/nickname/${id}`);
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const getFromAccounts = async () => {
  try {
    const response = await API.get("personal-banking/users/from-accounts");
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const switchAccount = async (accountId: number) => {
  try {
    const response = await API.post("personal-banking/users/switch-account", {
      accountId,
    });
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const mediaUpload = async (data: FormData) => {
  try {
    const response = await API.post("media/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const verifyPin = async (data: { oldPin: string }) => {
  try {
    const response = await API.post("personal-banking/users/verify-pin", data);
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const setPin = async (data: { pin: string }) => {
  try {
    const response = await API.post("personal-banking/users/set-pin", data);
    return response.data;
  } catch (error) {
    throwError(error);
  }
};
