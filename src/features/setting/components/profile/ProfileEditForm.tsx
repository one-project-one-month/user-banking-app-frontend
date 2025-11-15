import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormTextInput from "@/components/common/form-inputs/FormTextInput";
import FormDateInput from "@/components/common/form-inputs/FormDateInput";
import FormSelectInput from "@/components/common/form-inputs/FormSelectInput";
import { Button } from "@/components/ui/button";
import FormTextAreaInput from "@/components/common/form-inputs/FormTextAreaInput";
import type { UserInfo } from "@/types/User";
import { useGetTemplates } from "@/queries/auth.query";
import { useUpdateUser } from "@/queries/users.query";

const ProfileEditSchema = z.object({
  fullname: z.string(),
  email: z.email(),
  dateOfBirth: z.string(),
  genderId: z.string(),
  nationalityId: z.string(),
  phoneNumber: z.string(),
  address: z.string().min(5, "Address is required"),
});

type ProfileEditFormValue = z.infer<typeof ProfileEditSchema>;

type ProfileEditFormProps = {
  userInfo?: UserInfo;
};

function ProfileEditForm({ userInfo }: ProfileEditFormProps) {
  const form = useForm<ProfileEditFormValue>({
    resolver: zodResolver(ProfileEditSchema),
    defaultValues: {
      fullname: userInfo?.fullname ?? "",
      email: userInfo?.email ?? "",
      dateOfBirth: userInfo?.dateOfBirth ?? "",
      genderId: String(userInfo?.gender?.id) ?? "",
      nationalityId: String(userInfo?.nationality?.id) ?? "",
      phoneNumber: userInfo?.phoneNumber ?? "",
      address: userInfo?.address,
    },
  });

  const { data: templates, isLoading: isTemplateLoading } = useGetTemplates();
  const { mutate: update, isPending } = useUpdateUser();

  const onSubmit = (values: ProfileEditFormValue) => {
    const payload = {
      fullname: values.fullname,
      dateOfBirth: values.dateOfBirth,
      genderId: Number(values.genderId),
      nationalityId: Number(values.nationalityId),
      phoneNumber: values.phoneNumber,
      address: values.address,
    };

    update(payload);
  };

  return (
    <div className="h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-black-pearl-700 h-full flex md:block flex-col justify-between"
        >
          <div className="md:grid grid-cols-2 gap-3">
            <FormTextInput
              name="fullname"
              label="Full Name"
              placeholder="Full Name"
              form={form}
              wrapperClass="mb-4"
              className="py-7"
              disabled
            />
            <FormTextInput
              name="email"
              label="Email"
              placeholder="Email"
              form={form}
              wrapperClass="mb-4"
              className="py-7"
              disabled
            />
            <FormDateInput
              name="dateOfBirth"
              label="Date of Birth"
              type="date"
              placeholder="Select date of birth"
              form={form}
              wrapperClass="mb-4"
              minDate={new Date("1950-01-01")}
              maxDate={new Date()}
              className="py-7"
              isDisable
            />
            <FormSelectInput
              name="genderId"
              label="Gender"
              placeholder="Choose your gender"
              form={form}
              defaultValue="1"
              options={
                templates?.genderOptions?.map((t) => {
                  return { label: t.name, value: t.id };
                }) ?? []
              }
              wrapperClass="mb-4"
              className="py-7"
            />
            <FormSelectInput
              name="nationalityId"
              label="Nationality"
              placeholder="Select nationality"
              form={form}
              defaultValue="1"
              options={
                templates?.nationalityOptions?.map((t) => {
                  return { label: t.name, value: t.id };
                }) ?? []
              }
              wrapperClass="mb-4"
              className="py-7"
            />
            <FormTextInput
              name="phoneNumber"
              label="PhoneNumber"
              placeholder="Enter Phone number"
              form={form}
              wrapperClass="mb-4"
              className="py-7"
            />
            <FormTextAreaInput
              name="address"
              label="Address"
              placeholder="Enter your address"
              form={form}
              wrapperClass="col-span-2 mb-4"
              className="h-28"
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full py-6 mt-4"
          >
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ProfileEditForm;
