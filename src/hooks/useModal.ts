import { useRef } from "react";
import { ModalHandle } from "@/components/modal/modal";

// 모달을 여닫는 로직을 custom hook으로 분리
export function useModal() {
  const modalRef = useRef<ModalHandle>(null);

  const openModal = () => modalRef.current?.show();
  const closeModal = () => modalRef.current?.close();

  return {
    modalRef,
    openModal,
    closeModal,
  };
}
