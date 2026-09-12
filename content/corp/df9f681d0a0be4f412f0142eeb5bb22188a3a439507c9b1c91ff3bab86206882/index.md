---
title: ​盾牌座UY分团
description: W:0 L:3 D:0 Bonus ❌ 4%
image: ./favicon.png
Summary: ❌ 0 - 6 **探索舰队**
date: 2024-02-29T11:01:17.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
欢迎来到盾牌座UY分团
这里将是你在宇宙中最温暖的家
主团盾牌座UY 萌新可以去主团
分团主打白星，培育新人

这里没有黑名单，但希望不要做损害集团和集团成员利益的事情。
我们十分感谢曾经给予我们帮助或支持的同仁与太空中的朋友
无种族歧视，所有成员都会得到尊重！
关于升职：等级三十以上 影响力一千五以上 有白星扫描仪 信用良好 较为活跃升干事 
一叶浮萍归大海为人何处不相逢

欢迎加入
出售6级神器直接外交王子
有事找:老六
团主：姚银晓
```
<br>

### Whitestar Bonus ❌ 4%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1156 🔻  (-16)|
| ELO Competitive | 1158 🔻  (-15)|
| Total Matches | 3 |
| Wins | 0 |
| Losses | 3 |
| Draws | 0 |
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
        let timestamps = [1708772477,1707462634,1702127751];

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
| ❌ | 2024/02/29 | 0-6 | [探索舰队](https://ws.tsl.rocks/corp/c18acd17d6d643817b2bf8f28c2bf82cae881f0dd6d41528c9cfbe3292a7de29/) |
| ❌ | 2024/02/14 | 0-12 | [ЧВК "Котики"](https://ws.tsl.rocks/corp/b770b833fe257bc6accd1bbe82a887971291dd0038f8aa627a47f3ce063265c0/) |
| ❌ | 2023/12/14 | 2-18 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |

---
Corporation ID: df9f681d0a0be4f412f0142eeb5bb22188a3a439507c9b1c91ff3bab86206882

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1709204477"></span>
</div>