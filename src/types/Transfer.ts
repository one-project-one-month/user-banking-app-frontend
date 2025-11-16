import type { BaseResponse } from "./Common";

export interface BaseUser {
  id: number;
}

export interface BaseAccount {
  id: number;
  accountNumber: string;
}

export interface UserWithName extends BaseUser {
  name: string;
}
export interface UserWithFullName extends BaseUser {
  fullname: string;
}
export interface AccountWithBalance extends BaseAccount {
  balance: number;
}

export interface RecentTransferListOption {
  user: UserWithName;
  account: AccountWithBalance;
}

export interface RecentTransferResponse {
  data: {
    recentTransferListOptions: RecentTransferListOption[];
  };
}

export interface AccountTransfer {
  toAccountDetails: BaseAccount;
  userDetails: UserWithFullName;
}

export interface AccountTransferResponse {
  data: {
    toAccountDetails: BaseAccount;
    userDetails: UserWithFullName;
  };
}

export type TransferPayload = {
  toAccountId: number;
  amount: number;
  note: string;
  pin: string;
};

export type Prepare = {
  toAccountDetails: {
    id: number;
    accountNumber: string;
  };
  userDetails: {
    id: number;
    fullname: string;
  };
};

export type PrepareResponse = BaseResponse<Prepare>;
