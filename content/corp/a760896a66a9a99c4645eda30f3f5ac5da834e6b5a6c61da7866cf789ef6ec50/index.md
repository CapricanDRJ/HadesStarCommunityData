---
title: ​Wolf Hunters
description: W:10 L:5 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 23 - 0 **Space Dragons**
date: 2026-05-04T07:07:09.000Z
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
| ELO Regular | 1274 🔺  (12)|
| ELO Competitive | 1307 🔺  (23)|
| Total Matches | 15 |
| Wins | 10 |
| Losses | 5 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 7 |
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
        let timestamps = [1777446429,1776167233,1775716616,1774989252,1774263970,1773741799,1773216505,1772733259,1772236283,1771774279,1771195347,1770737469,1770288005,1769837614,1769312699];

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
| [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/05/04 | 23-0 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ✅ | 2026/04/19 | 20-0 | [WALRUS](https://ws.tsl.rocks/corp/6a6f8dddc019ed7feb25ee8e5152e3137ab79d3a60b1057a398b7282a0613e6b/) |
| ❌ | 2026/04/14 | 0-12 | [Ainz ooal gown](https://ws.tsl.rocks/corp/9ddbd46282a5ceb0dad9e05cf8434a9afe6398c4d2f3a4d54113fa6298ae6f2d/) |
| ✅ | 2026/04/05 | 34-0 | [中国人民联盟](https://ws.tsl.rocks/corp/4fadcca4df7e52a4824f29d77a657e86c6dac7d39f325d3e5ebe5d6128839e47/) |
| ✅ | 2026/03/28 | 21-5 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ✅ | 2026/03/22 | 24-0 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2026/03/16 | 23-0 | [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) |
| ✅ | 2026/03/10 | 17-3 | [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) |
| ✅ | 2026/03/04 | 27-0 | [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) |
| ✅ | 2026/02/27 | 19-0 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ❌ | 2026/02/20 | 0-9 | [Академия Д](https://ws.tsl.rocks/corp/b1abd18d521db3f91ca83e4b49f5ecc132514e77c54c875dc0d08b977292c470/) |
| ❌ | 2026/02/15 | 4-14 | [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) |
| ✅ | 2026/02/10 | 14-7 | [星球杯联盟](https://ws.tsl.rocks/corp/ee41cb7209a13177edbf1aefc3f3b01a86ba867bc141ba5adc7789c5a6742977/) |
| ❌ | 2026/02/05 | 2-18 | [Crucible](https://ws.tsl.rocks/corp/778178a7255ba7f4c8e2fdeb41fb777fb90ecf6e84a3ba79431f055f869521c6/) |
| ❌ | 2026/01/30 | 1-5 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |

---
Corporation ID: a760896a66a9a99c4645eda30f3f5ac5da834e6b5a6c61da7866cf789ef6ec50

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1777878429"></span>
</div>