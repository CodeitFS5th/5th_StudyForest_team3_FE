"use client";

import Modal from "@/components/modal/Modal";
import { Toast } from "@/components/toast/Toast";
import { useModal } from "@/hooks/useModal";
import { FK, Habit } from "@/types";
import { useToastMount } from "@/hooks/useToastMount";
import AuthPassword from "@/components/popup/AuthPassword";

interface ManagementProps {
  studyId: FK<Habit, "studyId">;
}

export default function Management({ studyId }: ManagementProps) {
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

  const handleDeleteStudy = () => {
    openAuthModal();
    alert("스터디 삭제하기");
  };

  return (
    <>
      <div className="flex flex-row gap-2">
        <p
          className="text-custom-color-text-green cursor-pointer"
          onClick={handleShare}
        >
          공유하기
        </p>
        <span>|</span>
        <p className="text-custom-color-text-green cursor-pointer">수정하기</p>
        <span>|</span>
        <p
          className="text-custom-color-black-300 cursor-pointer"
          onClick={handleDeleteStudy}
        >
          스터디 삭제하기
        </p>
      </div>

      {/* Modal */}
      <Modal ref={authModalRef}>
        <AuthPassword studyId={studyId} onClose={closeAuthModal}>
          <button></button>
        </AuthPassword>
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
