---
layout: page
title: ​EarthFederation
description: W:7 L:2 D:1 Bonus ✅
image: ./favicon.png
date: 1734187045
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
Looking for members. Come grow with us!
```
### [Discord](https://discord.gg/https://discord.gg/asMVRfT5)
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1260 🔺  (228)|
| ELO Competitive | 1257 🔺  (363)|
| Total Matches | 10 |
| Wins | 7 |
| Losses | 2 |
| Draws | 1 |
| Streak Record | 4 |
| Flagship | 4 |

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
        let timestamps = [1733755045,1732558788,1731727915,1731727915,1731042463,1730168932,1729345554,1728901073,1724439819,1723408155];

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
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
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
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
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
| [华夏三体\-基沃托斯集团](https://ws.tsl.rocks/corp/2a0e5e40c4264cc5c8543ba1f6f41772d2059010c0a58381251017412b294ef7/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/12/14 | 11-1 | [Blue Dwarf](https://ws.tsl.rocks/corp/1e29874ad4c6883e47d4f389f629d89a65cad3838c77f87d6dc6ddfb5fc41a61/) |
| ↔️ | 2024/11/30 | 5-5 | [S\.U\.N](https://ws.tsl.rocks/corp/916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2/) |
| ✅ | 2024/11/21 | 20-0 | [华夏三体\-基沃托斯集团](https://ws.tsl.rocks/corp/2a0e5e40c4264cc5c8543ba1f6f41772d2059010c0a58381251017412b294ef7/) |
| ✅ | 2024/11/21 | 2-0 | [华夏三体\-基沃托斯集团](https://ws.tsl.rocks/corp/2a0e5e40c4264cc5c8543ba1f6f41772d2059010c0a58381251017412b294ef7/) |
| ✅ | 2024/11/13 | 9-1 | [落雨观花](https://ws.tsl.rocks/corp/565a6d89fc5107e86669d7f8910a1c4ae1fbb156fa0b5e81dbc917c341cc9ff0/) |
| ✅ | 2024/11/03 | 10-3 | [₩\.BRASIL\.₩](https://ws.tsl.rocks/corp/ff7f01b2f1db7b9c75e49da4c7367325905c020eba282a97f69f33d8c19419aa/) |
| ❌ | 2024/10/24 | 4-6 | [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) |
| ✅ | 2024/10/19 | 2-0 | [斯比纳兰](https://ws.tsl.rocks/corp/ce756ff97542e6fa8d518319e6575aae1d01eb23dd906fee3e3cbb98b442b68f/) |
| ❌ | 2024/08/28 | 3-14 | [Imperium](https://ws.tsl.rocks/corp/9e2ab6b52a6e6684059b31f08966101f380a17c9a782d2a39434093e835fb17d/) |
| ✅ | 2024/08/16 | 7-0 | [<•\|•\>](https://ws.tsl.rocks/corp/a3864fad7e4ba08611eda264a7934afe237a2f313a23b12dcce9db0a96a09daf/) |

---
Corporation ID: e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>