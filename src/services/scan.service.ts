import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";
import type { GenerateQRToPayPayload, QRResponse } from "@/types/Scan";

export const generateRecieveQR = async (data: {
  amount: number;
  note?: string;
}): Promise<QRResponse | undefined> => {
  try {
    const response = await API.post(
      "personal-banking/scan/qr-to-receive/generate",
      {
        amount: data.amount,
        note: data.note ?? "",
      }
    );
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const generateQRToPay = async (data: GenerateQRToPayPayload) => {
  try {
    const response = await API.post("personal-banking/scan/qr-to-pay/generate");
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

export const scanQRToRecieve = async (data: { token: string }) => {
  try {
    const res = await API.post(
      "personal-banking/scan/qr-to-receive/scan",
      data
    );
    return res.data;
  } catch (error) {
    throwError(error);
  }
};

export const scanQRToPay = async (data: { token: string }) => {
  try {
    const res = await API.post("personal-banking/scan/qr-to-pay/scan", data);
    return res.data;
  } catch (error) {
    throwError(error);
  }
};
