---
title: ​The Killers
description: W:1 L:5 D:2 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 17 **RED STAR**
date: 2026-02-02T12:37:28.000Z
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
| ELO Regular | 1159 🔻  (-8)|
| ELO Competitive | 1166 🔻  (-6)|
| Total Matches | 8 |
| Wins | 1 |
| Losses | 5 |
| Draws | 2 |
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
        let timestamps = [1769603848,1768331097,1766747733,1765708035,1764593740,1762131981,1761553148,1760912432];

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
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/02 | 0-17 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ❌ | 2026/01/18 | 0-6 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ❌ | 2025/12/31 | 0-8 | [Grand Mechanism](https://ws.tsl.rocks/corp/cdae35a4dff3b9b84fa6e79966de8f58259e9ea95a366abeaa8a103815dfa7b3/) |
| ❌ | 2025/12/19 | 0-4 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |
| ❌ | 2025/12/06 | 0-23 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2025/11/08 | 3-0 | [Кулак академия](https://ws.tsl.rocks/corp/27cf79045603cd3d2f483ac4b4ea2dc03d978904db99c01f210bde42a90464ca/) |
| ↔️ | 2025/11/01 | 0-0 | [Space Cowboys](https://ws.tsl.rocks/corp/a74f3db1702305802ad35ee1224a8e6f4ee8dda05a38c700b192c765075416d3/) |
| ↔️ | 2025/10/24 | 0-0 | [MILIBARINOS](https://ws.tsl.rocks/corp/a40371bffe9e38d1fabf69105d61e4da70925d5c6ea95c163c1bf16ffa53b24c/) |

---
Corporation ID: 67cc028d0db771a5c889d615f9746561896830087b7b26ff3557a88e16c6b512

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1770035848"></span>
</div>