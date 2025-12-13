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
  if (!data.length) return;

  const card = document.createElement("div");
  card.className = "card";
  
  const title = document.createElement("h3");
  title.textContent = `Week ${week}`;
  
  const projects = document.createElement("p");
  projects.textContent = `Projects: ${data.length}`;
  
  const average = document.createElement("p");
  average.textContent = `Average: ${(data.reduce((sum, h) => sum + h.average, 0) / data.length).toFixed(1)}`;
  
  const bestRank = document.createElement("p");
  const ranks = data.map((d) => d.rank).sort();
  bestRank.textContent = `Best Rank: ${ranks[0] || 'N/A'}`;
  
  card.append(title, projects, average, bestRank);
  summaryCards.innerHTML = "";
  summaryCards.appendChild(card);
}

function renderList(week) {
  historyList.innerHTML = "";

  history
    .filter((h) => h.week === week)
    .forEach((item) => {
      const li = document.createElement("li");
      
      const project = document.createElement("strong");
      project.textContent = item.project;
      
      const grade = document.createElement("div");
      grade.textContent = `Grade: ${item.letter} (${item.average.toFixed(1)})`;
      
      const rank = document.createElement("div");
      rank.textContent = `Rank: ${item.rank} | XP: ${item.xp}`;
      
      li.append(project, grade, rank);
      historyList.appendChild(li);
    });
}
