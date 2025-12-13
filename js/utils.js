const MILLISECONDS_PER_WEEK = 604800000; // Pre-calculated: 1000 * 60 * 60 * 24 * 7

export function getWeekNumber(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const weekNumber =
    Math.floor((date - startOfYear) / MILLISECONDS_PER_WEEK) + 1;
  return Math.max(1, weekNumber); // Ensure minimum week 1
}

export function todayString(date = new Date()) {
  return date.toLocaleDateString("en-CA");
}

export function isValidScore(score) {
  return typeof score === "number" && score >= 0 && score <= 100;
}
