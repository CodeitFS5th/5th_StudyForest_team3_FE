"use client";

import { API_URL } from "@/constants";
import { Habit } from "@/types";
import { useState } from "react";

interface TodayHabitItemProps {
  habitList: Habit[];
}

export default function TodayHabitItem({ habitList }: TodayHabitItemProps) {
  const [updatedHabitList, setUpdatedHabitList] = useState<Habit[]>(habitList);

  const handleToggle = async (habit: Habit) => {
    const newHabitList = updatedHabitList.map((h) =>
      h.id === habit.id ? { ...h, isDone: !h.isDone } : h
    );

    try {
      console.log(updatedHabitList);
      const res = await fetch(`${API_URL}/habit/${habit.id}/log/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHabitList),
      });

      if (!res.ok) throw new Error("습관 상태 변경 실패");

      setUpdatedHabitList(newHabitList);
    } catch (error) {
      console.error("습관 상태 변경 오류:", error);
    }
  };

  return (
    <>
      {updatedHabitList.map((habit) => (
        <button
          key={habit.id}
          className={`text-[16px] py-[18px] rounded-3xl cursor-pointer transition-colors ${
            habit.isDone
              ? "bg-custom-color-brand text-white"
              : "bg-custom-color-black-100 text-custom-color-black-300"
          }`}
          onClick={() => handleToggle(habit)}
        >
          {habit.name}
        </button>
      ))}
    </>
  );
}
