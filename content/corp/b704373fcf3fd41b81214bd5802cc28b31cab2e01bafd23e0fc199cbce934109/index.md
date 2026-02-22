---
title: ​pegaso
description: W:0 L:4 D:2 Bonus ❌ 2%
image: ./favicon.png
Summary: ❌ 0 - 9 **探索舰队**
date: 2024-03-15T07:33:17.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
esperanza
```
<br>

### Whitestar Bonus ❌ 2%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1147 🔻  (-13)|
| ELO Competitive | 1173 🔺  (1)|
| Total Matches | 6 |
| Wins | 0 |
| Losses | 4 |
| Draws | 2 |
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
        let timestamps = [1710055997,1710024150,1708278901,1708273559,1707691465,1705940991];

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
| ❌ | 2024/03/15 | 0-9 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ↔️ | 2024/03/14 | 0-0 | [U\.Y\.E\.U\.](https://ws.tsl.rocks/corp/504f779e55c2d1bc5ff35b4540c0bb60421bd8bce70c3eb0caf45fd73915ec86/) |
| ❌ | 2024/02/23 | 0-35 | [心之所向](https://ws.tsl.rocks/corp/0cff5ad4c189142d35a9e17912dd7cda5107d4e3be8843d2cb2dbe5a490991cd/) |
| ❌ | 2024/02/23 | 0-2 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ↔️ | 2024/02/16 | 0-0 | [Quantum Jumpers](https://ws.tsl.rocks/corp/2c5d82b8370a36c30a396c7a1b894f347a4698e2393f9e0d31e9ad6c465e2ae2/) |
| ❌ | 2024/01/27 | 2-4 | [Ukr alliance](https://ws.tsl.rocks/corp/0eb13755b8906344c0af35f3d63b7cc0ecebf80877f327f78b1e40aded41ca7c/) |

---
Corporation ID: b704373fcf3fd41b81214bd5802cc28b31cab2e01bafd23e0fc199cbce934109

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1710487997"></span>
</div>