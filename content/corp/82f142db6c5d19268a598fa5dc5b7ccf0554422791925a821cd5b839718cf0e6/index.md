---
title: ​General
description: W:9 L:18 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ❌ 0 - 12 **亚斯特星际集团公司**
date: 2025-12-03T14:58:36.000Z
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
| ELO Regular | 1171 🔻  (-14)|
| ELO Competitive | 1241 🔺  (21)|
| Total Matches | 28 |
| Wins | 9 |
| Losses | 18 |
| Draws | 1 |
| Streak Record | 2 |
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
        let timestamps = [1764341916,1764341916,1763909265,1763901152,1763466402,1763464299,1762980165,1762938223,1762456890,1762450881,1761800101,1761786885,1761307949,1760874866,1760145633,1759667592,1759167621,1758636721,1757885787,1757386261,1756302562,1755624681,1755138776,1754191056,1753545292,1752665424,1752207847,1751763723];

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
| [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) | 1 | 1 | 0 | 2 |
| [YU\-GI\-OH](https://ws.tsl.rocks/corp/28f250641a870cb4c3bc77c2320c4892ec2c7006422ca4530475e1f3f372786a/) | 1 | 1 | 0 | 2 |
| [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) | 0 | 2 | 0 | 2 |
| [Space Monkeys](https://ws.tsl.rocks/corp/6894d5efb7b658b31de079cb2e732d920d4a9c0be391dc9f063e62e22ac51dac/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/12/03 | 0-12 | [亚斯特星际集团公司](https://ws.tsl.rocks/corp/b0bc70120c9a3105f31a71a9177edfb73785d4b86fb76655d1fd3acef0b7fcc2/) |
| ✅ | 2025/12/03 | 13-3 | [Spanish Apes](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ✅ | 2025/11/28 | 14-3 | [Grand Impire](https://ws.tsl.rocks/corp/951e0a6117eb48cf35f1928c5445d7d509d927d4c6883bcd5b5384430c2e206b/) |
| ❌ | 2025/11/28 | 0-6 | [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) |
| ✅ | 2025/11/23 | 13-0 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ↔️ | 2025/11/23 | 0-0 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ❌ | 2025/11/17 | 0-21 | [Best UA West](https://ws.tsl.rocks/corp/4d9a4fb86f55f49b64d6170705b42f7a2c988cc389331425c13603b0ebce6146/) |
| ✅ | 2025/11/17 | 9-0 | [NRG](https://ws.tsl.rocks/corp/831ad2405e6bcd02b4b3ef3efc670934a6cb98f39afb8cca743f9bcfbbfd0007/) |
| ❌ | 2025/11/11 | 3-9 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ✅ | 2025/11/11 | 2-1 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2025/11/04 | 0-13 | [Destroyer](https://ws.tsl.rocks/corp/a577b516f316e05c647ba59ea2ff3d4b0f0980f1f2dd329bc71e48f08460a613/) |
| ✅ | 2025/11/04 | 3-1 | [YU\-GI\-OH](https://ws.tsl.rocks/corp/28f250641a870cb4c3bc77c2320c4892ec2c7006422ca4530475e1f3f372786a/) |
| ❌ | 2025/10/29 | 1-19 | [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) |
| ✅ | 2025/10/24 | 4-0 | [Southall 1](https://ws.tsl.rocks/corp/b615ea00c3e44a9d96f23866b145a9523aa4915b68b2d8852edc202d67dea0da/) |
| ❌ | 2025/10/16 | 0-16 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ❌ | 2025/10/10 | 3-5 | [YU\-GI\-OH](https://ws.tsl.rocks/corp/28f250641a870cb4c3bc77c2320c4892ec2c7006422ca4530475e1f3f372786a/) |
| ❌ | 2025/10/04 | 1-6 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ❌ | 2025/09/28 | 0-8 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ✅ | 2025/09/19 | 3-2 | [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) |
| ❌ | 2025/09/14 | 2-9 | [Space Monkeys](https://ws.tsl.rocks/corp/6894d5efb7b658b31de079cb2e732d920d4a9c0be391dc9f063e62e22ac51dac/) |
| ✅ | 2025/09/01 | 1-0 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ❌ | 2025/08/24 | 1-20 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ❌ | 2025/08/19 | 2-5 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ❌ | 2025/08/08 | 2-5 | [Red star](https://ws.tsl.rocks/corp/c81b0bb64bdd3869a4fb82e574e3426578bb3978cc5e324700e74f53a9e616de/) |
| ❌ | 2025/07/31 | 4-11 | [Space Monkeys](https://ws.tsl.rocks/corp/6894d5efb7b658b31de079cb2e732d920d4a9c0be391dc9f063e62e22ac51dac/) |
| ❌ | 2025/07/21 | 3-4 | [Delta WhiteStar](https://ws.tsl.rocks/corp/61577852c258138db2fc8ffe32eebc390b716925e10bf8b96f7922a85b3a9ac6/) |
| ❌ | 2025/07/16 | 2-13 | [Clube Jogatico](https://ws.tsl.rocks/corp/b7fa1d6ba9752f3526daf60acb3f70f9daaf33a9e81bb5d9c78015c805b74ef4/) |
| ❌ | 2025/07/11 | 3-7 | [dark news](https://ws.tsl.rocks/corp/392d4555432e2fb7c77ddf78c077aaab6d8cb3da0e36551e8eac0f2d98081d2c/) |

---
Corporation ID: 82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1764773916"></span>
</div>