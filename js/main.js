document.addEventListener('DOMContentLoaded', () => {
    const data = MOCK_DATA;
  
    renderKPIs(data.kpis);
    renderFunnel(data.stages);
    renderDropoff(data.dropoff);
    renderTimeToHire(data.timeToHire);
    renderSources(data.sources);
    renderWeeklyChart(data.weeklyApplications);
  });