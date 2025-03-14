"use client";

import {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: ReactNode;
}

export type ModalHandle = Record<"close" | "show", () => void>;

const Modal = forwardRef<ModalHandle, IModalProps>(function Modal(
  { children },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isPortalReady, setIsPortalReady] = useState(false);

  const handleClose = () => dialogRef.current?.close();
  const handleOpen = () => dialogRef.current?.showModal();

  // useEffect 대신 useLayoutEffect를 사용하여 렌더링 직후에 실행
  useLayoutEffect(() => {
    // modal-root가 렌더링된 후 포탈을 생성
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      console.error("Modal root element not found");
      return;
    }
    setIsPortalReady(true); // modal-root가 존재하면 포탈 준비 완료
    dialogRef.current?.scrollTo({
      top: 0,
      left: dialogRef.current.scrollWidth,
    });
  }, []);

  // 부모 컴포넌트에서 ref를 통해 handleClose를 호출할 수 있도록 설정
  useImperativeHandle(ref, () => ({
    close: handleClose,
    show: handleOpen,
  }));

  if (!isPortalReady) return null;

  return createPortal(
    <dialog
      onClose={handleClose}
      ref={dialogRef}
      className="bg-white rounded-2xl py-6 px-4 md:py-10 md:px-6 m-auto z-50 backdrop:bg-black/50 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
});

export default Modal;
