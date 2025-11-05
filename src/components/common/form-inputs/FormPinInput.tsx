import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

type FormPinInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  length?: number;
  mask?: boolean;
  wrapperClass?: string;
  labelClass?: string;
  inputClass?: string;
};

function FormPinInput<T extends FieldValues>({
  form,
  name,
  label = "Enter PIN",
  length = 4,
  mask = false,
  wrapperClass,
  labelClass,
  inputClass,
}: FormPinInputProps<T>) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only digits
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    const joined = newValues.join("");
    form.setValue(name, joined as any);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, length);
    if (!/^[0-9]+$/.test(paste)) return;
    const arr = paste.split("").concat(Array(length).fill("")).slice(0, length);
    setValues(arr);
    form.setValue(name, arr.join("") as any);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={cn("flex flex-col", wrapperClass)}>
          {label && (
            <FormLabel className={cn("text-neutral-800 mb-2", labelClass)}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            <div className="flex gap-3 justify-center">
              {Array.from({ length }).map((_, i) => (
                <Input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={mask && values[i] ? "•" : values[i]}
                  ref={(el) => {
                    if (el) inputsRef.current[i] = el;
                  }}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={handlePaste}
                  className={cn(
                    "text-center text-xl font-semibold w-12 h-12 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all",
                    inputClass
                  )}
                />
              ))}
            </div>
          </FormControl>
          <FormMessage className="text-xs text-center" />
        </FormItem>
      )}
    />
  );
}

export default FormPinInput;
