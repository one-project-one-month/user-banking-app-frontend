import type { BaseResponse, Tempelate } from "./Common";

export type ChangePasswordPayload = {
  oldPassword: string;
  newPassword: string;
};

export type UserInfo = {
  fullname: string;
  username: string;
  email: string;
  dateOfBirth: string;
  gender: Tempelate;
  nationality: Tempelate;
  phoneNumber: string;
  relationship: Tempelate;
  address: string;
};

export type AccountDetail = {
  id: number;
  accountNumber: string;
  currentBalance: number;
};

export type UserDetail = {
  username: string;
  email: string;
  currentBalance: number;
  selectedAccountDetail: AccountDetail;
};

export type UserDetailResponse = BaseResponse<UserDetail>;

export type Nickname = {
  id: number;
  nickname: string;
  toAccountDetail: {
    id: number;
    accountNumber: string;
  };
};

export type NicknameListResponse = BaseResponse<Nickname[]>;

export type NicknameEditPayload = {
  id: number;
  toAccountId: string;
  nickName: string;
};

export type NicknameCreatePayload = {
  toAccountId: string;
  nickname: string;
};

export type SwitchAccountDetail = {
  id: number;
  accountNumber: string;
  balance: number;
};

export type SwitchAccounts = {
  fromAccountsOptions: SwitchAccountDetail[];
};

export type SwitchAccountsResponse = BaseResponse<SwitchAccounts>;
