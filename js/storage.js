// Storage KEYS (prefixed to avoid conflicts)
const KEYS = {
  XP: "100day_XP",
  week: "100day_week",
  streak: "100day_streak",
  lastVisit: "100day_lastVisit",
  project: "100day_project",
  history: "100day_history",
};

export function getXP() {
  const stored = localStorage.getItem(KEYS.XP);
  return stored ? Math.max(0, Number(stored) || 0) : 0;
}

export function setXP(xp) {
  const normalized = Math.max(0, Number(xp) || 0);
  localStorage.setItem(KEYS.XP, normalized);
}

export function getWeek() {
  const stored = localStorage.getItem(KEYS.week);
  return stored ? Math.max(1, Number(stored) || 1) : 1;
}

export function setWeek(week) {
  const normalized = Math.max(1, Number(week) || 1);
  localStorage.setItem(KEYS.week, normalized);
}

export function getStreak() {
  const stored = localStorage.getItem(KEYS.streak);
  return stored ? Math.max(0, Number(stored) || 0) : 0;
}

export function setStreak(value) {
  const normalized = Math.max(0, Number(value) || 0);
  localStorage.setItem(KEYS.streak, normalized);
}

export function getLastVisit() {
  return localStorage.getItem(KEYS.lastVisit) || null;
}

export function setLastVisit(date) {
  localStorage.setItem(KEYS.lastVisit, date);
}
export function getCurrentProject() {
  const stored = localStorage.getItem(KEYS.project);
  return stored || "Untitled Project";
}

export function setCurrentProject(name) {
  const trimmed = String(name || "").trim();
  const projectName = trimmed || "Untitled Project";
  localStorage.setItem(KEYS.project, projectName);
}

// History management
export function getHistory() {
  try {
    const stored = localStorage.getItem(KEYS.history);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Error reading history:", error);
    return [];
  }
}

export function saveHistory(history) {
  try {
    const data = Array.isArray(history) ? history : [];
    localStorage.setItem(KEYS.history, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving history:", error);
  }
}

// Utility: Clear all data (useful for testing)
export function clearData() {
  Object.values(KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
}

// Utility: Export data for backup
export function exportData() {
  return {
    xp: getXP(),
    week: getWeek(),
    streak: getStreak(),
    lastVisit: getLastVisit(),
    project: getCurrentProject(),
    history: getHistory(),
    exportDate: new Date().toISOString(),
  };
}

// Utility: Import data from backup
export function importData(data) {
  try {
    if (data.xp !== undefined) setXP(data.xp);
    if (data.week !== undefined) setWeek(data.week);
    if (data.streak !== undefined) setStreak(data.streak);
    if (data.lastVisit) setLastVisit(data.lastVisit);
    if (data.project) setCurrentProject(data.project);
    if (data.history) saveHistory(data.history);
    return true;
  } catch (error) {
    console.error("Error importing data:", error);
    return false;
  }
}
