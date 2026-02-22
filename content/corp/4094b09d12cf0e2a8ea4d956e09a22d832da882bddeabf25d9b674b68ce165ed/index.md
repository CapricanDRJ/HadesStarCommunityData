---
title: ​ALPHA SQUADRON
description: W:8 L:6 D:0 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 1 - 23 **First Legion**
date: 2025-08-05T23:27:13.000Z
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
| ELO Regular | 1231 🔻  (-19)|
| ELO Competitive | 1263 🔻  (-12)|
| Total Matches | 14 |
| Wins | 8 |
| Losses | 6 |
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
        let timestamps = [1754004433,1751794371,1750657967,1750205694,1749543072,1749042759,1747651860,1743769672,1741695171,1740958379,1739941737,1738848814,1737284185,1736282422];

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
| ❌ | 2025/08/05 | 1-23 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2025/07/11 | 1-26 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/06/28 | 20-1 | [深域](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ✅ | 2025/06/23 | 7-4 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2025/06/15 | 24-2 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2025/06/09 | 0-15 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ✅ | 2025/05/24 | 13-0 | [tommmm](https://ws.tsl.rocks/corp/358b1dd85c2fac707e40d13f4e6a5bc4db2a70eed43043c1ebde407064361802/) |
| ❌ | 2025/04/09 | 0-3 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ❌ | 2025/03/16 | 0-11 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/03/07 | 7-2 | [中国人民联盟](https://ws.tsl.rocks/corp/4fadcca4df7e52a4824f29d77a657e86c6dac7d39f325d3e5ebe5d6128839e47/) |
| ✅ | 2025/02/24 | 10-2 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/02/11 | 4-0 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ❌ | 2025/01/24 | 0-8 | [🌪TORNADO](https://ws.tsl.rocks/corp/df15d02d32c67d60995e68d6c4197c23b340a0a985f04280563d8d07bd4536fa/) |
| ✅ | 2025/01/12 | 6-3 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |

---
Corporation ID: 4094b09d12cf0e2a8ea4d956e09a22d832da882bddeabf25d9b674b68ce165ed

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1754436433"></span>
</div>