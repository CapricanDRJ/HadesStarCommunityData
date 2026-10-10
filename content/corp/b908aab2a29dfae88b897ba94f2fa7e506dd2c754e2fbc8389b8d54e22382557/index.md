---
title: ​甜甜圈
description: W:8 L:4 D:0 Bonus ✅ 34%
image: ./favicon.png
Summary: ❌ 1 - 13 **Galactic Empire**
date: 2026-10-10T04:35:19.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 34%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1252 🔻  (-14)|
| ELO Competitive | 1255 🔻  (-14)|
| Total Matches | 12 |
| Wins | 8 |
| Losses | 4 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1791174919,1790825774,1790728442,1790387774,1790222856,1789747008,1789308428,1788866461,1788434110,1787997644,1787547283,1787114961];

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
| [ParalleL](https://ws.tsl.rocks/corp/b0d15e4f5192e204134729b5923bfc506025455da73f5f107bddc44e5d673b22/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/10/10 | 1-13 | [Galactic Empire](https://ws.tsl.rocks/corp/72dcb83d090873cff1d27d191205e6a484c8c5b057f4b55f138e631f33037248/) |
| ✅ | 2026/10/06 | 1-0 | [苏维埃联邦](https://ws.tsl.rocks/corp/4b067d39aa68bf846ec24a1af1a1038844cfa78699d1190f74a77b1745e148ac/) |
| ✅ | 2026/10/05 | 11-1 | [ParalleL](https://ws.tsl.rocks/corp/b0d15e4f5192e204134729b5923bfc506025455da73f5f107bddc44e5d673b22/) |
| ✅ | 2026/10/01 | 6-0 | [GN星际联合](https://ws.tsl.rocks/corp/5c5e3fb05b422a65fb5ccf8f812dfe45d596f644d8a79d01a5889c9d476f20a7/) |
| ✅ | 2026/09/29 | 9-0 | [Space Catz](https://ws.tsl.rocks/corp/41f8b97252e726479ff8185f5f3be080a7d6b63477dd248727e2a7355c9f3807/) |
| ❌ | 2026/09/23 | 0-8 | [无人深空](https://ws.tsl.rocks/corp/932e5b765751f58f44617f33980535a067e92530b0243b0a983daa4f45dc03fc/) |
| ✅ | 2026/09/18 | 7-0 | [ParalleL](https://ws.tsl.rocks/corp/b0d15e4f5192e204134729b5923bfc506025455da73f5f107bddc44e5d673b22/) |
| ❌ | 2026/09/13 | 0-3 | [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) |
| ✅ | 2026/09/08 | 4-0 | [中国星系集团](https://ws.tsl.rocks/corp/8521b52d3ab48b0685dcdae05e757436301fff9ecc1b4e9e96d1dba5736f894a/) |
| ✅ | 2026/09/03 | 2-0 | [\+SATELLITE•卫星联\+](https://ws.tsl.rocks/corp/0435e7afc53ca549df7205484bd692be15c4e4773b36a0cdebae12a40149efc9/) |
| ❌ | 2026/08/29 | 2-3 | [Company W](https://ws.tsl.rocks/corp/d9a6677260fdbebe20058df78d864c339b82cdb9b77806de44c122df274e8101/) |
| ✅ | 2026/08/24 | 5-0 | [莱恩星际](https://ws.tsl.rocks/corp/7510b8b55ddb419c89f0f789119f72cddd83680fb3508b84b8a32d75e475b40d/) |

---
Corporation ID: b908aab2a29dfae88b897ba94f2fa7e506dd2c754e2fbc8389b8d54e22382557

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1791606919"></span>
</div>