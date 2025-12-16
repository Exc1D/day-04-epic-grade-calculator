# 👤 User Guide - Epic Grade Calculator

Complete guide to using the Epic Grade Calculator effectively.

---

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Main Interface](#main-interface)
- [Evaluating Projects](#evaluating-projects)
- [Understanding Results](#understanding-results)
- [Ranking System](#ranking-system)
- [Statistics Dashboard](#statistics-dashboard)
- [Data Management](#data-management)
- [Tips & Best Practices](#tips--best-practices)
- [FAQ](#faq)

---

## 🚀 Getting Started

### First Time Setup

1. **Open the App**

   - Visit: https://exc1d.github.io/day-04-epic-grade-calculator/
   - Or open `index.html` from your local files

2. **You'll See:**

   - Your current rank (starts at Bronze)
   - XP: 0
   - Streak: 1 (increments daily)
   - Empty input fields

3. **No Account Required!**
   - Everything saves automatically to your browser
   - Data persists between sessions
   - Use Export/Import for backups

---

## 🖥️ Main Interface

### Interface Overview

```
┌─────────────────────────────────────────┐
│     100-DAY CODING JOURNEY              │
├─────────────────────────────────────────┤
│  [View Stats]                           │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  🥉 BRONZE                      │   │
│  │  ▓▓▓░░░░░░░░░░░░░░░░░ 15%      │   │
│  │  XP: 30                         │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Project Name Input]                   │
│  Current Project: My Cool App           │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐           │
│  │  85  │ │  90  │ │  75  │           │
│  └──────┘ └──────┘ └──────┘           │
│  ┌──────┐ ┌──────┐ ┌──────┐           │
│  │  80  │ │  70  │ │  95  │           │
│  └──────┘ └──────┘ └──────┘           │
│                                         │
│         [CALCULATE]                     │
│                                         │
│  Average: 82.5                          │
│  ✅ PASS                                │
│                                         │
│  Streak: 5 days                         │
│                                         │
│  [📥 Export]  [📤 Import]              │
└─────────────────────────────────────────┘
```

### Key Elements

**1. Rank Display**

- Shows current rank icon and name
- XP progress bar to next rank
- Current XP total

**2. Project Name Input**

- Optional but recommended
- Helps identify projects in history
- Press Enter to save

**3. Score Inputs (6 fields)**

- One for each evaluation criterion
- Accepts values 0-100
- Leave empty if not applicable

**4. Calculate Button**

- Processes your scores
- Awards XP
- Shows results

**5. Results Area**

- Shows average score
- Pass/Fail status
- Rank-up notification (if applicable)

**6. Streak Counter**

- Shows consecutive days of use
- Increments once per day

**7. Export/Import Buttons**

- Backup and restore your data

---

## 📝 Evaluating Projects

### Step-by-Step Process

#### Step 1: Name Your Project (Optional)

```
┌─────────────────────────────┐
│ [My Temperature Converter_] │ ← Type here
│         [Submit]             │
└─────────────────────────────┘
```

**Tips:**

- Use descriptive names: "Day 1 - Temp Converter"
- Include day number for easy tracking
- Press Enter or click Submit

---

#### Step 2: Evaluate Each Criterion

Fill in scores (0-100) for each:

**1. Correctness** (Does it work?)

```
Questions to ask:
✓ Does the app work as intended?
✓ Are there any bugs?
✓ Do all features function properly?
✓ Does it handle edge cases?

Scoring Guide:
90-100: Perfect, no bugs
80-89:  Minor bugs only
70-79:  Some bugs, mostly works
60-69:  Major bugs, partially works
0-59:   Doesn't work or crashes
```

**2. Readability** (Is code clean?)

```
Questions to ask:
✓ Are variable names descriptive?
✓ Is code properly formatted?
✓ Are there helpful comments?
✓ Is it easy to understand?

Scoring Guide:
90-100: Professional-grade readability
80-89:  Clean and well-organized
70-79:  Mostly readable, some issues
60-69:  Hard to follow in places
0-59:   Confusing or messy code
```

**3. Simplicity** (Is it overcomplicated?)

```
Questions to ask:
✓ Is the solution straightforward?
✓ Is there unnecessary complexity?
✓ Could it be simpler?
✓ Is code reusable?

Scoring Guide:
90-100: Elegant and simple
80-89:  Simple with minor complexities
70-79:  Somewhat complicated
60-69:  Overcomplicated in places
0-59:   Unnecessarily complex
```

**4. Efficiency** (Does it perform well?)

```
Questions to ask:
✓ Is it fast?
✓ Does it use resources wisely?
✓ Are algorithms optimized?
✓ Any performance bottlenecks?

Scoring Guide:
90-100: Highly optimized
80-89:  Good performance
70-79:  Acceptable performance
60-69:  Slow in some areas
0-59:   Very slow or resource-heavy
```

**5. Best Practices** (Follows conventions?)

```
Questions to ask:
✓ Follows coding standards?
✓ Proper error handling?
✓ Security considerations?
✓ Accessibility features?

Scoring Guide:
90-100: Follows all best practices
80-89:  Follows most best practices
70-79:  Some best practices missing
60-69:  Many best practices ignored
0-59:   No best practices followed
```

**6. Creativity** (Is it unique?)

```
Questions to ask:
✓ Does it have unique features?
✓ Is the approach innovative?
✓ Is the design appealing?
✓ Does it go beyond requirements?

Scoring Guide:
90-100: Highly creative and original
80-89:  Creative with unique touches
70-79:  Some creative elements
60-69:  Basic with minor creativity
0-59:   No creative elements
```

---

#### Step 3: Calculate Results

**Click the CALCULATE button**

**What happens:**

1. ⏱️ App calculates average
2. 🎵 XP sound plays (if enabled)
3. 📊 Results display:
   - Average score (e.g., 82.5)
   - Pass/Fail status
4. ⭐ XP awarded:
   - 20 XP per passing criterion (≥60)
   - 0 XP for failing criteria
5. 🎉 Rank-up celebration (if you level up)
6. 💾 Data automatically saved

---

## 📊 Understanding Results

### Result Display

**Example 1: Passing Grade**

```
┌─────────────────────────┐
│ Average: 82.5           │
│ ✅ PASS                 │
└─────────────────────────┘

XP Gained: 120 (all 6 passed)
New Total XP: 120
```

**Example 2: Failing Grade**

```
┌─────────────────────────┐
│ Average: 55.0           │
│ ❌ FAIL                 │
└─────────────────────────┘

XP Gained: 40 (2 out of 6 passed)
New Total XP: 40
```

**Example 3: Rank Up!**

```
┌─────────────────────────┐
│ Average: 85.0           │
│                         │
│   🎉 RANK UP! 🎉       │
│      SILVER             │
└─────────────────────────┘

XP Gained: 120
New Total XP: 120
🎵 Rank-up sound plays!
```

---

### Understanding XP

**XP Calculation:**

```
Each criterion ≥60 = 20 XP
Maximum per project = 120 XP

Example:
Scores: 80, 85, 90, 55, 70, 50
Passing: 80, 85, 90, 70 (4 criteria)
XP Gained: 4 × 20 = 80 XP
```

**Important Notes:**

- ✅ Average ≥60 = PASS (but XP based on individual criteria)
- ⚠️ You can PASS but still get low XP if some criteria fail
- 📊 Each criterion is independent for XP calculation

---

### Letter Grades

```
A: 90-100  (Exceptional)
B: 80-89   (Strong)
C: 70-79   (Competent)
D: 60-69   (Passing)
F: 0-59    (Failing)
```

**Shown in History:**

```
Day 1 - Temperature Converter
Grade: B (84.5)
Rank: Bronze | XP: 120
```

---

## 🏆 Ranking System

### Rank Tiers

```
🥉 BRONZE    0-99 XP    (Starting rank)
🥈 SILVER    100-249 XP (~5-12 projects)
🥇 GOLD      250-399 XP (~12-20 projects)
💜 EPIC      400-599 XP (~20-30 projects)
🔥 LEGEND    600-849 XP (~30-42 projects)
⚡ MYTHIC    850+ XP    (~42+ projects)
```

### Progression Timeline

**Assuming all 6 criteria pass (120 XP per project):**

```
Projects    Total XP    Rank
─────────────────────────────
Start       0           Bronze
1           120         Silver ⬆️
3           360         Gold ⬆️
4           480         Epic ⬆️
5           600         Legend ⬆️
8           960         Mythic ⬆️
```

**Realistic scenario (mix of passes/fails):**

```
Projects    Avg XP      Total XP    Rank
─────────────────────────────────────────
Start       -           0           Bronze
5           80          400         Epic ⬆️
10          70          700         Legend ⬆️
15          65          975         Mythic ⬆️
```

---

### Rank Features

**Visual Changes:**

- 🖼️ Rank icon updates
- 🎨 Different colors per rank
- 📊 XP bar shows progress to next rank

**Audio Feedback:**

- 🎵 Epic sound plays on rank-up
- 🔊 Different from regular XP sound

**Celebrations:**

- ✨ Animated rank-up badge
- 💫 Glow effect
- 🎉 "RANK UP!" message

---

### Weekly Reset

**Every Monday (Week 1 → Week 2):**

```
Before Reset:
├─ Week: 1
├─ XP: 850
└─ Rank: Mythic

After Reset:
├─ Week: 2
├─ XP: 0          ← Reset!
└─ Rank: Bronze   ← Reset!

History Saved:
└─ Week 1 data preserved in history
```

**Why Weekly Reset?**

- ✅ Fresh challenges each week
- ✅ Prevents infinite XP accumulation
- ✅ Tracks progress over time
- ✅ Maintains motivation

---

## 📈 Statistics Dashboard

### Accessing Stats

**Click "View Stats" link** at top of main page

### Stats Page Overview

```
┌─────────────────────────────────────────┐
│  📊 Weekly Performance                  │
│                                         │
│  [Select Week ▼]  Week 50              │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Week 50                        │   │
│  │  Projects: 7                    │   │
│  │  Average: 81.3                  │   │
│  │  Best Rank: Gold                │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Project History:                       │
│  ┌─────────────────────────────────┐   │
│  │ Day 1 - Temperature Converter   │   │
│  │ Grade: B (78.0)                 │   │
│  │ Rank: bronze | XP: 100          │   │
│  ├─────────────────────────────────┤   │
│  │ Day 2 - Tip Calculator          │   │
│  │ Grade: B (84.0)                 │   │
│  │ Rank: silver | XP: 220          │   │
│  ├─────────────────────────────────┤   │
│  │ ... more projects ...           │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [← Back]                              │
└─────────────────────────────────────────┘
```

### Using the Week Filter

**Dropdown shows all weeks with data:**

```
[Select Week ▼]
  Week 48
  Week 49
  Week 50  ← Current selection
  Week 51
```

**Select different week:**

- Page updates to show that week's data
- Summary card recalculates
- Project list filters to that week

---

### Understanding Stats

**Weekly Summary Card:**

```
Projects: 7        ← Total projects this week
Average: 81.3      ← Average of all project scores
Best Rank: Gold    ← Highest rank achieved this week
```

**Project History:**

- Lists ALL projects for selected week
- Shows: Name, Grade, Average, Rank, XP
- Sorted by date (newest first)

---

## 💾 Data Management

### Export Data

**Purpose:** Backup your progress

**Steps:**

1. Click **"📥 Export Data"** button
2. Browser downloads JSON file
3. File name: `100day-backup-2025-12-16.json`
4. Save to safe location

**What's Exported:**

```json
{
  "xp": 850,
  "week": 50,
  "streak": 42,
  "lastVisit": "2025-12-16",
  "project": "Day 42 Project",
  "history": [
    /* all projects */
  ],
  "exportDate": "2025-12-16T10:30:00.000Z",
  "version": "1.0.0"
}
```

**When to Export:**

- ✅ After major progress (rank-ups)
- ✅ End of each week
- ✅ Before clearing browser data
- ✅ Before switching browsers/devices

---

### Import Data

**Purpose:** Restore from backup

**Steps:**

1. Click **"📤 Import Data"** button
2. Browser opens file picker
3. Select your backup JSON file
4. Click "Open"
5. Confirmation alert appears
6. Page refreshes with restored data

**What Happens:**

- 🔄 Current data is REPLACED
- ⚠️ No undo option!
- ✅ All history restored
- ✅ XP, rank, streak restored

**Use Cases:**

- Moving to new browser
- Recovering after data loss
- Switching devices
- Sharing progress (for review)

---

### Data Storage

**Where Data Lives:**

- 💾 Browser's LocalStorage
- 🌐 Stays on YOUR device
- 🔒 Not sent to any server
- 🗑️ Cleared if you clear browser data

**Data Keys Used:**

```
100day_XP
100day_week
100day_streak
100day_lastVisit
100day_project
100day_history
```

**To Clear All Data:**

```javascript
// Open browser console (F12)
localStorage.clear();
location.reload();
```

---

## 💡 Tips & Best Practices

### Evaluation Tips

**Be Honest:**

- ✅ Rate objectively, not emotionally
- ✅ Consider what you'd tell a peer
- ✅ Focus on actual code, not effort

**Be Consistent:**

- ✅ Use same standards each time
- ✅ Compare against your own rubric
- ✅ Review past projects for reference

**Balance is Key:**

- ⚠️ Don't be too harsh or too lenient
- ⚠️ 100% should be rare
- ⚠️ 0% should also be rare

---

### Scoring Guidelines

**Good Score Distribution:**

```
Excellent project: 85-95 average
Good project:      75-84 average
Okay project:      65-74 average
Needs work:        50-64 average
```

**Red Flags:**

- 🚩 All 100s every time (too lenient)
- 🚩 All 60s every time (not thoughtful)
- 🚩 Same score for all criteria (lazy)

**Healthy Patterns:**

```
Example Good Evaluation:
Correctness:     90  ← Works great
Readability:     80  ← Clean code
Simplicity:      75  ← Bit complex
Efficiency:      85  ← Good performance
Best Practices:  70  ← Missing some
Creativity:      95  ← Very creative!

Average: 82.5 (B) ✅
```

---

### Progression Tips

**Week 1-2: Focus on Completion**

- Goal: Finish projects
- Don't worry about perfection
- Build consistency (streak)

**Week 3-5: Improve Quality**

- Goal: Higher scores
- Focus on readability
- Apply best practices

**Week 6-10: Add Creativity**

- Goal: Unique features
- Experiment with new ideas
- Go beyond requirements

**Week 10+: Mastery**

- Goal: Exceptional projects
- Professional-grade code
- Ready for portfolio

---

### Motivation Tips

**Track Progress:**

- 📊 Check stats weekly
- 📈 Watch averages improve
- 🏆 Celebrate rank-ups

**Set Goals:**

- "Reach Silver by end of week"
- "Get 3 A grades this week"
- "Maintain 7-day streak"

**Don't Burn Out:**

- ✅ One project per day is enough
- ✅ Quality over quantity
- ✅ Take breaks when needed

**Use Gamification:**

- 🎮 Rank-ups feel rewarding
- 🎵 Sound effects add excitement
- ⚡ Streaks encourage consistency

---

## ❓ FAQ

### General Questions

**Q: Do I need an account?**
A: No! Everything saves to your browser automatically.

**Q: Can I use this on mobile?**
A: Yes! Fully responsive design works on phones/tablets.

**Q: Is my data private?**
A: Yes! All data stays on your device. Nothing is sent to any server.

**Q: Can I use this offline?**
A: Yes, after first load. Just open the HTML file or revisit the cached page.

**Q: How much storage does it use?**
A: ~2MB including all assets and data.

---

### Scoring Questions

**Q: What if I can't score all 6 criteria?**
A: Leave fields empty. Only filled fields count toward average and XP.

**Q: Can I edit scores after submitting?**
A: No. Scores are final once calculated. Re-evaluate if needed.

**Q: What's a "passing" score?**
A: 60 or above for overall average and individual criteria.

**Q: Why did I pass but get low XP?**
A: XP is per-criterion. You can have a passing average but fail some criteria.

Example:

```
Scores: 100, 100, 100, 0, 0, 0
Average: 50 (FAIL)
XP: 60 (3 criteria passed)
```

---

### XP & Ranking Questions

**Q: How much XP do I need to rank up?**
A: See the [Ranking System](#ranking-system) section above.

**Q: Why did my XP reset?**
A: XP resets every Monday (new week). This is intentional for fresh challenges.

**Q: Can I keep my XP when weeks change?**
A: No, but your history is saved! Check stats to see past weeks.

**Q: What's the maximum rank?**
A: Mythic (850+ XP). No limit on XP, but Mythic is the highest rank.

**Q: Can I lose XP?**
A: No. XP only increases (or resets weekly). No penalties.

---

### Technical Questions

**Q: Why isn't audio playing?**
A: Browser might block autoplay. Click anywhere on page first, then try again.

**Q: Data disappeared after closing browser?**
A: Possible causes:

- Private/Incognito mode (data doesn't persist)
- Browser cleared data
- LocalStorage disabled

**Q: Export button doesn't work?**
A: Check if popup blocker is enabled. Allow downloads from this site.

**Q: Import shows "Invalid format" error?**
A: Make sure you're importing an actual backup file (JSON) from this app.

**Q: Week number seems wrong?**
A: App uses simplified week calculation. This is normal and doesn't affect functionality.

---

### Troubleshooting

**Q: Nothing happens when I click Calculate?**
A:

1. Check browser console (F12) for errors
2. Verify you entered at least one score
3. Try refreshing page
4. Clear browser cache

**Q: Results don't show?**
A:

1. Check if results area exists on page
2. Try different browser
3. Check browser console for errors

**Q: Stats page is empty?**
A: You need to evaluate at least one project first. Go back and do an evaluation!

---

## 📞 Getting Help

**Still having issues?**

1. **Check the [Setup Guide](SETUP.md)** for installation issues
2. **Review [Developer Guide](DEVELOPER_GUIDE.md)** for technical details
3. **Search [GitHub Issues](https://github.com/Exc1D/day-04-epic-grade-calculator/issues)**
4. **Open a new issue** with:
   - Browser and version
   - Steps to reproduce
   - Error messages
   - Screenshots

---

**Happy evaluating!** 🎯✨

Remember: This tool is meant to help you improve, not stress you out. Be honest but fair with yourself!
