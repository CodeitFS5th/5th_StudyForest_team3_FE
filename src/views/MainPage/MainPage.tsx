import Input from "@/shared/components/input/Input";
import Textarea from "@/shared/components/textarea/Textarea";
import Toast from "@/shared/components/toast/Toast";
export default function MainPage() {
  return (
    <div>
      <h1>메인페이지</h1>
      <Input
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
      />
      <Input
        type="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        invalidErrorMessage="이메일 형식이 맞지 않습니다."
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
