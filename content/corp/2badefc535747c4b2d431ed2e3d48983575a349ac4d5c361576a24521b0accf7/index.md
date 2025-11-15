---
title: ​Darknova
description: W:6 L:3 D:0 Bonus ✅ 32%
image: ./favicon.png
Summary: ✅ 5 - 0 **Star War School**
date: 2025-11-13T09:09:53.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<b><color=#FFDD88><size=90> Versailles Federation</size></color>

<color=#FFE9B7><size=75> Burn it to the ashes</size>
    -hosted by ShadowSun

 RS: 1-6

 WS: Thursdays

 Discord:pxSK3vbe</color></b>
```
<br>

### Whitestar Bonus ✅ 32%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1235 🔺  (8)|
| ELO Competitive | 1246 🔺  (9)|
| Total Matches | 9 |
| Wins | 6 |
| Losses | 3 |
| Draws | 0 |
| Streak Record | 3 |
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
        let timestamps = [1762592993,1761879931,1761278509,1760740563,1760049489,1759435334,1758837656,1758254769,1698938027];

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
| ✅ | 2025/11/13 | 5-0 | [Star War School](https://ws.tsl.rocks/corp/bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54/) |
| ❌ | 2025/11/05 | 0-18 | [Stargate Sg7](https://ws.tsl.rocks/corp/f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81/) |
| ✅ | 2025/10/29 | 6-3 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/10/22 | 9-0 | [Epic Gamer Fed](https://ws.tsl.rocks/corp/55c90f6692f8206e290600724b349c2b9c63a31c6f15f3303c8831583a4462ef/) |
| ❌ | 2025/10/14 | 0-11 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ✅ | 2025/10/07 | 11-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2025/09/30 | 6-0 | [Red Star Order](https://ws.tsl.rocks/corp/e7ddc9a9ee70dc16ae297eae8cf6846d40ad548753203d079480d2abee66d9a7/) |
| ✅ | 2025/09/24 | 6-0 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ❌ | 2023/11/07 | 0-9 | [Призрачный Путь](https://ws.tsl.rocks/corp/c4cb268c3665e9b1d2250f72fb83c73e293536df6581cc087f195a049ca15528/) |

---
Corporation ID: 2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1763024993"></span>
</div>