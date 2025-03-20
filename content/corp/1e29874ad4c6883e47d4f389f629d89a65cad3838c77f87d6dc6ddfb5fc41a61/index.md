---
title: ​Blue Dwarf
description: W:6 L:3 D:0 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 2 - 3 **蓝色星系二号分盟**
date: 2025-01-15T02:43:11.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=#88F>Welcome to Blue Dwarf!</color> Part of the Dwarf family, 
join us for group Red Star runs, hints and tips, free artifacts, and 
weekly White Stars - enable scanner to opt-in! Discord advised
```
<br>

### [Discord](https://discord.gg/mbBssbBRQ8)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1242 🔻  (298)|
| ELO Competitive | 1284 🔺  (349)|
| Total Matches | 9 |
| Wins | 6 |
| Losses | 3 |
| Draws | 0 |
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
        let timestamps = [1736476991,1736460333,1735837300,1734746290,1734307020,1733755045,1732734570,1732665760,1732094218];

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

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/01/15 | 2-3 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ✅ | 2025/01/14 | 27-0 | [Black Corsairs](https://ws.tsl.rocks/corp/f92c523729e551788705c4e776aad288e8df6e36592a638eb2077d16790f4e87/) |
| ✅ | 2025/01/07 | 20-12 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2024/12/26 | 19-1 | [昙花一现](https://ws.tsl.rocks/corp/f4fd4fa59ab25e2d5c7dbeade6de593918c0902906d810e0f1688ec1133b9510/) |
| ✅ | 2024/12/20 | 15-1 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/12/14 | 1-11 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ❌ | 2024/12/02 | 0-2 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ✅ | 2024/12/02 | 13-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2024/11/25 | 16-1 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |

---
Corporation ID: 1e29874ad4c6883e47d4f389f629d89a65cad3838c77f87d6dc6ddfb5fc41a61

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1736908991"></span>
</div>