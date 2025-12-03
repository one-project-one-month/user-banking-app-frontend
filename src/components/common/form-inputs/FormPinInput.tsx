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
import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";

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

  const keypad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "x", "0"];

  // -------------------------------------------------
  // Manual Typing (each box)
  // -------------------------------------------------
  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    const joined = newValues.join("");
    form.setValue(name, joined as any, { shouldValidate: true });

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
    form.setValue(name, arr.join("") as any, { shouldValidate: true });
  };

  // -------------------------------------------------
  // Keypad Click
  // -------------------------------------------------
  const handleKeypadClick = (key: string) => {
    const current = values.join("");

    // delete
    if (key === "x") {
      const newPin = current.slice(0, -1);
      const newArr = newPin
        .split("")
        .concat(Array(length).fill(""))
        .slice(0, length);
      setValues(newArr);
      form.setValue(name, newPin as any, { shouldValidate: true });
      return;
    }

    // add digit
    if (current.length < length) {
      const newPin = current + key;
      const newArr = newPin
        .split("")
        .concat(Array(length).fill(""))
        .slice(0, length);
      setValues(newArr);
      form.setValue(name, newPin as any, { shouldValidate: true });
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={cn("flex flex-col items-center", wrapperClass)}>
          {label && (
            <FormLabel
              className={cn("text-neutral-800 mb-2 text-center", labelClass)}
            >
              {label}
            </FormLabel>
          )}

          {/* PIN boxes */}
          <FormControl>
            <div className="flex gap-3 justify-center mb-4">
              {Array.from({ length }).map((_, i) => (
                <Input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={mask && values[i] ? "•" : values[i]}
                  ref={(el) => el && (inputsRef.current[i] = el)}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={handlePaste}
                  disabled
                  className={cn(
                    "text-center text-xl font-semibold w-12 h-12 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all",
                    inputClass
                  )}
                />
              ))}
            </div>
          </FormControl>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs mt-2">
            {keypad.map((key) => (
              <Button
                key={key}
                type="button"
                variant="ghost"
                onClick={() => handleKeypadClick(key)}
                className={cn(
                  "text-lg py-6 rounded-full",
                  key === "x"
                    ? "bg-red-100 hover:bg-red-200 text-red-600"
                    : "bg-gray-200 hover:bg-gray-300 text-blue-950"
                )}
              >
                {key === "x" ? <Delete className="w-6 h-6" /> : key}
              </Button>
            ))}
          </div>

          <FormMessage className="text-xs text-center mt-2" />
        </FormItem>
      )}
    />
  );
}

export default FormPinInput;
