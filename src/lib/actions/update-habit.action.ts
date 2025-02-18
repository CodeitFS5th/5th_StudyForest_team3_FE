"use server";

import { API_URL } from "@/constants";
import { revalidateTag } from "next/cache";

export default async function updateHabitAction(
  _: unknown,
  formData: FormData
) {
  const studyId = formData.get("studyId");
  const habits = formData.getAll("habit-item");
  const parsedHabits = habits.map((habit) => JSON.parse(habit as string));

  if (!parsedHabits) {
    return {
      status: false,
      message: "습관이 없습니다.",
    };
  }

  try {
    await fetch(`${API_URL}/study/${studyId}/habit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedHabits),
    });

    revalidateTag("habit-list");

    return {
      status: true,
      message: "습관이 수정되었습니다.",
      parsedHabits,
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: `습관 수정에 실패했습니다. : ${error}`,
    };
  }
}
