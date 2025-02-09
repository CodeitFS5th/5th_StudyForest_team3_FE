import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../assets/images/icon/ic_arrow_right.png";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface BaseButtonProps {
  path: string;
  label: string;
}

//ButtonHTMLAttributes<HTMLButtonElement> : button 요소 사용가능한 모든 HTML 속성 타입 포함
//AnchorHTMLAttributes<HTMLAnchorElement> : <a> 요소 사용가능한 모든 HTML 속성 타입 포함
type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

//legacyBehavior : 이전 버전의 동작 방식 유지
//a태그 : 다른 props를 a 태그에 전달 하돌록 수정
function ButtonLinkBase({ path, label, ...props }: ButtonProps) {
  return (
    <div
      className={`py-[8px] pr-[6px] pl-[10px] md:py-[12px] md:pl-[24px] md:pr-[16px] xl:py-[12px] xl:pl-[24px] xl:pr-[16px] rounded-xl border border-custom-color-black-200   overflow-hidden`}
    >
      <Link href={`'${path}'`} legacyBehavior>
        <a className="flex justify-between items-center" {...props}>
          <p className="text-[16px] text-custom-color-black-300 ">{label}</p>
          <Image
            src={Arrow}
            alt="Arrow Img"
            width={20}
            height={11}
            className="object-contain"
          />
        </a>
      </Link>
    </div>
  );
}

export function ButtonLink({ path, label, ...props }: ButtonProps) {
  return <ButtonLinkBase path={path} label={label} {...props} />;
}

//사용 예시
/*
<ButtonLink path="/" pathName="오늘의 집중" />
<ButtonLink path="/" pathName="홈" />
 */
