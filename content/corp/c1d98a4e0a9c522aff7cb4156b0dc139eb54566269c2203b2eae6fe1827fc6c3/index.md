---
title: ​Brasil
description: W:6 L:9 D:1 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 3 - 18 **Red Alliance**
date: 2025-07-15T15:57:54.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Todos são bem-vindos!! Livres para iniciar Estrelas Brancas. Maior pa
rticipação dentro da corporação é primordial para promoções! Ajude-no
s a crescer!!! 14 dias de inatividade, expulsão para vagas.
```
<br>

### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1180 🔻  (-16)|
| ELO Competitive | 1207 🔻  (-9)|
| Total Matches | 16 |
| Wins | 6 |
| Losses | 9 |
| Draws | 1 |
| Streak Record | 2 |
| Flagship | 3 |

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
        let timestamps = [1752163074,1744575373,1744032341,1740673177,1737134731,1734521846,1732702410,1731957807,1731076718,1728422888,1725897853,1724257412,1723081497,1722291162,1721446090,1720655683];

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
| ❌ | 2025/07/15 | 3-18 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2025/04/18 | 6-25 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ✅ | 2025/04/12 | 9-3 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/03/04 | 0-27 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ❌ | 2025/01/22 | 0-21 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ❌ | 2024/12/23 | 0-8 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |
| ✅ | 2024/12/02 | 10-1 | [Dark Halo](https://ws.tsl.rocks/corp/f6ed7c780faf133d3fe411b9ed88480608a56064328539891d1b4348242954f6/) |
| ↔️ | 2024/11/23 | 2-2 | [边界](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ✅ | 2024/11/13 | 6-0 | [银河护卫队](https://ws.tsl.rocks/corp/e522df7ad34eabee08393efb864d53bdc897d0ad187170616d6ef924df5c7267/) |
| ✅ | 2024/10/13 | 11-3 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ❌ | 2024/09/14 | 0-14 | [SkitleStarOrder](https://ws.tsl.rocks/corp/9462fd612a0624ceac81b5378c972a870fc5117ca12e58f87307cbce2b2c30ae/) |
| ❌ | 2024/08/26 | 5-17 | [SiriusStrawMoo](https://ws.tsl.rocks/corp/c83a5744ea256d2c1fa59660bc0e18e8d01a2a467bc13fec27a8b30f689e220b/) |
| ✅ | 2024/08/13 | 4-0 | [边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ✅ | 2024/08/03 | 9-0 | [The Belters](https://ws.tsl.rocks/corp/1cd5dde249c27c1353d5526f2b41bdaa54d289a3d5eeba035a7a49f382f10a7b/) |
| ❌ | 2024/07/25 | 4-7 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ❌ | 2024/07/15 | 4-5 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |

---
Corporation ID: c1d98a4e0a9c522aff7cb4156b0dc139eb54566269c2203b2eae6fe1827fc6c3

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1752595074"></span>
</div>