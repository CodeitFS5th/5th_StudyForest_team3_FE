import { useState, useEffect } from "react";
import {
  InputType,
  UseInputFieldProps,
  FieldStatus,
  InputErrorType,
} from "./types";

// 입력 필드 상태 관리
export const useInputField = ({
  initialValue = "",
  validate,
  isRequired = false,
}: UseInputFieldProps) => {
  const [fieldStatus, setFieldStatus] = useState<FieldStatus>({
    value: initialValue,
    isFocused: false, // 한 번이라도 포커스 되었었으면 true
    isEmpty: initialValue === "" ? true : false,
    isValid: false, // 보완이 필요해보임
    errorType: "none",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    const isEmpty = newValue === "";
    const isValid = validate ? validate(newValue) : true;

    setFieldStatus((prev) => ({
      ...prev,
      value: newValue,
      isEmpty,
      isValid,
    }));
  };

  const handleFocus = () => {
    const isEmpty = fieldStatus.value === "";
    const isValid = validate ? validate(fieldStatus.value) : true;

    setFieldStatus((prev) => ({
      ...prev,
      isFocused: true,
      isEmpty,
      isValid,
    }));
  };

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
  }, [fieldStatus.value, fieldStatus.isValid, fieldStatus.isEmpty]);

  return { fieldStatus, handleChange, handleFocus };
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
