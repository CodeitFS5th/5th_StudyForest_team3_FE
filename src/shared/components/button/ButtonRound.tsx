import { ButtonRound } from "./core/hooks/RoundHooks";

export function ButtonStart({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick: () => void;
}) {
  return <ButtonRound type="start" disabled={disabled} onClick={onClick} />;
}

export function ButtonStop({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick: () => void;
}) {
  return <ButtonRound type="stop" disabled={disabled} onClick={onClick} />;
}
