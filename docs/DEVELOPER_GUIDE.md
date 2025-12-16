# 👨‍💻 Developer Guide - Epic Grade Calculator

Technical documentation for developers who want to understand, modify, or contribute to this project.

---

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [File Structure](#file-structure)
- [Code Organization](#code-organization)
- [Key Concepts](#key-concepts)
- [API Reference](#api-reference)
- [State Management](#state-management)
- [Browser Compatibility](#browser-compatibility)
- [Performance](#performance)
- [Contributing](#contributing)
- [Code Standards](#code-standards)

---

## 🏗️ Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────┐
│           User Interface                │
│     (index.html, history.html)          │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Application Layer               │
│        (app.js, history.js)             │
└──┬────────┬──────────┬──────────────┬───┘
   │        │          │              │
┌──▼───┐ ┌─▼────┐ ┌───▼───┐ ┌────────▼───┐
│Utils │ │Rank  │ │Storage│ │   Audio    │
│Module│ │Module│ │Module │ │   Module   │
└──────┘ └──────┘ └───┬───┘ └────────────┘
                      │
              ┌───────▼────────┐
              │  LocalStorage  │
              │   (Browser)    │
              └────────────────┘
```

---

### Design Principles

**1. Modular Design**

- Each file has a single responsibility
- Functions are small and focused
- Easy to test and maintain

**2. Separation of Concerns**

- UI logic separate from business logic
- Data access abstracted in storage module
- Calculations isolated in utility functions

**3. Progressive Enhancement**

- Works without audio
- Degrades gracefully if features fail
- Core functionality always available

**4. No Dependencies**

- Pure vanilla JavaScript
- No build process required
- Easy to understand and modify

---

## 📂 File Structure

```
epic-grade-calculator/
│
├── index.html              # Main calculator page
├── history.html            # Statistics dashboard
│
├── css/
│   ├── style.css          # Main CSS import file
│   ├── base.css           # Variables, reset, fonts
│   ├── layout.css         # Page structure, responsive
│   ├── components.css     # Buttons, cards, inputs
│   └── animations.css     # @keyframes, transitions
│
├── js/
│   ├── app.js             # Main application logic
│   ├── history.js         # Statistics page logic
│   ├── rank.js            # Ranking calculations
│   ├── storage.js         # LocalStorage wrapper
│   └── utils.js           # Date/validation utilities
│
├── assets/
│   ├── audio/
│   │   ├── xp.mp3        # XP gain sound
│   │   └── rankup.mp3    # Rank-up sound
│   ├── ranks/             # Rank icon SVGs
│   │   ├── bronze.svg
│   │   ├── silver.svg
│   │   ├── gold.svg
│   │   ├── epic.svg
│   │   ├── legend.svg
│   │   └── mythic.svg
│   └── images/
│       └── screenshot.png
│
└── docs/
    ├── README.md
    ├── SETUP.md
    ├── USER_GUIDE.md
    ├── DEVELOPER_GUIDE.md  ← You are here
    ├── CHANGELOG.md
    └── TESTING_GUIDE.md
```

---

## 🧩 Code Organization

### Module Breakdown

#### **app.js** - Main Application

**Responsibilities:**

- Initialize app on page load
- Handle user interactions
- Coordinate between modules
- Manage XP and rank progression
- Control audio playback
- Update UI

**Key Functions:**

```javascript
init(); // Initialize app
handleCalculate(); // Process scores
showResults(); // Display results
updateRankUI(); // Update rank display
handleExport(); // Export data
handleImport(); // Import data
```

---

#### **storage.js** - Data Persistence

**Responsibilities:**

- Abstract LocalStorage access
- Provide get/set methods for all data
- Handle JSON parsing/stringifying
- Provide export/import utilities

**Key Functions:**

```javascript
getXP(), setXP()              // XP management
getWeek(), setWeek()          // Week tracking
getStreak(), setStreak()      // Streak tracking
getCurrentProject(), set...() // Project name
getHistory(), saveHistory()   // Project history
exportData()                  // Create backup
importData()                  // Restore backup
```

**Storage Keys:**

```javascript
const KEYS = {
  XP: "100day_XP",
  week: "100day_week",
  streak: "100day_streak",
  lastVisit: "100day_lastVisit",
  project: "100day_project",
  history: "100day_history",
};
```

---

#### **rank.js** - Ranking System

**Responsibilities:**

- Define rank tiers and XP thresholds
- Calculate rank from XP
- Calculate XP percentage for progress bar
- Convert average to letter grade

**Key Data:**

```javascript
export const RANKS = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  { name: "gold", xp: 250 },
  { name: "epic", xp: 400 },
  { name: "legend", xp: 600 },
  { name: "mythic", xp: 850 },
];
```

**Key Functions:**

```javascript
getRankFromXP(xp); // XP → Rank name
getXPPercent(xp); // Progress % to next rank
getLetterGrade(average); // Number → Letter grade
```

---

#### **utils.js** - Utility Functions

**Responsibilities:**

- Date/time calculations
- Input validation
- Reusable helper functions

**Key Functions:**

```javascript
getWeekNumber(date); // Date → Week number
todayString(date); // Date → "YYYY-MM-DD"
isValidScore(score); // Validate 0-100
```

---

#### **history.js** - Statistics Page

**Responsibilities:**

- Load and display project history
- Filter by week
- Calculate weekly summaries
- Render project list

**Key Functions:**

```javascript
init(); // Initialize stats page
renderWeek(week, history); // Show week's data
renderSummary(); // Show summary card
renderList(); // Show project list
getBestRank(ranks); // Find highest rank
```

---

## 🔑 Key Concepts

### 1. XP Calculation

**Formula:**

```javascript
XP_gained = passing_criteria_count × XP_per_passing_grade

Where:
- passing_criteria_count = number of scores ≥ 60
- XP_per_passing_grade = 20 (configurable)
```

**Example:**

```javascript
Scores: [80, 85, 90, 55, 70, 50]
Passing: [80, 85, 90, 70]  // 4 criteria ≥ 60
XP_gained = 4 × 20 = 80 XP
```

**Code Implementation:**

```javascript
const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
const passed = scores.filter((s) => s >= 60).length;
const gainedXP = passed * XP_CONFIG.perPassingGrade;
```

---

### 2. Rank Progression

**Lookup Algorithm:**

```javascript
// Loop backwards through ranks
// Return first rank where XP ≥ threshold
export function getRankFromXP(xp) {
  const normalizedXP = Math.max(0, Number(xp) || 0);

  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (normalizedXP >= RANKS[i].xp) {
      return RANKS[i].name;
    }
  }
  return "bronze";
}
```

**Why loop backwards?**

- Finds highest qualifying rank
- More efficient than forward loop
- Returns immediately on match

---

### 3. Progress
