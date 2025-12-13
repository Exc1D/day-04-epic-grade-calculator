// history.js
import { getHistory } from "./storage.js";

const historyList = document.getElementById("historyList");
const weekFilter = document.getElementById("weekFilter");
const summaryCards = document.getElementById("summaryCards");

const history = getHistory();

// If no history, show a message
if (!history.length) {
  historyList.innerHTML = "<p>No history yet.</p>";
}

// Populate week filter
const weeks = [...new Set(history.map((h) => h.week))].sort((a, b) => a - b);

weeks.forEach((week) => {
  const option = document.createElement("option");
  option.value = week;
  option.textContent = `Week ${week}`;
  weekFilter.appendChild(option);
});

// Default to last week
if (weeks.length) {
  renderWeek(weeks[weeks.length - 1]);
}

weekFilter.addEventListener("change", () => {
  renderWeek(Number(weekFilter.value));
});

function renderWeek(week) {
  renderSummary(week);
  renderList(week);
}

function renderSummary(week) {
  const data = history.filter((h) => h.week === week);

  summaryCards.innerHTML = `
    <div class="card">
      <h3>Week ${week}</h3>
      <p>Projects: ${data.length}</p>
      <p>Average: ${(
        data.reduce((sum, h) => sum + h.average, 0) / data.length
      ).toFixed(1)}</p>
      <p>Best Rank: ${data.map((d) => d.rank).sort()[0]}</p>
    </div>
  `;
}

function renderList(week) {
  historyList.innerHTML = "";

  history
    .filter((h) => h.week === week)
    .forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${item.project}</strong><br>
        Grade: ${item.letter} (${item.average.toFixed(1)})<br>
        Rank: ${item.rank} | XP: ${item.xp}
      `;
      historyList.appendChild(li);
    });
}
