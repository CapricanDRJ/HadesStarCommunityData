---
title: ​ༀᅗBAR ESTELARᅗༀ
description: W:5 L:12 D:0 Bonus ✅ 34%
image: ./favicon.png
Summary: ✅ 13 - 1 **莱恩星际**
date: 2026-07-20T21:47:13.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Un grupo de locos amigos internacionales que comparten el gusto a la 
bebida y a la cháchara XD 
Aperturado el día (21/09/22)
Disfruta Nuestro De Humilde Bar  😎🤙🍻🍻
```
<br>

### Whitestar Bonus ✅ 34%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1178 🔺  (16)|
| ELO Competitive | 1212 🔺  (15)|
| Total Matches | 17 |
| Wins | 5 |
| Losses | 12 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 2 |
| Flagship | 5 |

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
        let timestamps = [1784152033,1783701690,1783167224,1782511095,1780724951,1721196977,1720461240,1719882723,1719248361,1718795480,1718337942,1717610294,1717607288,1704242492,1701895437,1701138068,1699737735];

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
| ✅ | 2026/07/20 | 13-1 | [莱恩星际](https://ws.tsl.rocks/corp/7510b8b55ddb419c89f0f789119f72cddd83680fb3508b84b8a32d75e475b40d/) |
| ✅ | 2026/07/15 | 12-1 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2026/07/09 | 3-14 | [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) |
| ✅ | 2026/07/01 | 13-0 | [testims](https://ws.tsl.rocks/corp/13144f142515cea2572719680fc6a58a02588472564adc27d102a47b84eff3fc/) |
| ✅ | 2026/06/11 | 7-3 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ❌ | 2024/07/22 | 0-24 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ❌ | 2024/07/13 | 0-28 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2024/07/07 | 2-25 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/06/29 | 1-35 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ❌ | 2024/06/24 | 0-26 | [NoweUkladyII](https://ws.tsl.rocks/corp/9d1a50e524f7abc0623ab7e010875dfcce9e5682a06ebc4aee47e972d258493c/) |
| ❌ | 2024/06/19 | 3-31 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2024/06/10 | 0-31 | [Últimafronteira](https://ws.tsl.rocks/corp/27e96f432a078f197bb5e4c34480ccabc05a9ee48e7bb04d95288fda15e94d3c/) |
| ✅ | 2024/06/10 | 13-0 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2024/01/08 | 0-42 | [Lights Off](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) |
| ❌ | 2023/12/11 | 0-20 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2023/12/03 | 3-4 | [Seila](https://ws.tsl.rocks/corp/8749ed87cb9e85c88599f3bb9f9159e00561229eb1690cb36d565a054638cc52/) |
| ❌ | 2023/11/16 | 3-12 | [death squadron](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |

---
Corporation ID: 874716e0cba92e65a541f6751246b0fa1d503d7ee2b00dcde1ab424af30190be

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1784584033"></span>
</div>