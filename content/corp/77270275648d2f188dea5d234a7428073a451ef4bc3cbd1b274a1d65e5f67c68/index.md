---
title: ​Final
description: W:4 L:19 D:0 Bonus ❌ 14%
image: ./favicon.png
Summary: ❌ 0 - 8 **101**
date: 2025-07-23T04:31:07.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
We are BSO! The oldest thriving conglomerate.

BlackStar Order, Final, TS, UG, Path of Hades, and Dauntless as one c
orporation.

Are you RS6+ & want to join?
<color=blue>Discord: (YTaYrhy)</color>
```
<br>

### Whitestar Bonus ❌ 14%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1045 🔻  (1555)|
| ELO Competitive | 1116 🔻  (1546)|
| Total Matches | 23 |
| Wins | 4 |
| Losses | 19 |
| Draws | 0 |
| Streak Record | 2 |
| Flagship | 13 |

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
        let timestamps = [1752813067,1752340671,1751894137,1751449423,1750981586,1737040366,1736386403,1735846917,1734693712,1733489101,1732388403,1706328950,1705703883,1705070099,1704408676,1700927077,1700568819,1700418855,1699999830,1699927097,1699476524,1699222315,1698967480];

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
| [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) | 1 | 1 | 0 | 2 |
| [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) | 0 | 2 | 0 | 2 |
| [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/07/23 | 0-8 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/07/17 | 0-11 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2025/07/12 | 1-5 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ❌ | 2025/07/07 | 0-13 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ❌ | 2025/07/01 | 0-25 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2025/01/21 | 3-41 | [Tacitus](https://ws.tsl.rocks/corp/257625cedb6403e6979963e22a6ab809b81b08f41e868fa3498440abaf1780e0/) |
| ❌ | 2025/01/14 | 14-39 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ❌ | 2025/01/07 | 59-63 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2024/12/25 | 21-67 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/12/11 | 28-5 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2024/11/28 | 15-44 | [ANZAC Warriors](https://ws.tsl.rocks/corp/dbb190c3127dbab2a3d6d58f1f8f63425f1dbd1949f6442fb2d162e66246b484/) |
| ❌ | 2024/02/01 | 6-18 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ❌ | 2024/01/24 | 25-30 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/01/17 | 0-29 | [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) |
| ❌ | 2024/01/09 | 22-33 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2023/11/30 | 0-66 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ❌ | 2023/11/26 | 12-57 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2023/11/24 | 4-68 | [StarControl](https://ws.tsl.rocks/corp/ec38e4998a2ba7ec763a41d4bd33a2d027e94d6a4b9eace9b11e7d89674cc90c/) |
| ❌ | 2023/11/19 | 8-13 | [Space Donuts](https://ws.tsl.rocks/corp/50895e5bb0a19e8fde1c7f28e39fc0f170cbc2743a9f1ba45a88bce067d99152/) |
| ✅ | 2023/11/19 | 34-4 | [Dark Skai](https://ws.tsl.rocks/corp/97561ceb92954fb6430110c35337554b8a89fa52a7054f402b7e562a99ef48fd/) |
| ✅ | 2023/11/13 | 22-5 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2023/11/10 | 0-3 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2023/11/07 | 19-4 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |

---
Corporation ID: 77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1753245067"></span>
</div>