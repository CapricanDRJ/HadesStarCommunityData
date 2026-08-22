---
title: ​Celtic Imperium
description: W:1 L:6 D:1 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 3 - 35 **新手联邦（新经济开发区）**
date: 2024-01-18T11:52:09.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
“He who stands with me shall be my brother.”

Help each other and have fun.
```
<br>

### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1137 🔻  (-7)|
| ELO Competitive | 1140 🔻  (-7)|
| Total Matches | 8 |
| Wins | 1 |
| Losses | 6 |
| Draws | 1 |
| Flagship | 4 |

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
        let timestamps = [1705146729,1704525266,1704049262,1703612904,1703152196,1699820099,1699244245,1698707816];

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
| ❌ | 2024/01/18 | 3-35 | [新手联邦（新经济开发区）](https://ws.tsl.rocks/corp/c7d71837164a41f0f3a49a6fa7a0c6d70a01f245de86b3783940bba2632a8804/) |
| ❌ | 2024/01/11 | 0-20 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ❌ | 2024/01/05 | 4-24 | [From the Fire](https://ws.tsl.rocks/corp/df5d313a4fe6681f19a6d47d364e4611a1e9c840abf8f6978cfa2418cb0e37cf/) |
| ↔️ | 2023/12/31 | 3-3 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2023/12/26 | 5-0 | [СССР 2\.0](https://ws.tsl.rocks/corp/2a77c0d4e05f31ab26b8c73af7f6d0b6ac40368b06a702e4a912edbf09eab65b/) |
| ❌ | 2023/11/17 | 0-16 | [SveaEmpire](https://ws.tsl.rocks/corp/0b7b0db6324bd57c90679186bee968ca5a59c7d4662630bf60d7e97691af2bed/) |
| ❌ | 2023/11/11 | 0-22 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ❌ | 2023/11/04 | 3-14 | [SpaceCowboys](https://ws.tsl.rocks/corp/e6bb3b9dcc40ad7f7c82fd0f7164a99fa6264c05a186ed9f33011a7f315ca507/) |

---
Corporation ID: 58d284836596e89b4f481066ae27a521175a632d88194574f08bf27baa1f9c7a

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1705578729"></span>
</div>