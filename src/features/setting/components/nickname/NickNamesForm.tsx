import FormFloatinglabelInput from "@/components/common/form-inputs/FormFloatingLabelInput";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import type { Nickname } from "@/types/User";
import { useCreateNickname, useUpdateNickname } from "@/queries/users.query";
import Spinner from "@/components/common/Spinner";

const NickNamesSchema = z.object({
  accountNumber: z.string(),
  nickName: z
    .string()
    .min(2, "Nickname must be at least 2 characters long")
    .max(30, "Nickname is too long"),
});

type NickNamesFormValue = z.infer<typeof NickNamesSchema>;

type NickNamesFormProps = {
  formData: Nickname | null;
};

function NickNamesForm({ formData }: NickNamesFormProps) {
  const form = useForm<NickNamesFormValue>({
    resolver: zodResolver(NickNamesSchema),
    defaultValues: {
      accountNumber: formData ? String(formData?.toAccountDetail?.id) : "",
      nickName: formData?.nickname ?? "",
    },
  });

  const { mutate: update, isPending: isUpdatePending } = useUpdateNickname();
  const { mutate: create, isPending: isCreatePending } = useCreateNickname();

  const onSubmit = (values: NickNamesFormValue) => {
    let payload;

    if (formData?.id) {
      payload = {
        id: formData.id,
        toAccountId: values.accountNumber,
        nickName: values.nickName,
      };

      update(payload);
      return;
    }

    payload = {
      toAccountId: values.accountNumber,
      nickname: values.nickName,
    };
    create(payload);
    return;
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold text-black-pearl-700 mb-2">
        Set Nickname
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Assign a nickname to your frequently used transfer account.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormFloatinglabelInput
            name="accountNumber"
            label="Account Number"
            placeholder="Enter account number"
            form={form}
            wrapperClass="mb-6"
            type={formData ? "hidden" : "text"}
            labelClass={`${formData && "hidden"}`}
          />
          <FormFloatinglabelInput
            name="nickName"
            label="Nickname"
            placeholder="Enter nickname"
            labelClass=""
            form={form}
            wrapperClass="mb-6"
          />

          <Button
            type="submit"
            disabled={isUpdatePending || isCreatePending}
            className="w-full flex justify-center items-center gap-5"
          >
            <span>{!formData ? "Save" : "Save Changes"}</span>
            {isUpdatePending || (isCreatePending && <Spinner />)}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default NickNamesForm;
