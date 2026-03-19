function renderSources(sources) {
    const list = document.getElementById('source-list');
    if (!list) return;
  
    list.innerHTML = sources.map(s => `
      <div class="source-row">
        <div class="legend-dot" style="background:${s.color};"></div>
        <span class="src-name">${s.name}</span>
        <span class="src-count">${s.count}</span>
        <span class="src-pct">${s.pct}%</span>
      </div>
    `).join('');
  }