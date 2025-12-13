const xpSound = new Audio("assets/audio/xp.mp3");
const rankUpSound = new Audio("assets/audio/rankup.mp3");

xpSound.volume = 0.4;
rankUpSound.volume = 0.6;

import { getWeekNumber, todayString } from "./utils.js";
import {
  getXP,
  setXP,
  getWeek,
  setWeek,
  getStreak,
  setStreak,
  getLastVisit,
  setLastVisit,
  getCurrentProject,
  setCurrentProject,
  getHistory,
  saveHistory,
} from "./storage.js";
import { getRankFromXP, getXPPercent } from "./rank.js";

// DOM
const rankIcon = document.getElementById("rankIcon");
const rankLabel = document.getElementById("rankLabel");
const xpValue = document.getElementById("xp");
const xpBar = document.getElementById("xpBar");
const projectNameEl = document.getElementById("projectName");
const projectInput = document.getElementById("projectInput");
const streakEl = document.getElementById("streak");
const calculateBtn = document.getElementById("calculate");
const results = document.getElementById("results");

// INIT
let xp = getXP();
let history = getHistory();
const currentWeek = getWeekNumber();

// WEEK RESET
if (getWeek() !== currentWeek) {
  setWeek(currentWeek);
  setXP(0);
  xp = 0;
}

// STREAK
const today = todayString();
if (getLastVisit() !== today) {
  setStreak(getStreak() + 1);
  setLastVisit(today);
}

// UI INIT
projectNameEl.textContent = getCurrentProject();
projectInput.value = getCurrentProject();
streakEl.textContent = getStreak();
updateRankUI();

// EVENTS
projectInput.addEventListener("change", () => {
  setCurrentProject(projectInput.value);
  projectNameEl.textContent = projectInput.value;
});

calculateBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".score");
  const scores = [...inputs].map((i) => Number(i.value) || 0);

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const passed = scores.filter((s) => s >= 60).length;

  const gainedXP = passed * 20;
  xp += gainedXP;
  setXP(xp);

  const rank = getRankFromXP(xp);

  history.push({
    project: getCurrentProject(),
    average: avg,
    letter: avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : "D",
    rank,
    xp,
    week: currentWeek,
    date: today,
  });

  saveHistory(history);

  updateRankUI();

  results.innerHTML = `
    <p>Average: ${avg.toFixed(1)}</p>
    <p class="${avg >= 60 ? "pass" : "fail"}">
      ${avg >= 60 ? "PASS" : "FAIL"}
    </p>
  `;
  if (gainedXP > 0) {
    xpSound.currentTime = 0;
    xpSound.play();
  }
});

const oldRank = getRankFromXP(xp - gainedXP);
const newRank = getRankFromXP(xp);
if (oldRank !== newRank) {
  rankUpSound.currentTime = 0;
  rankUpSound.play();

  rankIcon.classList.add("rank-up");
  setTimeout(() => {
    rankIcon.classList.remove("rank-up");
  }, 600);
}

// UI UPDATE
function updateRankUI() {
  const rank = getRankFromXP(xp);
  rankIcon.src = `assets/ranks/${rank}.svg`;
  rankLabel.textContent = rank.toUpperCase();
  xpValue.textContent = xp;
  xpBar.style.width = `${getXPPercent(xp)}%`;
}
