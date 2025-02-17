import { PageIdParams, Study } from "@/types";
import Management from "@/components/management/Management";
import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";
import HabitTracker from "@/components/habit/habit-tracker/HabitTracker";
import {
  ButtonTodayFocus,
  ButtonTodayHabit,
} from "@/components/button/ButtonToday";
import ButtonAddEmojiWrapper from "@/components/ButtonAddEmoji/ButtonAddEmojiWrapper";
import TagReactions from "@/components/tag/TagReactions";
import Point from "@/components/tag/Point";

// 경로 미리 생성
export async function generateStaticParams() {
  try {
    const studyList = await fetchData<Study[]>(`${API_URL}/study`);

    if (!studyList) {
      return { id: 1 };
    }

    return studyList.map((study) => ({ id: study.id }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page({ params }: PageIdParams) {
  const { id } = await params;

  const study = await fetchData<Study>(`${API_URL}/study/${id}`, {
    cache: "no-cache",
  });

  if (!study) {
    return <div>스터디를 찾을 수 없습니다.</div>;
  }

  const { nick, name, description, point, reactions } = study;

  return (
    <>
      <section className="flex flex-col-reverse gap-4 md:flex-row justify-between mb-6">
        <div className="flex gap-1 relative">
          <TagReactions reactions={reactions} />
          <ButtonAddEmojiWrapper />
        </div>
        <Management title={`${nick}의 ${name}`} studyId={id} />
      </section>

      <section className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-custom-color-black-400 text-3xl font-extrabold">
          {nick}의 {name}
        </h1>
        <div className="flex gap-4">
          <ButtonTodayHabit studyId={id} />
          <ButtonTodayFocus studyId={id} />
        </div>
      </section>

      <section className="mb-6 ">
        <h3 className="text-custom-color-black-300 text-lg mb-2">소개</h3>
        <p className="text-custom-color-black-400">{description}</p>
      </section>

      <Point point={point} />

      <section className="overflow-auto p-4 md:p-6 rounded-2xl border border-custom-color-black-200 mt-6 xl:mt-10">
        <HabitTracker studyId={id} />
      </section>
    </>
  );
}
