"use client";

import Image from "next/image";
import visibilityOnIcon from "@/assets/images/icon/btn_visibility_on_24px.png";
import visibilityOffIcon from "@/assets/images/icon/btn_invisibility_on_24px.png";
import { InputProps } from "./core/types";
import { useInputPasswordVisibility, useInputField } from "./core/hooks";

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  invalidErrorMessage,
  isRequired = false,
  validate,
  ...props
}) => {
  const { fieldStatus, handleChange, handleFocus } = useInputField({
    initialValue: "",
    validate: validate ?? (() => true),
    isRequired,
  });

  const { inputType, isInputVisible, toggleVisibility } =
    useInputPasswordVisibility(type);

  const inputStyle = {
    basic: "border-custom-color-black-200 text-custom-color-black-400",
    error: "border-custom-color-red-200 text-custom-color-red-200",
  };

  return (
    <div className="w-full">
      {name && (
        <label
          htmlFor={name}
          className="mb-[16px] text-custom-color-black-400 text-[18px] font-[600]"
        >
          {name}
        </label>
      )}
      <div className="w-full relative">
        <input
          type={inputType}
          id={name}
          name={name}
          placeholder={placeholder}
          value={fieldStatus.value}
          onChange={handleChange}
          onFocus={handleFocus}
          required={isRequired}
          {...props}
          className={`
            w-full h-[48px] p-[20px]
            border-[1px] outline-none rounded-[15px]
            placeholder-custom-color-black-300 text-[16px] font-[400]

            ${
              inputStyle[
                fieldStatus.errorType !== "none" && fieldStatus.isFocused
                  ? "error"
                  : "basic"
              ]
            }
            
            // focus
            ${
              fieldStatus.errorType !== "none"
                ? "focus:border-[2px] focus:border-custom-color-red-200"
                : "focus:border-[2px] focus:border-custom-color-text-green"
            }
            
            // disabled
            disabled:text-custom-color-black-300
          `}
        />
        {type === "password" && (
          <button
            onClick={toggleVisibility}
            className="absolute right-[20px] top-[50%] -translate-y-1/2 cursor-pointer peer-disabled:cursor-default peer-disabled:pointer-events-none"
          >
            <Image
              src={isInputVisible ? visibilityOnIcon : visibilityOffIcon}
              alt={isInputVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
              priority
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {fieldStatus.errorType === "empty" && fieldStatus.isFocused && (
        <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
          *필수 입력 값입니다
        </p>
      )}
      {fieldStatus.errorType === "invalid" && fieldStatus.isFocused && (
        <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
          *{invalidErrorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
