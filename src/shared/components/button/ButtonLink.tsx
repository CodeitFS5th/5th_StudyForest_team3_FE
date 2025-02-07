import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../assets/images/icon/ic_arrow_right.png";

interface ButtonProps {
  path: string;
  pathName: string;
}

function ButtonLinkBase({ path, pathName }: ButtonProps) {
  return (
    <div
      className={`py-[8px] pr-[6px] pl-[10px] md:py-[12px] md:pl-[24px] md:pr-[16px] xl:py-[12px] xl:pl-[24px] xl:pr-[16px] rounded-xl border border-custom-color-black-200   overflow-hidden`}
    >
      <Link href={`'/${path}'`} className="flex justify-between items-center ">
        <p className="text-[16px] text-custom-color-black-300 ">{pathName}</p>
        <Image
          src={Arrow}
          alt="Arrow Img"
          width={20}
          height={11}
          className="object-contain"
        />
      </Link>
    </div>
  );
}

export function ButtonLink({ path, pathName }: ButtonProps) {
  return <ButtonLinkBase path={path} pathName={pathName} />;
}

//사용 예시
/*
<ButtonLink path="/" pathName="오늘의 집중" />
<ButtonLink path="/" pathName="홈" />
 */
