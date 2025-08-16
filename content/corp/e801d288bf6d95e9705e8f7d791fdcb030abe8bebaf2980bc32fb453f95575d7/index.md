---
title: ​Russian space 3
description: W:8 L:2 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ❌ 3 - 10 **HIGH COMMAND **
date: 2025-08-13T09:14:27.000Z
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
| ELO Regular | 1279 🔻  (237)|
| ELO Competitive | 1290 🔺  (376)|
| Total Matches | 10 |
| Wins | 8 |
| Losses | 2 |
| Draws | 0 |
| Streak Record | 5 |
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
        let timestamps = [1754644467,1754630044,1754061523,1754055812,1753621012,1753601480,1753151055,1753146940,1752706897,1752265246];

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
| ❌ | 2025/08/13 | 3-10 | [HIGH COMMAND ](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ✅ | 2025/08/13 | 9-0 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/08/06 | 12-6 | [Chiasmus](https://ws.tsl.rocks/corp/5e1e520f8c04bfa18e2f0bdad432fd5788b965dbcbd47d9f351c3d3074aca34d/) |
| ✅ | 2025/08/06 | 9-2 | [ws destroyer](https://ws.tsl.rocks/corp/6e49e458a0b4d8e84bbe31cfc515a393f22b447c43b01047d795455900618574/) |
| ✅ | 2025/08/01 | 12-1 | [jatnniel 团队](https://ws.tsl.rocks/corp/fb2a90ff4c918e808029246b88573a0b283bd3b67f1831aaab89f03720e9ebb2/) |
| ✅ | 2025/08/01 | 18-0 | [✯NLB✯ II](https://ws.tsl.rocks/corp/b305e780e7ad5ac4f03ed0c9c3e86fa879cc681a2a0ad398169d65bbc866249c/) |
| ❌ | 2025/07/27 | 7-25 | [AwA](https://ws.tsl.rocks/corp/9e1ba6b6db84b30e4d5cc2ff2933e0472d2e943670f25b712564f1cc01a63feb/) |
| ✅ | 2025/07/27 | 7-3 | [\.\- \.\-\.\. \.\-\.\. \.\-](https://ws.tsl.rocks/corp/f71612c31faaae770d61fd8b88f0fc3e0d2c13e7fc8851439ff4c12c0205fda6/) |
| ✅ | 2025/07/21 | 20-0 | [Vega Major](https://ws.tsl.rocks/corp/2f1e59f02633deab6d395dde0bedb6b4dd2a4a589f2c0c9564e2fc2cd62b2d2c/) |
| ✅ | 2025/07/16 | 13-1 | [dark news ](https://ws.tsl.rocks/corp/392d4555432e2fb7c77ddf78c077aaab6d8cb3da0e36551e8eac0f2d98081d2c/) |

---
Corporation ID: e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1755076467"></span>
</div>