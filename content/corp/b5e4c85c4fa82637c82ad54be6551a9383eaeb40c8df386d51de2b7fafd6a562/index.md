---
title: ​Sunat.
description: W:2 L:3 D:0 Bonus ✅ 28%
image: ./favicon.png
Summary: ✅ 2 - 0 **欢迎新手**
date: 2026-09-04T05:17:26.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 28%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1194 🔺  (13)|
| ELO Competitive | 1202 🔺  (17)|
| Total Matches | 5 |
| Wins | 2 |
| Losses | 3 |
| Draws | 0 |
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
        let timestamps = [1788067046,1787624204,1787181799,1783939023,1781876811];

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
| [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/09/04 | 2-0 | [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) |
| ❌ | 2026/08/30 | 0-5 | [attraction\.F](https://ws.tsl.rocks/corp/b2358fac70c7c1072563046f11245b78c51ec7b9bdf54e329487b89dfa60c371/) |
| ❌ | 2026/08/24 | 0-20 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ❌ | 2026/07/18 | 0-10 | [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) |
| ✅ | 2026/06/24 | 1-0 | [System Shocker](https://ws.tsl.rocks/corp/ef611dc637eb934f6336d5c7ff8dbe60e251355c55569f1b26300aed1798757f/) |

---
Corporation ID: b5e4c85c4fa82637c82ad54be6551a9383eaeb40c8df386d51de2b7fafd6a562

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1788499046"></span>
</div>