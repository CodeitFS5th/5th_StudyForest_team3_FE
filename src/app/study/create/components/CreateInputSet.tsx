"use client";

import { ChangeEvent } from "react";
import Input from "@/components/inputField/Input";
import { InputType } from "@/components/inputField/core/types";

interface Props {
  label: string;
  inputType: InputType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  isRequired?: boolean;
  validate?: (value: string) => Error | boolean;
}

export default function CreateInputSet({
  label,
  inputType,
  value,
  onChange,
  placeholder,
  className,
  isRequired,
  validate,
}: Props) {
  return (
    <div className={`mt-4 font-semibold ${className}`}>
      <p className="mb-4">{label}</p>
      <Input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isRequired={isRequired}
        validate={validate}
      />
    </div>
  );
}
