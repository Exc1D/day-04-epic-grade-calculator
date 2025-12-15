# 🎮 Epic Grade Calculator

**Day 4 of my 100-Day JavaScript Challenge**

A gamified project evaluation system with MOBA-style ranking progression, sound effects, and comprehensive statistics tracking for my 100-day coding journey!

![Grade Calculator Demo](assets/images/screenshot.png)

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://exc1d.github.io/day-04-epic-grade-calculator/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎯 Features

### Core Functionality

- ✨ **6 Evaluation Criteria System:**
  - Correctness
  - Readability
  - Simplicity
  - Efficiency
  - Best Practices
  - Creativity
- 📊 **Grading System:**
  - Letter grades (A-F)
  - Pass/Fail indication (60% threshold)
  - Real-time average calculation
  - XP rewards for passing grades (20 XP each)

### Gamification Elements

- 🏆 **6-Tier Ranking System** (MOBA-inspired):

  - 🥉 Bronze (0-99 XP)
  - 🥈 Silver (100-249 XP)
  - 🥇 Gold (250-399 XP)
  - 💜 Epic (400-599 XP)
  - 🔥 Legend (600-849 XP)
  - ⚡ Mythic (850+ XP)

- 🎵 **Sound Effects:**
  - XP gain sound on score submission
  - Epic rank-up celebration sound
- ✨ **Visual Feedback:**
  - Animated rank icon on rank-up
  - Dynamic XP progress bar
  - Rank-up badge with glow effects
- 📈 **Progress Tracking:**
  - Daily streak counter
  - Automatic weekly XP reset
  - Complete project history
  - Weekly performance summaries

### Data Management

- 💾 **LocalStorage Persistence** - All data saved automatically
- 📥 **Export/Import Functionality** - Backup and restore your progress
- 📊 **Statistics Dashboard** - View past evaluations and track improvement
- 🗓️ **Week Filtering** - Analyze performance by week

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No installation or build process required!

### Running Locally

1. **Clone the repository:**

```bash
   git clone https://github.com/Exc1D/day-04-epic-grade-calculator.git
   cd day-04-epic-grade-calculator
```

2. **Open in browser:**

```bash
   # Option 1: Double-click index.html

   # Option 2: Use a local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
```

3. **Start evaluating projects!**

---

## 📖 How to Use

### Evaluating a Project

1. **Enter Project Name** (optional but recommended)

   - Type your project name and press Enter
   - Helps track projects in history

2. **Enter Scores** (0-100 for each criterion)

   - Correctness: Does it work as intended?
   - Readability: Is the code clean and understandable?
   - Simplicity: Is it unnecessarily complex?
   - Efficiency: Does it perform well?
   - Best Practices: Does it follow conventions?
   - Creativity: Does it have unique features?

3. **Calculate Results**
   - Click "CALCULATE" button
   - View your average score and pass/fail status
   - Earn 20 XP for each passing criterion (≥60)
   - Watch for rank-up celebrations! 🎉

### Viewing Statistics

1. Click **"View Stats"** link
2. Select a week from the dropdown
3. See:
   - Weekly summary (projects completed, average score, best rank)
   - Complete list of all projects for that week

### Backing Up Your Data

1. Click **"📥 Export Data"**
2. Save the JSON file
3. To restore: Click **"📤 Import Data"** and select your backup file

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup, accessibility features
- **CSS3** - Custom properties, animations, flexbox/grid layouts
- **Vanilla JavaScript (ES6+)**
  - ES6 Modules
  - LocalStorage API
  - Audio API
  - Date manipulation
  - Modern array methods (map, filter, reduce)

### No Dependencies!

This project uses **zero external libraries** - pure vanilla JavaScript for maximum performance and learning value.

---

## 📂 Project Structure

```
epic-grade-calculator/
├── index.html              # Main calculator interface
├── history.html            # Statistics dashboard
├── css/
│   ├── style.css          # Main CSS import
│   ├── base.css           # Variables, reset, fonts
│   ├── layout.css         # Page structure, grid/flexbox
│   ├── components.css     # UI components, buttons, cards
│   └── animations.css     # Keyframe animations
├── js/
│   ├── app.js             # Main application logic
│   ├── history.js         # Statistics page logic
│   ├── rank.js            # Ranking system algorithms
│   ├── storage.js         # LocalStorage wrapper
│   └── utils.js           # Helper functions
├── assets/
│   ├── audio/
│   │   ├── xp.mp3        # XP gain sound
│   │   └── rankup.mp3    # Rank-up sound
│   ├── ranks/             # Rank SVG icons
│   └── images/            # Screenshots
└── docs/                  # Documentation
```

---

## 🎮 How It Works

### XP System

- Each criterion that passes (≥60) awards **20 XP**
- Maximum **120 XP per project** (6 criteria × 20 XP)
- XP accumulates toward rank progression
- **Automatic weekly reset** for fresh challenges

### Ranking Progression

```
Bronze → Silver → Gold → Epic → Legend → Mythic
0 XP     100 XP   250 XP  400 XP  600 XP   850 XP
```

**Projects needed per rank:**

- Silver: ~5 projects (assuming all 6 criteria pass)
- Gold: ~12 projects
- Epic: ~20 projects
- Legend: ~30 projects
- Mythic: ~42 projects

### Sound Feedback

- **XP Sound**: Plays when any XP is gained
- **Rank-Up Sound**: Plays when advancing to a new rank tier
- Both sounds preload for instant playback
- Gracefully degrades if browser blocks autoplay

### History Tracking

Every project evaluation saves:

- Project name
- Average score & letter grade
- Current rank & total XP
- Week number & date
- Viewable and filterable on statistics page

---

## 🎨 Customization

### Changing XP Values

Edit `js/app.js`:

```javascript
const XP_CONFIG = {
  perPassingGrade: 20, // Change XP per passing grade
  maxPerProject: 120, // Maximum XP per project
};
```

### Changing Rank Thresholds

Edit `js/rank.js`:

```javascript
export const RANKS = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  // Add or modify ranks here
];
```

### Changing Colors

Edit `css/base.css`:

```css
:root {
  --bronze: #cd7f32;
  --silver: #cfd9df;
  --gold: #f5c542;
  /* Customize rank colors */
}
```

---

## 🐛 Known Issues & Limitations

- **Week Calculation**: Uses simplified week calculation (not ISO 8601)
- **Audio Autoplay**: May be blocked by browser security settings
- **Single User**: Designed for individual use (no multi-user support)
- **No Cloud Sync**: Data stored locally only (use export/import for backups)

---

## 🔮 Future Enhancements

Planned features for future versions:

- [ ] **Achievement System** - Unlock badges for milestones
- [ ] **Charts & Graphs** - Visual progress over time with Chart.js
- [ ] **Custom Criteria** - Add your own evaluation criteria
- [ ] **Dark/Light Theme Toggle** - User preference
- [ ] **Social Sharing** - Share rank-ups on social media
- [ ] **Global Leaderboard** - Compare with other learners (Firebase)
- [ ] **Detailed Analytics** - Trends, weak areas, improvement tips
- [ ] **Export to PDF** - Generate professional reports
- [ ] **Sound Toggle** - Disable audio in settings
- [ ] **Mobile App** - Progressive Web App (PWA) version

---

## 💡 What I Learned

### JavaScript Concepts Mastered

- **ES6 Modules** - Proper code organization and imports/exports
- **LocalStorage API** - Data persistence in the browser
- **Audio API** - Playing and managing sound effects
- **State Management** - Tracking XP, ranks, streaks, and history
- **Date Calculations** - Week numbers, streak tracking
- **Animation Coordination** - Syncing CSS and JavaScript
- **Error Handling** - Defensive programming and validation
- **Browser Compatibility** - Firefox vs Chromium differences

### Software Engineering Practices

- **Modular Architecture** - Separation of concerns
- **DRY Principles** - Reusable functions and constants
- **Defensive Programming** - Input validation and error handling
- **Documentation** - JSDoc comments and comprehensive README
- **Version Control** - Git workflow and commit messages
- **Testing** - Manual testing across browsers

### Game Design Principles

- **Progression Systems** - Balanced XP and rank tier design
- **Feedback Loops** - Immediate audio/visual feedback
- **Streak Mechanics** - Encouraging daily consistency
- **Historical Tracking** - Long-term progress visualization

---

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by MOBA game ranking systems (League of Legends, Dota 2)
- Sound effects from [Freesound.org](https://freesound.org)
- Rank icons designed with [Figma](https://figma.com)
- Fonts from [Google Fonts](https://fonts.google.com)

---

## 👨‍💻 Author

**David Laurence Aviado (Exc1D)**

- GitHub: [@Exc1D](https://github.com/Exc1D)
- Frontend Mentor: [@Exc1D](https://www.frontendmentor.io/profile/Exc1D)
- LinkedIn: [David Laurence Aviado](https://www.linkedin.com/in/david-laurence-aviado-b1aaa8272/)

---

## 💖 Dedication

**Built with ❤️ on Day 4 of my journey to becoming a Full Stack Developer**

**For Joy, Hero, Aiah, and Aria** 💙🐕

---

## 📊 Project Stats

- **Lines of Code**: ~800 (JavaScript) + ~400 (CSS)
- **Time Spent**: ~6 hours
- **Files**: 12 (HTML, CSS, JavaScript, docs)
- **Commits**: 25+
- **Browser Compatibility**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## 🌐 Live Demo

[**Try it now!**](https://exc1d.github.io/day-04-epic-grade-calculator/)

---

**⭐ If you found this project helpful, please give it a star!**
