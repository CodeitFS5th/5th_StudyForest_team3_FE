import { Habit, FK } from "@/types";
import { API_URL } from "@/constants";

interface ICreateHabitProps {
  studyId: FK<Habit, "studyId">;
  name?: string;
}

export default async function createHabit({
  studyId,
  name = "",
}: ICreateHabitProps): Promise<Habit> {
  try {
    const response = await fetch(`${API_URL}/study/${studyId}/habit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const newHabit: Habit = await response.json();
    return newHabit;
  } catch (error) {
    console.error(error);
    throw error; // 오류를 다시 던져서 Promise가 reject되도록 함
  }
}

// 나중에 다시 수정하세유
