"use client";

import { Reaction } from "@/types";
import Tag from "./Tag";
import { useMemo, useState } from "react";

function ReactionPanel({ reactions }: { reactions: Reaction }) {
  return (
    <div className="w-auto min-w-[250px] p-3 rounded-2xl border border-custom-color-black-200 absolute z-10 bg-white grid grid-cols-4 gap-2 justify-start top-full right-0 mt-2 shadow-lg">
      {Object.entries(reactions).map(([emoji, count]) => (
        <Tag key={emoji} theme="black">
          <div className="flex gap-1 items-center">
            <p>{emoji}</p>
            <p>{count}</p>
          </div>
        </Tag>
      ))}
    </div>
  );
}

export default function RestReactions({ reactions }: { reactions: Reaction }) {
  const [isShow, setIsShow] = useState(false);
  const restLength = useMemo(() => Object.keys(reactions).length, [reactions]);
  if (restLength === 0) return null;

  const handleToggle = () => setIsShow((prev) => !prev);

  return (
    <div className="flex gap-2 relative">
      <Tag theme="gray" onClick={handleToggle}>
        + {restLength}...
      </Tag>
      {isShow && <ReactionPanel reactions={reactions} />}
    </div>
  );
}
