---
title: ​WhiteSTarfighte
description: W:20 L:16 D:2 Bonus ✅ 34%
image: ./favicon.png
Summary: ✅ 8 - 2 **阿尔特拉太空港**
date: 2025-04-02T23:31:08.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Lets WiN all white Stars
```
<br>

### [Discord](https://discord.gg/Nope)
### Whitestar Bonus ✅ 34%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1243 🔺  (300)|
| ELO Competitive | 1270 🔺  (383)|
| Total Matches | 38 |
| Wins | 20 |
| Losses | 16 |
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
        let timestamps = [1743204668,1742754785,1742318406,1741880570,1741432838,1740994426,1740554185,1740115454,1739675378,1739213637,1738770986,1738333119,1737885379,1737442168,1736986275,1736513819,1736063327,1735584166,1735149332,1734640057,1734198976,1733747833,1733233705,1732786565,1732334810,1731889294,1731452971,1731020532,1730517201,1730079060,1729621421,1729184477,1728740556,1728304481,1727857614,1727366582,1726932677,1726471215];

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
| [天琴座联邦](https://ws.tsl.rocks/corp/3928bc72ac4a6520e6d501a9b13f0595b3401845fb184b605fa521b90cd01fe9/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/04/02 | 8-2 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ❌ | 2025/03/28 | 1-12 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ✅ | 2025/03/23 | 10-1 | [Starships](https://ws.tsl.rocks/corp/b75dd27a38d238b4d9cd11637820796c7df082496dc05190e61fc675f71b05db/) |
| ❌ | 2025/03/18 | 2-13 | [Terran empire ](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2025/03/13 | 3-10 | [星系联盟](https://ws.tsl.rocks/corp/701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36/) |
| ✅ | 2025/03/08 | 5-3 | [天琴座联邦](https://ws.tsl.rocks/corp/3928bc72ac4a6520e6d501a9b13f0595b3401845fb184b605fa521b90cd01fe9/) |
| ❌ | 2025/03/03 | 2-15 | [Hades’ galaxy](https://ws.tsl.rocks/corp/a5161db8db3228457dcd60bba1f4edee3636f916b6d20b3fdedb04a4fb6f117e/) |
| ❌ | 2025/02/26 | 3-10 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2025/02/21 | 7-0 | [Imperium ](https://ws.tsl.rocks/corp/1bee8539d5e3c0f0b83f326b0f0e279264bdce34dbe65b7f644ca62190e407f0/) |
| ✅ | 2025/02/15 | 4-3 | [天琴座联邦](https://ws.tsl.rocks/corp/3928bc72ac4a6520e6d501a9b13f0595b3401845fb184b605fa521b90cd01fe9/) |
| ❌ | 2025/02/10 | 4-8 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/02/05 | 6-3 | [启示空间](https://ws.tsl.rocks/corp/92581941aa4cb7fce206e45a4bbd748a9eb5ae0fb8041a08d0fb28546a40d455/) |
| ❌ | 2025/01/31 | 1-10 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ✅ | 2025/01/26 | 5-3 | [一根飞机](https://ws.tsl.rocks/corp/459077a8d857a7bd7ee9caafa2c5ed27ac2416d2280965dd22d4293302cb9de0/) |
| ❌ | 2025/01/21 | 5-15 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2025/01/15 | 6-0 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2025/01/10 | 4-0 | [Alpha Galaxy](https://ws.tsl.rocks/corp/9abcb558e094026cc6bd9a73f98a9d957a5fa21d3c43ea80848419c844a83775/) |
| ↔️ | 2025/01/04 | 3-3 | [AwA](https://ws.tsl.rocks/corp/9e1ba6b6db84b30e4d5cc2ff2933e0472d2e943670f25b712564f1cc01a63feb/) |
| ✅ | 2024/12/30 | 2-0 | [地球星际集团](https://ws.tsl.rocks/corp/05094116a999d8e077c5e53dc2241a870c7dc2e68e016455c606ada0dcb40b62/) |
| ✅ | 2024/12/24 | 7-0 | [华夏三体\-基沃托斯集团](https://ws.tsl.rocks/corp/2a0e5e40c4264cc5c8543ba1f6f41772d2059010c0a58381251017412b294ef7/) |
| ↔️ | 2024/12/19 | 0-0 | [🌪TORNADO ](https://ws.tsl.rocks/corp/df15d02d32c67d60995e68d6c4197c23b340a0a985f04280563d8d07bd4536fa/) |
| ❌ | 2024/12/14 | 1-12 | [Equinox](https://ws.tsl.rocks/corp/d6f4702c0a85549d019474868a68ecc1a6c546d73fa31f9336ee639a906ff0fe/) |
| ✅ | 2024/12/08 | 2-0 | [斯比纳兰](https://ws.tsl.rocks/corp/ce756ff97542e6fa8d518319e6575aae1d01eb23dd906fee3e3cbb98b442b68f/) |
| ✅ | 2024/12/03 | 10-0 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ✅ | 2024/11/28 | 9-0 | [The Drones](https://ws.tsl.rocks/corp/9c2723bb068babe4c73bfc848efbd77209732ae432badf52b7e9b01099f42e43/) |
| ❌ | 2024/11/23 | 3-6 | [Dark Halo](https://ws.tsl.rocks/corp/f6ed7c780faf133d3fe411b9ed88480608a56064328539891d1b4348242954f6/) |
| ❌ | 2024/11/17 | 3-16 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ✅ | 2024/11/12 | 5-0 | [Devourers](https://ws.tsl.rocks/corp/8b11fb529b6388e78677d5025d5973063a49ee25a297a52cda3859faa20ee5ca/) |
| ❌ | 2024/11/07 | 3-10 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2024/11/02 | 10-0 | [Rzeczypospolita](https://ws.tsl.rocks/corp/669a044e2d8e476c293b7bdc70511065849ca26356c1f3062cc7570251459d6b/) |
| ✅ | 2024/10/27 | 2-0 | [华夏联盟](https://ws.tsl.rocks/corp/2c648f8c6a0963f1a86b1a1ca787f67c02ee58838a809427b68d3546b89078ac/) |
| ✅ | 2024/10/22 | 5-2 | [Winter Star llc](https://ws.tsl.rocks/corp/89b20821cb6e619dced74a6e153a1d3ceafa70b1035fb7d61a6920d375e49f50/) |
| ❌ | 2024/10/17 | 1-2 | [Zeta Division ](https://ws.tsl.rocks/corp/29335e52f4b0c4ae92db98c395d2f4969201d0ddc31bb7f112bd6d3eeb97182c/) |
| ❌ | 2024/10/12 | 3-15 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ✅ | 2024/10/07 | 8-0 | [代代守护你的神明](https://ws.tsl.rocks/corp/6960f4c6ded90a45fd53df8d3d1b3cf4576ceb471ab4dc9b6931f04c6ea5ac9c/) |
| ❌ | 2024/10/01 | 5-13 | [Nox Imperium](https://ws.tsl.rocks/corp/b60fb003fae650d1de18e7bca4fad04f9805501f4568d07ceb47bffdfeb613c1/) |
| ✅ | 2024/09/26 | 4-1 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ❌ | 2024/09/21 | 1-7 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |

---
Corporation ID: 5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1743636668"></span>
</div>