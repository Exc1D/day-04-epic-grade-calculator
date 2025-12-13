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
if (projectNameEl) projectNameEl.textContent = getCurrentProject();
if (projectInput) projectInput.value = getCurrentProject();
if (streakEl) streakEl.textContent = getStreak();
updateRankUI();

// EVENTS
const projectForm = document.querySelector(".project-form");
const gradesForm = document.querySelector(".grades-form");

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = projectInput.value.trim();
  if (name) {
    setCurrentProject(name);
    projectNameEl.textContent = name;
    projectInput.value = "";
  }
});

gradesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateBtn.click();
});

calculateBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".score");
  const scores = [...inputs].map((i) => Math.max(0, Math.min(100, Number(i.value) || 0)));

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const passed = scores.filter((s) => s >= 60).length;

  const oldRank = getRankFromXP(xp);
  const gainedXP = passed * 20;
  xp += gainedXP;
  setXP(xp);

  const newRank = getRankFromXP(xp);

  history.push({
    project: getCurrentProject(),
    average: avg,
    letter: avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : "D",
    rank: newRank,
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
    xpSound.play().catch(() => {});
    inputs.forEach((input) => input.value = "");
  }

  if (oldRank !== newRank) {
    rankUpSound.currentTime = 0;
    rankUpSound.play().catch(() => {});
    rankIcon.classList.add("rank-up");
    setTimeout(() => rankIcon.classList.remove("rank-up"), 600);
  }
});

// UI UPDATE
function updateRankUI() {
  const rank = getRankFromXP(xp);
  if (rankIcon) rankIcon.src = `assets/ranks/${rank}.svg`;
  if (rankLabel) rankLabel.textContent = rank.toUpperCase();
  if (xpValue) xpValue.textContent = xp;
  if (xpBar) xpBar.style.width = `${getXPPercent(xp)}%`;
}
