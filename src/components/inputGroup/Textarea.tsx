"use client";

import { useState, ChangeEvent, InputHTMLAttributes } from "react";
import { VALIDATION } from "./validation";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({ label, ...props }: InputProps) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value.trim();
    setValue(newValue);

    // 유효성 검사
    const regex = new RegExp(VALIDATION["textarea"].pattern);
    const isValidInput = regex.test(newValue);
    setIsValid(isValidInput);
  };

  return (
    <>
      <label htmlFor="textarea">{label}</label>
      <div
        aria-invalid={!isValid}
        className={`border ${
          !isValid
            ? "border-pink-500 text-pink-600" // invalid 상태일 때
            : "border-gray-300 focus-within:border-sky-500" // 기본 상태
        } rounded-md shadow-sm transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-sky-500`}
      >
        <textarea
          value={value}
          name="textarea"
          onChange={handleChange}
          pattern={VALIDATION["textarea"].pattern}
          {...props}
        />
      </div>
      {!isValid && (
        <p className="text-pink-600">{VALIDATION["textarea"].message}</p>
      )}
    </>
  );
}
