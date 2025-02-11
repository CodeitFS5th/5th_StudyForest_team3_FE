import { ButtonHabit, ButtonHome } from "@/components/button/ButtonNav";

export default function FocusPage({
  name,
  point,
}: {
  name: string;
  point: number;
}) {
  return (
    <div>
      <header>
        <h1>{name}</h1> {/* study name */}
        <div>
          <ButtonHabit>오늘의 습관</ButtonHabit>
          <ButtonHome>홈</ButtonHome>
        </div>
        <div>
          <p>현재까지 획득한 포인트</p>
          <p>{point}</p>
        </div>
      </header>
      <div>
        <h2>오늘의 집중</h2>
        <div>타이머!</div>
      </div>
    </div>
  );
}
