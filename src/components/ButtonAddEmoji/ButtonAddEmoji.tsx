"use client";

import Image from "next/image";
import emojiIcon from "@/assets/images/icon/ic_smile.png";
import { useActionState, useEffect, useRef, useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import createReactionAction from "@/lib/actions/create-reaction.action";

export default function ButtonAddEmoji({ studyId }: { studyId: number }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isClick, setIsClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [emoji, setEmoji] = useState<string>("");
  const [state, formAction, isPending] = useActionState(
    createReactionAction,
    null
  );

  // 이모지 선택 시 실행될 함수
  const handleEmojiClick = async (emojiData: EmojiClickData, _: MouseEvent) => {
    setIsClick(true);
    setEmoji(() => emojiData.emoji); // 이모지 설정

    setTimeout(() => {
      setIsClick(false); // 일정 시간 후 isClick을 false로 설정
    }, 300); // 300ms 후
  };

  useEffect(() => {
    if (state && !state.status) {
      alert(state.message);
    }
  }, [state]);

  useEffect(() => {
    if (isClick) {
      formRef.current?.requestSubmit(); // form submit
    }
  }, [isClick]);

  return (
    <form ref={formRef} action={formAction}>
      <input name="emoji" value={emoji} hidden readOnly />
      <input name="studyId" value={studyId} hidden readOnly />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer text-custom-color-black-400 font-medium bg-white/30 border border-black/10 flex gap-[5px] w-[67px] py-1.5 rounded-3xl items-center justify-center transition hover:bg-custom-color-black-100"
      >
        <Image src={emojiIcon} alt="emoji icon" className="w-[18px] h-[18px]" />
        <p>추가</p>
      </button>

      {open && (
        <div className="absolute top-[45px] border border-custom-color-black-200 rounded-[15px] bg-white drop-shadow-lg">
          <EmojiPicker open={open} onEmojiClick={handleEmojiClick} />
          {isPending && <div>loading...</div>}
        </div>
      )}
    </form>
  );
}
