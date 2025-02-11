"use client";

import { useParams } from "next/navigation";

import Management from "@/components/management/Management";

export default function Page() {
  const params = useParams();
  const id = Number(params.id);

  return (
    <>
      <section className="flex flex-row justify-between">
        <div>이모지 컴포넌트</div>
        <Management studyId={id} />
      </section>

      <section>title, 오늘의 습관, 오늘의 집중</section>

      <section>description</section>
      <section>point</section>
    </>
  );
}
