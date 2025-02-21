---
layout: page
title: ​Battle Academy
description: W:5 L:1 D:0 Bonus ❌ 6%
image: ./favicon.png
date: 1731859426
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
Become an elite White Star warrior

Age 16+

Discord <b>mandatory</b>
Code 3A9WHQV

Part of the group known as <color=#c4ff00>SPACE PALS<color=#111100><
color=#111100><b></b></color>
```
### [Discord](https://discord.gg/3A9WHQV)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1253 🔺  (272)|
| ELO Competitive | 1260 🔺  (396)|
| Total Matches | 6 |
| Wins | 5 |
| Losses | 1 |
| Draws | 0 |
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
        let timestamps = [1731427426,1729859099,1716623612,1714279399,1713065249,1711434257];

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
| ✅ | 2024/11/17 | 25-1 | [DeutschlandGmbH](https://ws.tsl.rocks/corp/7f4550924e4740a47b7d66c9ddf38d65c37590507caab29eecc74f81a4ae2895/) |
| ❌ | 2024/10/30 | 8-15 | [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) |
| ✅ | 2024/05/30 | 27-0 | [星海扬帆](https://ws.tsl.rocks/corp/9cf2d9a2c07a0b8030f9a8275f9ebd3973759c2b60bed95ccb9a3f152aa0b1e4/) |
| ✅ | 2024/05/03 | 28-0 | [СНГ — РОССИЯ](https://ws.tsl.rocks/corp/075394144fa4e771dc8358886dc461b0ed87d948b46e5d817d29296adf2f11f2/) |
| ✅ | 2024/04/19 | 22-0 | [Aegis Shield](https://ws.tsl.rocks/corp/0c9788075ccdc94322bb96f7d98b4a8df010615893980ab0b4e5b7a987b13732/) |
| ✅ | 2024/03/31 | 12-0 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |

---
Corporation ID: a4e315e22ea2a592f43efe95a9e53ab2cdbd9f0dc733c9fdde20079d8fabaddd

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>