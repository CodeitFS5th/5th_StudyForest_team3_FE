"use client";

import { useModal } from "@/shared/components/modal/core/useModal";
import Modal from "@/shared/components/modal/modal";
// import AlertMessage from "@popup/alert-message";
// import ConfirmClose from "@/shared/components/popup/confirm-close";
import AuthHabitPassword from "@popup/auth-habit-password";
import Link from "next/link";

export default function Home() {
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <main>
        <h1>Home</h1>

        <div>
          <Link href="http://localhost:3000/study/8">스터디8</Link>
        </div>

        {/* <div>
          <button onClick={openModal} className="cursor-pointer">
            alert message
          </button>
          <Modal ref={modalRef}>
            <AlertMessage
              message="팝업 관련 메시지가 들어갑니다!"
              onClose={closeModal}
            />
          </Modal>
        </div> */}

        <div>
          <button onClick={openModal} className="cursor-pointer">
            auth habit password
          </button>
          <Modal ref={modalRef}>
            <AuthHabitPassword studyId={1} onClose={closeModal} />
          </Modal>
        </div>

        {/* <div>
          <button onClick={openModal} className="cursor-pointer">
            alert habit password
          </button>
          <Modal ref={modalRef}>
            <AuthHabitPassword studyId={8} onClose={closeModal} />
          </Modal>
        </div> */}
      </main>
    </>
  );
}
