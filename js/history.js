import { getHistory } from "./storage.js";

// Cache DOM elements
const elements = {
  historyList: document.getElementById("historyList"),
  weekFilter: document.getElementById("weekFilter"),
  summaryCards: document.getElementById("summaryCards"),
};

function init() {
  const { historyList, weekFilter, summaryCards } = elements;

  if (!historyList || !weekFilter || !summaryCards) {
    console.error("Required DOM elements not found");
    return;
  }

  const history = getHistory();

  if (!history.length) {
    historyList.innerHTML =
      "<p>No history yet. Complete a project to see it here.</p>";
    return;
  }

  const weeks = getUniqueWeeks(history);
  populateWeekFilter(weeks, weekFilter);

  const defaultWeek = weeks[weeks.length - 1];
  weekFilter.value = defaultWeek;
  renderWeek(defaultWeek, history);

  weekFilter.addEventListener("change", () => {
    renderWeek(Number(weekFilter.value), history);
  });
}

function getUniqueWeeks(history) {
  return [...new Set(history.map((h) => h.week))].sort((a, b) => a - b);
}

function populateWeekFilter(weeks, weekFilter) {
  const fragment = document.createDocumentFragment();

  weeks.forEach((week) => {
    const option = document.createElement("option");
    option.value = week;
    option.textContent = `Week ${week}`;
    fragment.appendChild(option);
  });

  weekFilter.appendChild(fragment);
}

function renderWeek(week, history) {
  renderSummary(week, history);
  renderList(week, history);
}

function renderSummary(week, history) {
  const { summaryCards } = elements;
  if (!summaryCards) return;

  const data = history.filter((h) => h.week === week);
  if (!data.length) {
    summaryCards.innerHTML = "<p>No data for this week.</p>";
    return;
  }

  const avgScore =
    data.reduce((sum, h) => sum + (h.average || 0), 0) / data.length;
  const bestRank = getBestRank(data.map((d) => d.rank));

  summaryCards.innerHTML = `
    <div class="card">
      <h3>Week ${week}</h3>
      <p><strong>Projects:</strong> ${data.length}</p>
      <p><strong>Average:</strong> ${avgScore.toFixed(1)}</p>
      <p><strong>Best Rank:</strong> ${bestRank}</p>
    </div>
  `;
}

function getBestRank(ranks) {
  const rankOrder = ["mythic", "legend", "epic", "gold", "silver", "bronze"];

  for (const rank of rankOrder) {
    if (ranks.includes(rank)) return rank;
  }

  return "bronze";
}

function renderList(week, history) {
  const { historyList } = elements;
  if (!historyList) return;

  const weekData = history.filter((h) => h.week === week);

  if (!weekData.length) {
    historyList.innerHTML = "<p>No projects this week.</p>";
    return;
  }

  const fragment = document.createDocumentFragment();

  weekData.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.project || "Unknown Project"}</strong>
      <div>Grade: ${item.letter || "N/A"} (${(item.average || 0).toFixed(
      1
    )})</div>
      <div>Rank: ${item.rank || "bronze"} | XP: ${item.xp || 0}</div>
    `;
    fragment.appendChild(li);
  });

  historyList.innerHTML = "";
  historyList.appendChild(fragment);
}

// Initialize on load
init();
