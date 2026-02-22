---
title: ​边缘世界
description: W:3 L:2 D:2 Bonus ❌ 4%
image: ./favicon.png
Summary: ❌ 3 - 14 **中国星际联盟**
date: 2024-02-02T12:19:07.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
本集团属于边际的文明分团，隶属于元素联邦集团，集团内玩家需和谐共处，神器和矿场集团内部交易优惠，白星尽力而为，详情看元素联邦介绍（5级集团
）                                                   
```
<br>

### Whitestar Bonus ❌ 4%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1210 🔻  (-14)|
| ELO Competitive | 1211 🔻  (-14)|
| Total Matches | 7 |
| Wins | 3 |
| Losses | 2 |
| Draws | 2 |
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
        let timestamps = [1706444347,1702528990,1701230937,1700235814,1699791536,1699295024,1698748991];

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
| ❌ | 2024/02/02 | 3-14 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ↔️ | 2023/12/19 | 3-3 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2023/12/04 | 0-14 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ✅ | 2023/11/22 | 11-0 | [遨游星空 kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) |
| ✅ | 2023/11/17 | 6-0 | [Kiith Trollani](https://ws.tsl.rocks/corp/78a837211011c4fd9eed5c7d28f353af28998f685739dac265b7e2d27861b601/) |
| ✅ | 2023/11/11 | 7-0 | [ToC](https://ws.tsl.rocks/corp/72dc408527c06786fa45851f432da731fd63c063d51f4a180b9ae24216e41765/) |
| ↔️ | 2023/11/05 | 11-11 | [萌新港](https://ws.tsl.rocks/corp/7b4125f2900eb0184722a2a53528bb21dd165ea3612dfa8de6ca0ebf2aea0861/) |

---
Corporation ID: 6a0c2b263b0bfabc564979bce02c28c80aae497654fc10637ceb36d5447f6365

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1706876347"></span>
</div>