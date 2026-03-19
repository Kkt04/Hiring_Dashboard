function renderDropoff(dropoff) {
    const list = document.getElementById('dropout-list');
    if (!list) return;
  
    list.innerHTML = dropoff.map(d => `
      <div class="drop-row" onclick="alert('Tip: Improve the ${d.stage} stage by adding structured screening criteria.')">
        <div class="drop-dot" style="background:${d.color};"></div>
        <span class="drop-name">${d.stage}</span>
        <span class="drop-pct" style="color:${d.color};">${d.pct}% lost</span>
        <span class="drop-count">(${d.lost})</span>
      </div>
    `).join('');
  }