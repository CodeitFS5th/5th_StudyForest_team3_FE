"use client";

import authHabitPasswordAction from "@popup/core/auth-habit-password.action";
import { useActionState, useEffect, useState } from "react";
import HabitList from "../habit/habit-list";
import { FK, IHabit } from "@/types";
import { ModalHandle } from "@modal/modal";
import { ButtonModify } from "@button/button-rectangle";

interface AuthHabitPasswordProps {
  studyId: FK<IHabit, "studyId">;
  onClose: ModalHandle["close"];
}

export default function AuthHabitPassword({
  studyId,
  onClose,
}: AuthHabitPasswordProps) {
  const [state, formAction, isPending] = useActionState(
    authHabitPasswordAction,
    null
  );
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (state && !state.status) {
      // status 실패일 때
      // status.message로 toast 띄우기
      // toast는 민희님 게서 만드시면 그때 추가하기
    } else {
      // status 성공일 때
      setIsAuth(true);
    }
  }, [state]);

  return (
    <>
      <form action={formAction} className="w-74 md:w-150 text-center relative">
        <h1 className="text-custom-color-black-400 text-2xl extrabold">
          {studyId} 스터디에 참여하기
        </h1>
        <p className="text-custom-color-black-300 text-lg my-5 md:my-7">
          권한이 필요해요
        </p>

        <input name="studyId" value={studyId} hidden readOnly />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          className="w-full border-2 border-custom-color-black-400 p-2 rounded-md"
        />

        <ButtonModify type="submit" disabled={isPending} />

        <button
          type="button"
          onClick={onClose}
          className="md:absolute md:top-0 md:right-0 my-[6px] text-custom-color-text-green cursor-pointer"
        >
          나가기
        </button>
      </form>

      {isAuth && <HabitList studyId={studyId} onClose={onClose} />}
    </>
  );
}
