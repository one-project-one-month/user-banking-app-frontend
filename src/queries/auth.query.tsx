import { setTokens } from "@/features/auth/authSlice";
import { errorToast, successToast } from "@/lib/helper/customToasts";
import { loginUser, registerUser, verifyEmail } from "@/services/auth.service";
import type {
  LoginResponse,
  LoginPayload,
  PersonalDetailPayload,
} from "@/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (data: { email: string }) => verifyEmail(data),
    onSuccess: () => {
      successToast("Email Sent", "Please check your email");
    },
    onError: (err) => {
      errorToast("Error Occured", err.message);
    },
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: PersonalDetailPayload) => registerUser(data),
    onSuccess: () => {
      successToast("Success", "User Registered");
    },
    onError: (err) => {
      errorToast("Failed", err.message);
    },
  });
};

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation<LoginResponse | undefined, Error, LoginPayload>({
    mutationFn: (data: LoginPayload) => loginUser(data),
    onSuccess: (data) => {
      successToast("Success", "Login Successful");

      if (data) {
        dispatch(
          setTokens({
            accessToken: data?.data.accessToken,
            refreshToken: data?.data.refreshToken,
          })
        );
      }
    },
    onError: (err) => {
      errorToast("Failed", err.message);
    },
  });
};
