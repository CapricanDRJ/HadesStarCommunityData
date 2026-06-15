---
title: ​Galactic Empire
description: W:1 L:6 D:0 Bonus ❌ 14%
image: ./favicon.png
Summary: ❌ 0 - 34 **Свободный флот**
date: 2024-06-29T09:53:33.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Be a part of something, join the Galactic Empire!
We are recruiting and helping active members.

Member of Space Ghost Alliance (GE, TF, RST, BB, SJ, USA)
Discord: fYBf2GNU7y
```
<br>

### Whitestar Bonus ❌ 14%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1135 🔻  (-16)|
| ELO Competitive | 1153 🔻  (-8)|
| Total Matches | 7 |
| Wins | 1 |
| Losses | 6 |
| Draws | 0 |
| Flagship | 7 |

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
        let timestamps = [1719222813,1718108048,1716864960,1715602123,1714990700,1704676135,1704208829];

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
| ❌ | 2024/06/29 | 0-34 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/06/16 | 16-27 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2024/06/02 | 6-32 | [UniversalCaos](https://ws.tsl.rocks/corp/e26f359b5b99ee70af7b959d528d32687bd940743bc55ae900138469c3fc6d78/) |
| ❌ | 2024/05/18 | 8-34 | [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) |
| ✅ | 2024/05/11 | 19-3 | [Antioch](https://ws.tsl.rocks/corp/6cf52926568f845a630c3fba8370e8afa3a75d315af0f6d0bd891085e6e4425f/) |
| ❌ | 2024/01/13 | 3-25 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2024/01/07 | 0-34 | [혁명군](https://ws.tsl.rocks/corp/712800536cbb3ef3357a2480d86cf971596950ac499e699bb3d99f94d1c65f5f/) |

---
Corporation ID: 72dcb83d090873cff1d27d191205e6a484c8c5b057f4b55f138e631f33037248

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1719654813"></span>
</div>