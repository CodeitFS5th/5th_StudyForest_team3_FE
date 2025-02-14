export interface TimerProps {
  goalTimeInput: {
    minutes: string;
    seconds: string;
  };
  timeStatus: {
    goalTime: number;
    time: number;
  };
  timerStatus: {
    isFocusStart: boolean;
    isRunning: boolean;
    isSuccess: boolean;
  };
  getTime: {
    minutes: (time: number) => string;
    seconds: (time: number) => string;
  };
  handleGoalTimeInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "minutes" | "seconds"
  ) => void;
  handleTimer: {
    start: () => void;
    pause: () => void;
    stop: () => void;
  };
}
