import { ButtonRectangle } from "./core/hooks/RectangleHooks";
import { Category } from "./core/hooks/RectangleHooks";

interface BaseButtonProps {
  label: string;
  onClick?: () => void;
}

interface ButtonProps extends BaseButtonProps {
  type: "button" | "submit" | "reset";
}

export function ButtonCheck({ type, label, onClick }: ButtonProps) {
  return (
    <ButtonRectangle
      type={type}
      category={Category.Check}
      label={label}
      onClick={onClick}
    />
  );
}

export function ButtonMake({ type, label, onClick }: ButtonProps) {
  return (
    <ButtonRectangle
      type={type}
      category={Category.Make}
      label={label}
      onClick={onClick}
    />
  );
}

interface ButtonMovePros extends BaseButtonProps {
  path: string;
}

export function ButtonMove({ path, label }: ButtonMovePros) {
  return <ButtonRectangle category={Category.Move} label={label} path={path} />;
}

export function ButtonCancel({ type, label, onClick }: ButtonProps) {
  return (
    <ButtonRectangle
      type={type}
      category={Category.Cancel}
      label={label}
      onClick={onClick}
    />
  );
}
