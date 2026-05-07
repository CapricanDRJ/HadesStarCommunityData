---
title: ​Village of Evil
description: W:22 L:1 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 1 - 0 **testims**
date: 2026-05-06T04:55:51.000Z
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
| ELO Regular | 1412 🔺  (7)|
| ELO Competitive | 1327 🔺  (10)|
| Total Matches | 24 |
| Wins | 22 |
| Losses | 1 |
| Draws | 1 |
| Streak | 22 |
| Streak Record | 22 |
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
        let timestamps = [1777611351,1777611346,1777170773,1777170765,1776736003,1776735997,1776303805,1776303789,1775870850,1775870144,1775437628,1775437622,1775004875,1775004871,1774572225,1774572225,1774139592,1774139592,1773706655,1773706354,1773228592,1773224905,1765326047,1764611473];

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
| [testims](https://ws.tsl.rocks/corp/0be554950748ff69dda2f0846b842c3f9d7d236fa3175187c9571010ce9fbcb3/) | 2 | 0 | 0 | 2 |
| [testims](https://ws.tsl.rocks/corp/217f313de756edf263f374099c9bab37b99c9bf8320ba9a11348ff28fc4d5fc0/) | 2 | 0 | 0 | 2 |
| [testims](https://ws.tsl.rocks/corp/734e8a0ee63416fb1683ffb0cf186696a3c9ef6258dc7a2f0db43236497cf28a/) | 2 | 0 | 0 | 2 |
| [testims](https://ws.tsl.rocks/corp/150fc3901e5682ea4853e174000989bd932e0246f14a44f04df40cb0e0136f1f/) | 2 | 0 | 0 | 2 |
| [testims](https://ws.tsl.rocks/corp/28b92bd744378e6c6b9a6fe912ed8bf05c8e6e6e4e1c61c086cca1e264ab55cc/) | 2 | 0 | 0 | 2 |
| [testims](https://ws.tsl.rocks/corp/799654851eaef8e8d356ebe029c289611c4eff5a808f28a38a4dcad00cf5928f/) | 2 | 0 | 0 | 2 |
| [testims](https://ws.tsl.rocks/corp/ed5d3a72160068f6f1843eb6e1d206be25e8e4a0d3ff4ad13851aaf8116ae1b9/) | 2 | 0 | 0 | 2 |
| [testims](https://ws.tsl.rocks/corp/5c2909105a7ffd73239dca5ad842e06e4b0fbc18de7e022531dc1b633368ef40/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/05/06 | 1-0 | [testims](https://ws.tsl.rocks/corp/0be554950748ff69dda2f0846b842c3f9d7d236fa3175187c9571010ce9fbcb3/) |
| ✅ | 2026/05/06 | 1-0 | [testims](https://ws.tsl.rocks/corp/0be554950748ff69dda2f0846b842c3f9d7d236fa3175187c9571010ce9fbcb3/) |
| ✅ | 2026/05/01 | 1-0 | [testims](https://ws.tsl.rocks/corp/fb8469fdff605824ee8ba4dff33da6ac55e475c80dc7892d745eb3f8c41699ea/) |
| ✅ | 2026/05/01 | 4-0 | [Тартария](https://ws.tsl.rocks/corp/fd6366ca6eb6845a94559e3ce702b79f718a80a7c32022540ab3661b552e9416/) |
| ✅ | 2026/04/26 | 1-0 | [testims](https://ws.tsl.rocks/corp/217f313de756edf263f374099c9bab37b99c9bf8320ba9a11348ff28fc4d5fc0/) |
| ✅ | 2026/04/26 | 1-0 | [testims](https://ws.tsl.rocks/corp/217f313de756edf263f374099c9bab37b99c9bf8320ba9a11348ff28fc4d5fc0/) |
| ✅ | 2026/04/21 | 1-0 | [testims](https://ws.tsl.rocks/corp/734e8a0ee63416fb1683ffb0cf186696a3c9ef6258dc7a2f0db43236497cf28a/) |
| ✅ | 2026/04/21 | 1-0 | [testims](https://ws.tsl.rocks/corp/734e8a0ee63416fb1683ffb0cf186696a3c9ef6258dc7a2f0db43236497cf28a/) |
| ✅ | 2026/04/16 | 1-0 | [testims](https://ws.tsl.rocks/corp/150fc3901e5682ea4853e174000989bd932e0246f14a44f04df40cb0e0136f1f/) |
| ✅ | 2026/04/16 | 1-0 | [testims](https://ws.tsl.rocks/corp/150fc3901e5682ea4853e174000989bd932e0246f14a44f04df40cb0e0136f1f/) |
| ✅ | 2026/04/11 | 1-0 | [testims](https://ws.tsl.rocks/corp/28b92bd744378e6c6b9a6fe912ed8bf05c8e6e6e4e1c61c086cca1e264ab55cc/) |
| ✅ | 2026/04/11 | 1-0 | [testims](https://ws.tsl.rocks/corp/28b92bd744378e6c6b9a6fe912ed8bf05c8e6e6e4e1c61c086cca1e264ab55cc/) |
| ✅ | 2026/04/06 | 1-0 | [testims](https://ws.tsl.rocks/corp/799654851eaef8e8d356ebe029c289611c4eff5a808f28a38a4dcad00cf5928f/) |
| ✅ | 2026/04/06 | 1-0 | [testims](https://ws.tsl.rocks/corp/799654851eaef8e8d356ebe029c289611c4eff5a808f28a38a4dcad00cf5928f/) |
| ✅ | 2026/04/01 | 1-0 | [testims](https://ws.tsl.rocks/corp/ed5d3a72160068f6f1843eb6e1d206be25e8e4a0d3ff4ad13851aaf8116ae1b9/) |
| ✅ | 2026/04/01 | 1-0 | [testims](https://ws.tsl.rocks/corp/ed5d3a72160068f6f1843eb6e1d206be25e8e4a0d3ff4ad13851aaf8116ae1b9/) |
| ✅ | 2026/03/27 | 1-0 | [testims](https://ws.tsl.rocks/corp/5c2909105a7ffd73239dca5ad842e06e4b0fbc18de7e022531dc1b633368ef40/) |
| ✅ | 2026/03/27 | 1-0 | [testims](https://ws.tsl.rocks/corp/5c2909105a7ffd73239dca5ad842e06e4b0fbc18de7e022531dc1b633368ef40/) |
| ✅ | 2026/03/22 | 1-0 | [testims](https://ws.tsl.rocks/corp/c378a02ee407fe8e5115f568ec691ef3aa9e5c2dcb912c8fa30b67ce78f456cb/) |
| ✅ | 2026/03/22 | 1-0 | [testims](https://ws.tsl.rocks/corp/dd88d37f57dd18d290d69626be9a1f6b065a32851705dd294b12ab20785b75b3/) |
| ✅ | 2026/03/16 | 1-0 | [testims](https://ws.tsl.rocks/corp/b1f1498a9ec98d148faa95b96e2baecb3539019a39bfaf8ce759a8bfd5ef59e8/) |
| ✅ | 2026/03/16 | 1-0 | [testims](https://ws.tsl.rocks/corp/7b546715e0520386ce18eb5f648e6ca36ad0d193821bfaf773d596f41a1a1f61/) |
| ❌ | 2025/12/15 | 0-3 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ↔️ | 2025/12/06 | 0-0 | [WSC](https://ws.tsl.rocks/corp/77c9701bf78f949dd4c0564f6c475f681f96454f99a253d8cbcd88a4755e2c6c/) |

---
Corporation ID: 49560c57406a9c76f00beab7cdbacba9ac9f781243bd9d30d3db9fb112bad738

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1778043351"></span>
</div>