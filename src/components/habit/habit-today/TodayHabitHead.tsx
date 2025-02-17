"use client";

import Modal from "@/components/modal/Modal";
import HabitList from "../habit-list/HabitList";
import { PK, Study } from "@/types";
import { useModal } from "@/hooks/useModal";

export default function TodayHabitHead({ studyId }: { studyId: PK<Study> }) {
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex justify-between items-center gap-1 w-full max-w-100 relative">
        <h1 className="text-[18px] md:text-[24px] font-extrabold mx-auto">
          오늘의 습관
        </h1>
        <p
          className="text-custom-color-black-300 text-sm absolute right-0 cursor-pointer"
          onClick={openModal}
        >
          목록 수정
        </p>
      </div>

      <Modal ref={modalRef}>
        <HabitList studyId={studyId} onClose={closeModal} />
      </Modal>
    </>
  );
}
