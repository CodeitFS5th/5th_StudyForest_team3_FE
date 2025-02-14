"use server";

import { API_URL } from "@/constants";

// import { API_URL } from "@/constants";

export default async function updateHabitAction(
  _: unknown,
  formData: FormData
) {
  const studyId = formData.get("studyId");
  const habits = formData.getAll("habit-item");

  if (!habits) {
    return {
      status: false,
      message: "습관이 없습니다.",
    };
  }

  try {
    await fetch(`${API_URL}/study/${studyId}/habits`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habits),
    });
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: `습관 수정에 실패했습니다. : ${error}`,
    };
  }
}
