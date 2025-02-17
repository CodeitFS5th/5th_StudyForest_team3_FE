import {
  ButtonStart,
  ButtonStop,
  ButtonStartDisabled,
} from "@/components/button/ButtonRound";
import { ButtonRestart, ButtonPause } from "@/components/button/ButtonCircle";

type Props = {
  isFocusStart: boolean;
  isSuccess: boolean;
  handleTimer: {
    start: () => void;
    pause: () => void;
    stop: () => void;
  };
};

export default function TimerButton({
  isFocusStart,
  isSuccess,
  handleTimer,
}: Props) {
  return (
    <div className="flex gap-[8px]">
      <div>
        {isFocusStart && !isSuccess && (
          <ButtonPause onClick={handleTimer.pause} />
        )}
      </div>
      <div>
        {!isFocusStart ? (
          <ButtonStart onClick={handleTimer.start} />
        ) : isSuccess ? (
          <ButtonStop onClick={handleTimer.stop} />
        ) : (
          <ButtonStartDisabled />
        )}
      </div>
      <div>
        {isFocusStart && !isSuccess && (
          <ButtonRestart onClick={handleTimer.stop} />
        )}
      </div>
    </div>
  );
}
