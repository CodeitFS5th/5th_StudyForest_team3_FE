"use client";

import { useState, useEffect, useRef } from "react";
import {
  InputType,
  UseInputFieldValidationProps,
  InputFieldValidationProps,
  InputErrorType,
} from "./types";
import { ZodError } from "zod";

export const useInputFieldValidation = ({
  value,
  validate,
  isRequired = false,
}: UseInputFieldValidationProps) => {
  const isFirstRender = useRef(true);

  const [validationStatus, setValidationStatus] =
    useState<InputFieldValidationProps>({
      isEmpty: !value,
      isValid: validate ? validate(value) === true : true,
      error: {
        type: "none",
        message: "",
      },
    });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    let errorType: InputErrorType = "none";
    let errorMessage = "";

    const isEmpty = !value;
    let isValid = true;

    if (isEmpty) {
      errorMessage = "필수 입력 값입니다.";
      errorType = isRequired ? "empty" : "none";
    } else if (validate) {
      const validateResult = validate(value);
      if (validateResult instanceof ZodError) {
        isValid = false;
        errorType = "invalid";
        errorMessage =
          validateResult.errors[0]?.message || "유효하지 않은 입력입니다.";
      } else {
        isValid = validateResult === true;
        if (!isValid) {
          errorType = "invalid";
          errorMessage = "유효하지 않은 입력입니다.";
        }
      }
    } else {
      isValid = true;
    }

    setValidationStatus((prev) =>
      prev.isEmpty === isEmpty &&
      prev.isValid === isValid &&
      prev.error.type === errorType &&
      prev.error.message === errorMessage
        ? prev
        : {
            isEmpty,
            isValid,
            error: { type: errorType, message: errorMessage },
          }
    );
  }, [value, isRequired, validate]);

  return { validationStatus };
};

// input type이 password일 경우 비밀번호 보이기/숨김 기능 훅
export const useInputPasswordVisibility = (initialType: InputType) => {
  const [inputType, setInputType] = useState<InputType>(initialType);
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsInputVisible(() => !inputType);
    setInputType(() => (inputType === "password" ? "text" : "password"));
  };

  return { inputType, isInputVisible, toggleVisibility };
};
