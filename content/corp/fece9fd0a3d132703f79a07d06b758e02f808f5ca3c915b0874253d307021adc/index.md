---
title: ​龙的传人分团
description: W:7 L:10 D:0 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 7 **Pluto**
date: 2026-05-04T11:14:34.000Z
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
| ELO Regular | 1164 🔻  (-11)|
| ELO Competitive | 1198 🔻  (-12)|
| Total Matches | 17 |
| Wins | 7 |
| Losses | 10 |
| Draws | 0 |
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
        let timestamps = [1777461274,1776834836,1776451297,1776193115,1775733438,1775037011,1774442538,1773929271,1773151445,1770862450,1770287404,1769641600,1769167256,1768653781,1767623539,1766999494,1766424439];

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
| [Pluto](https://ws.tsl.rocks/corp/9d229bf57a21235859a00a58e0f951d0ee44ac28c8347fbedaf047d434e0bdf1/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/05/04 | 0-7 | [Pluto](https://ws.tsl.rocks/corp/9d229bf57a21235859a00a58e0f951d0ee44ac28c8347fbedaf047d434e0bdf1/) |
| ❌ | 2026/04/27 | 1-5 | [WALRUS](https://ws.tsl.rocks/corp/6a6f8dddc019ed7feb25ee8e5152e3137ab79d3a60b1057a398b7282a0613e6b/) |
| ❌ | 2026/04/22 | 4-6 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ❌ | 2026/04/19 | 3-5 | [Pluto](https://ws.tsl.rocks/corp/9d229bf57a21235859a00a58e0f951d0ee44ac28c8347fbedaf047d434e0bdf1/) |
| ✅ | 2026/04/14 | 4-2 | [启示空间](https://ws.tsl.rocks/corp/92581941aa4cb7fce206e45a4bbd748a9eb5ae0fb8041a08d0fb28546a40d455/) |
| ❌ | 2026/04/06 | 0-3 | [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) |
| ✅ | 2026/03/30 | 2-1 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ❌ | 2026/03/24 | 0-8 | [Spanish Fury](https://ws.tsl.rocks/corp/e16f59927214f5305835d80bd094d95754b0d02e26d6b4e3f6b654688cc48dad/) |
| ❌ | 2026/03/15 | 1-24 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ❌ | 2026/02/17 | 0-22 | [CERBERUS SYSTEM](https://ws.tsl.rocks/corp/84ca35f0e6e24150613333f78670b8bb6e27010a69920dd6ee7cf671087a3976/) |
| ✅ | 2026/02/10 | 5-0 | [New Cydonia](https://ws.tsl.rocks/corp/b718281adaa1eada487783e01caa10707cd7606dc7d6e891ad42919eaaea4449/) |
| ✅ | 2026/02/02 | 9-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2026/01/28 | 19-26 | [万顷稻花](https://ws.tsl.rocks/corp/03386ec0080aee6d7af1877f35b017855540984073077164c8d3ac4203042630/) |
| ✅ | 2026/01/22 | 9-0 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |
| ✅ | 2026/01/10 | 2-0 | [Argos](https://ws.tsl.rocks/corp/5a69decd163742c002619268f3472d1d2603fa6b65d8599403a357e8630cbc83/) |
| ✅ | 2026/01/03 | 6-0 | [红巨星联盟](https://ws.tsl.rocks/corp/872aa66eedf58950cc95e01facf71c38a9bc09e7b4d5dcd1d5af928f490d6632/) |
| ❌ | 2025/12/27 | 1-17 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |

---
Corporation ID: fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1777893274"></span>
</div>