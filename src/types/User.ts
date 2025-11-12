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
  isPolicyAgreement: boolean;
  isAutoSaveReceipt: boolean;
  phoneNumber: string;
  relationship: Tempelate;
  currentBalance: number;
  address: string;
  selectedAccountDetails: AccountDetail;
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

export type UserDetailResponse = BaseResponse<UserInfo>;

export type UserUpdatePayload = {
  fullname: string;
  dateOfBirth: string;
  genderId: number;
  nationalityId: number;
  phoneNumber: string;
  address: string;
};

export type Nickname = {
  id: number;
  nickname: string;
  toAccountDetail: {
    id: number;
    accountNumber: string;
  };
};

export type NicknameOptions = {
  nicknameOptions: Nickname[];
};

export type NicknameListResponse = BaseResponse<NicknameOptions>;

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
