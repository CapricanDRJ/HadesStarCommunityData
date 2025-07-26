---
title: ​Lemmejustwin!
description: W:4 L:8 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ↔️ 0 - 0 **Grand Impire**
date: 2025-07-25T12:25:16.000Z
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
| ELO Regular | 1159 🔺  (1215)|
| ELO Competitive | 1194 🔺  (836)|
| Total Matches | 13 |
| Wins | 4 |
| Losses | 8 |
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
        let timestamps = [1753014316,1753010709,1752576478,1752562358,1752130019,1752126714,1751692206,1751245406,1750780863,1750172637,1749660869,1749154841,1748722737];

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
| ↔️ | 2025/07/25 | 0-0 | [Grand Impire](https://ws.tsl.rocks/corp/951e0a6117eb48cf35f1928c5445d7d509d927d4c6883bcd5b5384430c2e206b/) |
| ✅ | 2025/07/25 | 5-0 | [best room ok😔](https://ws.tsl.rocks/corp/62c154cf98e0c6ac45dff2bb8fce43580e81da8a776db6d4deb7fd3dfbf2b431/) |
| ❌ | 2025/07/20 | 1-5 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ❌ | 2025/07/20 | 0-3 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ❌ | 2025/07/15 | 0-2 | [第五星际](https://ws.tsl.rocks/corp/8f0d25fe4c802f32f4d3d4ad1a84583c5ae98e4a788a1fa260ef9bd70268818b/) |
| ✅ | 2025/07/15 | 7-0 | [AwA](https://ws.tsl.rocks/corp/9e1ba6b6db84b30e4d5cc2ff2933e0472d2e943670f25b712564f1cc01a63feb/) |
| ❌ | 2025/07/10 | 4-8 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/07/05 | 3-0 | [Die Mafia](https://ws.tsl.rocks/corp/aba28a42ccfc23e305aa4c0235b98fdf19427a05ee2a303799132210ac1d7f63/) |
| ✅ | 2025/06/29 | 5-0 | [Star War School](https://ws.tsl.rocks/corp/bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54/) |
| ❌ | 2025/06/22 | 0-11 | [深域        ](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ❌ | 2025/06/16 | 0-18 | [新星工程](https://ws.tsl.rocks/corp/22f9ba6fe47854adceeccbf19b9818b2338270bc2711f18dc2238d12e40f7b32/) |
| ❌ | 2025/06/10 | 0-1 | [U\.P\.E](https://ws.tsl.rocks/corp/fc06e2f3477d57f180521828616b988b58c6e5f6359dcfdc34b2e1fea93d309d/) |
| ❌ | 2025/06/05 | 2-16 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |

---
Corporation ID: 3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1753446316"></span>
</div>