---
layout: page
title: ​第五星际
description: W:3 L:2 D:0 Bonus ❌ 4%
image: ./favicon.png
date: 1711200115
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
本团秉承共产主义原则，互帮互助，欢迎各位加入。
<color=red>本团为共产星际分团
常驻可以加群免费领神器
请不要捐旗舰！
本团为次活跃分团，活跃玩家请移步第四星际不常活跃玩家请移步第六，第七星际
<color=yellow>QQ群：946597244
本团属于九团公约成员
```
### Whitestar Bonus ❌ 4%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1216 🔺  (397)|
| ELO Competitive | 1217 🔺  (530)|
| Total Matches | 5 |
| Wins | 3 |
| Losses | 2 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 2 |
| Flagship | 2 |

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
        let timestamps = [1710768115,1710077333,1708959855,1708481777,1708080307];

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
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
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
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
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
| ✅ | 2024/03/23 | 4-0 | [CCCP](https://ws.tsl.rocks/corp/34cd422237fc59472ea900588e5416892c4cceeae033e28f8352b61524a92ac7/) |
| ✅ | 2024/03/15 | 6-0 | [第四星际](https://ws.tsl.rocks/corp/42d38d5f95c493cb1822f0c89a5366e532a9dc30c0019e03cf7ddd280bf55040/) |
| ❌ | 2024/03/02 | 0-23 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ❌ | 2024/02/26 | 2-3 | [🌪TORNADO ](https://ws.tsl.rocks/corp/df15d02d32c67d60995e68d6c4197c23b340a0a985f04280563d8d07bd4536fa/) |
| ✅ | 2024/02/21 | 29-0 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |

---
Corporation ID: 8f0d25fe4c802f32f4d3d4ad1a84583c5ae98e4a788a1fa260ef9bd70268818b

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>