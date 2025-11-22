---
title: ​Stargate Sg7
description: W:7 L:1 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 11 - 0 **龙的传人**
date: 2025-11-18T22:21:57.000Z
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
| ELO Regular | 1280 🔺  (13)|
| ELO Competitive | 1286 🔺  (14)|
| Total Matches | 8 |
| Wins | 7 |
| Losses | 1 |
| Draws | 0 |
| Streak | 4 |
| Streak Record | 4 |
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
        let timestamps = [1763072517,1762458393,1761879931,1761277584,1760617066,1760033864,1759417902,1758223527];

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
| ✅ | 2025/11/18 | 11-0 | [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) |
| ✅ | 2025/11/11 | 9-2 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ✅ | 2025/11/05 | 18-0 | [Darknova](https://ws.tsl.rocks/corp/2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7/) |
| ✅ | 2025/10/29 | 22-0 | [The Black Sun](https://ws.tsl.rocks/corp/0286b6f1736257a025aef3d7d7673c9eff65a9b8207f08ea3ac8462cbcad7eb5/) |
| ❌ | 2025/10/21 | 7-9 | [Os Guild](https://ws.tsl.rocks/corp/95419ee3d00a8d81d84d6fdba1cc4478098c152940903bb6a203af8f646d4e13/) |
| ✅ | 2025/10/14 | 19-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2025/10/07 | 25-3 | [Le Refuge\.](https://ws.tsl.rocks/corp/3d5b92e8e4eb41b09f321270a189277951b5989b232c79bfee0cfa80ca846665/) |
| ✅ | 2025/09/23 | 14-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |

---
Corporation ID: f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1763504517"></span>
</div>