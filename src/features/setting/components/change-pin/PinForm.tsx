import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormPinInput from "@/components/common/form-inputs/FormPinInput";
import Spinner from "@/components/common/Spinner";

const pinSchema = z.object({
  pin: z
    .string()
    .min(4, "PIN must be at least 4 digits")
    .max(6, "PIN must not exceed 6 digits")
    .regex(/^\d+$/, "PIN must contain only numbers"),
});

type PinFormValues = z.infer<typeof pinSchema>;

type PinFormProps = {
  onSubmit: (data: PinFormValues) => void;
  isLoading?: boolean;
  actionLabel?: string;
  title?: string;
};

function PinForm({ onSubmit, isLoading, actionLabel, title }: PinFormProps) {
  const form = useForm<PinFormValues>({
    resolver: zodResolver(pinSchema),
    defaultValues: { pin: "" },
  });

  const handleSubmit = (data: PinFormValues) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col justify-center p-5  items-center gap-6"
      >
        <FormPinInput
          form={form}
          name="pin"
          label={title}
          length={6}
          mask
          wrapperClass="w-full"
        />

        <Button type="submit" className="w-full py-6">
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              loading...
              <Spinner className="w-5 h-5" />
            </span>
          ) : (
            actionLabel ?? "Verify PIN"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default PinForm;
