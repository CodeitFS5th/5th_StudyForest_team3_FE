"use server";

import { API_URL } from "@/constants";

export default async function authHabitPasswordAction(
  _: unknown,
  formData: FormData
) {
  const modalType = formData.get("modalType") as string;
  const password = formData.get("password") as string;
  const studyId = formData.get("studyId") as string;

  if (!password) {
    return {
      status: false,
      message: "비밀번호를 입력해주세요.",
    };
  }
  if (!studyId) {
    return {
      status: false,
      message: "존재하지 않는 스터디 입니다.",
    };
  }
  if (!modalType) {
    return {
      status: false,
      message: "존재하지 않는 모달 타입입니다.",
    };
  }

  try {
    const response = await fetch(`${API_URL}/study/${studyId}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    if (modalType === "modify") {
      return {
        status: true,
        path: `/study/${studyId}/edit`,
        message: "스터디를 수정페이지로 이동합니다.",
      };
    } else {
      await fetch(`${API_URL}/study/${studyId}`, {
        method: "DELETE",
      });

      return {
        status: true,
        path: "/",
        message: "스터디가 성공적으로 삭제되었습니다.",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: "비밀번호가 일치하지 않습니다.",
    };
  }
}
