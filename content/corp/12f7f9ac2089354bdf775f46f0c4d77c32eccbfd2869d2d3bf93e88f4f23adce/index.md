---
title: ​神圣群星帝国
description: W:6 L:7 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 2 - 0 **龙族之家**
date: 2025-05-09T08:33:17.000Z
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
| ELO Regular | 1211 🔺  (470)|
| ELO Competitive | 1259 🔺  (427)|
| Total Matches | 14 |
| Wins | 6 |
| Losses | 7 |
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
        let timestamps = [1746347597,1746310367,1745763269,1745761766,1745325742,1745274041,1744892687,1744799833,1744356294,1744032341,1743867051,1743516340,1743430695,1742997901];

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
| ✅ | 2025/05/09 | 2-0 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ❌ | 2025/05/08 | 0-16 | [Winter Star llc](https://ws.tsl.rocks/corp/89b20821cb6e619dced74a6e153a1d3ceafa70b1035fb7d61a6920d375e49f50/) |
| ❌ | 2025/05/02 | 1-2 | [Hades’ galaxy](https://ws.tsl.rocks/corp/a5161db8db3228457dcd60bba1f4edee3636f916b6d20b3fdedb04a4fb6f117e/) |
| ✅ | 2025/05/02 | 5-3 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ✅ | 2025/04/27 | 3-0 | [Stargroup](https://ws.tsl.rocks/corp/cf430206a6a585f302ac5d76adf50b780f002f52ebbb82b323f933f5a0a25c4f/) |
| ❌ | 2025/04/26 | 2-28 | [Free Ag3nts](https://ws.tsl.rocks/corp/66c873438b165344dbdac371b45825f9c818ee1e77e128f101f2660f4b0c7b70/) |
| ✅ | 2025/04/22 | 3-0 | [the kings](https://ws.tsl.rocks/corp/e5401c31454641df970c76a211cb6fa604fcad47f1974d42db317169a796b1cc/) |
| ✅ | 2025/04/21 | 14-3 | [绛紫星云](https://ws.tsl.rocks/corp/5a3a9602bef85f5409788b6ae18f372599736e4be470dee01f373a17865f07d9/) |
| ❌ | 2025/04/16 | 3-6 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ❌ | 2025/04/12 | 3-9 | [Brasil](https://ws.tsl.rocks/corp/c1d98a4e0a9c522aff7cb4156b0dc139eb54566269c2203b2eae6fe1827fc6c3/) |
| ❌ | 2025/04/10 | 3-12 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ↔️ | 2025/04/06 | 3-3 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/04/05 | 15-2 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ❌ | 2025/03/31 | 0-18 | [Terran empire ](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |

---
Corporation ID: 12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1746779597"></span>
</div>