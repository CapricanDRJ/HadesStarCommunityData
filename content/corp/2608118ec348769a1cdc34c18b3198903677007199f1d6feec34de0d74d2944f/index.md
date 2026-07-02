---
title: ​Sector7
description: W:0 L:4 D:1 Bonus ❌ 2%
image: ./favicon.png
Summary: ❌ 0 - 16 **德意志第三帝国BATA分部**
date: 2024-02-26T13:22:47.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Req: English Speaking, Login Daily & Have Fun.
```
<br>

### Whitestar Bonus ❌ 2%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1144 🔻  (-13)|
| ELO Competitive | 1144 🔻  (-13)|
| Total Matches | 5 |
| Wins | 0 |
| Losses | 4 |
| Draws | 1 |
| Flagship | 1 |

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
        let timestamps = [1708521767,1705854143,1705340564,1704670127,1704231673];

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
| ❌ | 2024/02/26 | 0-16 | [德意志第三帝国BATA分部](https://ws.tsl.rocks/corp/3bd6b2c1691e410f94a5040b7303128f1a56eb5a26308033de3c4e279d748208/) |
| ❌ | 2024/01/26 | 1-7 | [koalition](https://ws.tsl.rocks/corp/68d721684ab83df28cba0a58c608e5dd3c58df79369abffa67da4e8956ef2695/) |
| ❌ | 2024/01/20 | 0-9 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ↔️ | 2024/01/12 | 3-3 | [Core Systems](https://ws.tsl.rocks/corp/66dfd39587403b544abf2908638162e60a09ff0dfdfebee6265d41ba2a6ab00a/) |
| ❌ | 2024/01/07 | 2-3 | [Hades Seminary](https://ws.tsl.rocks/corp/a43c0e4701495c28fde3f8c614baa6d54af86ed15d13ff8da3a6266039c5e2a7/) |

---
Corporation ID: 2608118ec348769a1cdc34c18b3198903677007199f1d6feec34de0d74d2944f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1708953767"></span>
</div>