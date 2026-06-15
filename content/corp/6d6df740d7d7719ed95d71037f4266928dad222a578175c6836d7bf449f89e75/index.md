---
title: ​Majapahit
description: W:6 L:2 D:0 Bonus ❌ 9%
image: ./favicon.png
Summary: ❌ 0 - 39 **BrazilCorp\.**
date: 2024-08-22T15:28:27.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Bersatu kita teguh,
Bercerai ya kawin lagi.

Discord :
<color=orange>https://discord.gg/MCDb2Mt</color>
```
<br>

### [Discord](https://discord.gg/https://discord.gg/2yTUSx2x)
### Whitestar Bonus ❌ 9%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1261 🔻  (-7)|
| ELO Competitive | 1269 🔻  (-6)|
| Total Matches | 8 |
| Wins | 6 |
| Losses | 2 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1723908507,1715082037,1713500042,1704725113,1703196381,1702265410,1699851956,1699258965];

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
| ❌ | 2024/08/22 | 0-39 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ✅ | 2024/05/12 | 25-4 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/04/24 | 29-8 | [Legion Prime](https://ws.tsl.rocks/corp/4ec84e26e7ede18156541503f057342cbe9ac9ef9e53c7dbae99993832da067e/) |
| ✅ | 2024/01/13 | 27-0 | [Peak Extraction](https://ws.tsl.rocks/corp/b656a84b60d6de62745eb9059a703b44cca76b6247beeceef5f856f89e4c2d0d/) |
| ✅ | 2023/12/26 | 14-4 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2023/12/16 | 2-3 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2023/11/18 | 16-1 | [Monster AG](https://ws.tsl.rocks/corp/f9d79c5a20dd27fb56804a4e457701041d96291e2cc0debc2d7a3b02ad066653/) |
| ✅ | 2023/11/11 | 23-0 | [Dansk](https://ws.tsl.rocks/corp/6c06d5bbfd511f773338e49569cea4f952af347df4bfe875778a0ccf574f65d7/) |

---
Corporation ID: 6d6df740d7d7719ed95d71037f4266928dad222a578175c6836d7bf449f89e75

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1724340507"></span>
</div>