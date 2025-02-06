export type InputType = "text" | "password" | "email" | "number";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: InputType;
  placeholder?: string;
  value?: string;
  invalidErrorMessage?: string;
  isRequired?: boolean;
  validate: (value: string) => boolean;
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

export interface ToastProps {
  point?: number;
  position?: "top" | "bottom";
  isVisible?: boolean;
}

export interface UseInputFieldProps {
  initialValue?: string;
  validate?: (value: string) => boolean;
  isRequired?: boolean;
  errorStatus?: "none" | "blank" | "invalid";
}
