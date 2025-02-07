import { ButtonRectangle } from "./core/hooks/RectangleHooks";

export function ButtonCheck({
  label,
  path,
  onClick,
}: {
  label: string;
  path?: string;
  onClick: () => void;
}) {
  return <ButtonRectangle type="check" label={label} onClick={onClick} />;
}

export function ButtonMake({
  label,
  path,
  onClick,
}: {
  label: string;
  path?: string;
  onClick: () => void;
}) {
  return <ButtonRectangle type="make" label={label} onClick={onClick} />;
}

export function ButtonMove({
  label,
  path,
  onClick,
}: {
  label: string;
  path: string;
  onClick: () => void;
}) {
  return (
    <ButtonRectangle type="move" label={label} path={path} onClick={onClick} />
  );
}

export function ButtonCancel({
  label,
  path,
  onClick,
}: {
  label: string;
  path?: string;
  onClick: () => void;
}) {
  return <ButtonRectangle type="cancel" label={label} onClick={onClick} />;
}
