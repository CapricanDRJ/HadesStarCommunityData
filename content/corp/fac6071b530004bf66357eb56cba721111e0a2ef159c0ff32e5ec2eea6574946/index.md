---
title: ​休闲、红、蓝、白养老集团。
description: W:9 L:3 D:2 Bonus ✅ 32%
image: ./favicon.png
Summary: ✅ 15 - 0 **YU\-GI\-OH**
date: 2026-09-02T04:29:17.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 32%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1274 🔺  (14)|
| ELO Competitive | 1318 🔺  (13)|
| Total Matches | 14 |
| Wins | 9 |
| Losses | 3 |
| Draws | 2 |
| Streak | 3 |
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
        let timestamps = [1787891357,1787736355,1787439728,1787207193,1786978255,1786714136,1786544695,1786241251,1786076911,1785795119,1785622066,1785326721,1785156068,1784706343];

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
| ✅ | 2026/09/02 | 15-0 | [YU\-GI\-OH](https://ws.tsl.rocks/corp/28f250641a870cb4c3bc77c2320c4892ec2c7006422ca4530475e1f3f372786a/) |
| ✅ | 2026/08/31 | 5-0 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ✅ | 2026/08/27 | 11-3 | [Cerulean Galaxy](https://ws.tsl.rocks/corp/98c9053a60d3bc0613bf07b80ddef20dc769971ff9a51f1a9b47741744c915aa/) |
| ❌ | 2026/08/25 | 0-1 | [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) |
| ✅ | 2026/08/22 | 12-0 | [新星帝国属－涵空阁集团](https://ws.tsl.rocks/corp/dc506c25c6cee7986f8f1ee7474f9cdbaa70ecd1c627f8f89cb0a478e66d087c/) |
| ❌ | 2026/08/19 | 0-19 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ✅ | 2026/08/17 | 3-2 | [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) |
| ↔️ | 2026/08/14 | 1-1 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2026/08/12 | 0-6 | [jatnniel 团队](https://ws.tsl.rocks/corp/fb2a90ff4c918e808029246b88573a0b283bd3b67f1831aaab89f03720e9ebb2/) |
| ✅ | 2026/08/08 | 3-1 | [Knights of Solo](https://ws.tsl.rocks/corp/ca874c061d1c3941f5931bd0b184d1c32396462f0fad4751e2ae5a9b15b188e5/) |
| ✅ | 2026/08/06 | 10-0 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ↔️ | 2026/08/03 | 2-2 | [Mondluftschiff](https://ws.tsl.rocks/corp/c4a20b57732f04c435c2003581298d68f4600ec3813311912cc74115e566fe53/) |
| ✅ | 2026/08/01 | 10-0 | [请输入文本](https://ws.tsl.rocks/corp/dd9d972d90241532a87c021497f2f1bcab86dcc1c8ef7bcf718730bba133f5fb/) |
| ✅ | 2026/07/27 | 5-0 | [德意志阿尔法帝国](https://ws.tsl.rocks/corp/b67013faae09f023e7b6100ac659b8f6d1793c27ff7e42a5dfc6494fd64bf2c4/) |

---
Corporation ID: fac6071b530004bf66357eb56cba721111e0a2ef159c0ff32e5ec2eea6574946

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1788323357"></span>
</div>