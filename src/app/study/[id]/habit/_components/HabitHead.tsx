import {
  ButtonTodayFocus,
  ButtonStudyHome,
} from "@/components/button/ButtonToday";
import { FK, Habit, Study } from "@/types";
import CurrentTime from "./currentTime";
import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";

interface HabitHeadProps {
  studyId: number;
}

// 변수값을 털어준다.
export default async function HabitHead({ studyId }: HabitHeadProps) {
  const study = await fetchData<Study>(`${API_URL}/study/${studyId}`, {
    cache: "no-cache",
  });

  if (!study) return;
  const { nick, name } = study;

  return (
    <>
      <div className="flex flex-col px-[16px] pt-[16px] w-full md:px-[24px] md:pt-[24px] xl:px-[40px] xl:pt-[40px] ">
        <div className="flex flex-col w-full gap-[16px]">
          <section className="flex flex-col w-full gap-[17px] justify-between md:flex-row">
            <h1 className="text-[32px] font-extrabold">
              {nick}의 {name}
            </h1>

            <div className="flex gap-[8px] md:gap-[16px]">
              <div className="w-[144px]">
                <ButtonTodayFocus studyId={studyId} />
              </div>
              <div className="w-[82px]">
                <ButtonStudyHome studyId={studyId} />
              </div>
            </div>
          </section>

          <section>
            <CurrentTime />
          </section>
        </div>
      </div>
    </>
  );
}
