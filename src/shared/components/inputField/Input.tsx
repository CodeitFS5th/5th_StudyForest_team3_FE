"use client";

import Image from "next/image";
import visibilityOnIcon from "@/assets/images/icon/btn_visibility_on_24px.png";
import visibilityOffIcon from "@/assets/images/icon/btn_invisibility_on_24px.png";
import { InputProps } from "./core/types";
import {
  useInputPasswordVisibility,
  useInputFieldValidation,
} from "./core/hooks";

const inputStyleClassName = {
  common:
    "w-full h-[48px] p-[20px] border-[1px] outline-none rounded-[15px] placeholder-custom-color-black-300 text-[16px] font-[400] disabled:text-custom-color-black-300",
  nonFocus: {
    basic: "border-custom-color-black-200 text-custom-color-black-400",
    error: "border-custom-color-red-200 text-custom-color-red-200",
  },
  focus: {
    basic: "focus:border-[2px] focus:border-custom-color-text-green",
    error: "focus:border-[2px] focus:border-custom-color-red-200",
  },
};

const Input = ({
  name,
  type,
  value = "",
  placeholder,
  invalidErrorMessage,
  isRequired = false,
  validate,
  onChange,
  ...props
}: InputProps) => {
  // input 상태 관리 - useInputField 커스텀 훅 사용
  const { validationStatus } = useInputFieldValidation({
    value,
    validate: validate ?? (() => true),
    isRequired,
  });

  // 비밀번호 보기/숨김 기능 - useInputPasswordVisibility 커스텀 훅 사용
  const { inputType, isInputVisible, toggleVisibility } =
    useInputPasswordVisibility(type);

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
          value={value}
          onChange={onChange}
          required={isRequired}
          {...props}
          className={`
            ${inputStyleClassName.common}
            ${
              inputStyleClassName.nonFocus[
                validationStatus.errorType !== "none" ? "error" : "basic"
              ]
            }
            ${
              inputStyleClassName.focus[
                validationStatus.errorType !== "none" ? "error" : "basic"
              ]
            }
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
      {validationStatus.errorType === "empty" && (
        <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
          *필수 입력 값입니다
        </p>
      )}
      {validationStatus.errorType === "invalid" && (
        <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
          *{invalidErrorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
