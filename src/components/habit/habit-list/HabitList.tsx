"use client";

import NewHabitItems from "./NewHabitItems";
import HabitItems from "./habitItems";
import { FK, Habit } from "@/types";
import { ModalHandle } from "@/components/modal/Modal";
import { useActionState, useEffect } from "react";
import updateHabitAction from "@/lib/actions/update-habit.action";

interface IHabitList {
  studyId: FK<Habit, "studyId">;
  onClose: ModalHandle["close"];
}

export default function HabitList({ studyId, onClose }: IHabitList) {
  const [state, formAction, isPending] = useActionState(
    updateHabitAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      console.log(state.message);
    }
    onClose();
  }, [state]);

  return (
    <form
      action={formAction}
      className="max-w-78 md:max-w-150 flex flex-col items-center"
    >
      <input name="studyId" id="studyId" value={studyId} hidden readOnly />

      <h1 className="text-custom-color-black-400 text-2xl font-extrabold">
        습관목록
      </h1>
      <div className="w-full flex flex-col gap-y-5 my-6 md:pl-24 md:pr-11">
        <HabitItems studyId={studyId} />
        <NewHabitItems studyId={studyId} />
      </div>

      <div className="flex gap-6">
        <button
          type="button"
          onClick={() => onClose()}
          className="cursor-pointer"
        >
          취소
        </button>
        <button type="submit" className="cursor-pointer">
          {isPending ? "로딩중..." : "수정완료"}
        </button>
      </div>
    </form>
  );
}
