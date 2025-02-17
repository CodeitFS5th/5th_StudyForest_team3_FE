import Button, { ButtonShape, BGColor, ButtonProps } from "./Button";
import { Label } from "./ButtonLabel";
import { ReactNode, ButtonHTMLAttributes } from "react";

export function ButtonRectangle({
  bgColor,
  children,
  is3d,
  ...props
}: Omit<ButtonProps, "shape">) {
  return (
    <Button
      shape={ButtonShape.RECTANGLE}
      bgColor={bgColor}
      is3d={is3d}
      {...props}
    >
      <Label>{children}</Label>
    </Button>
  );
}

interface ButtonRectangleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ButtonGreen3D({
  children: label,
  ...props
}: ButtonRectangleProps) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      {label}
    </ButtonRectangle>
  );
}

export function ButtonMake({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      만들기
    </ButtonRectangle>
  );
}

export function ButtonHabit({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      오늘의 습관으로 가기
    </ButtonRectangle>
  );
}

export function ButtonFocus({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      오늘의 집중으로 가기
    </ButtonRectangle>
  );
}

export function ButtonHome({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      메인페이지로 가기
    </ButtonRectangle>
  );
}

export function ButtonCheck({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      확인
    </ButtonRectangle>
  );
}

export function ButtonModify({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      수정하러 가기
    </ButtonRectangle>
  );
}

export function ButtonCancel({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GRAY} is3d {...props}>
      취소
    </ButtonRectangle>
  );
}

export function ButtonModifyComplete({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonRectangle bgColor={BGColor.GREEN} is3d {...props}>
      수정 완료
    </ButtonRectangle>
  );
}

export function ButtonMakeStudy({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-[106px]  md:w-[160px] xl:w-[252px]">
      <ButtonRectangle bgColor={BGColor.GREEN} {...props}>
        <span className="text-[12px] md:text-[18px]">스터디 만들기</span>
      </ButtonRectangle>
    </div>
  );
}
