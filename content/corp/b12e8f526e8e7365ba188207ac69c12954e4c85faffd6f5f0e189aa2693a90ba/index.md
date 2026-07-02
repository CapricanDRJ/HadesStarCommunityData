---
title: ​Last Chance
description: W:3 L:3 D:1 Bonus ❌ 7%
image: ./favicon.png
Summary: ✅ 19 - 14 **DTC**
date: 2025-05-18T04:49:46.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Bienvenido a Last Chance, una gran familia que cada vez crece más ¡An
ímate a unirte!

Tenemos Grupo de WhatsApp, si necesitas ayuda manda mj

Se amable con los demás y diviértete

Alianza Axolotls
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1207 🔺  (12)|
| ELO Competitive | 1226 🔺  (22)|
| Total Matches | 7 |
| Wins | 3 |
| Losses | 3 |
| Draws | 1 |
| Streak Record | 2 |
| Flagship | 5 |

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
        let timestamps = [1747111786,1731963217,1715000615,1713807091,1711215208,1701111621,1700444103];

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
| ✅ | 2025/05/18 | 19-14 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ❌ | 2024/11/23 | 0-31 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2024/05/11 | 21-39 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ❌ | 2024/04/27 | 0-40 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ↔️ | 2024/03/28 | 4-4 | [The Goonies](https://ws.tsl.rocks/corp/12ebe9e9a1c71d9a15f622670c299d2b2193e3e7a9ef18b1773c8b5965cb68ab/) |
| ✅ | 2023/12/02 | 22-0 | [Spectre](https://ws.tsl.rocks/corp/ef39728c197d3efa64f411ff4f1133ef77ad52a020c826a179d65631df05d442/) |
| ✅ | 2023/11/25 | 30-7 | [We R Bad](https://ws.tsl.rocks/corp/f5cb2c2ba88483bac00f814e32a0d862e4f3a0a10cc614b33ecb9e846766aae0/) |

---
Corporation ID: b12e8f526e8e7365ba188207ac69c12954e4c85faffd6f5f0e189aa2693a90ba

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1747543786"></span>
</div>