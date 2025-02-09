"use client";
import Input from "@/shared/components/inputField/Input";
import Textarea from "@/shared/components/inputField/Textarea";
import { isValidEmail, isValidPassword } from "@/shared/utils/inputValidation";
import { useInputFieldValue } from "@/shared/hooks/useInputFieldValue";
import Toast from "@/shared/components/toast/Toast";
import { useToastMount } from "@/shared/hooks/useToastMount";

export default function MainPage() {
  const { value: email, handleChange: handleEmailChange } =
    useInputFieldValue("");
  const { value: password, handleChange: handlePasswordChange } =
    useInputFieldValue("");
  const { value: memo, handleChange: handleMemoChange } =
    useInputFieldValue("");
  const { isToastMounted, mountToast } = useToastMount();

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
        isRequired={true}
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
      <Textarea
        name="메모"
        value={memo}
        placeholder="메모를 입력해주세요"
        invalidErrorMessage="test"
        onChange={handleMemoChange}
      />
      <button onClick={mountToast}>클릭!</button>
      <Toast point={10} position="bottom" isMounted={isToastMounted} />
    </div>
  );
}
