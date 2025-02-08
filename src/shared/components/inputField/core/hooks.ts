import { useState, useEffect } from "react";
import {
  InputType,
  UseInputFieldProps,
  FieldStatus,
  InputErrorType,
} from "./types";

// 입력 필드 유효성 검사 훅
export const useInputFieldValidation = ({
  value,
  validate,
  isRequired = false,
}: UseInputFieldProps) => {
  const [fieldStatus, setFieldStatus] = useState<FieldStatus>({
    // todo: isEmpty + isValid로 해보기
    isFocused: false, // 한 번이라도 포커스 되었었으면 true
    isEmpty: value === "" ? true : false,
    isValid: false, // todo: 보완이 필요해보임
    errorType: "none",
  });

  const validateField = (value: string) => {
    const isEmpty = value === "";
    const isValid = validate ? validate(value) : true;

    return { isEmpty, isValid };
  };

  const handleFocus = () => {
    const { isEmpty, isValid } = validateField(value);

    setFieldStatus((prev) => ({
      ...prev,
      isFocused: true,
      isEmpty,
      isValid,
    }));
  };

  // value가 변경될 때마다 유효성 검사 상태 업데이트
  useEffect(() => {
    const { isEmpty, isValid } = validateField(value);

    setFieldStatus((prev) => ({
      ...prev,
      isEmpty,
      isValid,
    }));
  }, [value]);

  // errorType 결정
  useEffect(() => {
    let errorType: InputErrorType = "none";

    if (fieldStatus.isEmpty && isRequired) {
      errorType = "empty";
    } else if (!fieldStatus.isValid && (isRequired || !fieldStatus.isEmpty)) {
      errorType = "invalid";
    }

    setFieldStatus((prev) => ({
      ...prev,
      errorType,
    }));
  }, [fieldStatus.isValid, fieldStatus.isEmpty]);

  return { fieldStatus, handleFocus };
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
