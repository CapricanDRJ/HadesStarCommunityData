---
title: ​아베노노
description: W:4 L:6 D:1 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 9 **龙的传人**
date: 2025-12-17T07:04:40.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1179 🔻  (-13)|
| ELO Competitive | 1212 🔻  (-1)|
| Total Matches | 11 |
| Wins | 4 |
| Losses | 6 |
| Draws | 1 |
| Streak Record | 2 |
| Flagship | 2 |

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
        let timestamps = [1765523080,1765449471,1765070889,1730596163,1729949858,1727704643,1704799641,1703579240,1702977389,1702388931,1701954936];

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
| ❌ | 2025/12/17 | 0-9 | [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) |
| ❌ | 2025/12/16 | 6-22 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ❌ | 2025/12/12 | 0-26 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2024/11/08 | 4-2 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2024/10/31 | 7-3 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2024/10/05 | 0-25 | [德意志第三帝国奥米加分部](https://ws.tsl.rocks/corp/b5f35e30b2dea2621e854b5011a9f9d07ca3585cd26bd9ac92aa7b06c0a522b1/) |
| ❌ | 2024/01/14 | 3-6 | [V0RTEX](https://ws.tsl.rocks/corp/22a12c757b3e065e8ec7a839b80e33339317bb277aeee145f6cde6f473e06f8f/) |
| ❌ | 2023/12/31 | 2-6 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2023/12/24 | 6-0 | [苏维埃联邦](https://ws.tsl.rocks/corp/4b067d39aa68bf846ec24a1af1a1038844cfa78699d1190f74a77b1745e148ac/) |
| ✅ | 2023/12/17 | 5-0 | [mijael siuuuuuu](https://ws.tsl.rocks/corp/45ca23a78c96de3dd53a33f7c9f029b7dc5edf0fb7f15e5d46f1893c68d28334/) |
| ↔️ | 2023/12/12 | 0-0 | [Paramedic ICU](https://ws.tsl.rocks/corp/2b046351c951cf9e05492ee383c44783b21c628831f51b1a04c9e5404b9b9fa3/) |

---
Corporation ID: b6a4ffffbabc8bf90d3ae19467aa6ce98c4a3ceb136af04fd24a43406f8f830f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1765955080"></span>
</div>