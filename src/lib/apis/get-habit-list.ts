import { Habit, FK } from "@/types";
import { API_URL } from "@/constants";
import fetchData from "./fetchData";

export default async function getHabitList(studyId: FK<Habit, "studyId">) {
  try {
    const habitList = fetchData<Habit[]>(`${API_URL}/study/${studyId}/habit`);
    return habitList;
  } catch (error) {
    console.error(error);
    return [];
  }
}
