import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormTextInput from "@/components/common/form-inputs/FormTextInput";
import FormTextAreaInput from "@/components/common/form-inputs/FormTextAreaInput";
import { useNavigate } from "react-router-dom";

const QRReceiveAmountSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  note: z.string().optional(),
});

type QRReceiveAmountFormValue = z.infer<typeof QRReceiveAmountSchema>;

type QRToRecieveAmountSetupFormProps = {
  handleDialogOnGenerate: (value: {
    amount: number;
    note?: string;
  }) => Promise<void>;
  loading?: boolean;
};

function QRToRecieveAmountSetupForm({
  handleDialogOnGenerate,
  loading,
}: QRToRecieveAmountSetupFormProps) {
  const form = useForm<QRReceiveAmountFormValue>({
    resolver: zodResolver(QRReceiveAmountSchema),
    defaultValues: {
      amount: "",
      note: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (values: QRReceiveAmountFormValue) => {
    handleDialogOnGenerate({
      amount: Number(values.amount),
      note: values.note,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-black-pearl-700 mb-2">
        Set Receive Amount
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Specify the amount you want to receive. Optionally, you can add a note
        for reference.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-black-pearl-700 space-y-5"
        >
          <FormTextInput
            name="amount"
            label="Amount"
            placeholder="Enter amount"
            form={form}
            wrapperClass="mb-4"
            className="py-7"
          />

          <FormTextAreaInput
            name="note"
            label="Note (Optional)"
            placeholder="Add a note or description"
            form={form}
            wrapperClass="mb-4"
            className="h-24"
          />

          <div className="grid grid-cols-2 gap-2 w-full">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              type="button"
              className="py-5 w-full"
            >
              Go Back
            </Button>
            <Button type="submit" disabled={loading} className="py-5 w-full">
              Generate QR
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default QRToRecieveAmountSetupForm;
