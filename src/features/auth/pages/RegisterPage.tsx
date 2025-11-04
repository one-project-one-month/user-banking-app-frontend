import React, { useCallback, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";
import LicenseForm from "../components/LicenseUpload";
import PassportForm from "../components/PassportForm";
import FaceScanForm from "../components/FaceScanForm";
import EmailVeriflyForm from "../components/EmailVeriflyForm";
import MobileHeader from "@/components/core/MobileHeader";
import { useRegisterUser, useVerifyEmail } from "@/queries/auth.query";

type Step = "verify-email" | "register" | "license" | "passport" | "webcam";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<FormData | null>(null);
  const [idPhotos, setIdPhotos] = useState<LicenseData | PassportData | null>(
    null
  );

  const currentStep = (searchParams.get("step") as Step) || "verify-email";

  const { mutateAsync: verify, isPending } = useVerifyEmail();
  const { mutateAsync: register, isPending: registerPending } =
    useRegisterUser();

  const goToStep = useCallback(
    (step: Step) => {
      setSearchParams({ step });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setSearchParams]
  );

  const handleVerify = useCallback(
    async (value: { email: string }) => {
      // await verify(value);
      goToStep("register");
    },
    [goToStep]
  );

  const handleRegisterSubmit = useCallback(
    async (data: FormData) => {
      const dob = `${data.year.padStart(4, "0")}-${data.month.padStart(
        2,
        "0"
      )}-${data.day.padStart(2, "0")}`;

      const payload = {
        fullname: data.fullName,
        verificationToken: "sfsddf",
        dateOfBirth: dob,
        genderId: parseInt(data.gender),
        nationalityId: parseInt(data.nationality),
        kycType: data.idType,
        kycData: data.fullName, // Example placeholder
      };

      // await register(payload);

      setUserData(data);
      goToStep(data.idType === "License" ? "license" : "passport");
    },
    [goToStep]
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

  /** ✅ Derived titles */
  const titles = useMemo(
    () => ({
      "verify-email": "Email Verify",
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

        {currentStep === "register" && (
          <RegisterForm onSubmit={handleRegisterSubmit} />
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
