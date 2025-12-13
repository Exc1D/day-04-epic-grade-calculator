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
import { getRankFromXP, getXPPercent, getLetterGrade } from "./rank.js";

// Audio setup
const sounds = {
  xp: createAudio("assets/audio/xp.mp3", 0.4),
  rankUp: createAudio("assets/audio/rankup.mp3", 0.6),
};

function createAudio(src, volume) {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.preload = "auto";
  return audio;
}

function playSound(audio) {
  audio.currentTime = 0;
  audio.play().catch((err) => console.log("Audio playback prevented:", err));
}

// Cache DOM elements
const dom = {
  rankIcon: document.getElementById("rankIcon"),
  rankLabel: document.getElementById("rankLabel"),
  xpValue: document.getElementById("xp"),
  xpBar: document.getElementById("xpBar"),
  projectNameEl: document.getElementById("projectName"),
  projectInput: document.getElementById("projectInput"),
  streakEl: document.getElementById("streak"),
  calculateBtn: document.getElementById("calculate"),
  results: document.getElementById("results"),
  projectForm: document.querySelector(".project-form"),
  gradesForm: document.querySelector(".grades-form"),
};

// State
let xp = getXP();
let history = getHistory();
const currentWeek = getWeekNumber();

// Initialize
function init() {
  handleWeekReset();
  handleStreakUpdate();
  initializeUI();
  attachEventListeners();
}

function handleWeekReset() {
  if (getWeek() !== currentWeek) {
    setWeek(currentWeek);
    setXP(0);
    xp = 0;
  }
}

function handleStreakUpdate() {
  const today = todayString();
  const lastVisit = getLastVisit();

  if (lastVisit !== today) {
    setStreak(getStreak() + 1);
    setLastVisit(today);
  }
}

function initializeUI() {
  const currentProject = getCurrentProject();

  if (dom.projectNameEl) dom.projectNameEl.textContent = currentProject;
  if (dom.projectInput) dom.projectInput.value = currentProject;
  if (dom.streakEl) dom.streakEl.textContent = getStreak();

  updateRankUI();
}

function attachEventListeners() {
  if (dom.projectForm) {
    dom.projectForm.addEventListener("submit", handleProjectSubmit);
  }

  if (dom.gradesForm) {
    dom.gradesForm.addEventListener("submit", handleGradesSubmit);
  }

  if (dom.calculateBtn) {
    dom.calculateBtn.addEventListener("click", handleCalculate);
  }
}

function handleProjectSubmit(e) {
  e.preventDefault();

  const name = dom.projectInput?.value.trim();
  if (!name) return;

  setCurrentProject(name);
  if (dom.projectNameEl) dom.projectNameEl.textContent = name;
  if (dom.projectInput) dom.projectInput.value = "";
}

function handleGradesSubmit(e) {
  e.preventDefault();
  dom.calculateBtn?.click();
}

function handleCalculate() {
  const inputs = document.querySelectorAll(".score");
  const scores = getValidScores(inputs);

  if (scores.length === 0) {
    showResults(0, false);
    return;
  }

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const passed = scores.filter((s) => s >= 60).length;
  const gainedXP = passed * 20;

  const oldRank = getRankFromXP(xp);
  xp += gainedXP;
  setXP(xp);

  const newRank = getRankFromXP(xp);

  saveToHistory(avg, newRank);
  updateRankUI();
  showResults(avg, avg >= 60);

  if (gainedXP > 0) {
    playSound(sounds.xp);
    clearInputs(inputs);
  }

  if (oldRank !== newRank) {
    playSound(sounds.rankUp);
    animateRankUp();
  }
}

function getValidScores(inputs) {
  return [...inputs]
    .map((input) => {
      const value = Number(input.value);
      return isNaN(value) ? 0 : Math.max(0, Math.min(100, value));
    })
    .filter((score) => score > 0);
}

function saveToHistory(avg, rank) {
  history.push({
    project: getCurrentProject(),
    average: avg,
    letter: getLetterGrade(avg),
    rank: rank,
    xp: xp,
    week: currentWeek,
    date: todayString(),
  });

  saveHistory(history);
}

function showResults(avg, passed) {
  if (!dom.results) return;

  dom.results.innerHTML = `
    <p><strong>Average:</strong> ${avg.toFixed(1)}</p>
    <p class="${passed ? "pass" : "fail"}">
      ${passed ? "PASS ✓" : "FAIL ✗"}
    </p>
  `;
}

function clearInputs(inputs) {
  inputs.forEach((input) => (input.value = ""));
}

function animateRankUp() {
  if (!dom.rankIcon) return;

  dom.rankIcon.classList.add("rank-up");
  setTimeout(() => dom.rankIcon.classList.remove("rank-up"), 600);
}

function updateRankUI() {
  const rank = getRankFromXP(xp);

  if (dom.rankIcon) {
    dom.rankIcon.src = `assets/ranks/${rank}.svg`;
    dom.rankIcon.alt = `${rank} rank`;
    dom.rankIcon.onerror = () => {
      dom.rankIcon.src = "assets/ranks/bronze.svg";
      dom.rankIcon.alt = "bronze rank";
    };
  }

  if (dom.rankLabel) {
    dom.rankLabel.textContent = rank.toUpperCase();
  }

  if (dom.xpValue) {
    dom.xpValue.textContent = xp;
  }

  if (dom.xpBar) {
    dom.xpBar.style.width = `${getXPPercent(xp)}%`;
  }
}

// Start the app
init();
