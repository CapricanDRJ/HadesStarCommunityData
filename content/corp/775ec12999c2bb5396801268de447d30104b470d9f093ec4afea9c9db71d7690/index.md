---
title: ​USSR
description: W:3 L:4 D:0 Bonus ❌ 11%
image: ./favicon.png
Summary: ❌ 0 - 39 **Critical Mass**
date: 2026-01-27T16:54:21.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=red>• Ежедневные походы на КЗ 9-11</color>
<color=white>• Еженедельные походы на БЗ</color>
<color=purple>• Чат в TG</color>
```
<br>

### [Discord](https://discord.gg/tFTT3b8H)
### Whitestar Bonus ❌ 11%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1195 🔻  (-11)|
| ELO Competitive | 1208 🔻  (-7)|
| Total Matches | 7 |
| Wins | 3 |
| Losses | 4 |
| Draws | 0 |
| Flagship | 8 |

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
        let timestamps = [1769100861,1745294469,1701541393,1701042800,1699830922,1699250854,1698685261];

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
| ❌ | 2026/01/27 | 0-39 | [Critical Mass](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ✅ | 2025/04/27 | 33-22 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2023/12/07 | 17-34 | [ItBurnsWhenIEMP](https://ws.tsl.rocks/corp/1549586a8e69d1a5b1245b5cf33b7beb241b2343c07d1d800e5a2c4026c06438/) |
| ✅ | 2023/12/01 | 15-8 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |
| ❌ | 2023/11/17 | 7-30 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2023/11/11 | 11-3 | [Anla'Shok](https://ws.tsl.rocks/corp/ee2d5a60dee46a98f5178e2807099ebca3c64db7a1fd052df34812d6d88e52a1/) |
| ❌ | 2023/11/04 | 0-31 | [TROLL SQUAD](https://ws.tsl.rocks/corp/91daecf0251a6a1eee3d92820695d021c1f949e194cc5003d7cdebe59ef4502e/) |

---
Corporation ID: 775ec12999c2bb5396801268de447d30104b470d9f093ec4afea9c9db71d7690

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1769532861"></span>
</div>