---
title: ​The Gladiators
description: W:1 L:5 D:0 Bonus ❌ 3%
image: ./favicon.png
Summary: ❌ 0 - 19 **Starships**
date: 2025-03-17T00:14:07.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Discord: cRMhmXfctC
https://discord.gg/cRMhmXfctC
Destroy or be destroyed. This is a place where only the strong surviv
e
White star every 2 weeks
```
<br>

### Whitestar Bonus ❌ 3%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1145 🔻  (1201)|
| ELO Competitive | 1146 🔻  (1328)|
| Total Matches | 6 |
| Wins | 1 |
| Losses | 5 |
| Draws | 0 |
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
        let timestamps = [1741738447,1741301394,1730506986,1709826432,1707569106,1707064428];

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
| ❌ | 2025/03/17 | 0-19 | [Starships](https://ws.tsl.rocks/corp/b75dd27a38d238b4d9cd11637820796c7df082496dc05190e61fc675f71b05db/) |
| ❌ | 2025/03/11 | 0-3 | [Azennor inc\.](https://ws.tsl.rocks/corp/b20eec58c56fcfae87efc51986817da9dca387c1c97cdf722432dfdf0e418050/) |
| ❌ | 2024/11/07 | 0-12 | [哈迪斯之星，启动！](https://ws.tsl.rocks/corp/bc58305a02f7392f340d26a3becd4784de7360dd5264df9e85d73116b93496d8/) |
| ❌ | 2024/03/12 | 0-3 | [Armored Union ](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ❌ | 2024/02/15 | 2-3 | [Consortium](https://ws.tsl.rocks/corp/2d28d460f549084fa8f440de8a4da35728d64c0bb2f1a8ac30e07282c5210d89/) |
| ✅ | 2024/02/09 | 2-0 | [Village of Evil](https://ws.tsl.rocks/corp/9c5d7dfe1198273dd21163553e3154778f448ae7355825ae1db7ceba7236744f/) |

---
Corporation ID: 4aa9000c49c8a988df27932c5a5840800303bdb713ef35f9d207a4da7f6b0337

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1742170447"></span>
</div>