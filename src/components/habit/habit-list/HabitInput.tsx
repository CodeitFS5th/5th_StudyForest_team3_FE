"use client";

import { Habit, NewHabit, PK } from "@/types";
import { ChangeEvent, useState } from "react";

interface HabitInputProps {
  habit: Habit | NewHabit;
  onUpdate: (id: PK<Habit | NewHabit>, habitName: Habit["name"]) => void;
}

export default function HabitInput({ habit, onUpdate }: HabitInputProps) {
  const [habitName, setHabitName] = useState<string>(habit.name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHabitName(e.target.value);
    onUpdate(habit.id, habitName);
  };

  return (
    <>
      <input
        name="habit-item"
        id="habit-item"
        value={JSON.stringify({ id: habit.id, name: habitName })}
        hidden
        readOnly
      />
      <input
        onChange={handleChange}
        type="text"
        name="habit"
        id="habit"
        placeholder="습관을 입력해주세요"
        value={habitName}
        className=" w-64 md:w-100 bg-custom-color-black-100 p-4 rounded-3xl text-center text-decoration-line: underline"
      />
    </>
  );
}
