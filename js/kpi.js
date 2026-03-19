function renderKPIs(kpis) {
    const grid = document.getElementById('kpi-grid');
    if (!grid) return;
  
    grid.innerHTML = kpis.map(k => `
      <div class="kpi">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-val">${k.value}</div>
        <div class="kpi-sub ${k.trend}">${k.sub}</div>
      </div>
    `).join('');
  }