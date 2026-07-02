---
title: ​星球杯联盟
description: W:0 L:5 D:1 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 1 - 8 **Pluto**
date: 2026-04-26T14:02:35.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1131 🔻  (-11)|
| ELO Competitive | 1148 🔻  (-11)|
| Total Matches | 6 |
| Wins | 0 |
| Losses | 5 |
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
        let timestamps = [1776780155,1774019104,1774013695,1771175213,1770726051,1770288005];

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
| ❌ | 2026/04/26 | 1-8 | [Pluto](https://ws.tsl.rocks/corp/9d229bf57a21235859a00a58e0f951d0ee44ac28c8347fbedaf047d434e0bdf1/) |
| ↔️ | 2026/03/25 | 2-2 | [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) |
| ❌ | 2026/03/25 | 0-14 | [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) |
| ❌ | 2026/02/20 | 0-15 | [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) |
| ❌ | 2026/02/15 | 3-10 | [Академия Д](https://ws.tsl.rocks/corp/b1abd18d521db3f91ca83e4b49f5ecc132514e77c54c875dc0d08b977292c470/) |
| ❌ | 2026/02/10 | 7-14 | [Wolf Hunters](https://ws.tsl.rocks/corp/a760896a66a9a99c4645eda30f3f5ac5da834e6b5a6c61da7866cf789ef6ec50/) |

---
Corporation ID: ee41cb7209a13177edbf1aefc3f3b01a86ba867bc141ba5adc7789c5a6742977

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1777212155"></span>
</div>