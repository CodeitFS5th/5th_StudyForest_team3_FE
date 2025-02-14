"use client";

import Image from "next/image";
import emojiIcon from "@/assets/images/icon/ic_smile.png";
import EmojiPickerWrapper from "@/components/emojiPickerWrapper/EmojiPickerWrapper";
import { useState } from "react";

export default function ButtonAddEmoji() {
  const [open, setOpen] = useState(true);

  console.log(open);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-custom-color-black-400 font-medium bg-white/30 border border-black/10 flex gap-[5px] w-[67px] py-1.5 rounded-3xl items-center justify-center transition hover:bg-custom-color-black-100"
      >
        <Image src={emojiIcon} alt="emoji icon" className="w-[18px] h-[18px]" />
        <p>추가</p>
      </button>
      {open && <EmojiPickerWrapper open={open} />}
    </>
  );
}
