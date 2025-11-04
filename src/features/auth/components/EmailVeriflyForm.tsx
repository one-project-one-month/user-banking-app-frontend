import FormTextInput from "@/components/common/form-inputs/FormTextInput";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const EmailSchema = z.object({
  email: z.email(),
});

type EmailFormValue = z.infer<typeof EmailSchema>;

type EmailVeriflyFormProps = {
  handleSubmit: (value: EmailFormValue) => void;
  isPending?: boolean;
};

function EmailVeriflyForm({ handleSubmit, isPending }: EmailVeriflyFormProps) {
  const form = useForm<EmailFormValue>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormTextInput
          form={form}
          label="Enter your email"
          name="email"
          placeholder="Please enter your email"
          wrapperClass="mb-4"
          labelClass="mb-3 text-black-pearl-700"
          className="py-6 mb-8"
        />
        <Button type="submit" disabled={isPending} className="w-full py-6">
          {isPending ? <Spinner /> : "Continue"}
        </Button>
      </form>
    </Form>
  );
}

export default EmailVeriflyForm;
