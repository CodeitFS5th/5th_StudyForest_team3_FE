"use client";

import { NewHabit } from "@/types";
import HabitItemDeleteButton from "./habit-item-delete-button";
import HabitInput from "./habit-input";
import HabitItemAddButton from "./new-habit-item-add-button";
import { useState } from "react";

let newHabitIdCount = 0;

export default function NewHabitItems({ studyId }: { studyId: number }) {
  const [newHabitList, setNewHabitList] = useState<NewHabit[]>([]);

  const handleAdd = () => {
    // 새로운 배열에 추가
    const newHabit = {
      id: newHabitIdCount++,
      name: "",
      studyId,
    };
    setNewHabitList((prevList) => [...prevList, newHabit]);
  };

  const handleUpdate = (id: number, habitName: string) => {
    // 새로운 배열의 habitName 수정
    setNewHabitList((prevList) =>
      prevList.map((habit) =>
        habit.id === id ? { ...habit, name: habitName } : habit
      )
    );
  };

  const handleDelete = (id: number) =>
    setNewHabitList((prevList) => prevList.filter((habit) => habit.id !== id));

  return (
    <>
      {newHabitList.map((newHabit) => (
        <div
          key={newHabit.id}
          className="w-full flex flex-row gap-x-2 items-center"
        >
          <HabitInput habit={newHabit} onUpdate={handleUpdate} />
          <HabitItemDeleteButton onDelete={() => handleDelete(newHabit.id)} />
        </div>
      ))}
      <HabitItemAddButton type="button" onClick={handleAdd} />
    </>
  );
}
