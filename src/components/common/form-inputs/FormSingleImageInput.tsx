import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CloudUpload, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import type { ComponentProps, HTMLInputTypeAttribute, ReactNode } from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type FormSingleImageInputProps<T extends FieldValues> = Omit<
  ComponentProps<"input">,
  "form" | "input"
> & {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string | ReactNode;
  wrapperClass?: string;
  labelClass?: string;
  disabled?: boolean;
  defaultFile?: string;
};

function FormSingleImageInput<T extends FieldValues>({
  form,
  name,
  label,
  wrapperClass,
  labelClass,
  disabled = false,
  defaultFile,
  ...props
}: FormSingleImageInputProps<T>) {
  const [file, setFile] = useState<File | string | null>(defaultFile || null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Generate preview URL if file is File object
  useEffect(() => {
    if (file && typeof file !== "string") {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof file === "string") {
      setPreviewUrl(file);
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [] },
    multiple: false,
    disabled,
    noClick: true,
    onDrop: (dropped) => {
      if (disabled) return;
      const selected = dropped[0];
      setFile(selected);
      form.setValue(name, selected as any, { shouldDirty: true });
    },
  });

  const handleClear = () => {
    if (disabled) return;
    setFile(null);
    form.setValue(name, null as any, { shouldDirty: true });
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={cn("w-full", wrapperClass)}>
          <FormLabel className={cn("text-neutral-800", labelClass)}>
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={cn(
                "relative border-2 border-dashed rounded-lg h-64 flex justify-center items-center transition-colors",
                isDragActive && "border-primary",
                disabled && "bg-muted/50 cursor-not-allowed",
                !previewUrl && "cursor-pointer"
              )}
            >
              <input
                {...getInputProps()}
                disabled={disabled}
                className="hidden"
              />

              {previewUrl ? (
                <div className="relative w-full h-full">
                  <img
                    onClick={open}
                    src={previewUrl}
                    alt="Preview"
                    className="object-cover w-full h-full rounded"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Dialog
                      open={isPreviewOpen}
                      onOpenChange={setIsPreviewOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0">
                        <img
                          src={previewUrl}
                          alt="Full preview"
                          className="object-contain w-full rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>

                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClear();
                      }}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={open}
                  className="flex flex-col items-center justify-center text-neutral-400"
                >
                  <CloudUpload size={50} className="mb-2" />
                  <p>Click or drag & drop to upload</p>
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}

export default FormSingleImageInput;
