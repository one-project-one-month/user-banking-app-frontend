import React from "react";

type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  label: string;
  options: Option[] | string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  error,
}) => {
  const normalizedOptions: Option[] = Array.isArray(options)
    ? typeof options[0] === "string"
      ? (options as string[]).map((opt) => ({ label: opt, value: opt }))
      : (options as Option[])
    : [];

  return (
    <div className="input-group">
      <label className="font-medium md:text-base text-sm">{label}</label>
      <div className="flex gap-4">
        {normalizedOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-4">
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
