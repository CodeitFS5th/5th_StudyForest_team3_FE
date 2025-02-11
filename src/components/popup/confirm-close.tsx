import { ModalHandle } from "@/components/modal/modal";

export default function ConfirmClose(onClose: ModalHandle["close"]) {
  // 버튼은 공통 컴포넌트로 교체하기
  return (
    <div className="w-74 md:w-150">
      <h1 className="text-custom-color-black-400 text-lg md:text-base mb-14 mt-10 md:my-12 text-center">
        정말 나가시겠습니까?
      </h1>
      <div className="flex gap-6">
        <button
          onClick={onClose}
          className="w-full cursor-pointer p-1.5 border-2 border-custom-color-black-400 rounded-md"
        >
          취소
        </button>
        <button
          onClick={onClose}
          className="w-full cursor-pointer p-1.5 border-2 border-custom-color-black-400 rounded-md"
        >
          확인
        </button>
      </div>
    </div>
  );
}
