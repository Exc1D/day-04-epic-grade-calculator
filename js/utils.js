const MILLISECONDS_PER_WEEK = 604800000; // Pre-calculated: 1000 * 60 * 60 * 24 * 7

/**
 * Calculates the week number of the year
 * Note: Uses simplified calculation (not ISO 8601 standard)
 * @param {Date} [date=new Date()] - Date to calculate week for
 * @returns {number} Week number (1-53)
 * @example
 * getWeekNumber(new Date('2025-01-15')) // Returns 3
 */
export function getWeekNumber(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const weekNumber =
    Math.floor((date - startOfYear) / MILLISECONDS_PER_WEEK) + 1;
  return Math.max(1, weekNumber); // Ensure minimum week 1
}

/**
 * Converts a date to YYYY-MM-DD format (Canadian locale)
 * @param {Date} [date=new Date()] - Date to convert
 * @returns {string} Date string in YYYY-MM-DD format
 * @example
 * todayString(new Date('2025-12-14')) // Returns "2025-12-14"
 */
export function todayString(date = new Date()) {
  return date.toLocaleDateString("en-CA");
}

/**
 * Validates if a score is a valid number between 0 and 100
 * @param {*} score - Value to validate
 * @returns {boolean} True if valid score, false otherwise
 * @example
 * isValidScore(85)   // true
 * isValidScore(150)  // false
 * isValidScore("85") // false
 */
export function isValidScore(score) {
  return typeof score === "number" && score >= 0 && score <= 100;
}
