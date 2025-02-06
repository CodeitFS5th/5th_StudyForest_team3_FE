import { useState, useEffect } from "react";
import { InputType, UseInputFieldProps } from "@/shared/components/core/types";

// inputField 컴포넌트(Input, Textarea)에서 사용하는 훅
// 입력 필드 상태 관리
export const useInputField = ({
  initialValue,
  validate,
  isRequired = false,
}: UseInputFieldProps) => {
  const [fieldStatus, setFieldStatus] = useState({
    value: initialValue ?? "",
    isFocused: false, // 한 번이라도 포커스 되었었으면 true
    isEmpty: false,
    isValid: false,
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
    let errorType = "none";

    if (isRequired && fieldStatus.isEmpty) {
      errorType = "blank";
    } else if (!fieldStatus.isValid) {
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
  const [inputType, setInputType] = useState(initialType);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleVisibility = () => {
    setIsInputVisible(() => !isInputVisible);
    setInputType(() => (inputType === "password" ? "text" : "password"));
  };

  return { inputType, isInputVisible, toggleVisibility };
};

// toast 컴포넌트에서 사용하는 훅
export const useToastFade = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }, []);

  return { isVisible };
};
