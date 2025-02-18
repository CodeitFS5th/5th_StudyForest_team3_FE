import RecentStudyHistory from "./study/_components/RecentStudyHistory";
import StudyList from "./study/_components/StudyList";

export async function generateMetadata() {
  return {
    title: "공부의 숲",
    description: "공부의 숲은 공부하는 모든 사람들을 위한 공간입니다.",
    openGraph: {
      title: "공부의 숲",
      description: "공부의 숲은 공부하는 모든 사람들을 위한 공간입니다.",
      images: [
        {
          url: "/og-image.webp", // OG 이미지의 URL
          width: 1200, // OG 이미지의 너비
          height: 630, // OG 이미지의 높이
          alt: "OG Image", // 대체 텍스트
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <>
      <RecentStudyHistory />
      <StudyList />
    </>
  );
}
