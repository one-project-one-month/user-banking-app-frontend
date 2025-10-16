import { cn } from "@/lib/utils";

interface NoteInputProps {
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  minHeight?: number;
  className?: string;
}

export default function NoteInput({
  label = "Note",
  name = "note",
  value,
  placeholder = "Write something...",
  onChange,
  minHeight = 120,
  className = "",
}: NoteInputProps) {
  return (
    <div className={cn("w-full", className)}>
      {label && <h1 className="mb-2 font-semibold">{label}</h1>}
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`border w-full rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-pearl-300`}
        style={{ minHeight }}
      />
    </div>
  );
}
