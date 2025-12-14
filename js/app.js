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
import { act } from "react";

// XP Configuration
const XP_CONFIG = {
  per_passing_grade: 20,
  max_per_project: 120,
};

// ANIMATION_CONFIG
const ANIMATION_CONFIG = {
  speeds: [
    { threshold: 200, speed: 1 },
    { threshold: 100, speed: 10 },
    { threshold: 75, speed: 20 },
    { threshold: 50, speed: 25 },
    { threshold: 25, speed: 35 },
    { threshold: 0, speed: 50 },
  ],
};

// Track active animations to prevent memory leaks
const activeAnimations = [];

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
    if (dom.results) {
      dom.results.innerHTML = `
      <p class="info" style="color: #fbb24; text-align: center;">Please enter at least one score.</p>`;
    }
  }

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const passed = scores.filter((s) => s >= 60).length;
  const gainedXP = passed * XP_CONFIG.per_passing_grade;

  const oldRank = getRankFromXP(xp);
  xp += gainedXP;
  setXP(xp);

  const newRank = getRankFromXP(xp);
  const rankedUp = oldRank !== newRank;

  saveToHistory(avg, newRank);
  updateRankUI();
  showResults(avg, avg >= 60, rankedUp);

  if (gainedXP > 0) {
    playSound(sounds.xp);
    clearInputs(inputs);
  }

  if (rankedUp) {
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

function showResults(avg, passed, rankedUp = false) {
  if (!dom.results) return;

  let statusHTML;
  if (rankedUp) {
    const newRank = getRankFromXP(xp);
    statusHTML = `
      <div class="rank-up-badge">
        <div class="rank-up-glow"></div>
        <p class="rank-up-text">🎉 RANK UP! 🎉</p>
        <p class="new-rank">${newRank.toUpperCase()}</p>
      </div>
    `;
  } else {
    statusHTML = `<p class="${passed ? "pass" : "fail"}">${
      passed ? "PASS ✓" : "FAIL ✗"
    }</p>`;
  }

  dom.results.innerHTML = `
    <p><strong>Average:</strong> ${avg.toFixed(1)}</p>
    ${statusHTML}
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

function animateNumber(el, num) {
  // Clear any existing animation for this element
  if (activeAnimations.has(el)) {
    clearInterval(activeAnimations.get(el));
    activeAnimations.delete(el);
  }

  // Get animation speed based on number size
  const config = ANIMATION_CONFIG.speeds.find((c) => num > c.threshold);
  const speed = config ? config.speed : 50;

  let n = 0;

  if (num === 0) {
    el.textContent = n; // Use textContent, not innerHTML
    return;
  }

  const interval = setInterval(() => {
    n += 1;
    if (n === num) {
      clearInterval(interval);
      activeAnimations.delete(el);
    }
    el.textContent = n; // Use textContent, not innerHTML
  }, speed);

  // Store the interval so we can cancel it if needed
  activeAnimations.set(el, interval);
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
    const xpPercent = getXPPercent(xp);
    dom.xpBar.style.width = `${xpPercent}%`;
    // Animate the XP bar fill
    dom.xpBar.style.transition = "width 0.5s ease-out";
  }
}

// Start the app
init();
