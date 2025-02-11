"use client";

import { useParams } from "next/navigation";
import HabitList from "@habit/habit-list";
import Modal from "@modal/modal";
import { useModal } from "@modal/core/useModal";

export default function Page() {
  const params = useParams();
  const id = Number(params.id);
  const { modalRef, openModal, closeModal } = useModal(); // 모달 여러개일 경우 :별칭 사용해서 변수명만 바꿔주면 됨

  return (
    <>
      <h1>/study/{id}</h1>
      <button onClick={openModal} className="cursor-pointer ">
        오늘의 습관
      </button>
      <Modal ref={modalRef}>
        <HabitList studyId={id} onClose={closeModal} />
      </Modal>
    </>
  );
}
