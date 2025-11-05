import type { BaseResponse } from "./Common";

export type PersonalDetailPayload = {
  verificationToken: string;
  fullname: string;
  dateOfBirth: string;
  genderId: number;
  nationalityId: number;
  kycType: string;
  kycData?: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginData = {
  accessToken: string;
  refreshToken: string;
  email: string;
  username: string;
  currentBalance: number;
};

export type LoginResponse = BaseResponse<LoginData>;
