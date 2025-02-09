import {
  ButtonRectangle,
  ButtonRectangleList,
  ButtonRectangleModal,
} from "./core/hooks/RectangleHooks";
import { Category } from "./core/hooks/RectangleHooks";
import { Status } from "./core/hooks/RectangleHooks";

interface ButtonProps {
  label: string;
}

export function ButtonCheck({ label, ...props }: ButtonProps) {
  return <ButtonRectangle category={Category.Check} label={label} {...props} />;
}

export function ButtonMake({ label, ...props }: ButtonProps) {
  return <ButtonRectangle category={Category.Make} label={label} {...props} />;
}

interface ButtonListProps extends ButtonProps {
  status: Status;
}

export function ButtonList({ label, status, ...props }: ButtonListProps) {
  return (
    <ButtonRectangleList
      category={Category.Make}
      status={status}
      label={label}
      {...props}
    />
  );
}

interface ButtonMoveProps extends ButtonProps {
  path: string;
}

export function ButtonMove({ path, label, ...props }: ButtonMoveProps) {
  return (
    <ButtonRectangle
      category={Category.Move}
      label={label}
      path={path}
      {...props}
    />
  );
}

export function ButtonModalMake({ label, ...props }: ButtonProps) {
  return (
    <ButtonRectangleModal category={Category.Check} label={label} {...props} />
  );
}

export function ButtonModalCancel({ label, ...props }: ButtonProps) {
  return (
    <ButtonRectangleModal category={Category.Cancel} label={label} {...props} />
  );
}
