"use client";

import Image from "next/image";
import icon_trash from "@/assets/images/icon/ic_trash.png";

interface HabitItemDeleteButtonProps {
  onDelete: () => void;
}

export default function HabitItemDeleteButton({
  onDelete,
}: HabitItemDeleteButtonProps) {
  return (
    <button
      type="button"
      onClick={onDelete}
      className="bg-custom-color-card-pink p-3 rounded-full cursor-pointer"
    >
      <Image src={icon_trash} width={24} height={24} alt="습관 삭제 버튼" />
    </button>
  );
}
