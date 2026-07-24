---
title: ​无人深空
description: W:4 L:2 D:1 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 2 - 14 **Ereboros**
date: 2026-07-21T11:28:13.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1234 🔻  (-16)|
| ELO Competitive | 1251 🔻  (-2)|
| Total Matches | 7 |
| Wins | 4 |
| Losses | 2 |
| Draws | 1 |
| Streak Record | 3 |
| Flagship | 0 |

---

### Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1784201293,1784178164,1783591733,1783570706,1783053968,1783046458,1782489164];

        const fontColor = 'rgba(64, 128, 160, 1)';

        // Function to convert Unix timestamps to day of the week (0=Sunday, 6=Saturday)
        function getDayOfWeek(timestamp) {
            return new Date(timestamp * 1000).getDay();
        }

        // Initialize an array to count occurrences for each day of the week
        let dayCounts = [0, 0, 0, 0, 0, 0, 0];

        // Populate the dayCounts array based on the scanTime data
        timestamps.forEach(ts => {
            let dayOfWeek = getDayOfWeek(ts);
            dayCounts[dayOfWeek]++;
        });

        // Chart.js configuration for the bar chart
        const data = {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                data: dayCounts,
                backgroundColor: [
                    'rgba(0, 191, 255, 0.2)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Tuesday)
                    'rgba(214, 236, 243, 0.2)', // Custom light blue (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',
                    'rgba(135, 206, 250, 1)',
                    'rgba(173, 216, 230, 1)',
                    'rgba(214, 236, 243, 1)',
                    'rgba(173, 216, 230, 1)',
                    'rgba(135, 206, 250, 1)',
                    'rgba(0, 191, 255, 1)'
                ],
                borderWidth: 1,
                minBarLength: 5
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            color: fontColor
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: fontColor
                        },
                        grid: {
                            display: false 
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    
---

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/07/21 | 2-14 | [Ereboros](https://ws.tsl.rocks/corp/659c9483e8d58c64c3232eaad0b4f15ed93734dd2bef77a111251a4360163e55/) |
| ↔️ | 2026/07/21 | 1-1 | [World Hoppers](https://ws.tsl.rocks/corp/36feb10eb95f4c6b184924f6db081bc4bf7aae6f7f5c633bd809ccf425303931/) |
| ✅ | 2026/07/14 | 8-0 | [Deathwatch](https://ws.tsl.rocks/corp/721ab2f79e826f2b11873555f03672f2e792d867532b453e179dc4dd9cf24704/) |
| ✅ | 2026/07/14 | 6-0 | [imperio viltrum](https://ws.tsl.rocks/corp/1a05510a2d3a1b3ace3e9e8a00750bf17d53a3cd2d4c6d846f98d54658ffd17f/) |
| ✅ | 2026/07/08 | 12-0 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ❌ | 2026/07/08 | 3-6 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2026/07/01 | 6-0 | [Dinos and cats](https://ws.tsl.rocks/corp/b00b679ccca8f078dc9b7d04f4dadbc1b63daf2737795e6018774d689779d25f/) |

---
Corporation ID: 932e5b765751f58f44617f33980535a067e92530b0243b0a983daa4f45dc03fc

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1784633293"></span>
</div>