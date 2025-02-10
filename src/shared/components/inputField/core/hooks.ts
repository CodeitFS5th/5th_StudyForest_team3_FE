import { useState, useEffect } from "react";
import {
  InputType,
  UseInputFieldValidationProps,
  InputFieldValidationProps,
  InputErrorType,
} from "./types";

// 입력 필드 유효성 검사 훅
export const useInputFieldValidation = ({
  value,
  validate,
  isRequired = false,
}: UseInputFieldValidationProps) => {
  const [validationStatus, setValidationStatus] =
    useState<InputFieldValidationProps>({
      isEmpty: value === "" ? true : false,
      isValid: validate ? validate(value) : true,
      errorType: "none",
    });

  const validateField = (value: string) => {
    const isEmpty = value === "";
    const isValid = validate ? validate(value) : true;

    return { isEmpty, isValid };
  };

  // value가 변경될 때마다 유효성 검사 상태 업데이트
  useEffect(() => {
    const { isEmpty, isValid } = validateField(value);

    setValidationStatus((prev) => ({
      ...prev,
      isEmpty,
      isValid,
    }));
  }, [value]);

  // errorType 결정
  useEffect(() => {
    let errorType: InputErrorType = "none";

    if (validationStatus.isEmpty && isRequired) {
      errorType = "empty";
    } else if (
      !validationStatus.isValid &&
      (isRequired || !validationStatus.isEmpty)
    ) {
      errorType = "invalid";
    }

    setValidationStatus((prev) => ({
      ...prev,
      errorType,
    }));
  }, [validationStatus.isValid, validationStatus.isEmpty]);

  return { validationStatus };
};

// input type이 password일 경우 비밀번호 보이기/숨김 기능 훅
export const useInputPasswordVisibility = (initialType: InputType) => {
  const [inputType, setInputType] = useState<InputType>(initialType);
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsInputVisible(() => !isInputVisible);
    setInputType(() => (inputType === "password" ? "text" : "password"));
  };

  return { inputType, isInputVisible, toggleVisibility };
};
