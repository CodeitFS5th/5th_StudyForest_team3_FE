"use server";

import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";

export default async function createReactionAction(
  _: unknown,
  formData: FormData
) {
  const emoji = formData.get("emoji") as string;
  const studyId = formData.get("studyId") as string;

  if (!emoji || !studyId) {
    return {
      status: false,
      message: "이모지를 선택해주세요.",
    };
  }

  try {
    const response = await fetch(`${API_URL}/study/${studyId}/reaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emoji }),
    });

    const reactions = await response.json();

    if (!reactions || Object.keys(reactions).length === 0) {
      return {
        status: false,
        message: "리액션이 존재하지 않습니다.",
      };
    }

    revalidateTag(`study-${studyId}`);

    return {
      status: true,
      message: "이모지가 등록되었습니다.",
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: "이모지 등록에 실패했습니다",
    };
  }
}
