// 시간 포맷 변환 함수
export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(Math.abs(timeInSeconds) / 60); // 분 계산
  const seconds = Math.abs(timeInSeconds) % 60; // 초 계산
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${
    timeInSeconds < 0 ? "-" : ""
  }${formattedMinutes}:${formattedSeconds}`;
};
