function renderWeeklyChart(weeklyData) {
    const canvas = document.getElementById('weeklyChart');
    if (!canvas) return;
  
    const isDark     = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const gridColor  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
    const labelColor = isDark ? '#888780' : '#73726c';
  
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: weeklyData.labels,
        datasets: [{
          label: 'Applications',
          data: weeklyData.data,
          backgroundColor: '#378ADD',
          borderRadius: 4,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: ctx => ` ${ctx.parsed.y} applicants` }
          }
        },
        scales: {
          x: {
            ticks: { color: labelColor, font: { size: 11 } },
            grid:  { display: false },
            border:{ display: false },
          },
          y: {
            ticks: { color: labelColor, font: { size: 11 }, maxTicksLimit: 4 },
            grid:  { color: gridColor },
            border:{ display: false },
          }
        }
      }
    });
  }