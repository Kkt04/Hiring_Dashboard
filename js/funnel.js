function renderFunnel(stages) {
    const wrap = document.getElementById('funnel-bars');
    if (!wrap) return;
  
    const max = stages[0].count;
  
    wrap.innerHTML = stages.map((s, i) => {
      const pct      = Math.round((s.count / max) * 100);
      const convRate = i === 0
        ? '—'
        : Math.round((s.count / stages[i - 1].count) * 100) + '%';
  
      const labelInBar  = pct > 18 ? s.count : '';
      const labelOutBar = pct <= 18 ? s.count : '';
  
      return `
        <div class="funnel-row">
          <span class="funnel-label">${s.name}</span>
          <div class="funnel-bar-wrap">
            <div class="funnel-bar" style="width:${pct}%; background:${s.color};">
              ${labelInBar}
            </div>
          </div>
          <span class="funnel-count">${labelOutBar}</span>
          <span class="funnel-rate">${convRate}</span>
        </div>
      `;
    }).join('');
  }