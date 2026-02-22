---
title: ​Union premiun
description: W:0 L:3 D:2 Bonus ❌ 2%
image: ./favicon.png
Summary: ↔️ 0 - 0 **华夏三体舰队**
date: 2024-08-14T03:52:30.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Bienvenidos a la corporacion mas poderosa de todas hacemos eb diarias
 ea y er espero que se diviertan todos los nuevos bienvenidos al equi
po,todos los nuevos seran acendidos inmediatamente 
```
<br>

### Whitestar Bonus ❌ 2%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1157 🔻  (-1)|
| ELO Competitive | 1162 🔺  (3)|
| Total Matches | 5 |
| Wins | 0 |
| Losses | 3 |
| Draws | 2 |
| Flagship | 1 |

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
        let timestamps = [1723175550,1703178947,1702313797,1701018149,1700101775];

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
| ↔️ | 2024/08/14 | 0-0 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ❌ | 2023/12/26 | 2-10 | [RACNAROK](https://ws.tsl.rocks/corp/925ee28e565a662efccf71b5762e6a40b9eacdff2237454dc0e5aa1dcbd44294/) |
| ❌ | 2023/12/16 | 0-42 | [Медведи](https://ws.tsl.rocks/corp/b3b0cac2c48761153afa1dcad7a4048103ffc3ec2ca6d477a6bd744922fce075/) |
| ↔️ | 2023/12/01 | 1-1 | [Paramedic ICU](https://ws.tsl.rocks/corp/2b046351c951cf9e05492ee383c44783b21c628831f51b1a04c9e5404b9b9fa3/) |
| ❌ | 2023/11/21 | 2-5 | [JPR\. Pretorians](https://ws.tsl.rocks/corp/7144c7cdb9f369d9e56199379429b01172d00a5142f6ceda71031de9bf6e0d25/) |

---
Corporation ID: 378842e94d703234b3bbe2f660cbf69180d547b32d4453bc3ca14e7729b3485c

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1723607550"></span>
</div>