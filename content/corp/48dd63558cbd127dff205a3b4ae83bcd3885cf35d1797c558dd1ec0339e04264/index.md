---
title: ​Solar Corp
description: W:11 L:2 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 17 - 1 **龙的传人分团**
date: 2025-12-27T17:27:19.000Z
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
| ELO Regular | 1309 🔺  (11)|
| ELO Competitive | 1316 🔺  (11)|
| Total Matches | 13 |
| Wins | 11 |
| Losses | 2 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 5 |
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
        let timestamps = [1766424439,1765963839,1765483726,1764451016,1763988880,1763522589,1763066208,1762458393,1761849976,1761072346,1760049489,1758940478,1758375327];

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
| ✅ | 2025/12/27 | 17-1 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ✅ | 2025/12/22 | 19-0 | [Gaters](https://ws.tsl.rocks/corp/fac0e8b8cffd044563ab5df71f1cc417f9267afb61e865a4dafa19713ae77394/) |
| ❌ | 2025/12/16 | 4-16 | [Crucible](https://ws.tsl.rocks/corp/778178a7255ba7f4c8e2fdeb41fb777fb90ecf6e84a3ba79431f055f869521c6/) |
| ✅ | 2025/12/04 | 17-0 | [Star War School](https://ws.tsl.rocks/corp/bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54/) |
| ✅ | 2025/11/29 | 14-3 | [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) |
| ✅ | 2025/11/24 | 8-0 | [The Turtles](https://ws.tsl.rocks/corp/91b979bfc3c7fe8f6e58d58bd2feac8f8deba5a5bfb6c9ea60885c2b37fb2a0a/) |
| ✅ | 2025/11/18 | 17-0 | [Ouacearean](https://ws.tsl.rocks/corp/fa8806a0316f6a4eff4477d2dd0e3f3f556d3234e4c9c30444a6e20393e0199f/) |
| ❌ | 2025/11/11 | 2-9 | [Stargate Sg7](https://ws.tsl.rocks/corp/f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81/) |
| ✅ | 2025/11/04 | 11-2 | [U\.N\.S\.C](https://ws.tsl.rocks/corp/70dea9b99e388e4ecc15b483cde11adecf8126fc5fd8976564ee112bd466c1ac/) |
| ✅ | 2025/10/26 | 14-0 | [The Confederacy](https://ws.tsl.rocks/corp/8dc2bdc63e47ab6f518cb6e87ad697b1f120db8119441bf8a4038e711c206340/) |
| ✅ | 2025/10/14 | 11-0 | [Darknova](https://ws.tsl.rocks/corp/2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7/) |
| ✅ | 2025/10/02 | 11-1 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/09/25 | 10-0 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |

---
Corporation ID: 48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1766856439"></span>
</div>