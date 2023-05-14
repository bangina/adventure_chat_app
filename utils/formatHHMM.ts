/**
 *
 * @param timeString
 * @returns  "HH:MM" format string
 */
export function formatHHMM(timeString) {
  const date = new Date(timeString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
