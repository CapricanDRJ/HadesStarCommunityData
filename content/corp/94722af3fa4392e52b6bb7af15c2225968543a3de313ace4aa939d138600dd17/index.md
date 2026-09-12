---
title: ​Madison Holding
description: W:7 L:4 D:0 Bonus ❌ 13%
image: ./favicon.png
Summary: ❌ 0 - 38 **Famous Assasins**
date: 2024-01-10T22:23:37.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<b><size=90><color=#9d80b3></color></size></b>
  ○  Weekly WS with strong coordination
  ○  Recruiting disciplined players
  ○  Discord required
<color=#dadde7>

```
<br>

### Whitestar Bonus ❌ 13%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1239 🔻  (-12)|
| ELO Competitive | 1243 🔻  (-14)|
| Total Matches | 11 |
| Wins | 7 |
| Losses | 4 |
| Draws | 0 |
| Streak Record | 6 |
| Flagship | 7 |

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
        let timestamps = [1704493417,1704045356,1703563916,1702919090,1702435820,1701882510,1701364118,1700848029,1699788229,1699149595,1698703307];

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
| ❌ | 2024/01/10 | 0-38 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ❌ | 2024/01/05 | 15-33 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ✅ | 2023/12/31 | 39-8 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ✅ | 2023/12/23 | 47-5 | [Dark Skai](https://ws.tsl.rocks/corp/97561ceb92954fb6430110c35337554b8a89fa52a7054f402b7e562a99ef48fd/) |
| ✅ | 2023/12/18 | 33-25 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ✅ | 2023/12/11 | 47-0 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ✅ | 2023/12/05 | 15-10 | [Зелёная корпа](https://ws.tsl.rocks/corp/978fbb6cb32789d7057450a2239b1d6e2bc7730bbdd832f816384d45ec44ac57/) |
| ✅ | 2023/11/29 | 25-5 | [Monster AG](https://ws.tsl.rocks/corp/f9d79c5a20dd27fb56804a4e457701041d96291e2cc0debc2d7a3b02ad066653/) |
| ❌ | 2023/11/17 | 4-35 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2023/11/10 | 14-21 | [SYNDICATE](https://ws.tsl.rocks/corp/340a8194f62a11308a6d79b913d48312fa37e3b250fb4b241cc2c5d69549a912/) |
| ✅ | 2023/11/04 | 28-8 | [Space Marine](https://ws.tsl.rocks/corp/0b961d6d412f986cbf91da27cad44222c4f7d42d432540520cd762556893064c/) |

---
Corporation ID: 94722af3fa4392e52b6bb7af15c2225968543a3de313ace4aa939d138600dd17

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1704925417"></span>
</div>