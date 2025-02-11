import Image from "next/image";
import icon_plus from "@/assets/images/icon/ic_plus.png";

export default function NewHabitItemAddButton({ ...props }) {
  return (
    <div className="md:pr-12">
      <button
        {...props}
        className="w-64 md:w-100 py-4 border-2 rounded-3xl border-custom-color-black-400 cursor-pointer flex items-center justify-center"
      >
        <Image src={icon_plus} width={24} height={24} alt="습관 추가 버튼" />
      </button>
    </div>
  );
}
