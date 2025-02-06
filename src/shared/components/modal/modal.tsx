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

export interface ModalHandle {
  close: () => void;
  show: () => void;
}

const Modal = forwardRef<ModalHandle, IModalProps>(function Modal(
  { children },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isPortalReady, setIsPortalReady] = useState(false);

  const handleClose = () => dialogRef.current?.close();
  const handleOpen = () => dialogRef.current?.showModal();

  // modal-root가 렌더링이 되기전에 마운트 되어서 에러 발생) Error: Target container is not a DOM element.
  // useEffect(() => {
  //   // modal-root가 렌더링된 후 포탈을 생성
  //   handleOpen(); // 모달 열기
  //   dialogRef.current?.scrollTo({ top: 0 });
  // }, []);

  // useEffect 대신 useLayoutEffect를 사용하여 렌더링 직후에 실행
  useLayoutEffect(() => {
    // modal-root가 렌더링된 후 포탈을 생성
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return;
    setIsPortalReady(true); // modal-root가 존재하면 포탈 준비 완료
    dialogRef.current?.scrollTo({ top: 0 });
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
      className="bg-white rounded-2xl py-6 px-4 xl:py-10 xl:px-6 m-auto z-50 backdrop:bg-black/50"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
});

export default Modal;
