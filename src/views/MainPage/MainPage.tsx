"use client";
import Input from "@/shared/components/inputField/Input";
import { isValidEmail, isValidPassword } from "@/shared/utils/inputValidation";
import { useInputFieldValue } from "@/shared/hooks/useInputFieldValue";

export default function MainPage() {
  const { value: email, handleChange: handleEmailChange } =
    useInputFieldValue("");
  const { value: password, handleChange: handlePasswordChange } =
    useInputFieldValue("");

  return (
    <div>
      <h1>메인페이지</h1>
      <Input
        name="이메일"
        type="email"
        value={email}
        placeholder="이메일을 입력해주세요"
        invalidErrorMessage="test"
        validate={isValidEmail}
        onChange={handleEmailChange}
      />
      <Input
        name="비밀번호"
        type="password"
        value={password}
        placeholder="비밀번호를 입력해주세요"
        invalidErrorMessage="test"
        validate={isValidPassword}
        onChange={handlePasswordChange}
      />
    </div>
  );
}
