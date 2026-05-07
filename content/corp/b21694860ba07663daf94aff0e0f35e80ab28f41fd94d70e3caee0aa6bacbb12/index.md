---
title: ​Dominion
description: W:7 L:5 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 12 - 0 **苏维埃联邦**
date: 2026-05-06T04:38:09.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1233 🔺  (6)|
| ELO Competitive | 1274 🔺  (5)|
| Total Matches | 13 |
| Wins | 7 |
| Losses | 5 |
| Draws | 1 |
| Streak | 3 |
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
        let timestamps = [1777610289,1777228436,1777147608,1776768436,1776701141,1776268219,1776175686,1775814858,1775550467,1775037011,1774529260,1774019104,1773216505];

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
| ✅ | 2026/05/06 | 12-0 | [苏维埃联邦](https://ws.tsl.rocks/corp/4b067d39aa68bf846ec24a1af1a1038844cfa78699d1190f74a77b1745e148ac/) |
| ✅ | 2026/05/01 | 1-0 | [新纪元舰队](https://ws.tsl.rocks/corp/d36af8af2f097f561de219867c4bfcc83f266642293429cf3fda159792008277/) |
| ✅ | 2026/04/30 | 11-1 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ❌ | 2026/04/26 | 0-8 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2026/04/25 | 11-0 | [Deathwatch](https://ws.tsl.rocks/corp/721ab2f79e826f2b11873555f03672f2e792d867532b453e179dc4dd9cf24704/) |
| ❌ | 2026/04/20 | 0-3 | [先和先知](https://ws.tsl.rocks/corp/54c8fbf9e85f95a3e28c0b3d2833d49a40758d5340c6de6d6822c6c48aa070eb/) |
| ✅ | 2026/04/19 | 6-2 | [Pluto](https://ws.tsl.rocks/corp/9d229bf57a21235859a00a58e0f951d0ee44ac28c8347fbedaf047d434e0bdf1/) |
| ❌ | 2026/04/15 | 0-13 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2026/04/12 | 0-21 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ✅ | 2026/04/06 | 3-0 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ✅ | 2026/03/31 | 3-0 | [启示空间](https://ws.tsl.rocks/corp/92581941aa4cb7fce206e45a4bbd748a9eb5ae0fb8041a08d0fb28546a40d455/) |
| ↔️ | 2026/03/25 | 2-2 | [星球杯联盟](https://ws.tsl.rocks/corp/ee41cb7209a13177edbf1aefc3f3b01a86ba867bc141ba5adc7789c5a6742977/) |
| ❌ | 2026/03/16 | 0-23 | [Wolf Hunters](https://ws.tsl.rocks/corp/a760896a66a9a99c4645eda30f3f5ac5da834e6b5a6c61da7866cf789ef6ec50/) |

---
Corporation ID: b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1778042289"></span>
</div>