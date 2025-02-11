import { FK, Habit } from "@/types";
import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";
import HabitLogs from "./HabitLogs";

interface HabitTrackerProps {
  studyId: FK<Habit, "studyId">;
}

const WEEKDAYS = ["월", "화", "수", "목", "금", "토", "일"];

export default async function HabitTracker({ studyId }: HabitTrackerProps) {
  const habitList = await fetchData<Habit[]>(
    `${API_URL}/study/${studyId}/habit`
  );

  if (!habitList) {
    return <div>습관을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <h1 className="text-2xl text-custom-color-black-400 font-extrabold mb-1 mb:mb-6">
        습관 기록표
      </h1>

      <div className="flex justify-end">
        {WEEKDAYS.map((weekday) => (
          <p
            key={weekday}
            className="text-lg text-custom-color-black-300 px-6 xl:px-12"
          >
            {weekday}
          </p>
        ))}
      </div>

      <HabitLogs habitList={habitList} />
    </>
  );
}
