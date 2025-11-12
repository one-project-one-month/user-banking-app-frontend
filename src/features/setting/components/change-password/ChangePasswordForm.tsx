"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import FormTextInput from "@/components/common/form-inputs/FormTextInput";
import { useChangePassword } from "@/queries/users.query";
import type { ChangePasswordPayload } from "@/types/User";
import Spinner from "@/components/common/Spinner";
import { errorToast } from "@/lib/helper/customToasts";

const ChangePasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
        "Password must contain uppercase, lowercase, and a number"
      ),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ChangePasswordValues = z.infer<typeof ChangePasswordSchema>;

function ChangePasswordForm() {
  const form = useForm<ChangePasswordValues>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { mutate: changePassword, isPending } = useChangePassword();

  const onSubmit = (values: ChangePasswordValues) => {
    if (values.currentPassword === values.newPassword) {
      errorToast(
        "Password Unchanged",
        "Your new password cannot be the same as your current one."
      );

      return;
    }

    const payload: ChangePasswordPayload = {
      oldPassword: values.currentPassword,
      newPassword: values.newPassword,
    };

    changePassword(payload);
  };

  return (
    <div className="max-w-md w-full h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="py-6 md:py-0 flex flex-col justify-between h-full"
        >
          <div>
            <FormTextInput
              name="currentPassword"
              label="Current Password"
              type="password"
              placeholder="Enter current password"
              form={form}
              wrapperClass="mb-6"
              className="py-6"
              labelClass="mb-2 text-base text-black-preal-700"
              required
            />

            <FormTextInput
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="Enter new password"
              form={form}
              wrapperClass="mb-6"
              className="py-6"
              labelClass="mb-2 text-base text-black-preal-700"
              required
            />

            <FormTextInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm new password"
              form={form}
              wrapperClass="mb-8"
              className="py-6"
              labelClass="mb-2 text-base text-black-preal-700"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full py-5 flex gap-6 text-base"
          >
            <span>Update Password</span>
            {isPending && <Spinner size="w-3 h-3" />}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ChangePasswordForm;
