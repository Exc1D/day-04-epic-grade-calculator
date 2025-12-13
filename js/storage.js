const KEYS = {
  XP: "xp",
  WEEK: "week",
  STREAK: "streak",
  LAST_VISIT: "lastVisit",
  PROJECT: "currentProject",
  HISTORY: "history",
};

export function getXP() {
  return Number(localStorage.getItem(KEYS.XP)) || 0;
}

export function setXP(xp) {
  localStorage.setItem(KEYS.XP, xp);
}

export function getWeek() {
  return Number(localStorage.getItem(KEYS.WEEK));
}

export function setWeek(week) {
  localStorage.setItem(KEYS.WEEK, week);
}

export function getStreak() {
  return Number(localStorage.getItem(KEYS.STREAK)) || 0;
}

export function setStreak(value) {
  localStorage.setItem(KEYS.STREAK, value);
}

export function getLastVisit() {
  return localStorage.getItem(KEYS.LAST_VISIT);
}

export function setLastVisit(date) {
  localStorage.setItem(KEYS.LAST_VISIT, date);
}

export function getCurrentProject() {
  return localStorage.getItem(KEYS.PROJECT) || "Untitled Project";
}

export function setCurrentProject(name) {
  localStorage.setItem(KEYS.PROJECT, name);
}

export function getHistory() {
  return JSON.parse(localStorage.getItem(KEYS.HISTORY)) || [];
}

export function saveHistory(history) {
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(history));
}
