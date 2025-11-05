import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";
import type {
  LoginPayload,
  LoginResponse,
  PersonalDetailPayload,
} from "@/types/Auth";

export const verifyEmail = async (data: { email: string }) => {
  try {
    const res = await API.post("/auth/register/email/verify", data);
    return res.data;
  } catch (err) {
    throwError(err);
  }
};

export const registerUser = async (data: PersonalDetailPayload) => {
  try {
    const res = await API.post("/auth/register/personal-details", data);
    return res.data;
  } catch (err) {
    throwError(err);
  }
};

export const loginUser = async (
  data: LoginPayload
): Promise<LoginResponse | undefined> => {
  try {
    const res = await API.post("/auth/login", data);
    return res.data;
  } catch (err) {
    throwError(err);
  }
};
