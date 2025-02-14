"use client";

import EmojiPicker from "emoji-picker-react";

export default function EmojiPickerWrapper({ open }: { open: boolean }) {
  return (
    <div className="absolute top-[45px] left-[30px] p-[12px] border border-custom-color-black-200 rounded-[15px] bg-white drop-shadow-lg">
      <EmojiPicker open={open} />
    </div>
  );
}
