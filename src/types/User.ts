import type { BaseResponse, Template } from "./Common";

export type ChangePasswordPayload = {
  oldPassword: string;
  newPassword: string;
};


export type AccountDetail = {
  id: number;
  accountNumber: string;
  balance: number;
};

export type UserInfo = {
  email: string;
  username: string;
  fullname: string;
  dateOfBirth: string;  
  gender: Template; 
  nationality: Template;  
  isPolicyAgreement: boolean;
  isAutoSaveReceipt: boolean;
  currentBalance: number;
  selectedAccountDetails: AccountDetail;  
};


export type UserDetailResponse = BaseResponse<UserInfo>;


export type Nickname = {
  id: number;
  nickname: string;
  toAccountDetail: {
    id: number;
    accountNumber: string;
  };
};

export type NicknameOption = {
  id: number;
  nickname: string;
  toAccountDetail: {
    id: number;
    accountNumber: string;
  };
};

export type NicknameListResponse = BaseResponse<{
  nicknameOptions: NicknameOption[];
}>;

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
