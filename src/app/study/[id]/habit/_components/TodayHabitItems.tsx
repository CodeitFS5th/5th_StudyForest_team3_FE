"use client";

import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";
import { Habit, habitStatus, FK } from "@/types";
import { useState, useEffect } from "react";

//onClick 함수 잘못됨
interface TodayHabitItemProps {
  habit: Habit;
  onClick: (
    habit: Habit,
    setHabit: React.Dispatch<React.SetStateAction<Habit>>
  ) => void;
}

// 용도 변화줄려고 하는거고
// api 호출은 한번만
function TodayHabitItem({ habit, onClick }: TodayHabitItemProps) {
  const [currentHabit, setCurrentHabit] = useState(habit);

  const ColorStyle =
    currentHabit.status === habitStatus.DONE
      ? "bg-custom-color-brand text-white"
      : "bg-custom-color-black-100 text-custom-color-black-300";

  return (
    <button
      className={`${ColorStyle} rounded-xl cursor-pointer`}
      onClick={() => onClick(currentHabit, setCurrentHabit)}
    >
      {currentHabit.name}
    </button>
  );
}

const handleToggle = async (
  habit: Habit,
  setHabit: React.Dispatch<React.SetStateAction<Habit>>
) => {
  const updatedStatus =
    habit.status === habitStatus.DONE ? habitStatus.UNDONE : habitStatus.DONE;
  const response = await fetch(
    `${API_URL}/study/${habit.studyId}/habit/${habit.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: habit.id,
        name: habit.name,
        status: updatedStatus,
      }),
    }
  );

  if (response) {
    const habitResponse = (await response.json()) as Habit;
    setHabit(habitResponse);
  }
};

interface TodayHabitItemsProps {
  studyId: number;
}

//습관 목록 ui
export default async function TodayHabitItems({
  studyId,
}: TodayHabitItemsProps) {
  const [habitList, setHabitList] = useState<Habit[]>([]);
  const id = studyId;

  //습관 가져오기
  useEffect(() => {
    async function fetchHabits() {
      const fetchedHabits = await fetchData<Habit[]>(
        `${API_URL}/study/${id}/habit`
      );
      if (fetchedHabits) {
        setHabitList(fetchedHabits);
      }
    }
    fetchHabits();
  }, []);

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
      {habitList.map((habit) => {
        <TodayHabitItem key={habit.id} habit={habit} onClick={handleToggle} />;
      })}
    </>
  );
}
