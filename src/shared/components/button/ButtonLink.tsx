import { ButtonLink } from "./core/hooks/LinkHooks";

export function ButtonLinkHome({
  path,
  pathName,
}: {
  path: string;
  pathName: string;
}) {
  return <ButtonLink type="home" path={path} pathName={pathName} />;
}

export function ButtonLinkToday({
  path,
  pathName,
}: {
  path: string;
  pathName: string;
}) {
  return <ButtonLink type="today" path={path} pathName={pathName} />;
}

//사용 예시
/*
<ButtonLinkToday path="/" pathName="오늘의 집중" />
<ButtonLinkHome path="/" pathName="홈" />
 */
