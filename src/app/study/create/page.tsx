"use client";
import { ButtonMake } from "@/components/button/ButtonRectangle";
import { useState } from "react";
import Textarea from "@/components/inputField/Textarea";
import ColorBgCard from "@/app/study/create/_components/ColorBgCard";
import PhotoBgCard from "@/app/study/create/_components/PhotoBgCard";
import createStudyAction from "@/lib/actions/create-study.action";
import {
  validateNick,
  validateStudyName,
  validateTextarea,
  validatePassword,
} from "@/lib/utils/inputValidation";
import { useRouter } from "next/navigation";
import Input from "@/components/inputField/Input";

export default function StudyCreatePage() {
  const router = useRouter();

  // 입력값을 관리하는 state
  const [data, setData] = useState({
    nickname: "",
    studyName: "",
    description: "",
    bg: "", // 배경 선택값 (초기값 없음)
    password: "",
    passwordConfirm: "",
  });

  // 입력 필드 변경 시 호출되는 함수
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  // 배경 선택 시 호출되는 함수
  const handleBgSelect = (bg: string) => {
    setData((prevData) => ({
      ...prevData,
      bg: bg.toUpperCase(),
    }));
  };

  // api 실행
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("nick", data.nickname);
    formData.append("name", data.studyName);
    formData.append("description", data.description);
    formData.append("password", data.password);
    formData.append("passwordConfirm", data.passwordConfirm);
    formData.append("background", data.bg);

    const responseResult = await createStudyAction(undefined, formData);
    router.push(responseResult?.path ?? "/study/create");
  };

  return (
    <div className="px-4">
      <div className="max-w-[700px] mx-auto p-4 bg-white rounded-2xl text-custom-color-black-400 mb-[100px] pb-[40px]">
        {/* 페이지 제목 */}
        <p className="font-bold mb-4">스터디 만들기</p>

        <Input
          name="닉네임"
          type="text"
          value={data.nickname}
          onChange={(e) => handleChange(e, "nickname")}
          placeholder="닉네임을 입력해주세요"
          isRequired={true}
          validate={validateNick}
        />

        <Input
          name="스터디 이름"
          type="text"
          value={data.studyName}
          onChange={(e) => handleChange(e, "studyName")}
          placeholder="스터디 이름을 입력해주세요"
          isRequired={true}
          validate={validateStudyName}
        />

        <Textarea
          name="소개"
          value={data.description}
          onChange={(e) => handleChange(e, "description")}
          placeholder="스터디 소개를 입력해주세요"
          isRequired={true}
          validate={validateTextarea}
        />

        {/* 배경 선택 */}
        <p className="mt-4 font-semibold mb-4">배경을 선택해주세요</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* 배경 카드 컴포넌트 (클릭하면 선택됨) */}
          {(["green", "yellow", "blue", "red"] as const).map((bg) => (
            <ColorBgCard
              key={bg}
              bgColor={bg}
              isSelected={bg.toUpperCase() === data.bg}
              onClick={() => handleBgSelect(bg)}
            />
          ))}
          {(["photo_1", "photo_2", "photo_3", "photo_4"] as const).map((bg) => (
            <PhotoBgCard
              key={bg}
              bgPhoto={bg}
              isSelected={bg.toUpperCase() === data.bg}
              onClick={() => handleBgSelect(bg)}
            />
          ))}
        </div>

        <Input
          name="비밀번호"
          type="password"
          value={data.password}
          onChange={(e) => handleChange(e, "password")}
          placeholder="비밀번호를 입력해주세요"
          isRequired={true}
          validate={validatePassword}
        />

        <Input
          name="비밀번호 확인"
          type="password"
          value={data.passwordConfirm}
          onChange={(e) => handleChange(e, "passwordConfirm")}
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          isRequired={true}
          validate={() => data.password === data.passwordConfirm}
        />

        {/* 생성 버튼 */}
        <ButtonMake onClick={handleSubmit} />
      </div>
    </div>
  );
}
