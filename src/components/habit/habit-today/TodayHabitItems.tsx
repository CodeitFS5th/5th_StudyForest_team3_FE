import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";
import { Habit } from "@/types";
import TodayHabitItem from "./TodayHabitItem";

interface TodayHabitItemsProps {
  studyId: number;
}

export default async function TodayHabitItems({
  studyId,
}: TodayHabitItemsProps) {
  const habitList = await fetchData<Habit[]>(
    `${API_URL}/study/${studyId}/habit`
  );

  if (!habitList || habitList.length < 1) {
    return (
      <div className="flex flex-col justify-center h-[637px] text-[16px] md:text-[20px] text-custom-color-black-300 text-center">
        <p>아직 습관이 없어요</p>
        <p>목록 수정을 눌러 습관을 생성해보세요</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center w-[280px] md:w-[400px] gap-[12px] md:gap-[20px]">
      <TodayHabitItem habitList={habitList} studyId={studyId} />
    </div>
  );
}
