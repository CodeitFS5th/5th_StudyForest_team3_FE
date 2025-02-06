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
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  invalidErrorMessage?: string;
  height?: number;
  isRequired?: boolean;
  validate?: (value: string) => boolean;
}

export interface ToastProps {
  point?: number;
}

export interface UseInputStatusProps {
  initialValue?: string;
  validate?: (value: string) => boolean;
  isRequired?: boolean;
}
