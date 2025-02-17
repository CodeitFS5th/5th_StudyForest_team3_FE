"use client";

import authHabitPasswordAction from "@/lib/actions/auth-habit-password.action";
import { useActionState, useEffect } from "react";
import { FK, Habit, StudyTitle } from "@/types";
import { ModalHandle } from "@/components/modal/Modal";
import Input from "@/components/inputGroup/Input";
import { ButtonGreen3D } from "@/components/button/ButtonRectangle";
import { useRouter } from "next/navigation";
import Toast from "../toast/Toast";
import { useToastMount } from "@/hooks/useToastMount";

interface AuthPasswordProps {
  title: StudyTitle;
  studyId: FK<Habit, "studyId">;
  onClose: ModalHandle["close"];
  modalType: "delete" | "modify";
}

export default function AuthPassword({
  title,
  studyId,
  onClose,
  modalType,
}: AuthPasswordProps) {
  const router = useRouter();
  const {
    isToastMounted: isPositiveToastMounted,
    mountToast: mountPositiveToast,
  } = useToastMount();
  const {
    isToastMounted: isToastMountedNegative,
    mountToast: mountNegativeToast,
  } = useToastMount();
  const [state, formAction, isPending] = useActionState(
    authHabitPasswordAction,
    null
  );
  const isModify = modalType === "modify";

  useEffect(() => {
    if (!state) {
      return;
    }

    if (!state.status) {
      // status 실패일 때
      mountNegativeToast(); // 실패 토스트
      return;
    }

    // status 성공일 때
    if (state.path) {
      mountPositiveToast(); // 성공 토스트
      router.push(state?.path); // 경로 이동
    }
  }, [
    state,
    isPending,
    onClose,
    mountNegativeToast,
    mountPositiveToast,
    router,
  ]);

  return (
    <>
      <form action={formAction} className="w-74 md:w-150 text-center relative">
        <h1 className="text-custom-color-black-400 text-2xl extrabold">
          {title}
        </h1>
        <p className="text-custom-color-black-300 text-lg my-5 md:my-7">
          권한이 필요해요
        </p>

        <input name="studyId" value={studyId} hidden readOnly />
        <input name="modalType" value={modalType} hidden readOnly />
        <Input label="비밀번호" type="password" name="password" />

        <div className="mt-6 md:mt-10">
          {isModify && (
            <ButtonGreen3D type="submit">
              {isPending ? "로딩 중..." : "수정하러 가기"}
            </ButtonGreen3D>
          )}

          {!isModify && (
            <ButtonGreen3D type="submit">
              {isPending ? "로딩 중..." : "삭제하러 가기"}
            </ButtonGreen3D>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="md:absolute md:top-0 md:right-0 md:my-0 my-4 text-custom-color-text-green cursor-pointer"
        >
          나가기
        </button>
      </form>

      {/* Toast */}
      <Toast
        color="green"
        position="bottom"
        label={state?.message || ""}
        isMounted={isPositiveToastMounted}
      />
      <Toast
        color="red"
        position="bottom"
        label={state?.message || ""}
        isMounted={isToastMountedNegative}
      />
    </>
  );
}
