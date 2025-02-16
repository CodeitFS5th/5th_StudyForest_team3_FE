import { API_URL } from "@/constants";

export default async function createStudyAction(
  _: unknown,
  formData: FormData
) {
  const nick = formData.get("nick") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;
  const background = formData.get("background") as string;

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

  try {
    const response = await fetch(`${API_URL}/study`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nick,
        name,
        description,
        password,
        background,
      }),
    });

    if (response.ok) {
      return {
        status: true,
        message: "스터디가 생성되었습니다.",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: "스터디 생성에 실패하였습니다.",
    };
  }
}
