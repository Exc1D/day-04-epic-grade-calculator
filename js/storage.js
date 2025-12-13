// In-memory storage for Claude artifacts compatibility
const storage = {
  xp: 0,
  week: 1,
  streak: 0,
  lastVisit: null,
  project: "Untitled Project",
  history: [],
};

export function getXP() {
  return storage.xp;
}

export function setXP(xp) {
  storage.xp = Math.max(0, Number(xp) || 0);
}

export function getWeek() {
  return storage.week;
}

export function setWeek(week) {
  storage.week = Math.max(1, Number(week) || 1);
}

export function getStreak() {
  return storage.streak;
}

export function setStreak(value) {
  storage.streak = Math.max(0, Number(value) || 0);
}

export function getLastVisit() {
  return storage.lastVisit;
}

export function setLastVisit(date) {
  storage.lastVisit = date;
}

export function getCurrentProject() {
  return storage.project || "Untitled Project";
}

export function setCurrentProject(name) {
  const trimmed = String(name || "").trim();
  storage.project = trimmed || "Untitled Project";
}

export function getHistory() {
  return Array.isArray(storage.history) ? storage.history : [];
}

export function saveHistory(history) {
  storage.history = Array.isArray(history) ? history : [];
}
