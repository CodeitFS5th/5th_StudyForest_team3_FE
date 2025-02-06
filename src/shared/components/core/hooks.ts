import { useState } from "react";
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
}: UseInputStatusProps) => {
  const [inputStatus, setInputStatus] = useState({
    value: initialValue || "",
    isFocused: false,
    isBlank: false,
    isValid: false,
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
    setInputStatus((prev) => ({ ...prev, isFocused: true }));
  };

  return { inputStatus, handleChange, handleFocus };
};
