import { ButtonHabit } from "@/components/button/ButtonNav";

export default function FocusPage() {
  return (
    <div>
      <header>
        <h1>연우의 개발공장</h1> {/* study name */}
        <ButtonHabit>오늘의 습관</ButtonHabit>
      </header>
      <div>
        <h2>오늘의 집중</h2>
        <div>타이머!</div>
      </div>
    </div>
  );
}
