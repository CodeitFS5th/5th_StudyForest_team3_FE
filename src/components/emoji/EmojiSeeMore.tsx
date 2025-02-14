"use client";

import { useState } from "react";
import Emoji from "./Emoji";
export default function EmojiSeeMore({
  moreEmojis,
}: {
  moreEmojis: { emoji: string; count: number }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={
          "inline-flex items-center gap-[5px] px-[12px] py-[6px] rounded-[50px] xl:right-[30px] bg-[rgba(0,0,0,0.3)] text-white text-[16px] hover:bg-[rgba(0,0,0,0.4)]"
        }
      >
        <p>+ {moreEmojis.length}..</p>
      </button>
      {isOpen && (
        <div className="absolute top-[45px] left-[-30px] p-[12px] border border-custom-color-black-200 rounded-[15px] bg-white drop-shadow-lg">
          <div className="grid grid-cols-4 gap-[4px]">
            {moreEmojis.map((emoji) => (
              <Emoji key={emoji.emoji}>
                <p>
                  {emoji.emoji} {emoji.count}
                </p>
              </Emoji>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
