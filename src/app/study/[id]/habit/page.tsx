import { Habit, PageIdParams, Study } from "@/types";
import TodayHabitHead from "@/components/habit/habit-today/TodayHabitHead";
import TodayHabitItems from "@/components/habit/habit-today/TodayHabitItems";
import CurrentTime from "@/components/habit/habit-today/currentTime";
import {
  ButtonStudyHome,
  ButtonTodayFocus,
} from "@/components/button/ButtonToday";
import fetchData from "@/lib/apis/fetchData";
import { API_URL } from "@/constants";

export default async function Page({ params }: PageIdParams) {
  const { id } = await params;
  const study = await fetchData<Study>(`${API_URL}/study/${id}`, {
    next: { revalidate: 3 },
  });
  const habitList = await fetchData<Habit[]>(`${API_URL}/study/${id}/habit`, {
    next: { tags: ["habit-list"] },
  });

  if (!study) return <div>Loading.......</div>;
  const { nick, name } = study;

  return (
    <>
      <section className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-custom-color-black-400 text-3xl font-extrabold">
          {nick}의 {name}
        </h1>
        <div className="flex gap-4">
          <ButtonTodayFocus studyId={id} />
          <ButtonStudyHome studyId={id} />
        </div>
      </section>

      <section>
        <CurrentTime />
      </section>

      <section className="flex flex-col justify-center items-center gap-[24px] p-4 md:p-6 rounded-2xl border border-custom-color-black-200 mt-6 xl:mt-10">
        <TodayHabitHead studyId={id} />
        <TodayHabitItems habitList={habitList || []} />
      </section>
    </>
  );
}
