export const RANKS = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  { name: "gold", xp: 250 },
  { name: "epic", xp: 400 },
  { name: "legend", xp: 600 },
  { name: "mythic", xp: 850 },
];

const RANK_MAP = new Map(RANKS.map((r) => [r.name, r]));

export function getRankFromXP(xp) {
  const normalizedXP = Math.max(0, Number(xp) || 0);

  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (normalizedXP >= RANKS[i].xp) {
      return RANKS[i].name;
    }
  }
  return "bronze";
}

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

export function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}
