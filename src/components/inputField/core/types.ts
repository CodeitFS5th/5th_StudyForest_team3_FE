import { ZodError } from "zod";

export type InputType = "text" | "password" | "email" | "number";

export type InputErrorType = "none" | "empty" | "invalid";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  value: string;
  isRequired?: boolean;
  validate?: (value: string) => Error | boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  invalidErrorMessage?: string;
  height?: number;
  isRequired?: boolean;
  validate?: (value: string) => ZodError | boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface UseInputFieldValidationProps {
  value: string;
  validate?: (value: string) => Error | boolean;
  isRequired?: boolean;
}
export interface InputFieldValidationProps {
  isValid: boolean;
  isEmpty: boolean;
  error: {
    type: InputErrorType;
    message: string;
  };
}
