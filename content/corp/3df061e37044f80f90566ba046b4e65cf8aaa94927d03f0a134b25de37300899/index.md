---
title: ​Lemmejustwin\!
description: W:14 L:20 D:5 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 21 **红色太阳**
date: 2026-01-16T22:30:57.000Z
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
| ELO Regular | 1202 🔻  (-14)|
| ELO Competitive | 1283 🔻  (-17)|
| Total Matches | 39 |
| Wins | 14 |
| Losses | 20 |
| Draws | 5 |
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
        let timestamps = [1768170657,1767693534,1767039158,1766518487,1765827145,1765157435,1764271593,1762499549,1761747822,1761085267,1760385250,1759588267,1759064866,1758307878,1757522572,1756848356,1756181477,1755597936,1754931446,1754908603,1754456658,1754421205,1753988207,1753964765,1753478885,1753464411,1753014316,1753010709,1752576478,1752562358,1752130019,1752126714,1751692206,1751245406,1750780863,1750172637,1749660869,1749154841,1748722737];

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
| [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) | 1 | 0 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/01/16 | 0-21 | [红色太阳](https://ws.tsl.rocks/corp/8090de72c41a6255b4ffbcbfc8d591d6972c059836eabe4f57ce55a28dfb41fb/) |
| ↔️ | 2026/01/11 | 5-5 | [Spanish Fury](https://ws.tsl.rocks/corp/e16f59927214f5305835d80bd094d95754b0d02e26d6b4e3f6b654688cc48dad/) |
| ✅ | 2026/01/03 | 5-0 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ❌ | 2025/12/28 | 4-13 | [宇宙警察](https://ws.tsl.rocks/corp/e351af3589315207a50dad0eefdf5309943c39b25656f0870904e6be9302a082/) |
| ✅ | 2025/12/20 | 5-0 | [Türk](https://ws.tsl.rocks/corp/ec6d1f5fc2ce4664d68162d0fd7a48fe819f00f8c29dc92055a3af4b5d291c33/) |
| ❌ | 2025/12/13 | 2-13 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2025/12/02 | 3-33 | [Crucible](https://ws.tsl.rocks/corp/778178a7255ba7f4c8e2fdeb41fb777fb90ecf6e84a3ba79431f055f869521c6/) |
| ✅ | 2025/11/12 | 9-0 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/11/03 | 6-0 | [Star League](https://ws.tsl.rocks/corp/f6e399c226abb13fbb01d04c3d26f5771dfeaa767fe4b6c374bec8ca0299d836/) |
| ❌ | 2025/10/26 | 3-9 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/10/18 | 3-4 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/10/09 | 11-0 | [Солярис Рус](https://ws.tsl.rocks/corp/53c9a1a8499380eaf4082161ea9ef9bd7dda1c711f76153ea033738d1a663997/) |
| ✅ | 2025/10/03 | 7-0 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ✅ | 2025/09/24 | 10-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ↔️ | 2025/09/15 | 4-4 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ❌ | 2025/09/07 | 3-15 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ✅ | 2025/08/31 | 5-0 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ❌ | 2025/08/24 | 1-30 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ✅ | 2025/08/16 | 10-1 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ❌ | 2025/08/16 | 0-11 | [Corellia Corp](https://ws.tsl.rocks/corp/d3813c9aa0d7db5581d7e4799a89837cd3bc6d47bbe2639a295b56f5afc1b93f/) |
| ❌ | 2025/08/11 | 0-3 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ✅ | 2025/08/10 | 11-3 | [Bow Down](https://ws.tsl.rocks/corp/402b459520fde5ca47dbb493e4f75201464ab1d46cc1b8dad2f321217265bef4/) |
| ↔️ | 2025/08/05 | 5-5 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ↔️ | 2025/08/05 | 0-0 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2025/07/30 | 3-14 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ❌ | 2025/07/30 | 0-9 | [CAEDRUS \[o\]](https://ws.tsl.rocks/corp/b3c982613964d8287b8f57e57ececf5b9497766670fc306d9827c85fbcdb2887/) |
| ↔️ | 2025/07/25 | 0-0 | [Grand Impire](https://ws.tsl.rocks/corp/951e0a6117eb48cf35f1928c5445d7d509d927d4c6883bcd5b5384430c2e206b/) |
| ✅ | 2025/07/25 | 5-0 | [best room ok😔](https://ws.tsl.rocks/corp/62c154cf98e0c6ac45dff2bb8fce43580e81da8a776db6d4deb7fd3dfbf2b431/) |
| ❌ | 2025/07/20 | 1-5 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ❌ | 2025/07/20 | 0-3 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ❌ | 2025/07/15 | 0-2 | [第五星际](https://ws.tsl.rocks/corp/8f0d25fe4c802f32f4d3d4ad1a84583c5ae98e4a788a1fa260ef9bd70268818b/) |
| ✅ | 2025/07/15 | 7-0 | [AwA](https://ws.tsl.rocks/corp/9e1ba6b6db84b30e4d5cc2ff2933e0472d2e943670f25b712564f1cc01a63feb/) |
| ❌ | 2025/07/10 | 4-8 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/07/05 | 3-0 | [Die Mafia](https://ws.tsl.rocks/corp/aba28a42ccfc23e305aa4c0235b98fdf19427a05ee2a303799132210ac1d7f63/) |
| ✅ | 2025/06/29 | 5-0 | [Star War School](https://ws.tsl.rocks/corp/bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54/) |
| ❌ | 2025/06/22 | 0-11 | [深域](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ❌ | 2025/06/16 | 0-18 | [新星工程](https://ws.tsl.rocks/corp/22f9ba6fe47854adceeccbf19b9818b2338270bc2711f18dc2238d12e40f7b32/) |
| ❌ | 2025/06/10 | 0-1 | [U\.P\.E](https://ws.tsl.rocks/corp/fc06e2f3477d57f180521828616b988b58c6e5f6359dcfdc34b2e1fea93d309d/) |
| ❌ | 2025/06/05 | 2-16 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |

---
Corporation ID: 3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1768602657"></span>
</div>