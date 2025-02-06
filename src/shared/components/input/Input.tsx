"use client";

import visibilityOnIcon from "@/assets/images/icon/btn_visibility_on_24px.png";
import visibilityOffIcon from "@/assets/images/icon/btn_invisibility_on_24px.png";
import Image from "next/image";
import { InputProps } from "@/shared/components/core/types";
import {
  useInputPasswordVisibility,
  useInputStatus,
} from "@/shared/components/core/hooks";

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  invalidErrorMessage,
  isRequired = false,
  validate,
  ...props
}) => {
  const { inputStatus, handleChange, handleFocus } = useInputStatus({
    initialValue: value,
    validate,
    isRequired,
  });

  const { inputType, isInputVisible, toggleVisibility } =
    useInputPasswordVisibility(type);

  const inputStyle = {
    basic:
      "border-[var(--color-custom-color-black-200)] text-[var(--color-custom-color-black-400)]",
    error:
      "border-[var(--color-custom-color-red-200)] text-[var(--color-custom-color-red-200)]",
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
          value={inputStatus.value}
          onChange={handleChange}
          onFocus={handleFocus}
          required={isRequired}
          {...props}
          className={`
            w-full h-[48px] p-[20px]
            border-[1px] outline-none rounded-[15px]
            placeholder-[var(--color-custom-color-black-300)] text-[16px] font-[400]

            ${
              inputStyle[
                inputStatus.isError && inputStatus.isFocused ? "error" : "basic"
              ]
            }
            
            // focus
            ${
              inputStatus.isError
                ? "focus:border-[2px] focus:border-[var(--color-custom-color-red-200)]"
                : "focus:border-[2px] focus:border-[var(--color-custom-color-text-green)]"
            }
            
            // disabled
            disabled:text-[var(--color-custom-color-black-300)]
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
              width={24}
              height={24}
            />
          </button>
        )}
        {isRequired && inputStatus.isBlank && (
          <p className="text-[var(--color-custom-color-red-200)] text-[14px] mt-[8px]">
            *필수 입력 값입니다
          </p>
        )}
        {!inputStatus.isBlank && !inputStatus.isValid && (
          <p className="text-[var(--color-custom-color-red-200)] text-[14px] mt-[8px]">
            *{invalidErrorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
