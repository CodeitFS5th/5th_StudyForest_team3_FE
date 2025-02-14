import { API_URL } from "@/constants";
import { InputData } from "@/types";

export default async function updateStudyAction(
  _: unknown,
  formData: FormData
) {
  const originStudy = JSON.parse(formData.get("originStudy") as string);
  const passwordConfirm = formData.get("passwordConfirm") as string;
  const inputData: Partial<InputData> = {
    nick: formData.get("nick") as string,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    password: formData.get("password") as string,
    background: formData.get("background") as string,
  };
  const { nick, name, description, password, background } = inputData;

  if (!originStudy) {
    return {
      status: false,
      message: "스터디 정보를 찾을 수 없습니다.",
    };
  }

  if (password !== passwordConfirm) {
    return {
      status: false,
      message: "비밀번호 확인이 불일치합니다.",
    };
  }

  if (!nick || !name || !description || !password || !background) {
    return {
      status: false,
      message: "모든 항목을 입력해주세요.",
    };
  }

  // 수정된 부분만 보내기
  const updatedStudy: Partial<InputData> = {};

  Object.entries(inputData).map(([key, value]) => {
    if (value !== originStudy[key]) {
      updatedStudy[key as keyof InputData] = value;
    }
  });

  try {
    const response = await fetch(`${API_URL}/study`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudy),
    });

    if (response.ok) {
      return {
        status: true,
        message: "스터디가 수정되었습니다.",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: "스터디 수정에 실패하였습니다.",
    };
  }
}
