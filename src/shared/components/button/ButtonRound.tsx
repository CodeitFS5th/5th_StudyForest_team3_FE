import { ButtonRound } from "./core/hooks/RoundHooks";
import { Category } from "./core/hooks/RoundHooks";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function ButtonStart({ type, disabled, onClick }: ButtonProps) {
  return (
    <ButtonRound
      type={type}
      category={Category.Start}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

export function ButtonStop({ type, disabled, onClick }: ButtonProps) {
  return (
    <ButtonRound
      type={type}
      category={Category.Stop}
      disabled={disabled}
      onClick={onClick}
    />
  );
}
