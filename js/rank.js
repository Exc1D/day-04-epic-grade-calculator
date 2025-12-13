export const RANKS = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  { name: "gold", xp: 250 },
  { name: "epic", xp: 400 },
  { name: "legend", xp: 600 },
  { name: "mythic", xp: 850 },
];

export function getRankFromXP(xp) {
  return [...RANKS].reverse().find((rank) => xp >= rank.xp).name;
}

export function getXPPercent(xp) {
  const tierSize = 100;
  return ((xp % tierSize) / tierSize) * 100;
}
