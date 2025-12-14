export const RANKS = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  { name: "gold", xp: 250 },
  { name: "epic", xp: 400 },
  { name: "legend", xp: 600 },
  { name: "mythic", xp: 850 },
];

const RANK_MAP = new Map(RANKS.map((r) => [r.name, r]));

/**
 * Determines rank based on total XP earned
 * Loops backwards through ranks to find highest qualifying tier
 * @param {number} xp - Total experience points
 * @returns {string} Rank name (bronze, silver, gold, epic, legend, mythic)
 * @example
 * getRankFromXP(0)   // "bronze"
 * getRankFromXP(150) // "silver"
 * getRankFromXP(300) // "gold"
 */
export function getRankFromXP(xp) {
  const normalizedXP = Math.max(0, Number(xp) || 0);

  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (normalizedXP >= RANKS[i].xp) {
      return RANKS[i].name;
    }
  }
  return "bronze";
}

/**
 * Calculates progress percentage within current rank tier
 * Used to display XP progress bar
 * @param {number} xp - Total experience points
 * @returns {number} Percentage (0-100) of progress to next rank
 * @example
 * getXPPercent(0)   // 0   (at bronze start)
 * getXPPercent(150) // 33  (33% through silver: 100-250)
 * getXPPercent(900) // 100 (maxed mythic)
 */
export function getXPPercent(xp) {
  const normalizedXP = Math.max(0, Number(xp) || 0);
  const rankName = getRankFromXP(normalizedXP);
  const currentRank = RANK_MAP.get(rankName);

  if (!currentRank) return 0;

  const currentIndex = RANKS.findIndex((r) => r.name === rankName);
  const nextRank = RANKS[currentIndex + 1];

  if (!nextRank) return 100; // Max rank reached

  const progress = normalizedXP - currentRank.xp;
  const tierSize = nextRank.xp - currentRank.xp;

  return Math.min(100, (progress / tierSize) * 100);
}

/**
 * Converts numeric average to letter grade
 * Grading scale: A=90+, B=80+, C=70+, D=60+, F=below 60
 * @param {number} average - Numeric average score (0-100)
 * @returns {string} Letter grade (A, B, C, D, or F)
 * @example
 * getLetterGrade(95) // "A"
 * getLetterGrade(85) // "B"
 * getLetterGrade(55) // "F"
 */
export function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}
