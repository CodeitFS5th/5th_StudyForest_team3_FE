import { ButtonCircle } from "./core/hooks/CircleHooks";
import { Category } from "./core/hooks/CircleHooks";

interface ButtonProps {
  disabled?: boolean;
  [key: string]: any;
}

export function ButtonPause({ disabled, ...props }: ButtonProps) {
  return (
    <ButtonCircle category={Category.Pause} disabled={disabled} {...props} />
  );
}

export function ButtonRestart({ disabled, ...props }: ButtonProps) {
  return (
    <ButtonCircle category={Category.Restart} disabled={disabled} {...props} />
  );
}
