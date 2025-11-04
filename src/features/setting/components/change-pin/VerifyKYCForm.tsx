import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormSingleImageInput from "@/components/common/form-inputs/FormSingleImageInput";
import { useForm } from "react-hook-form";
import * as z from "zod";

const KycUploadSchema = z.object({
  frontPhoto: z
    .any()
    .refine((file) => file instanceof File, "Front photo is required"),
  backPhoto: z
    .any()
    .refine((file) => file instanceof File, "Back photo is required"),
});

type VerifyKYCFormValues = z.infer<typeof KycUploadSchema>;

type VerifyKYCFormProps = {
  onSubmit: (data: any) => Promise<void>;
  isLoading?: boolean;
};

const VerifyKYCForm: React.FC<VerifyKYCFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const form = useForm<VerifyKYCFormValues>({
    resolver: zodResolver(KycUploadSchema),
    defaultValues: {
      frontPhoto: null,
      backPhoto: null,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <FormSingleImageInput
            form={form}
            name="frontPhoto"
            label="Front Photo"
            wrapperClass="mb-4"
          />

          <FormSingleImageInput
            form={form}
            name="backPhoto"
            label="Back Photo"
            wrapperClass="mb-4"
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Continue"}
        </Button>
      </form>
    </Form>
  );
};

export default VerifyKYCForm;
