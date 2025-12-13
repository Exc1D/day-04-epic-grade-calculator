let totalXP = Number(localStorage.getItem("xp")) || 0;
let streak = Number(localStorage.getItem("streak")) || 0;
let lastVisit = localStorage.getItem("lastVisit");
let currentRank = "";

// RANK SYSTEM
const ranks = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  { name: "gold", xp: 200 },
  { name: "platinum", xp: 300 },
  { name: "diamond", xp: 400 },
  { name: "master", xp: 500 },
  { name: "grandmaster", xp: 600 },
  { name: "challenger", xp: 700 },
];

function getRank(xp) {
  return [...ranks].reverse().find((r) => xp >= r.xp).name;
}

// XP BAR UPDATE
function updateXPBar(xp) {
  const tierXP = 100;
  const percent = ((xp % tierXP) / tierXP) * 100;
  document.getElementById("xpBar").style.width = `${percent}%`;
}

// DAILY STREAK
const today = new Date().toDateString();
if (today !== lastVisit) {
  streak++;
  localStorage.setItem("streak", streak);
  localStorage.setItem("lastVisit", today);
}

// CALCULATE
