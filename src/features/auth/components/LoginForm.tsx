import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormTextInput from "@/components/common/form-inputs/FormTextInput";
import { useLogin } from "@/queries/auth.query";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

type LoginFormProps = {
  onSubmit: () => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutateAsync: login, isPending } = useLogin();

  const handleLogin = async (data: LoginFormValues) => {
    await login(data);
    onSubmit();
  };

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 w-full">
        <FormTextInput
          name="username"
          label="Username"
          placeholder="Enter your name"
          form={form}
          wrapperClass="mb-4"
          className="py-6"
          labelClass="text-black-pearl-700"
        />

        <FormTextInput
          name="password"
          label="Password"
          placeholder="Enter your password"
          form={form}
          type="password"
          wrapperClass="mb-4"
          className="py-6"
          labelClass="text-black-pearl-700"
        />

        <Button type="submit" className="w-full py-6" disabled={isSubmitting}>
          {isPending ? "Signing in..." : "Continue"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
