# 🔧 Setup Guide - Epic Grade Calculator

Complete installation and configuration guide.

---

## 📋 Table of Contents

- [System Requirements](#system-requirements)
- [Quick Setup](#quick-setup)
- [Detailed Setup](#detailed-setup)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Development Setup](#development-setup)

---

## 💻 System Requirements

### Minimum Requirements

- **Browser**: Any modern browser
  - Chrome 90+ ✅
  - Firefox 88+ ✅
  - Safari 14+ ✅
  - Edge 90+ ✅
- **Storage**: ~2MB for app + data
- **JavaScript**: Must be enabled
- **LocalStorage**: Must be enabled

### Recommended

- **Screen Resolution**: 1280x720 or higher
- **Audio**: Speakers/headphones for sound effects
- **Internet**: For initial load only (works offline after)

---

## ⚡ Quick Setup

### Option 1: GitHub Pages (Easiest)

**Just visit the live demo:**

```
https://exc1d.github.io/day-04-epic-grade-calculator/
```

No installation needed! ✨

---

### Option 2: Download and Run Locally

1. **Download ZIP:**

   - Go to [GitHub Repository](https://github.com/Exc1D/day-04-epic-grade-calculator)
   - Click "Code" → "Download ZIP"
   - Extract the ZIP file

2. **Open in Browser:**
   - Navigate to extracted folder
   - Double-click `index.html`
   - App opens in your default browser!

**That's it!** 🎉

---

### Option 3: Clone with Git

```bash
# Clone the repository
git clone https://github.com/Exc1D/day-04-epic-grade-calculator.git

# Navigate to folder
cd day-04-epic-grade-calculator

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

---

## 🔍 Detailed Setup

### Step 1: Get the Code

Choose one method:

**A. Clone with Git (Recommended for developers)**

```bash
git clone https://github.com/Exc1D/day-04-epic-grade-calculator.git
cd day-04-epic-grade-calculator
```

**B. Download ZIP**

- Visit GitHub repository
- Click green "Code" button
- Select "Download ZIP"
- Extract to your desired location

**C. Fork (If you want to contribute)**

- Click "Fork" on GitHub
- Clone your fork instead

---

### Step 2: Verify Files

Ensure you have all files:

```
✅ index.html
✅ history.html
✅ css/ folder (4 files)
✅ js/ folder (5 files)
✅ assets/ folder (audio, ranks, images)
✅ README.md
```

**Check file count:**

```bash
find . -type f | wc -l
# Should show 15+ files
```

---

### Step 3: Run Locally

#### Option A: Direct File Open (Simple)

**Pros:** No server needed
**Cons:** Some features may not work (audio, modules)

```bash
# Just open the file
open index.html
```

#### Option B: Local Server (Recommended)

**Pros:** Full functionality, mirrors production
**Cons:** Requires Python or Node.js

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

**Using Node.js:**

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000

# Visit: http://localhost:8000
```

**Using VS Code:**

- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

---

### Step 4: Test the App

1. **Open the app** in your browser
2. **Enter a project name** (e.g., "Test Project")
3. **Enter scores** (try: 80, 85, 90, 75, 70, 95)
4. **Click Calculate**
5. **Verify:**

   - ✅ See average score
   - ✅ See "PASS ✅" message
   - ✅ Hear XP sound (if audio works)
   - ✅ See XP increase
   - ✅ See rank displayed

6. **Refresh page**
7. **Verify data persists** (XP, streak should remain)

**If all checks pass, setup is complete!** 🎉

---

## ⚙️ Configuration

### Audio Files

**Location:** `assets/audio/`

The app expects these files:

- `xp.mp3` - Plays on XP gain
- `rankup.mp3` - Plays on rank-up

**To replace sounds:**

1. Find/create MP3 files
2. Name them exactly as above
3. Replace files in `assets/audio/`
4. Refresh browser

**To disable sounds:**
Edit `js/app.js`:

```javascript
// Comment out audio creation
// const sounds = {
//   xp: createAudio("assets/audio/xp.mp3", 0.4),
//   rankUp: createAudio("assets/audio/rankup.mp3", 0.6),
// };
```

---

### Rank Icons

**Location:** `assets/ranks/`

Required SVG files:

- `bronze.svg`
- `silver.svg`
- `gold.svg`
- `epic.svg`
- `legend.svg`
- `mythic.svg`

**To customize:**

1. Create SVG icons (64x64px recommended)
2. Name them exactly as above
3. Replace files in `assets/ranks/`

---

### XP Configuration

Edit `js/app.js`:

```javascript
const XP_CONFIG = {
  perPassingGrade: 20, // XP per passing grade
  maxPerProject: 120, // Max XP per project
};
```

**Example changes:**

```javascript
// Make progression faster
perPassingGrade: 30; // Was 20

// Make progression slower
perPassingGrade: 10; // Was 20
```

---

### Rank Thresholds

Edit `js/rank.js`:

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

**Example: Add a new rank:**

```javascript
export const RANKS = [
  { name: "bronze", xp: 0 },
  { name: "silver", xp: 100 },
  { name: "gold", xp: 250 },
  { name: "platinum", xp: 350 }, // NEW!
  { name: "epic", xp: 400 },
  { name: "legend", xp: 600 },
  { name: "mythic", xp: 850 },
];
```

**Don't forget to add the icon:** `assets/ranks/platinum.svg`

---

## 🐛 Troubleshooting

### Issue: Page Won't Load

**Symptoms:** Blank page, "File not found"

**Solutions:**

1. Check file path - `index.html` should be in root folder
2. Try opening from local server instead of direct file
3. Check browser console (F12) for errors

---

### Issue: Audio Not Playing

**Symptoms:** No sound effects

**Solutions:**

1. Check audio files exist in `assets/audio/`
2. Try interacting with page first (click button)
3. Check browser allows autoplay:
   - Chrome: `chrome://settings/content/sound`
   - Firefox: `about:preferences#privacy` → Autoplay
4. Check computer volume isn't muted
5. Open browser console - look for audio errors

---

### Issue: Data Not Persisting

**Symptoms:** XP resets on page refresh

**Solutions:**

1. Check LocalStorage is enabled:

```javascript
// Open browser console, type:
localStorage.setItem("test", "123");
localStorage.getItem("test"); // Should return '123'
```

2. Check you're not in Private/Incognito mode
3. Check browser storage isn't full:
   - Chrome: Settings → Privacy → Site Settings → Cookies
4. Try clearing localStorage and restarting:

```javascript
localStorage.clear();
location.reload();
```

---

### Issue: Export/Import Not Working

**Symptoms:** Export button doesn't download, import fails

**Solutions:**

1. **Export issues:**

   - Check popup blockers
   - Check download folder permissions
   - Try different browser

2. **Import issues:**
   - Verify JSON file is valid (open in text editor)
   - Check file isn't corrupted
   - Try exporting again and re-importing

---

### Issue: Wrong Week Number

**Symptoms:** Week number seems incorrect

**Explanation:** App uses simplified week calculation (not ISO 8601)

**Solution:**
Edit `js/utils.js` if you need ISO-standard weeks (advanced).

---

### Issue: Firefox-Specific Problems

**Symptoms:** Works in Chrome but not Firefox

**Solutions:**

1. Clear Firefox cache: `Ctrl+Shift+Delete`
2. Check console for errors (F12)
3. Try Firefox Safe Mode (restart with addons disabled)
4. Update Firefox to latest version

---

## 🛠️ Development Setup

For developers who want to modify the code:

### Prerequisites

```bash
# Install Node.js (for local server)
# Download from: https://nodejs.org

# Install Git
# Download from: https://git-scm.com
```

### Clone and Setup

```bash
# Clone repository
git clone https://github.com/Exc1D/day-04-epic-grade-calculator.git
cd day-04-epic-grade-calculator

# Install development server (optional)
npm install -g http-server

# Run local server
http-server -p 8000

# Open browser
open http://localhost:8000
```

### Recommended VS Code Extensions

- Live Server
- ESLint
- Prettier
- Path Intellisense

### Development Workflow

1. Make changes to code
2. Save file
3. Browser auto-refreshes (if using Live Server)
4. Test changes
5. Commit to Git

---

## 📞 Need Help?

**Still having issues?**

1. Check the [main README](README.md)
2. Search [GitHub Issues](https://github.com/Exc1D/day-04-epic-grade-calculator/issues)
3. Open a new issue with:
   - Browser and version
   - Operating system
   - Error messages (from console)
   - Steps to reproduce

---

**Happy grading!** 🎮✨
