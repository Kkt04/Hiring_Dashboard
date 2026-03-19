function renderTimeToHire(timeData) {
    const list = document.getElementById('time-list');
    if (!list) return;
  
    const maxDays = Math.max(...timeData.map(t => t.days));
  
    list.innerHTML = timeData.map(t => {
      const barPct = Math.round((t.days / maxDays) * 100);
      return `
        <div class="time-row">
          <span class="time-stage">${t.stage}</span>
          <div class="time-bar-wrap">
            <div class="time-bar" style="width:${barPct}%;"></div>
          </div>
          <span class="time-days">${t.days}d</span>
        </div>
      `;
    }).join('');
  }