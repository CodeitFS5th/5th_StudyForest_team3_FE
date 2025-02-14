// app/page.tsx (Server Component)
"use client";

import dynamic from "next/dynamic";

import ButtonAddEmoji  "@/components/ButtonAddEmoji/ButtonAddEmoji";

export default function Page() {
  return (
    <div>
      <ButtonAddEmoji />
    </div>
  );
}
