---
title: ​Spiritic Beacon
description: W:5 L:4 D:0 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 8 **ES Gaming**
date: 2024-02-12T22:12:27.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
It's official branch of PAndORe Corp., more information in discord. S
ince 20 lvl - old membership, since 35 lvl - officer's membership (ex
cept 1st twenty members)
```
<br>

### [Discord](https://discord.gg/https://discord.com/invite/sdxrxgrEqQ)
### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1203 🔻  (-15)|
| ELO Competitive | 1209 🔻  (-13)|
| Total Matches | 9 |
| Wins | 5 |
| Losses | 4 |
| Draws | 0 |
| Streak Record | 3 |
| Flagship | 3 |

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
        let timestamps = [1707343947,1705740540,1705088133,1704205523,1703276620,1702391036,1701797155,1701235744,1700773196];

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
| [ES Gaming](https://ws.tsl.rocks/corp/1bbc4390e9fa60fe312b23c8fa8d8f9eb499307607a4c3304e33bd05bd58f981/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/02/12 | 0-8 | [ES Gaming](https://ws.tsl.rocks/corp/1bbc4390e9fa60fe312b23c8fa8d8f9eb499307607a4c3304e33bd05bd58f981/) |
| ❌ | 2024/01/25 | 3-7 | [德意志第三帝国阿尔法分部](https://ws.tsl.rocks/corp/83f745abaa8bed335f0cba2f66fdbafa4b226d40d8ad145db66795d7c051fb60/) |
| ✅ | 2024/01/17 | 4-3 | [星海扬帆](https://ws.tsl.rocks/corp/9cf2d9a2c07a0b8030f9a8275f9ebd3973759c2b60bed95ccb9a3f152aa0b1e4/) |
| ❌ | 2024/01/07 | 9-11 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2023/12/27 | 9-1 | [Br Stark Corps](https://ws.tsl.rocks/corp/bb363d47e9cd8710d6808f6dcc2d270bdf33614e63ea6e0943bb739cde625f27/) |
| ❌ | 2023/12/17 | 5-6 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ✅ | 2023/12/10 | 4-0 | [ES Gaming](https://ws.tsl.rocks/corp/1bbc4390e9fa60fe312b23c8fa8d8f9eb499307607a4c3304e33bd05bd58f981/) |
| ✅ | 2023/12/04 | 5-0 | [StalkerUA](https://ws.tsl.rocks/corp/751e52efe068ef78a43ff5bb0a112ab56cd181cbf880eb7c235398fe10225e0f/) |
| ✅ | 2023/11/28 | 6-0 | [mijael siuuuuuu](https://ws.tsl.rocks/corp/45ca23a78c96de3dd53a33f7c9f029b7dc5edf0fb7f15e5d46f1893c68d28334/) |

---
Corporation ID: 5167772c02384f567373d65a76da8399c74f305fcc5f228903614e8069445d2a

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1707775947"></span>
</div>