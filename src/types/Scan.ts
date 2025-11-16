import type { BaseResponse } from "./Common";

export type QR = {
  token: string;
};

export type GenerateQRToPayPayload = {
  fromAccountId: number;
};

export type ScanQRToRecieve = {
  fromAccountDetails: {
    id: number;
    accountNumber: string;
    balance: number;
  };
  toAccountDetails: {
    id: number;
    accountNumber: string;
    balance: number;
  };
  amount: number;
  note: string;
};

export type QRToPayResponse = BaseResponse<QR>;

export type QRResponse = BaseResponse<QR>;

export type ScanQRToRecieveResponse = BaseResponse<ScanQRToRecieve>;
