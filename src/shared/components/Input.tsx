"use client";

import React, { useState } from "react";
import visibilityOnIcon from "@/assets/icons/ic_visibility_on.png";
import visibilityOffIcon from "@/assets/icons/ic_visibility_off.png";
import Image from "next/image";

type InputType = "text" | "password" | "email" | "number";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: InputType;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  isError,
  errorMessage,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);
  const [isVisible, setIsVisible] = useState(false);

  const clickVisibilityIcon = () => {
    setIsVisible(() => !isVisible);
    setInputType(() => (inputType === "password" ? "text" : "password"));
  };

  return (
    <div className="w-full">
      {label && (
        <p className="mb-[16px] text-[#414141] text-[18px] font-[600]">
          {label}
        </p>
      )}
      <div className="w-full relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
          className={`
            w-full h-[48px] p-[20px]
            border-[1px] outline-none rounded-[15px]
            text-[#414141] placeholder-[#818181]
            text-[16px] font-[400]
            
            // error 스타일
            ${isError ? "border-[#C41013]" : "border-[#DDDDDD]"}
          `}
        />
        {type === "password" && (
          <button
            onClick={clickVisibilityIcon}
            className="absolute right-[20px] top-[50%] -translate-y-1/2"
          >
            <Image
              src={isVisible ? visibilityOnIcon : visibilityOffIcon}
              alt={isVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {isError && (
        <p className="text-[#C41013] text-[14px] mt-[8px]">*{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
