"use client";

import Inko from "inko";
import { useState, ChangeEvent, InputHTMLAttributes } from "react";
import { VALIDATION } from "./validation";

const inko = new Inko();

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: "password" | "text" | "textarea";
  name: "password" | "nick" | "studyName" | "textarea";
}

export default function Input({ label, type, name, ...props }: InputProps) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const isPassword = type === "password";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    const newValue = isPassword ? inko.ko2en(inputValue) : inputValue;
    setValue(newValue);

    // 유효성 검사
    const regex = new RegExp(VALIDATION[name].pattern);
    const isValidInput = regex.test(newValue);
    setIsValid(isValidInput);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div
        aria-invalid={!isValid}
        className={`border ${
          !isValid
            ? "border-pink-500 text-pink-600" // invalid 상태일 때
            : "border-gray-300 focus-within:border-sky-500" // 기본 상태
        } rounded-md shadow-sm transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-sky-500`}
      >
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          pattern={VALIDATION[name].pattern}
          {...props}
          className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
        />
      </div>
      {!isValid && <p className="text-pink-600">{VALIDATION[name].message}</p>}
    </>
  );
}
