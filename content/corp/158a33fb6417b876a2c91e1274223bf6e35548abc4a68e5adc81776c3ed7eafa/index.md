---
title: ​New Orbit ©
description: W:4 L:1 D:0 Bonus ❌ 6%
image: ./favicon.png
Summary: ✅ 30 - 0 **63SALVADORES36**
date: 2026-01-18T13:44:23.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Welcome!  SisterCorp to No Orbit©. 
Here to have fun and WS. 
Stay active and no disrespectful players. 
All levels are welcome!

Discord is mandatory for WS participation!

```
<br>

### [Discord](https://discord.gg/CNh7tUG)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1234 🔺  (12)|
| ELO Competitive | 1255 🔺  (22)|
| Total Matches | 5 |
| Wins | 4 |
| Losses | 1 |
| Draws | 0 |
| Streak | 4 |
| Streak Record | 4 |
| Flagship | 4 |

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
        let timestamps = [1768311863,1767765022,1759391928,1757028625,1705770597];

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
| ✅ | 2026/01/18 | 30-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2026/01/12 | 7-0 | [The Turtles](https://ws.tsl.rocks/corp/91b979bfc3c7fe8f6e58d58bd2feac8f8deba5a5bfb6c9ea60885c2b37fb2a0a/) |
| ✅ | 2025/10/07 | 5-0 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ✅ | 2025/09/09 | 6-4 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ❌ | 2024/01/25 | 9-17 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |

---
Corporation ID: 158a33fb6417b876a2c91e1274223bf6e35548abc4a68e5adc81776c3ed7eafa

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1768743863"></span>
</div>