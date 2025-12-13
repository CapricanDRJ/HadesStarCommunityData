---
title: ​TheDuckeanFlow
description: W:5 L:4 D:0 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 1 **Azennor inc\.**
date: 2025-11-12T17:55:30.000Z
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
| ELO Regular | 1218 🔻  (-17)|
| ELO Competitive | 1228 🔻  (-17)|
| Total Matches | 9 |
| Wins | 5 |
| Losses | 4 |
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
        let timestamps = [1762538130,1754530315,1753214072,1751934110,1748751279,1747100670,1745484380,1745010490,1744572067];

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
| ❌ | 2025/11/12 | 0-1 | [Azennor inc\.](https://ws.tsl.rocks/corp/b20eec58c56fcfae87efc51986817da9dca387c1c97cdf722432dfdf0e418050/) |
| ✅ | 2025/08/12 | 8-0 | [Blacksteel Tech](https://ws.tsl.rocks/corp/dfd6e8053747b0abe2de98bfe1d4b8521829fea58e48472835363ff3a0a5fc09/) |
| ✅ | 2025/07/27 | 9-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/07/13 | 6-0 | [\+\*Galaxia\*\+](https://ws.tsl.rocks/corp/2e0a8fa5ddc8ebd4d8f5cb5ffbe4710cb5fe62046e0b3923b3b4d8679fb6dace/) |
| ❌ | 2025/06/06 | 0-14 | [💮問鼎風待月💮](https://ws.tsl.rocks/corp/e0a96b1ba8037d847784d8cbf84ba4b84d42060efe572236ed61737ee5c0d479/) |
| ❌ | 2025/05/18 | 1-17 | [星际造梦](https://ws.tsl.rocks/corp/aa25ebf7f012818b7ee0d4ed4bef10a7f6c2a22b528584e91d5b3a78355eeabd/) |
| ✅ | 2025/04/29 | 3-0 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/04/23 | 3-5 | [DINASTÍA SOLAR](https://ws.tsl.rocks/corp/ad2fb0a499c4bed8883dbbb54af2585e84353be5ade52e585828b4d86c4f0994/) |
| ✅ | 2025/04/18 | 11-0 | [欢迎国人](https://ws.tsl.rocks/corp/f32abd112fe2b826948a3538a51097b9114815930ec77ad11ada1b24ce34578d/) |

---
Corporation ID: bddfa85ac0ddba1389b3ce0fede44f78e7622f0867ce5d98f55344c6d443f9a1

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1762970130"></span>
</div>