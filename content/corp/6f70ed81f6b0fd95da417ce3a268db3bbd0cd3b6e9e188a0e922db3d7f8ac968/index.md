---
title: ​喵喵喵喵喵喵喵
description: W:0 L:7 D:2 Bonus ❌ 2%
image: ./favicon.png
Summary: ↔️ 0 - 0 **The Galxey █**
date: 2024-04-20T18:05:40.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 2%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1095 🔻  (-4)|
| ELO Competitive | 1144 🔻  (-3)|
| Total Matches | 9 |
| Wins | 0 |
| Losses | 7 |
| Draws | 2 |
| Flagship | 2 |

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
        let timestamps = [1713204340,1712771839,1712771829,1712336023,1711739769,1711643981,1711210399,1710749220,1710720948];

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
| [遨游星空 kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) | 0 | 3 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ↔️ | 2024/04/20 | 0-0 | [The Galxey █](https://ws.tsl.rocks/corp/d52cda2701dd013db91403bab0ff5972e0d9f3a13f842daf8d633025835a6b19/) |
| ❌ | 2024/04/15 | 0-1 | [遨游星空 kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) |
| ❌ | 2024/04/15 | 0-1 | [遨游星空 kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) |
| ↔️ | 2024/04/10 | 0-0 | [Rebellion\!](https://ws.tsl.rocks/corp/43daf4a5a2ec7f33566ebf93d9e37b36ebc9e0f4f982dbfac8c7ce7d5789e891/) |
| ❌ | 2024/04/03 | 0-1 | [欢迎国人](https://ws.tsl.rocks/corp/f32abd112fe2b826948a3538a51097b9114815930ec77ad11ada1b24ce34578d/) |
| ❌ | 2024/04/02 | 0-2 | [三体舰队](https://ws.tsl.rocks/corp/4f07d6381e25833973d274b90a76aa73a9cac9b3f93a5279e2b0375f1108eb3a/) |
| ❌ | 2024/03/28 | 0-2 | [遨游星空 kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) |
| ❌ | 2024/03/23 | 0-4 | [Saiyan Empire](https://ws.tsl.rocks/corp/6ce5e1ac078a6c9bcc97cd02556b9015bc614c88ed6a48e3681697c0beb4c164/) |
| ❌ | 2024/03/23 | 0-24 | [初始之音](https://ws.tsl.rocks/corp/79f48676f0ad15541a751311b97bae91c977d65480891a675585fc396c20bdb9/) |

---
Corporation ID: 6f70ed81f6b0fd95da417ce3a268db3bbd0cd3b6e9e188a0e922db3d7f8ac968

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1713636340"></span>
</div>