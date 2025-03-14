import { ModalHandle } from "@/components/modal/Modal";
import { ButtonCheck } from "@/components/button/ButtonRectangle";

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

      <ButtonCheck onClick={onClose} />
    </div>
  );
}
