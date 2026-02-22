---
title: ​\+SATELLITE•卫星联\+
description: W:8 L:8 D:0 Bonus ❌ 
image: ./favicon.png
Summary: ✅ 4 - 3 **вавилон 5**
date: 2025-08-09T08:19:58.000Z
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
| ELO Regular | 1242 🔺  (15)|
| ELO Competitive | 1267 🔺  (14)|
| Total Matches | 16 |
| Wins | 8 |
| Losses | 8 |
| Draws | 0 |
| Streak | 5 |
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
        let timestamps = [1754295598,1753767354,1753321132,1752852033,1752378227,1751822622,1751382119,1750887536,1750366641,1749931631,1749490790,1749048768,1748590814,1748143386,1747594083,1747147243];

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
| [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/08/09 | 4-3 | [вавилон 5](https://ws.tsl.rocks/corp/9fb82c905e6843abf36a6911b09a7bbe345d48e4e2a0073f1cfb65e8cc164ae5/) |
| ✅ | 2025/08/03 | 11-0 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/07/29 | 7-2 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ✅ | 2025/07/23 | 10-0 | [Vitare Corp](https://ws.tsl.rocks/corp/cf8111b4c468251bed72cbc474c276ac775d53b430a6159c85d7cd81a7db663c/) |
| ✅ | 2025/07/18 | 3-0 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2025/07/11 | 2-9 | [Corellia Corp](https://ws.tsl.rocks/corp/d3813c9aa0d7db5581d7e4799a89837cd3bc6d47bbe2639a295b56f5afc1b93f/) |
| ✅ | 2025/07/06 | 5-1 | [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) |
| ❌ | 2025/06/30 | 0-26 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ✅ | 2025/06/24 | 4-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2025/06/19 | 2-3 | [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) |
| ❌ | 2025/06/14 | 3-5 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/06/09 | 2-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2025/06/04 | 0-65 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2025/05/30 | 1-3 | [QVX](https://ws.tsl.rocks/corp/7332e0f84974c827954677fdba873fd8eaf407e07c4322f503b904a9456b2665/) |
| ❌ | 2025/05/23 | 2-6 | [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) |
| ❌ | 2025/05/18 | 3-8 | [NOVA STRATUM](https://ws.tsl.rocks/corp/93cb26bae33ac6da77da0e1bcb54e9d36ea4bb5e71b85c8fb0f45cd29702a349/) |

---
Corporation ID: 0435e7afc53ca549df7205484bd692be15c4e4773b36a0cdebae12a40149efc9

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1754727598"></span>
</div>