---
title: ​萌新集团
description: W:9 L:8 D:1 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 8 **QVX**
date: 2025-05-07T01:03:14.000Z
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
| ELO Regular | 1205 🔻  (-18)|
| ELO Competitive | 1236 🔻  (-19)|
| Total Matches | 18 |
| Wins | 9 |
| Losses | 8 |
| Draws | 1 |
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
        let timestamps = [1746147794,1745567618,1745054660,1744420001,1743759076,1741936949,1741327355,1740656646,1740145502,1739638230,1737540713,1736604287,1736168519,1735733633,1734550999,1734099978,1733633648,1732994879];

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
| [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) | 1 | 0 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/05/07 | 0-8 | [QVX](https://ws.tsl.rocks/corp/7332e0f84974c827954677fdba873fd8eaf407e07c4322f503b904a9456b2665/) |
| ↔️ | 2025/04/30 | 0-0 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2025/04/24 | 0-11 | [Destroyer](https://ws.tsl.rocks/corp/a577b516f316e05c647ba59ea2ff3d4b0f0980f1f2dd329bc71e48f08460a613/) |
| ❌ | 2025/04/17 | 5-10 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ✅ | 2025/04/09 | 3-1 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2025/03/19 | 0-12 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2025/03/12 | 0-20 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ❌ | 2025/03/04 | 2-12 | [The Syndicate](https://ws.tsl.rocks/corp/a7da1f6bd313248b8b6e68a1826bffb463c0e4977776708b28d97199f878b88c/) |
| ✅ | 2025/02/26 | 17-1 | [星系联盟](https://ws.tsl.rocks/corp/701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36/) |
| ✅ | 2025/02/20 | 2-0 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ❌ | 2025/01/27 | 0-8 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ✅ | 2025/01/16 | 16-1 | [银钒](https://ws.tsl.rocks/corp/5708fa89476923406d115c0cb58073c5253f64698f1c435ef4918d05c253c7c8/) |
| ✅ | 2025/01/11 | 15-0 | [边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ❌ | 2025/01/06 | 7-10 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ✅ | 2024/12/23 | 15-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/12/18 | 13-0 | [银河护卫队](https://ws.tsl.rocks/corp/e522df7ad34eabee08393efb864d53bdc897d0ad187170616d6ef924df5c7267/) |
| ✅ | 2024/12/13 | 3-2 | [一根飞机](https://ws.tsl.rocks/corp/459077a8d857a7bd7ee9caafa2c5ed27ac2416d2280965dd22d4293302cb9de0/) |
| ✅ | 2024/12/05 | 5-0 | [ДИᏰEPℂДℍTᏰℓ](https://ws.tsl.rocks/corp/a1dad8a2a2c5ab935169d168bc19f8a1db7f12b099358e079cb7221a340345ed/) |

---
Corporation ID: cda6bb5c1bf595967bd6f4a2e94f7c7fcc50df3774ccee7939822c252b9cd224

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1746579794"></span>
</div>