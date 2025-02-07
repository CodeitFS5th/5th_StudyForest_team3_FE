export type InputType = "text" | "password" | "email" | "number";

export type InputErrorType = "none" | "empty" | "invalid";

export type FieldStatus = {
  value: string;
  isFocused: boolean;
  isValid: boolean;
  isEmpty: boolean;
  errorType: InputErrorType;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type: InputType;
  placeholder?: string;
  value?: string;
  invalidErrorMessage?: string;
  isRequired?: boolean;
  validate?: (value: string) => boolean;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  invalidErrorMessage?: string;
  height?: number;
  isRequired?: boolean;
  validate?: (value: string) => boolean;
}

export interface UseInputFieldProps {
  initialValue: string;
  validate?: (value: string) => boolean;
  isRequired?: boolean;
  errorStatus?: "none" | "empty" | "invalid";
}
