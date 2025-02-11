export default function formatDateTime() {
  const now = new Date();

  const date = now
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, "-")
    .replace(/\.$/, "");

  const time = now.toLocaleTimeString("ko-KR", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date} ${time}`;
}
