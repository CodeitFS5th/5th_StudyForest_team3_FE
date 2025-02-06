"use client";

import Input from "@/shared/components/input/Input";
import Textarea from "@/shared/components/textarea/Textarea";
import Toast from "@/shared/components/toast/Toast";
import { isValidPassword, isValidEmail } from "@/shared/components/utils/utils";

export default function MainPage() {
  return (
    <div>
      <h1>메인페이지</h1>
      <Input
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        validate={isValidPassword}
        invalidErrorMessage="8자 이상 영어 대소문자, 숫자, 특수문자를 각각 최소 하나 이상 포함해주세요."
        isRequired={true}
      />
      <Input
        type="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        validate={isValidEmail}
        invalidErrorMessage="이메일 형식에 맞지 않습니다."
        isRequired={true}
      />
      <Textarea
        label="메모"
        placeholder="메모를 입력해주세요."
        invalidErrorMessage="메모를 입력해주세요."
      />
      <Toast point={10} />
      <Toast />
    </div>
  );
}
