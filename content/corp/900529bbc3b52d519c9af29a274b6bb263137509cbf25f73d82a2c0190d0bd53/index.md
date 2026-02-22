---
title: ​民主团
description: W:12 L:3 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 1 - 0 **Alicext**
date: 2026-02-20T05:55:47.000Z
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
| ELO Regular | 1304 🔺  (11)|
| ELO Competitive | 1351 🔺  (16)|
| Total Matches | 15 |
| Wins | 12 |
| Losses | 3 |
| Draws | 0 |
| Streak | 5 |
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
        let timestamps = [1771134947,1771025120,1770538573,1770033235,1769744127,1769563373,1769264621,1769093348,1768805817,1768661295,1768292634,1768228938,1767701947,1767250651,1766775453];

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
| ✅ | 2026/02/20 | 1-0 | [Alicext](https://ws.tsl.rocks/corp/1e7b1b18163dc23589292e58e5f2ebfbc88a0cbe9ee3f3209ecce0c0da92ea7b/) |
| ✅ | 2026/02/18 | 5-0 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ✅ | 2026/02/13 | 22-0 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ✅ | 2026/02/07 | 6-3 | [jatnniel 团队](https://ws.tsl.rocks/corp/fb2a90ff4c918e808029246b88573a0b283bd3b67f1831aaab89f03720e9ebb2/) |
| ✅ | 2026/02/04 | 3-1 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2026/02/02 | 2-25 | [红色太阳](https://ws.tsl.rocks/corp/8090de72c41a6255b4ffbcbfc8d591d6972c059836eabe4f57ce55a28dfb41fb/) |
| ❌ | 2026/01/29 | 1-3 | [Новички](https://ws.tsl.rocks/corp/972be02f6d0b8abd990454b2ae98e12181668ba96252a4747a4899744a7d9dc6/) |
| ✅ | 2026/01/27 | 4-0 | [Darknova](https://ws.tsl.rocks/corp/2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7/) |
| ✅ | 2026/01/24 | 4-0 | [Argos](https://ws.tsl.rocks/corp/5a69decd163742c002619268f3472d1d2603fa6b65d8599403a357e8630cbc83/) |
| ✅ | 2026/01/22 | 3-0 | [Aeon](https://ws.tsl.rocks/corp/5e4b3d6d6f08dee95abbb170211af935c564afdbc3039ee0a6f333070688724e/) |
| ❌ | 2026/01/18 | 1-8 | [Spanish Fury](https://ws.tsl.rocks/corp/e16f59927214f5305835d80bd094d95754b0d02e26d6b4e3f6b654688cc48dad/) |
| ✅ | 2026/01/17 | 7-0 | [ua online](https://ws.tsl.rocks/corp/44b08e73701f4c4f27862a999db8466f21cb2d041006906eb9d101fe30bdbc91/) |
| ✅ | 2026/01/11 | 3-0 | [Outcasts](https://ws.tsl.rocks/corp/a5d77400f5f6762d9c869428160b2f0bf115c23cba5a694f6c8e7b9cd71c2bf0/) |
| ✅ | 2026/01/06 | 15-6 | [亚斯特星际集团公司](https://ws.tsl.rocks/corp/b0bc70120c9a3105f31a71a9177edfb73785d4b86fb76655d1fd3acef0b7fcc2/) |
| ✅ | 2025/12/31 | 19-0 | [Popular Corp\.](https://ws.tsl.rocks/corp/f52c14cb0761f008a0ffe2269579b49b90339ee2576f730c5b532a244c2eedac/) |

---
Corporation ID: 900529bbc3b52d519c9af29a274b6bb263137509cbf25f73d82a2c0190d0bd53

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771566947"></span>
</div>