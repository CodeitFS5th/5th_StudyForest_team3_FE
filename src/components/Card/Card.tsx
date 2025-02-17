import Point from "@/components/Point/Point";
import Link from "next/link";

interface Props {
  id: number;
  // 대문자로 바꿔줘
  bg: "GREEN" | "YELLOW" | "BLUE" | "RED" | "DESK" | "WINDOW" | "TILE" | "LEAF";
  isPictureBg: boolean;
  point: string | number;
  titleName: string;
  titleStudy: string;
  date: string;
  description: string;
  reactions: {
    [key: string]: number;
  };
}

export default function Card({
  id,
  bg,
  isPictureBg = false,
  point = 0,
  titleName = "테스트",
  titleStudy = "의 테스트 스터디",
  date = "",
  description = "테스트 설명",
}: // reactions = {},
Props) {
  const settings = {
    bg: "bg-custom-color-card-green",
    pointText: isPictureBg ? "text-white" : "text-custom-color-black-400",
    pointTextColor: isPictureBg ? "text-white" : "text-custom-color-black-400",
    pointBg: isPictureBg
      ? "bg-black/10 border border-black/50"
      : "bg-white/30 border border-black/10",
    titleNameText: isPictureBg ? "text-white" : "text-custom-color-text-green",
    titleStudyText: isPictureBg ? "text-white" : "text-custom-color-black-400",
    streakText: isPictureBg ? "text-white" : "text-custom-color-black-300",
    descriptionText: isPictureBg ? "text-white" : "text-custom-color-black-400",
  };

  switch (bg) {
    case "YELLOW":
      settings.bg = "bg-custom-color-card-yellow";
      break;
    case "BLUE":
      settings.bg = "bg-custom-color-card-blue";
      break;
    case "GREEN":
      settings.bg = "bg-custom-color-card-green";
      break;
    case "RED":
      settings.bg = "bg-custom-color-card-red";
      break;
    //아니 백그라운드 이미지 어딨음?

    default:
      settings.bg = "bg-custom-color-card-green";
  }

  // date와 현재 시간을 빼서 몇일째 진행중인지 계산
  const coutinueDays = Math.ceil(
    (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
  );

  // // reactions 객체에서 좋아요 개수가 많은 상위 3개를 추출
  // const top3Reactions = Object.entries(reactions)
  //   .sort((a, b) => b[1] - a[1])
  //   .slice(0, 3);

  return (
    <Link href={`/study/${id}`}>
      <div
        className={`flex-shrink-0 w-[240px] h-[180px] md:w-[358px] md:h-[243px] rounded-3xl p-4 xl:p-[30px] relative ${settings.bg} cursor-pointer hover:scale-102 transition`}
      >
        <Point
          point={point}
          pointBg={settings.bg}
          pointTextColor={settings.pointTextColor}
        />
        <div className="flex gap-0.5 mt-1.5 xl:mt-0">
          <p className={`font-bold xl:text-[18px] ${settings.titleNameText}`}>
            {titleName}
          </p>
          <p className={`font-bold xl:text-[18px] ${settings.titleStudyText}`}>
            {titleStudy}
          </p>
        </div>
        <p
          className={`${settings.streakText} mt-1 xl:mt-[10px] text-[12px] xl:text-[14px]`}
        >
          {coutinueDays}일째 진행 중
        </p>
        <p
          className={`${settings.descriptionText} mt-3 xl:mt-[30px] text-[12px] xl:text-[14px]`}
        >
          {description}
        </p>
        {/* 하단 3개 칩 가로로 나열 */}
        <div className="flex gap-1 mt-3">
          {/* {top3Reactions.map(([reaction, count]) => (
          // <Tag
        ))} */}
        </div>
      </div>
    </Link>
  );
}
