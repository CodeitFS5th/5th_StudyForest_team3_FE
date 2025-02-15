import fetchData from "@/lib/apis/fetchData";
import { PageIdParams, Study } from "@/types";
import { API_URL } from "@/constants";
import {
  ButtonTodayHabit,
  ButtonStudyHome,
} from "@/components/button/ButtonToday";
import Point from "./_components/Point";
import Timer from "./_components/Timer";

export default async function FocusPage({ params }: PageIdParams) {
  const { id: studyId } = await params;

  const studyData = await fetchData<Study>(`${API_URL}/study/${studyId}`, {
    cache: "no-cache",
  });

  if (!studyData) {
    return;
    <div>스터디가 존재하지 않습니다.</div>;
  }

  const studyTitle = `${studyData.nick}의 ${studyData.name}`;
  const studyPoint = studyData.point;

  return (
    <div className="flex flex-col w-full h-full gap-[16px]">
      <div className="flex flex-col gap-[25px]">
        <section className="flex flex-col gap-[17px] md:flex-row md:justify-between">
          <h1 className="text-[24px] font-[800] text-custom-color-black-400 md:text-[32px] ">
            {studyTitle}
          </h1>
          <div className="flex gap-[8px]">
            <div className="w-[120px] md:w-[144px]">
              <ButtonTodayHabit studyId={Number(studyId)} />
            </div>
            <div className="w-[58px] md:w-[82px]">
              <ButtonStudyHome studyId={Number(studyId)} />
            </div>
          </div>
        </section>
        <Point point={studyPoint} />
        <Timer studyId={Number(studyId)} initialPoint={studyPoint} />
      </div>
    </div>
  );
}
