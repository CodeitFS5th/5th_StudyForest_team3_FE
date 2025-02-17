// app/page.tsx (Server Component)
"use client";

import { PK, Study } from "@/types";
import dynamic from "next/dynamic";

const ButtonAddEmoji = dynamic(
  () => import("@/components/ButtonAddEmoji/ButtonAddEmoji"),
  {
    ssr: false,
  }
);

export default function ButtonAddEmojiWrapper({
  studyId,
}: {
  studyId: PK<Study>;
}) {
  return (
    <div className="relative">
      <ButtonAddEmoji studyId={studyId} />
    </div>
  );
}
