"use client";

import Modal from "@/components/modal/Modal";
import { Toast } from "@/components/toast/Toast";
import { useModal } from "@/hooks/useModal";
import { FK, StudyIdInHabit, StudyTitle } from "@/types";
import { useToastMount } from "@/hooks/useToastMount";
import AuthPassword from "@/components/popup/AuthPassword";
import { useState } from "react";

interface ManagementProps {
  title: StudyTitle;
  studyId: FK<StudyIdInHabit, "studyId">;
}

export default function Management({ title, studyId }: ManagementProps) {
  const {
    modalRef: authModalRef,
    openModal: openAuthModal,
    closeModal: closeAuthModal,
  } = useModal(); // 모달 여러개일 경우 :별칭 사용해서 변수명만 바꿔주면 됨
  const {
    isToastMounted: isPositiveToastMounted,
    mountToast: mountPositiveToast,
  } = useToastMount();
  const {
    isToastMounted: isToastMountedNegative,
    mountToast: mountNegativeToast,
  } = useToastMount();

  const [modalType, setModalType] = useState<"delete" | "modify">("modify"); // 모달 상태

  const handleShare = async () => {
    try {
      const currentUrl = window.location.href; // 현재 페이지의 URL을 가져오기
      await navigator.clipboard.writeText(currentUrl); // 클립보드에 URL을 복사
      mountPositiveToast();
    } catch (error) {
      console.error(error);
      mountNegativeToast();
    }
  };

  const handleOpenModifyModal = () => {
    setModalType("modify");
    openAuthModal();
  };

  const handleOpenDeleteModal = () => {
    setModalType("delete");
    openAuthModal();
  };

  return (
    <>
      <div className="flex flex-row justify-end md:justify-center gap-2 md:gap-4 text-xs md:text-base">
        <p
          className="text-custom-color-black-300 cursor-pointer"
          onClick={handleOpenDeleteModal}
        >
          스터디 삭제하기
        </p>

        <span>|</span>

        <p
          className="text-custom-color-text-green cursor-pointer"
          onClick={handleOpenModifyModal}
        >
          수정하기
        </p>

        <span>|</span>

        <p
          className="text-custom-color-text-green cursor-pointer"
          onClick={handleShare}
        >
          공유하기
        </p>
      </div>

      {/* Modal */}
      <Modal ref={authModalRef}>
        <AuthPassword
          title={title}
          studyId={studyId}
          onClose={closeAuthModal}
          modalType={modalType}
        />
      </Modal>

      {/* Toast */}
      <Toast
        color="green"
        position="bottom"
        label="URL이 클립보드에 복사되었습니다!"
        isMounted={isPositiveToastMounted}
      />
      <Toast
        color="red"
        position="bottom"
        label="URL 복사에 실패했습니다..."
        isMounted={isToastMountedNegative}
      />
    </>
  );
}
