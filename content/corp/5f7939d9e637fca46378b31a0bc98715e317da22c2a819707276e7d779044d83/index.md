---
title: ​Warriors
description: W:3 L:1 D:0 Bonus ❌ 4%
image: ./favicon.png
Summary: ✅ 1 - 0 **Uniones**
date: 2024-02-13T21:44:44.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=#00a6ca><size=120>WARRIORS</size><br><color=#01a6ca>Open to ev
eryone<br>Get a deplomacy station to get help<br><color=#00a6ca><size
=100>Come one come all</size>
```
<br>

### Whitestar Bonus ❌ 4%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1228 🔺  (14)|
| ELO Competitive | 1228 🔺  (14)|
| Total Matches | 4 |
| Wins | 3 |
| Losses | 1 |
| Draws | 0 |
| Streak Record | 2 |
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
        let timestamps = [1707428684,1700968856,1700511122,1699926469];

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
| ✅ | 2024/02/13 | 1-0 | [Uniones](https://ws.tsl.rocks/corp/9e4f39f6ed94be4c0af3fd6132fb2b757679ee938f7d6faa2ca50fea9f90f443/) |
| ❌ | 2023/12/01 | 2-9 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2023/11/25 | 4-2 | [callisto corp](https://ws.tsl.rocks/corp/a75ef3e420ea17e01335c1de142e11437fa111b58e955d4fb2399eb359bf204c/) |
| ✅ | 2023/11/19 | 1-0 | [Two kitties](https://ws.tsl.rocks/corp/415346ff6e66cb31073d6c917b311d221638ac2dcb73e3b21054880ba1fe6416/) |

---
Corporation ID: 5f7939d9e637fca46378b31a0bc98715e317da22c2a819707276e7d779044d83

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1707860684"></span>
</div>