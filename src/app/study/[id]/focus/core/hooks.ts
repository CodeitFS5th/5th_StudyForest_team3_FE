import { useState, useEffect, useRef } from "react";
import { Study } from "@/types";
import getStudy from "@/lib/apis/getStudy";
import { useToastMount } from "@/hooks/useToastMount";

export const useGetStudy = ({ studyId }: { studyId: string }) => {
  const [study, setStudy] = useState<Study | null>(null);

  useEffect(() => {
    const fetchStudy = async () => {
      const studyData = await getStudy({ studyId: Number(studyId) });
      setStudy(() => studyData);
    };

    fetchStudy();
  }, [studyId]);

  const studyTitle = `${study?.nick}의 ${study?.name}`;
  const studyPoint = study?.point ?? 0;

  return { study, studyTitle, studyPoint };
};

export const useFocus = ({
  studyPoint,
  initialMinutes,
  initialSeconds,
}: {
  studyPoint: number;
  initialMinutes: number;
  initialSeconds: number;
}) => {
  const [goalTimeInput, setGoalTimeInput] = useState({
    minutes: initialMinutes.toString().padStart(2, "0"),
    seconds: initialSeconds.toString().padStart(2, "0"),
  });

  const [timeStatus, setTimeStatus] = useState({
    goalTime: 0,
    time: 0,
  });

  const [timerStatus, setTimerStatus] = useState({
    isFocusStart: false,
    isRunning: false,
    isSuccess: false,
  });

  const [toastStyle, setToastStyle] = useState<{
    color: "green" | "red";
    label: string;
  }>({
    color: "red",
    label: "집중이 중단되었습니다.",
  });

  const { isToastMounted, mountToast } = useToastMount();

  const intervalIdRef = useRef<number | null>(null);
  const POINT_INCREASE = 3 + Math.floor(Math.abs(timeStatus.goalTime) / 60);

  // 분/초 계산
  const getTime = {
    minutes: (time: number) => {
      const minutes = Math.floor(Math.abs(time) / 60);
      const sign = time < 0 ? "-" : "";
      return `${sign}${minutes.toString().padStart(2, "0")}`;
    },
    seconds: (time: number) => {
      const seconds = Math.abs(time % 60);
      return seconds.toString().padStart(2, "0");
    },
  };

  // 타이머 실행 / 일시정지
  useEffect(() => {
    if (timerStatus.isRunning) {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
      }
      intervalIdRef.current = window.setInterval(() => {
        setTimeStatus((prev) => ({
          ...prev,
          time: prev.time - 1,
        }));
      }, 1000);
    }

    return () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [timerStatus.isRunning]);

  // 성공 여부 확인
  useEffect(() => {
    if (timeStatus.time <= 0) {
      setTimerStatus((prev) => ({
        ...prev,
        isSuccess: true,
      }));
    }
  }, [timeStatus.time]);

  // 목표 시간 입력 핸들러
  const handleGoalTimeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "minutes" | "seconds"
  ) => {
    // 입력 제한: 숫자만, 2자리로 입력, 최대 99분 59초
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2);
    }

    if (type === "minutes" && Number(value) > 99) {
      value = "99";
    } else if (type === "seconds" && Number(value) > 59) {
      value = "59";
    }

    setGoalTimeInput((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleTimer = {
    start: () => {
      const goalTime =
        Number(goalTimeInput.minutes) * 60 + Number(goalTimeInput.seconds);

      setTimeStatus(() => ({
        goalTime,
        time: goalTime,
      }));

      setTimerStatus(() => ({
        isSuccess: false,
        isFocusStart: true,
        isRunning: true,
      }));
    },
    pause: () => {
      setTimerStatus((prev) => ({
        ...prev,
        isRunning: false,
      }));
      setToastStyle(() => ({
        color: "red",
        label: "집중이 중단되었습니다.",
      }));
      mountToast(); // 중단 Toast
    },
    stop: () => {
      setTimerStatus((prev) => ({
        ...prev,
        isFocusStart: false,
        isRunning: false,
        isSuccess: false,
      }));
      setTimeStatus((prev) => ({
        ...prev,
        time: prev.goalTime,
      }));

      if (timerStatus.isSuccess) {
        setToastStyle(() => ({
          color: "green",
          label: `${POINT_INCREASE}포인트를 획득했습니다!`,
        }));
        mountToast(); // 성공 Toast
      }
    },
  };

  // 포인트 증가
  const handlePointIncrease = async () => {
    const newPoint = studyPoint + POINT_INCREASE;
    // todo: updatePoint api 호출
    // setStudyPoint(newPoint);
  };

  return {
    goalTimeInput,
    timeStatus,
    timerStatus,
    getTime,
    toastStyle,
    isToastMounted,
    handleGoalTimeInputChange,
    handleTimer,
    handlePointIncrease,
  };
};
