"use client";

import { IHabit } from "@/types";
import HabitItemDeleteButton from "./habit-item-delete-button";
import HabitInput from "./habit-input";
import { habitStatus } from "@/types";
import { useState } from "react";

export default function HabitItems({ studyId }: { studyId: number }) {
  const [habitList, setHabitList] = useState<IHabit[]>([
    {
      id: 1,
      name: "습관1",
      status: habitStatus.UNDONE,
      studyId,
      createdAt: new Date("2022-02-07"),
    },
    {
      id: 2,
      name: "습관2",
      status: habitStatus.UNDONE,
      studyId,
      createdAt: new Date("2022-02-07"),
    },
  ]);

  const handleUpdate = (id: number, habitName: string) => {
    setHabitList((prevList) =>
      prevList.map((habit) =>
        habit.id === id ? { ...habit, name: habitName } : habit
      )
    );
  };

  const handleDelete = (id: number) =>
    setHabitList((prevList) => prevList.filter((habit) => habit.id !== id));

  return (
    <>
      {habitList.map((habit) => (
        <div
          key={habit.id}
          className="w-full flex flex-row gap-x-2 items-center"
        >
          <HabitInput habit={habit} onUpdate={handleUpdate} />
          <HabitItemDeleteButton onDelete={() => handleDelete(habit.id)} />
        </div>
      ))}
    </>
  );
}
