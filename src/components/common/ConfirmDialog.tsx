import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type ConfirmDialogProps = {
  trigger: React.ReactNode;
  title: string;
  description: string;
  actionLabel: string;
  onConfirm: () => void;
  onCancel?: () => void;
  isLoading?: boolean;
};

export default function ConfirmDialog({
  trigger,
  title,
  description,
  actionLabel,
  onConfirm,
  onCancel,
  isLoading,
}: ConfirmDialogProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {
    await onConfirm();
    setOpen(false);
  };

  const handleCancel = () => {
    onCancel?.();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-3">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700"
          >
            {isLoading ? "Processing..." : actionLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
