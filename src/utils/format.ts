export function formatDateKorean(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr.replace(" ", "T"));
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}
