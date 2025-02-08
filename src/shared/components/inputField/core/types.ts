export type InputType = "text" | "password" | "email" | "number";

export type InputErrorType = "none" | "empty" | "invalid";

export interface FieldStatus {
  isFocused: boolean;
  isValid: boolean;
  isEmpty: boolean;
  errorType: InputErrorType;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  value: string;
  invalidErrorMessage?: string;
  isRequired?: boolean;
  validate?: (value: string) => boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  invalidErrorMessage?: string;
  height?: number;
  isRequired?: boolean;
  validate?: (value: string) => boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface UseInputFieldProps {
  value: string;
  validate?: (value: string) => boolean;
  isRequired?: boolean;
  errorStatus?: "none" | "empty" | "invalid";
}
