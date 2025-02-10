import { ModalHandle } from "../modal/modal";

interface AlertMessageProps {
  message: string;
  onClose: ModalHandle["close"];
}

export default function AlertMessage({ message, onClose }: AlertMessageProps) {
  return (
    <div className="w-74 md:w-150">
      <h1 className="text-custom-color-black-400 text-lg md:text-base mb-14 mt-10 md:my-12 text-center">
        {message}
      </h1>
      <button
        onClick={onClose}
        className="w-full cursor-pointer border-2 border-custom-color-black-400 py-2 rounded-md"
      >
        확인
      </button>
    </div>
  );
}
