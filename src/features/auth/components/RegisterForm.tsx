import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import FormSelectInput from "@/components/common/form-inputs/FormSelectInput";
import FormTextInput from "@/components/common/form-inputs/FormTextInput";
import { RadioGroup } from "@/components/ui/radio-group";
import type { PersonalDetailPayload } from "@/types/Auth";
import { useGetTemplates } from "@/queries/auth.query";

const registerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  genderId: z.string().min(1, "Gender is required"),
  nationalityId: z.string().min(1, "Nationality is required"),
  idType: z.string().min(1, "ID Type is required"),
  year: z
    .string()
    .min(4, "Year is required")
    .regex(/^\d{4}$/, "Enter a valid year"),
  month: z
    .string()
    .min(1, "Month is required")
    .regex(/^(0?[1-9]|1[0-2])$/, "Enter a valid month"),
  day: z
    .string()
    .min(1, "Day is required")
    .regex(/^(0?[1-9]|[12][0-9]|3[01])$/, "Enter a valid day"),
});

type FormValues = z.infer<typeof registerSchema>;

const genders = [
  { label: "Male", value: "1" },
  { label: "Female", value: "2" },
  { label: "Other", value: "3" },
];

const nationalities = [
  { label: "Myanmar", value: "1" },
  { label: "Thailand", value: "2" },
  { label: "Singapore", value: "3" },
  { label: "Malaysia", value: "4" },
  { label: "Indonesia", value: "5" },
  { label: "Philippines", value: "6" },
  { label: "Vietnam", value: "7" },
  { label: "Japan", value: "8" },
  { label: "South Korea", value: "9" },
  { label: "China", value: "10" },
];

const idTypes = ["License", "Passport"];

type RegisterFormProps = {
  onSubmit: (data: PersonalDetailPayload) => void;
  isLoading?: boolean;
};

const RegisterForm = ({ onSubmit, isLoading }: RegisterFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      genderId: "",
      nationalityId: "",
      idType: "",
      year: "",
      month: "",
      day: "",
    },
  });
  const { register: formRegister, formState } = form;
  const { errors } = formState;

  const { data: templates, isLoading: isTemplateLoading } = useGetTemplates();

  const handleSubmitForm = (data: FormValues) => {
    const { year, month, day } = data;
    const dob = `${year.padStart(4, "0")}-${month.padStart(
      2,
      "0"
    )}-${day.padStart(2, "0")}`;

    const payload: PersonalDetailPayload = {
      verificationToken: "",
      fullname: data.fullName,
      dateOfBirth: dob,
      genderId: Number(data.genderId),
      nationalityId: Number(data.nationalityId),
      kycType: data.idType,
      kycData: "",
    };

    onSubmit(payload);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-3"
      >
        <FormTextInput
          name="fullName"
          label="Full Name"
          placeholder="Full Name"
          form={form}
          wrapperClass="mb-4"
          className="py-6"
          labelClass="text-black-pearl-700"
        />

        <div>
          <Label className="font-medium mb-2">Date of Birth</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="YYYY"
              {...formRegister("year")}
              className="w-1/3 py-6"
            />
            <Input
              type="number"
              placeholder="MM"
              {...formRegister("month")}
              className="w-1/3 py-6"
            />
            <Input
              type="number"
              placeholder="DD"
              {...formRegister("day")}
              className="w-1/3 py-6"
            />
          </div>
          {(errors.year || errors.month || errors.day) && (
            <p className="text-xs text-red-500">
              {errors.year?.message ||
                errors.month?.message ||
                errors.day?.message}
            </p>
          )}
        </div>

        <FormSelectInput
          name="genderId"
          label="Gender"
          placeholder="Choose your gender"
          form={form}
          options={
            templates?.genderOptions?.map((t) => {
              return { label: t.name, value: t.id };
            }) ?? []
          }
          wrapperClass="mb-4"
          className="py-6"
        />

        <FormSelectInput
          name="nationalityId"
          label="Nationality"
          placeholder="Select your nationality"
          form={form}
          options={
            templates?.nationalityOptions?.map((t) => {
              return { label: t.name, value: t.id };
            }) ?? []
          }
          wrapperClass="mb-4"
          className="py-6"
        />

        <div>
          <RadioGroup
            label="ID Type"
            onChange={(val) => form.setValue("idType", val)}
            value={form.watch("idType")}
            options={idTypes}
          />
          {errors.idType && (
            <p className="text-xs text-red-500">{errors.idType.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="py-6 mt-2">
          {isLoading ? "Registering..." : "Continue"}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
