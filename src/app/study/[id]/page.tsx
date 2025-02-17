import { PageIdParams, Study, Reaction } from "@/types";
import Management from "@/components/management/Management";
import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";
import HabitTracker from "@/components/habit/habit-tracker/HabitTracker";
import {
  ButtonTodayFocus,
  ButtonTodayHabit,
} from "@/components/button/ButtonToday";
import ButtonAddEmojiWrapper from "@/components/ButtonAddEmoji/ButtonAddEmojiWrapper";
import Top3Reactions from "@/components/tag/Top3Reactions";
import Point from "@/components/tag/Point";
import RestReactions from "@/components/tag/RestReactions";

// 반응을 top3 필터링하는 함수
const filterReactions = (reactions: Reaction) => {
  const filtered = Object.entries(reactions).sort(([, a], [, b]) => b - a);

  const lastIndex = filtered.length < 3 ? filtered.length : 3;
  const top3Reactions = Object.fromEntries(filtered.slice(0, lastIndex));
  const restReactions = Object.fromEntries(filtered.slice(3)) || {};

  return { top3Reactions, restReactions };
};

export default async function Page({ params }: PageIdParams) {
  const { id } = await params;

  const study = await fetchData<Study>(`${API_URL}/study/${id}`, {
    next: { tags: [`study-${id}`] },
  });

  if (!study) {
    return <div>스터디를 찾을 수 없습니다.</div>;
  }

  const { nick, name, description, point, reactions } = study;
  const { top3Reactions, restReactions } = filterReactions(reactions);

  return (
    <>
      <section className="flex flex-col-reverse gap-4 md:flex-row justify-between mb-6">
        <div className="flex gap-1 relative">
          <Top3Reactions reactions={top3Reactions} />
          <RestReactions reactions={restReactions} />
          <ButtonAddEmojiWrapper studyId={id} />
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

      <section className="mb-6">
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
