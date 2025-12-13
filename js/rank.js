export const RANKS = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  { name: "gold", xp: 250 },
  { name: "epic", xp: 400 },
  { name: "legend", xp: 600 },
  { name: "mythic", xp: 850 },
];

export function getRankFromXP(xp) {
  const rank = [...RANKS].reverse().find((rank) => xp >= rank.xp);
  return rank?.name || "bronze";
}

export function getXPPercent(xp) {
  const currentRank = [...RANKS].reverse().find((rank) => xp >= rank.xp);
  const currentIndex = RANKS.findIndex(r => r.name === currentRank?.name);
  const nextRank = RANKS[currentIndex + 1];
  if (!nextRank) return 100;
  const progress = xp - currentRank.xp;
  const tierSize = nextRank.xp - currentRank.xp;
  return Math.min(100, (progress / tierSize) * 100);
}
