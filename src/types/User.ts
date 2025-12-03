import type { BaseResponse, Template } from "./Common";

export type ChangePasswordPayload = {
  oldPassword: string;
  newPassword: string;
};

export type UserInfo = {
  fullname: string;
  username: string;
  email: string;
  dateOfBirth: string;
  gender: Template;
  nationality: Template;
  isPolicyAgreement: boolean;
  isAutoSaveReceipt: boolean;
  phoneNumber: string;
  relationship: Template;
  currentBalance: number;
  address: string;
  selectedAccountDetails: AccountDetail;
  hasInitialPin: boolean;
  isFirstTimeLogin: boolean;
};

export type AccountDetail = {
  id: number;
  accountNumber: string;
  balance: number;
};

// export type UserInfo = {
//   email: string;
//   username: string;
//   fullname: string;
//   dateOfBirth: string;
//   gender: Template;
//   nationality: Template;
//   isPolicyAgreement: boolean;
//   isAutoSaveReceipt: boolean;
//   currentBalance: number;
//   selectedAccountDetails: AccountDetail;
// };

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
  toAccountId: number;
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
