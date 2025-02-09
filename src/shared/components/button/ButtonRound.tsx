import { ButtonRound } from "./core/hooks/RoundHooks";
import { Category } from "./core/hooks/RoundHooks";

interface ButtonProps {
  disabled?: boolean;
  [key: string]: any;
}

export function ButtonStart({ disabled, ...props }: ButtonProps) {
  return (
    <ButtonRound category={Category.Start} disabled={disabled} {...props} />
  );
}

export function ButtonStop({ disabled, ...props }: ButtonProps) {
  return (
    <ButtonRound category={Category.Stop} disabled={disabled} {...props} />
  );
}
