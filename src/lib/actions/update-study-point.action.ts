"use server";

import { revalidateTag } from "next/cache";
import { API_URL } from "@/constants";

type Props = {
  studyId: number;
  point: number;
};

export default async function updateStudyPointAction({
  studyId,
  point,
}: Props) {
  try {
    await fetch(`${API_URL}/study/${studyId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ point }),
    });

    revalidateTag(`study-${studyId}`);
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: `포인트 업데이트에 실패했습니다. : ${error}`,
    };
  }
}
