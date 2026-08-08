---
title: ​Blackwater co\.
description: W:0 L:3 D:1 Bonus ❌ 3%
image: ./favicon.png
Summary: ❌ 0 - 9 **中央山脈礦工勞動部**
date: 2025-06-03T12:23:23.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
confederazione rivolta a player attivi disposti a collaborare. I play
er inattivi verranno espulsi.
3g+ inattività o nessuna stella rossa svolta=kick
miglior piazzamento in classifica: 69esimi
```
<br>

### Whitestar Bonus ❌ 3%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1157 🔻  (-14)|
| ELO Competitive | 1159 🔻  (-13)|
| Total Matches | 4 |
| Wins | 0 |
| Losses | 3 |
| Draws | 1 |
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
        let timestamps = [1748521403,1747458635,1718149733,1699790876];

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
| ❌ | 2025/06/03 | 0-9 | [中央山脈礦工勞動部](https://ws.tsl.rocks/corp/c76c16c18a4d8c5a2d28b213f59db208dec670f2f230700e69fd411c8f962ea2/) |
| ❌ | 2025/05/22 | 0-7 | [Bow Down](https://ws.tsl.rocks/corp/402b459520fde5ca47dbb493e4f75201464ab1d46cc1b8dad2f321217265bef4/) |
| ❌ | 2024/06/16 | 0-18 | [德意志阿尔法帝国](https://ws.tsl.rocks/corp/b67013faae09f023e7b6100ac659b8f6d1793c27ff7e42a5dfc6494fd64bf2c4/) |
| ↔️ | 2023/11/17 | 0-0 | [Rzeczypospolita](https://ws.tsl.rocks/corp/669a044e2d8e476c293b7bdc70511065849ca26356c1f3062cc7570251459d6b/) |

---
Corporation ID: 794eaa5b6c65cddf466d163571a24c2d603a005b4fad405a1237c19ed68edd7d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1748953403"></span>
</div>