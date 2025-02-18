import Point from "@/components/tag/Point";
import { Study } from "@/types";
import Link from "next/link";
import Image from "next/image";
import pointIcon from "@/assets/images/icon/point.png";

interface Props {
  study: Study;
}

export default function Card({ study }: Props) {
  const {
    id,
    background,
    point,
    nick: titleName,
    name: titleStudy,
    createdAt: date,
    description,
    reactions,
  } = study;

  const isPictureBg = ["DESK", "WINDOW", "TILE", "LEAF"].includes(
    background.toUpperCase()
  );
  const bg = background.toUpperCase() as
    | "GREEN"
    | "YELLOW"
    | "BLUE"
    | "RED"
    | "DESK"
    | "WINDOW"
    | "TILE"
    | "LEAF";

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

  // 최상위 3개 리액션
  const top3Reactions = Object.entries(reactions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  return (
    <Link href={`/study/${id}`}>
      <div
        className={`flex flex-col flex-shrink-0 w-[240px] h-[180px] md:w-[358px] md:h-[243px] rounded-3xl p-4 xl:p-[30px] relative ${settings.bg} cursor-pointer hover:scale-102 transition`}
      >
        <div className="flex justify-between gap-0.5 mt-1.5 xl:mt-0">
          {/* 스터디 제목 */}
          <div className="flex">
            <p className={`font-bold xl:text-[18px] ${settings.titleNameText}`}>
              {titleName}
            </p>
            <p
              className={`font-bold xl:text-[18px] text-custom-color-black-600 truncate`}
            >
              의 {titleStudy}
            </p>
          </div>
          {/* 포인트 */}
          <div className="flex flex-row items-center gap-1 bg-[rgba(255,255,255,0.3)] rounded-full px-2 border border-[rgba(0,0,0,0.1)] truncate">
            <Image
              src={pointIcon}
              alt="point icon"
              className="w-[14px] h-[14px]"
            />
            <p className={`font-medium text-[12px] whitespace-nowrap`}>
              {point}P 획득
            </p>
          </div>
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
        <div className="flex-grow" />
        {/* 하단 3개 칩 가로로 나열 */}
        <div className="flex gap-1">
          {top3Reactions.map(([reaction, count]) => (
            <div
              key={reaction}
              className="flex items-center justify-center gap-1 w-[48px] h-[26px] p-1.5 rounded-full bg-[rgba(0,0,0,0.4)] text-white text-[12px]"
            >
              <p className="font-medium">{reaction}</p>
              <p>{count}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
