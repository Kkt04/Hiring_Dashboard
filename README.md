# Hiring Funnel Dashboard

A clean, responsive hiring pipeline dashboard built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no API key required.

Built as a submission for the **AI Automation Intern Assessment — Problem 3**.

---

## What It Does

Gives management full visibility into hiring performance through:

- **KPI Cards** — total applicants, shortlisted, offers made, avg. time to hire
- **Stage-wise Funnel** — 7-stage bar chart with conversion rate at each step
- **Drop-off Analysis** — exactly where and how many candidates are lost
- **Time per Stage** — days spent at each hiring stage (total: 28 days)
- **Applications by Source** — LinkedIn, Naukri, Referrals, Website, Campus
- **Weekly Applications Chart** — 8-week trend via Chart.js
- **AI Insight** — flags the biggest drop-off point automatically

---

## Folder Structure

```
hiring-dashboard/
│
├── index.html              ← Main entry point (open this in browser)
│
├── css/
│   └── style.css           ← All styles (light + dark mode, responsive)
│
├── js/
│   ├── main.js             ← Entry point, calls all renderers on page load
│   ├── kpi.js              ← Renders the 4 KPI metric cards
│   ├── funnel.js           ← Stage-wise funnel bars with conversion rates
│   ├── dropout.js          ← Drop-off analysis rows (clickable)
│   ├── timeToHire.js       ← Time-per-stage progress bars
│   ├── sources.js          ← Application source breakdown list
│   └── chart.js            ← Weekly bar chart via Chart.js
│
└── data/
    └── mockData.js         ← All mock data (swap this for real data)
```

---

## How to Run

No install, no build step, no API key needed.

**Option 1 — Python (recommended, zero setup):**
```bash
cd hiring-dashboard
python3 -m http.server 8080
```
Then open → `http://localhost:8080`

**Option 2 — Node serve:**
```bash
npm install -g serve
cd hiring-dashboard
serve .
```
Then open → `http://localhost:3000`

**Option 3 — VS Code Live Server:**
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html`
3. Click **Open with Live Server**

> ⚠️ Do not open `index.html` by double-clicking — fonts won't load correctly over `file://`. Always use a local server.

---

## Sample Data

All mock data is in `data/mockData.js`. It reflects a realistic Q2 2025 hiring cycle for a Software Engineer (Full Stack) role:

| Metric              | Value  |
|---------------------|--------|
| Total Applicants    | 480    |
| Shortlisted         | 96     |
| Offers Made         | 12     |
| Hired               | 9      |
| Avg. Time to Hire   | 28 days|
| Hire Rate           | 1.9%   |

---

## Swapping in Real Data

All data lives in one place — `data/mockData.js`. Just replace the values inside `MOCK_DATA`:

```js
const MOCK_DATA = {
  kpis: [...],         // ← update KPI numbers here
  stages: [...],       // ← update funnel stage counts here
  dropoff: [...],      // ← update drop-off percentages here
  timeToHire: [...],   // ← update days per stage here
  sources: [...],      // ← update source breakdown here
  weeklyApplications: {...}  // ← update weekly chart data here
};
```

None of the JS renderer files need to be touched — they all read from `MOCK_DATA` automatically.

---

## Tools Used

| Tool | Purpose |
|------|---------|
| HTML / CSS / JavaScript | Core build — no framework |
| [Chart.js 4.4](https://www.chartjs.org/) | Weekly applications bar chart |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Body font |
| [Syne](https://fonts.google.com/specimen/Syne) | Display / heading font |
| Google Fonts CDN | Font delivery |

---

## Features

- **No framework** — pure vanilla JS, easy to read and modify
- **Dark mode** — auto-detects system preference via `prefers-color-scheme`
- **Responsive** — works on mobile (2-col grid collapses to 1-col)
- **Modular JS** — each section is its own file, easy to extend
- **One data file** — swap `mockData.js` for a real API response with zero other changes

---

## Approach (for submission)

The dashboard was built to answer the question: *"If I had to deploy this in a company tomorrow, what would I build?"*

- Used **mock data** that mirrors real hiring benchmarks (Indian tech industry Q2 2025)
- Separated **data from rendering logic** so a non-technical HR manager could update numbers in one file
- Added an **AI insight callout** to surface the biggest drop-off automatically — not just display raw numbers
- Kept the stack simple (no React, no build tools) so it runs anywhere instantly

---

## Author

Built by Kalash Kumar Thakur as part of the AI Automation Intern Assessment.
