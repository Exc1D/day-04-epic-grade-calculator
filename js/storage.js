// Storage keys (prefixed to avoid conflicts)
const keys = {
  XP: "100day_XP",
  week: "100day_week",
  streak: "100day_streak",
  lastVisit: "100day_lastVisit",
  project: "100day_project",
  history: "100day_history",
};

export function getXP() {
  const stored = localStorage.getItem(keys.XP);
  return stored ? Math.max(0, Number(stored) || 0) : 0;
}

export function setXP(xp) {
  const normalized = Math.max(0, Number(xp) || 0);
  localStorage.setItem(KEYS.XP, normalized);
}

export function getWeek() {
  const stored = localStorage.getItem(keys.week);
  return stored ? Math.max(1, Number(stored) || 1) : 1;
}

export function setWeek(week) {
  const normalized = Math.max(1, Number(week) || 1);
  localStorage.setItem(KEYS.week, normalized);
}

export function getStreak() {
  const stored = localStorage.getItem(keys.streak);
  return stored ? Math.max(0, Number(stored) || 0) : 0;
}

export function setStreak(value) {
  const normalized = Math.max(1, Number(value) || 1);
  localStorage.setItem(KEYS.streak, normalized);
}

export function getLastVisit() {
  return localStorage.getItem(keys.lastVisit) || null;
}

export function setLastVisit(date) {
  localStorage.setItem(KEYS.lastVisit, date);
}
export function getCurrentProject() {
  return (stored = localStorage.getItem(keys.project) || "Untitled Project");
}

export function setCurrentProject(name) {
  const trimmed = String(name || "").trim();
  const projectName = trimmed || "Untitled Project";
  localStorage.setItem(KEYS.project, projectName);
}
