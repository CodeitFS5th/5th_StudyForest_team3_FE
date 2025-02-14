import Card from "@/components/Card/Card";

export default function RecentStudyHistory() {
  return (
    <div className="max-w-[1200px] h-[247px] md:h-[338px] xl:h-[382px] mx-4 md:mx-6 xl:mx-auto py-4 md:py-6 xl:py-8 pl-4 md:pl-6 xl:pl-8 bg-white rounded-2xl">
      <div className="w-full h-full">
        <p className="text-2xl font-medium mb-4 md:mb-4.5 xl:mb-7.5">
          최근 조회한 스터디
        </p>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-x-6 w-full h-[180px] md:h-[270px]">
          <Card
            bg="green"
            isPictureBg={false}
            point={0}
            titleName="테스트"
            titleStudy="의 테스트 스터디"
            streak={0}
            description="테스트 설명"
          />
          <Card
            bg="pink"
            isPictureBg={false}
            point={0}
            titleName="테스트"
            titleStudy="의 테스트 스터디"
            streak={0}
            description="테스트 설명"
          />
          <Card
            bg="yellow"
            isPictureBg={false}
            point={0}
            titleName="테스트"
            titleStudy="의 테스트 스터디"
            streak={0}
            description="테스트 설명"
          />
          <Card
            bg="yellow"
            isPictureBg={false}
            point={0}
            titleName="테스트"
            titleStudy="의 테스트 스터디"
            streak={0}
            description="테스트 설명"
          />
        </div>
      </div>
    </div>
  );
}
