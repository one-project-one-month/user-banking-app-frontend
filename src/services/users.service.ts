import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";
import type {
  ChangePasswordPayload,
  NicknameCreatePayload,
  NicknameEditPayload,
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

export const getCurrentUser = async () => {
  try {
    const response = await API.get("personal-banking/users/me");
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
    const response = await API.post(`/users/nickname`, data);
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const updateNickname = async (data: NicknameEditPayload) => {
  try {
    const response = await API.put(`/users/nickname/${data.id}`, {
      toAccountId: data.toAccountId,
      nickname: data.nickName,
    });
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const deleteNickname = async (id: number) => {
  try {
    const response = await API.delete(`/users/nickname/${id}`);
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
    const response = await API.post("/media/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throwError(error);
  }
};
