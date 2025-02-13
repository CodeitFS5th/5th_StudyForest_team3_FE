import { PageIdParams, Habit } from "@/types";
import HabitHead from "./_components/HabitHead";
import TodayHabitHead from "./_components/TodayHabitHead";
import TodayHabitItems from "./_components/TodayHabitItems";

export default async function Page({ params }: PageIdParams) {
  const { id } = await params;

  return (
    <>
      <HabitHead studyId={id} />
      <section className="p-4 md:p-6 rounded-2xl border border-custom-color-black-200 mt-6 xl:mt-10">
        <TodayHabitHead />
        <TodayHabitItems studyId={id} />
      </section>
    </>
  );
}
