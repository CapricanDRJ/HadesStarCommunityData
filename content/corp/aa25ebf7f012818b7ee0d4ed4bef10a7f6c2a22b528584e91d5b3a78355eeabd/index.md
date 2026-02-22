---
title: ​星际造梦
description: W:6 L:6 D:1 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 31 **Новый Мир**
date: 2025-09-10T11:51:29.000Z
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
| ELO Regular | 1215 🔻  (-14)|
| ELO Competitive | 1235 🔻  (-14)|
| Total Matches | 13 |
| Wins | 6 |
| Losses | 6 |
| Draws | 1 |
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
        let timestamps = [1757073089,1753872218,1752060907,1747100670,1746267564,1745639442,1744714194,1743691239,1742473773,1741871553,1741438548,1741345383,1740895556];

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
| ❌ | 2025/09/10 | 0-31 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ↔️ | 2025/08/04 | 3-3 | [Grand Impire](https://ws.tsl.rocks/corp/951e0a6117eb48cf35f1928c5445d7d509d927d4c6883bcd5b5384430c2e206b/) |
| ❌ | 2025/07/14 | 3-13 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/05/18 | 17-1 | [TheDuckeanFlow](https://ws.tsl.rocks/corp/bddfa85ac0ddba1389b3ce0fede44f78e7622f0867ce5d98f55344c6d443f9a1/) |
| ✅ | 2025/05/08 | 5-0 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ❌ | 2025/05/01 | 3-16 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/41cdea87f9ff2286c6ced9f1d66d894b6b8bd6e3aecf795d77da2377b487bf07/) |
| ❌ | 2025/04/20 | 4-5 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/04/08 | 8-0 | [雪月永恒](https://ws.tsl.rocks/corp/3b30781263716daadc217687009247bd0acb28c7eb4a8ebfe37daa11142622c2/) |
| ✅ | 2025/03/25 | 7-4 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/03/18 | 16-3 | [GN星际联合](https://ws.tsl.rocks/corp/5c5e3fb05b422a65fb5ccf8f812dfe45d596f644d8a79d01a5889c9d476f20a7/) |
| ❌ | 2025/03/13 | 2-17 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/03/12 | 6-3 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2025/03/07 | 0-27 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |

---
Corporation ID: aa25ebf7f012818b7ee0d4ed4bef10a7f6c2a22b528584e91d5b3a78355eeabd

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1757505089"></span>
</div>