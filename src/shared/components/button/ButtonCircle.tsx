import { ButtonCircle } from "./core/hooks/CircleHooks";
import { Category } from "./core/hooks/CircleHooks";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: () => void;
}

//Start! 버튼 고려해야함
//restart 항상 사용할려면 disabled={false}
export function ButtonPause({ type, disabled, onClick }: ButtonProps) {
  return (
    <ButtonCircle
      type={type}
      category={Category.Pause}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

export function ButtonRestart({ type, disabled, onClick }: ButtonProps) {
  return (
    <ButtonCircle
      type={type}
      category={Category.Restart}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

//사용 예시
/*function 어쩌구(){ 
  const [isPaused, setIsPaused] = useState(false);
  //정지 함수는 여기 넣으면 됩니다!
  const handlePause = () => {
    setIsPaused(true);
  };

  //재시작시 함수는 여기에 넣으시면 됩니다!
  const handleRestart = () => {
    setIsPaused(false);
  };

return(
RestartButton 항상 활성화시 disabled제거 후 ButtonCircle.tsx 확인
<PauseButton disabled={isPaused} onClick={handlePause} />
<RestartButton disabled={!isPaused} onClick={handleRestart} />
)};

*/
