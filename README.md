# Epic Grade Calculator 🎮

**Day 4 of my 100-Day JavaScript Challenge**

A gamified project evaluation system with MOBA-style ranking progression, sound effects, and comprehensive statistics tracking for my 100-day coding journey!

## 🎯 Features

### Core Functionality

- ✨ **6 Evaluation Criteria:**
  - Correctness
  - Readability
  - Simplicity
  - Efficiency
  - Best Practices
  - Creativity
- 📊 **Grading System:**
  - Letter grades (A-F)
  - Pass/Fail indication (60% threshold)
  - Average calculation

### Gamification Elements

- 🏆 **Ranking System** (MOBA-inspired):

  - Bronze (0-99 XP)
  - Silver (100-249 XP)
  - Gold (250-399 XP)
  - Epic (400-599 XP)
  - Legend (600-849 XP)
  - Mythic (850+ XP)

- 🎵 **Sound Effects:**
  - XP gain sound
  - Rank-up celebration sound
- ✨ **Visual Feedback:**
  - Animated rank icon on rank-up
  - XP progress bar with percentage
  - Dynamic rank icon display
- 📈 **Progress Tracking:**
  - Daily streak counter
  - Weekly XP reset system
  - Project history with filtering
  - Weekly performance summaries

### Statistics Dashboard

- 📊 View all past project evaluations
- 🗓️ Filter by week
- 📈 Weekly summary cards (projects completed, average score, best rank)
- 📜 Detailed project history with grades and XP

## 🛠️ Technologies Used

- **HTML5** - Semantic markup, accessibility features
- **CSS3** - Custom properties, animations, grid/flexbox layouts
- **Vanilla JavaScript (ES6+)**:
  - ES6 Modules
  - Audio API
  - Date manipulation
  - LocalStorage (in production version)
  - Array methods (map, filter, reduce)
  - Modern JS patterns

## 💡 What I Learned

### JavaScript Concepts

- **Modular architecture** - Separating code into logical modules
- **Audio API** - Playing and managing sound effects in web apps
- **Data persistence** - Storing and retrieving user progress
- **State management** - Tracking XP, rank, streak, and history
- **Date calculations** - Week numbers, streak tracking
- **Animation coordination** - Syncing CSS and JavaScript

### Game Design Patterns

- **Progression systems** - XP and rank tier design
- **Feedback loops** - Immediate audio/visual feedback
- **Streak mechanics** - Encouraging daily consistency
- **Historical tracking** - Long-term progress visualization

### Code Organization

- **Separation of concerns** - Utils, storage, rank logic, UI
- **Reusable functions** - DRY principles
- **Defensive programming** - Input validation, error handling
- **Performance** - Audio preloading, DOM caching

## 🎮 How It Works

### XP System

- Each evaluation criterion that passes (≥60) awards **20 XP**
- Maximum 120 XP per project (6 criteria × 20 XP)
- XP accumulates toward rank progression
- Weekly XP reset for fresh challenges

### Ranking Progression

```
Bronze  →  Silver  →  Gold  →  Epic  →  Legend  →  Mythic
0 XP       100 XP     250 XP    400 XP    600 XP     850 XP
```

### Sound Feedback

- **XP Sound**: Plays when any XP is gained
- **Rank-Up Sound**: Plays when advancing to a new rank tier
- Both sounds preload for instant playback

### History Tracking

Every project evaluation saves:

- Project name
- Average score & letter grade
- Current rank & XP
- Week number & date
- Viewable and filterable on statistics page

## 🚀 Live Demo

[Try it Live!](https://exc1d.github.io/day-04-epic-grade-calculator/)

**Try this:**

1. Enter a project name
2. Fill in scores for each criterion
3. Hit Calculate
4. Watch the XP bar grow!
5. Hear the satisfying sound effects!
6. Reach new ranks!
7. Check your statistics!

## 📸 Screenshots

[Add screenshots of main calculator and history page]

## 🎯 Use Case

This tool helps me evaluate my daily projects in the 100-Day Challenge across multiple dimensions:

- **Correctness**: Does it work as intended?
- **Readability**: Is the code clean and understandable?
- **Simplicity**: Is it unnecessarily complex?
- **Efficiency**: Does it perform well?
- **Best Practices**: Does it follow conventions?
- **Creativity**: Does it have unique features?

The gamification keeps me motivated and the statistics help me track improvement over time!

## 🧠 Code Architecture

```
├── index.html          # Main calculator interface
├── history.html        # Statistics dashboard
├── css/
│   ├── base.css       # Variables, reset
│   ├── layout.css     # Page structure
│   ├── components.css # UI components
│   └── animations.css # Keyframe animations
└── js/
    ├── app.js         # Main application logic
    ├── history.js     # Statistics page logic
    ├── rank.js        # Ranking system
    ├── storage.js     # Data persistence
    └── utils.js       # Helper functions
```

## 🔮 Future Enhancements

- **Global leaderboard** (compare with other learners)
- **Achievement badges** (special milestones)
- **Export progress** (PDF reports)
- **Custom rank icons** (unlockable themes)
- **Detailed analytics** (charts over time)
- **Social sharing** (share rank-ups)

## 👨‍💻 Development Process

**Part of:** 100-Day JavaScript Challenge - Day 4
**Time spent:** ~X hours
**Approach:**

- Researched existing rank/XP systems
- Integrated modular code from multiple sources
- Adapted and themed for personal use case
- Added sound effects and animations
- Built statistics dashboard for long-term tracking

**Philosophy:** Learning by integration - finding quality code, understanding concepts, and adapting it to create something new.

Built with ❤️ and lots of gaming inspiration!

---

**For Joy, Hero, Aiah, and Aria** 💙🐕
