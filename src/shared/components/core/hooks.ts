import { useState, useEffect } from "react";
import { InputType, UseInputStatusProps } from "@/shared/components/core/types";

export const useInputPasswordVisibility = (initialType: InputType) => {
  const [inputType, setInputType] = useState(initialType);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleVisibility = () => {
    setIsInputVisible(() => !isInputVisible);
    setInputType(() => (inputType === "password" ? "text" : "password"));
  };

  return { inputType, isInputVisible, toggleVisibility };
};

export const useInputStatus = ({
  initialValue,
  validate,
  isRequired = false,
}: UseInputStatusProps) => {
  const [inputStatus, setInputStatus] = useState({
    value: initialValue || "",
    isFocused: false,
    isBlank: false,
    isValid: false,
    isError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputStatus((prev) => ({
      ...prev,
      value: newValue,
      isBlank: newValue === "",
      isValid: validate ? validate(newValue) : true,
    }));
  };

  const handleFocus = () => {
    setInputStatus((prev) => ({
      ...prev,
      isFocused: true,
      isBlank: prev.value === "",
      isValid: validate ? validate(prev.value) : true,
    }));
  };

  useEffect(() => {
    setInputStatus((prev) => ({
      ...prev,
      isError: isRequired
        ? prev.isBlank || prev.isValid === false
        : prev.isValid === false,
    }));
  }, [inputStatus.isFocused, inputStatus.isValid, inputStatus.isBlank]);

  return { inputStatus, handleChange, handleFocus };
};
