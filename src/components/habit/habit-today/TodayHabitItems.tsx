"use client";
import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";
import { Habit, habitStatus, FK, PK } from "@/types";
import { useState } from "react";

interface TodayHabitItemProps {
  habit: Habit;
}

// 용도 변화줄려고 하는거고
// api 호출은 한번만
function TodayHabitItem({ habit }: TodayHabitItemProps) {
  const [habitStatus, setHabitStatus] = useState(null);

  const handleToggle = async (habitId: PK<Habit>) => {
    try {
      const res = await fetch(`${API_URL}/study/${habitId}/log/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.json();
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };

  // const ColorStyle =
  //   data.status === habitStatus.DONE
  //     ? "bg-custom-color-brand text-white"
  //     : "bg-custom-color-black-100 text-custom-color-black-300";

  return (
    <button
      className={`bg-custom-color-brand text-white text-[16px] py-[18px] rounded-3xl cursor-pointer`}
      onClick={() => handleToggle(habit.id)}
    >
      {habit.name}
    </button>
  );
}

interface TodayHabitItemsProps {
  studyId: number;
}

//습관 목록 ui
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
    <>
      <div className="flex flex-col justify-center   w-[280px] md:w-[400px] gap-[12px] md:gap-[20px]">
        {habitList.map((habit) => (
          <TodayHabitItem key={habit.id} habit={habit} />
        ))}
      </div>
    </>
  );
}
