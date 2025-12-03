import React, { useCallback, useMemo, useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LicenseForm from "../components/LicenseUpload";
import PassportForm from "../components/PassportForm";
import FaceScanForm from "../components/FaceScanForm";
import EmailVeriflyForm from "../components/EmailVeriflyForm";
import MobileHeader from "@/components/core/MobileHeader";
import {
  useRegisterUser,
  useVerifyEmail,
  useVerifyOTP,
} from "@/queries/auth.query";
import OtpVerifyForm from "../components/OTPVerifyForm";
import type { PersonalDetailPayload } from "@/types/Auth";
import { useNavigate } from "react-router-dom";

type Step =
  | "verify-email"
  | "otp-verify"
  | "register"
  | "license"
  | "passport"
  | "webcam";

type FormData = {
  fullName: string;
  gender: string;
  nationality: string;
  idType: string;
  year: string;
  month: string;
  day: string;
};

type LicenseData = {
  frontPhoto: File;
  backPhoto: File;
};

type PassportData = {
  frontPhoto: File;
  backPhoto: File;
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<Step>("verify-email");
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const [userData, setUserData] = useState<FormData | null>(null);
  const [idPhotos, setIdPhotos] = useState<LicenseData | PassportData | null>(
    null
  );

  const { mutateAsync: verify, isPending } = useVerifyEmail();
  const { mutateAsync: verifyOTP, isPending: isVerifyOTPPending } =
    useVerifyOTP();
  const { mutateAsync: register, isPending: registerPending } =
    useRegisterUser();

  const goToStep = useCallback((step: Step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleVerify = useCallback(
    async (value: { email: string }) => {
      await verify(value);
      setEmail(value.email);
      // const res2 = await verifyOTP({ email: value.email, otp: res?.data });
      // console.log(res2);
      // setToken(res2?.data?.verificationToken);
      // console.log(token);
      goToStep("otp-verify");
    },
    [goToStep]
  );

  const handleOtpVerify = useCallback(
    async (data: { otp: string }) => {
      const res = await verifyOTP({ email: email ?? "", otp: data.otp });
      setToken(res?.data?.verificationToken ?? "");
      goToStep("register");
    },
    [goToStep, email]
  );

  const handleRegisterSubmit = useCallback(
    async (data: PersonalDetailPayload) => {
      await register({ ...data, verificationToken: token ?? "" });
      // goToStep(data.kycType === "License" ? "license" : "passport");
      navigate("/auth/waiting");
    },
    [goToStep, token]
  );

  const handleLicenseSubmit = useCallback(
    (licenseData: LicenseData) => {
      setIdPhotos(licenseData);
      goToStep("webcam");
    },
    [goToStep]
  );

  const handlePassportSubmit = useCallback(
    (passportData: PassportData) => {
      setIdPhotos(passportData);
      goToStep("webcam");
    },
    [goToStep]
  );

  const handleFaceScanSubmit = useCallback(
    (photoData: Blob) => {
      const payload = {
        userData,
        idPhotos,
        faceScanBlob: photoData,
      };
      console.log("🟢 Final payload ready:", payload);
    },
    [userData, idPhotos]
  );

  const titles = useMemo(
    () => ({
      "verify-email": "Email Verify",
      "otp-verify": "OTP Verification",
      register: "Personal Details",
      license: "Add Photo of Your License",
      passport: "Add Photo of Your Passport",
      webcam: "Verify with a Scan",
    }),
    []
  );

  const subtitles = useMemo(
    () => ({
      "verify-email": "Verify your email address",
      "otp-verify": "Enter the code sent to your email",
      register: "Tell us about you",
      license: "Tell us about you",
      passport: "Tell us about you",
      webcam: "Turn your head left and right",
    }),
    []
  );

  const title = titles[currentStep];
  const subtitle = subtitles[currentStep];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[400px] text-black-pearl-700 md:bg-white md:rounded-lg md:shadow-lg p-5 mx-auto">
        <MobileHeader
          title={title}
          className="bg-transparent md:block p-0 text-black-pearl-700"
          isShowBackIcon={false}
        />
        <p className="text-xs sm:text-sm text-gray-500 mb-8 text-center">
          {subtitle}
        </p>

        {currentStep === "verify-email" && (
          <EmailVeriflyForm handleSubmit={handleVerify} isPending={isPending} />
        )}

        {currentStep === "otp-verify" && (
          <OtpVerifyForm
            onSubmit={handleOtpVerify}
            otp={null}
            isLoading={isVerifyOTPPending}
          />
        )}

        {currentStep === "register" && (
          <RegisterForm
            onSubmit={handleRegisterSubmit}
            isLoading={registerPending}
          />
        )}

        {currentStep === "license" && (
          <LicenseForm
            onSubmit={handleLicenseSubmit}
            onBack={() => goToStep("register")}
          />
        )}

        {currentStep === "passport" && (
          <PassportForm
            onSubmit={handlePassportSubmit}
            onBack={() => goToStep("register")}
          />
        )}

        {currentStep === "webcam" && (
          <FaceScanForm
            onBack={() =>
              goToStep(userData?.idType === "License" ? "license" : "passport")
            }
            onSubmit={handleFaceScanSubmit}
            onContinue={() => console.log("Continue pressed after scan")}
          />
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
