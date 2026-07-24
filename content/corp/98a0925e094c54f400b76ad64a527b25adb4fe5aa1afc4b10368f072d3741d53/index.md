---
title: ​Бестрашный лиги
description: W:3 L:9 D:0 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 11 **Arik**
date: 2025-11-22T00:50:24.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1127 🔻  (-10)|
| ELO Competitive | 1136 🔻  (-9)|
| Total Matches | 12 |
| Wins | 3 |
| Losses | 9 |
| Draws | 0 |
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
        let timestamps = [1763340624,1761566344,1761113030,1721779667,1703831980,1702892939,1701663112,1701017248,1700424867,1699763281,1699234632,1698796191];

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
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [Space Scourge](https://ws.tsl.rocks/corp/04ad48264f0fcb63156d90f6ff6dfd55b1ab9321d56144f671a84c0253bccfc1/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/11/22 | 0-11 | [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) |
| ❌ | 2025/11/01 | 0-13 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ❌ | 2025/10/27 | 0-4 | [\.\- \.\-\.\. \.\-\.\. \.\-](https://ws.tsl.rocks/corp/f71612c31faaae770d61fd8b88f0fc3e0d2c13e7fc8851439ff4c12c0205fda6/) |
| ❌ | 2024/07/29 | 2-10 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ❌ | 2024/01/03 | 0-12 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2023/12/23 | 4-1 | [Space Scourge](https://ws.tsl.rocks/corp/04ad48264f0fcb63156d90f6ff6dfd55b1ab9321d56144f671a84c0253bccfc1/) |
| ❌ | 2023/12/09 | 0-1 | [tropa \(BR\)](https://ws.tsl.rocks/corp/c5b272089230f78a35d3bee9ed1eb0cc2b3a65703f2452b603286e889efa74c9/) |
| ✅ | 2023/12/01 | 3-1 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ✅ | 2023/11/24 | 4-2 | [Space Scourge](https://ws.tsl.rocks/corp/04ad48264f0fcb63156d90f6ff6dfd55b1ab9321d56144f671a84c0253bccfc1/) |
| ❌ | 2023/11/17 | 2-8 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ❌ | 2023/11/11 | 3-4 | [Redd Armada](https://ws.tsl.rocks/corp/a4d427cc014d6a9fa6ea2b1411437bf933b471b6979d6f3f309e96fee2527b5c/) |
| ❌ | 2023/11/05 | 1-5 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |

---
Corporation ID: 98a0925e094c54f400b76ad64a527b25adb4fe5aa1afc4b10368f072d3741d53

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1763772624"></span>
</div>