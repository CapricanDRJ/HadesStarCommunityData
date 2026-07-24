---
title: ​LossFarm No\.648
description: W:4 L:3 D:0 Bonus ❌ 12%
image: ./favicon.png
Summary: ❌ 0 - 23 **Ark**
date: 2024-04-07T17:26:28.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
All for farm, farm for all. We farm from other's losses now.

Original bottom tier Alpha Corp from serveral years ago, but no one h
ere would give a shit.

New Discord: nxEZwvgcg3
```
<br>

### Whitestar Bonus ❌ 12%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1217 🔻  (-7)|
| ELO Competitive | 1218 🔻  (-7)|
| Total Matches | 7 |
| Wins | 4 |
| Losses | 3 |
| Draws | 0 |
| Streak Record | 4 |
| Flagship | 8 |

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
        let timestamps = [1712078788,1704820078,1702407870,1701782121,1701247163,1700534263,1699304343];

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
| ❌ | 2024/04/07 | 0-23 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ❌ | 2024/01/14 | 2-21 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ✅ | 2023/12/17 | 35-25 | [Space Donuts](https://ws.tsl.rocks/corp/50895e5bb0a19e8fde1c7f28e39fc0f170cbc2743a9f1ba45a88bce067d99152/) |
| ✅ | 2023/12/10 | 26-7 | [Black Mirror Co](https://ws.tsl.rocks/corp/0f50fbb3940836c7065ddc39d09a4b6b286e8a3adb62ee5f46c3a4c9b74a759e/) |
| ✅ | 2023/12/04 | 43-0 | [우주미아](https://ws.tsl.rocks/corp/2e33086edccff7de82480157f7cfdec520a8472c46402842d4c88cb33b333ab3/) |
| ✅ | 2023/11/26 | 35-2 | [Dark Skai](https://ws.tsl.rocks/corp/97561ceb92954fb6430110c35337554b8a89fa52a7054f402b7e562a99ef48fd/) |
| ❌ | 2023/11/11 | 20-24 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |

---
Corporation ID: 24a90af39014df515d72c65fe52b1b3669bad36e2abbc4d6c04a9eb2466ec4f2

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1712510788"></span>
</div>