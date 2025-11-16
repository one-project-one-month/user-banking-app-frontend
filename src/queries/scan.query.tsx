import { errorToast, successToast } from "@/lib/helper/customToasts";
import {
  generateQRToPay,
  generateRecieveQR,
  scanQRToPay,
  scanQRToRecieve,
} from "@/services/scan.service";
import type { BaseResponse } from "@/types/Common";
import type {
  GenerateQRToPayPayload,
  QRResponse,
  ScanQRToRecieveResponse,
} from "@/types/Scan";
import { useMutation } from "@tanstack/react-query";

export const useGenerateRecieveQR = () => {
  return useMutation({
    mutationFn: (data: {
      amount: number;
      note?: string;
    }): Promise<QRResponse | undefined> => generateRecieveQR(data),
    onSuccess: () => {
      successToast("Success", "Generate Success");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useGenerateQRToPayQR = () => {
  return useMutation({
    mutationFn: (data: GenerateQRToPayPayload) => generateQRToPay(data),
    onSuccess: () => {
      successToast("Success", "Generate Success");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
    retry: 3,
  });
};

export const useScanQRToRecieve = () => {
  return useMutation<
    ScanQRToRecieveResponse | undefined,
    Error,
    { token: string }
  >({
    mutationFn: (data: { token: string }) => scanQRToRecieve(data),
    onError: (error) => {
      errorToast("Scan Failed", error.message);
    },
  });
};
export const useScanQRToPay = () => {
  return useMutation<
    BaseResponse<boolean> | undefined,
    Error,
    { token: string }
  >({
    mutationFn: (data: { token: string }) => scanQRToPay(data),
    onError: (error) => {
      errorToast("Scan Failed", error.message);
    },
  });
};
