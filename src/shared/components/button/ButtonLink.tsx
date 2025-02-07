import { ButtonLink } from "./core/hooks/LinkHooks";
import { Category } from "./core/hooks/LinkHooks";

interface ButtonProps {
  path: string;
  pathName: string;
}

export function ButtonLinkHome({ path, pathName }: ButtonProps) {
  return (
    <ButtonLink category={Category.Home} path={path} pathName={pathName} />
  );
}

export function ButtonLinkToday({
  path,
  pathName,
}: {
  path: string;
  pathName: string;
}) {
  return (
    <ButtonLink category={Category.Today} path={path} pathName={pathName} />
  );
}

//사용 예시
/*
<ButtonLinkToday path="/" pathName="오늘의 집중" />
<ButtonLinkHome path="/" pathName="홈" />
 */
