const MILLISECONDS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

export function getWeekNumber() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diff = now - startOfYear;
  return Math.floor(diff / MILLISECONDS_PER_WEEK) + 1;
}

export function todayString() {
  return new Date().toISOString().slice(0, 10);
}
