// All mock hiring data lives here. Swap with real API data later.

const MOCK_DATA = {

    meta: {
      quarter: "Q2 2025",
      role: "Software Engineer (Full Stack)",
      source: "All Sources",
    },
  
    kpis: [
      { label: "Total applicants",  value: "480", sub: "↑ 18% vs Q1",     trend: "up"      },
      { label: "Shortlisted",       value: "96",  sub: "20% screen rate",  trend: "neutral" },
      { label: "Offers made",       value: "12",  sub: "↓ 2 from target",  trend: "down"    },
      { label: "Avg. time to hire", value: "28d", sub: "↓ 4d vs Q1",       trend: "up"      },
    ],
  
    stages: [
      { name: "Applied",           count: 480, color: "#378ADD" },
      { name: "Resume Screening",  count: 96,  color: "#1D9E75" },
      { name: "Phone Screen",      count: 54,  color: "#EF9F27" },
      { name: "Technical Round",   count: 28,  color: "#D4537E" },
      { name: "Final Interview",   count: 17,  color: "#7F77DD" },
      { name: "Offer Extended",    count: 12,  color: "#D85A30" },
      { name: "Hired",             count: 9,   color: "#639922" },
    ],
  
    dropoff: [
      { stage: "Applied → Resume",   lost: 384, pct: 80, color: "#E24B4A" },
      { stage: "Resume → Phone",     lost: 42,  pct: 56, color: "#EF9F27" },
      { stage: "Phone → Technical",  lost: 26,  pct: 48, color: "#D85A30" },
      { stage: "Final → Offer",      lost: 5,   pct: 29, color: "#D4537E" },
      { stage: "Offer → Hire",       lost: 3,   pct: 25, color: "#7F77DD" },
    ],
  
    timeToHire: [
      { stage: "Resume Review", days: 3 },
      { stage: "Phone Screen",  days: 5 },
      { stage: "Technical",     days: 8 },
      { stage: "Final Round",   days: 7 },
      { stage: "Offer & Close", days: 5 },
    ],
  
    sources: [
      { name: "LinkedIn",         count: 190, pct: 40, color: "#378ADD" },
      { name: "Naukri / Indeed",  count: 120, pct: 25, color: "#1D9E75" },
      { name: "Referrals",        count: 72,  pct: 15, color: "#7F77DD" },
      { name: "Company Website",  count: 58,  pct: 12, color: "#EF9F27" },
      { name: "Campus / Events",  count: 40,  pct: 8,  color: "#D4537E" },
    ],
  
    weeklyApplications: {
      labels: ["Wk 1","Wk 2","Wk 3","Wk 4","Wk 5","Wk 6","Wk 7","Wk 8"],
      data:   [42, 68, 55, 80, 72, 65, 54, 44],
    },
  
  };