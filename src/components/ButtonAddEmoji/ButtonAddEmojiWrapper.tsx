// app/page.tsx (Server Component)
"use client";

import dynamic from "next/dynamic";

const ButtonAddEmoji = dynamic(
  () => import("@/components/ButtonAddEmoji/ButtonAddEmoji"),
  {
    ssr: false,
  }
);

export default function ButtonAddEmojiWrapper() {
  return (
    <div className="relative">
      <ButtonAddEmoji />
    </div>
  );
}
