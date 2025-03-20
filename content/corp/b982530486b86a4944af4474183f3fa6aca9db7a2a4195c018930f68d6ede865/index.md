---
title: ​ 边域
description: W:8 L:13 D:1 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 0 - 1 **РARADISЕ**
date: 2025-03-14T01:57:10.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
欢迎各位萌新加入。
```
<br>

### [Discord](https://discord.gg/JXaTpU9Q)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1138 🔻  (1237)|
| ELO Competitive | 1157 🔻  (1276)|
| Total Matches | 22 |
| Wins | 8 |
| Losses | 13 |
| Draws | 1 |
| Streak Record | 3 |
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
        let timestamps = [1741485430,1740815612,1739933510,1738501124,1738046450,1737537948,1737089954,1736656884,1736168519,1735721850,1735281718,1734828933,1734393255,1733957563,1733492708,1723980671,1723515435,1723081497,1722946267,1722647255,1722187785,1721724969];

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
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
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
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
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
| ❌ | 2025/03/14 | 0-1 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ❌ | 2025/03/06 | 0-5 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2025/02/24 | 1-0 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2025/02/07 | 1-3 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/02/02 | 3-5 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ✅ | 2025/01/27 | 4-0 | [苏维埃联邦](https://ws.tsl.rocks/corp/4b067d39aa68bf846ec24a1af1a1038844cfa78699d1190f74a77b1745e148ac/) |
| ✅ | 2025/01/22 | 3-0 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ❌ | 2025/01/17 | 0-4 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/01/11 | 0-15 | [萌新集团](https://ws.tsl.rocks/corp/cda6bb5c1bf595967bd6f4a2e94f7c7fcc50df3774ccee7939822c252b9cd224/) |
| ❌ | 2025/01/06 | 1-7 | [银河护卫队](https://ws.tsl.rocks/corp/e522df7ad34eabee08393efb864d53bdc897d0ad187170616d6ef924df5c7267/) |
| ❌ | 2025/01/01 | 2-10 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ↔️ | 2024/12/27 | 1-1 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ❌ | 2024/12/21 | 0-14 | [АарнСарт ](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |
| ❌ | 2024/12/16 | 2-8 | [太阳系集团](https://ws.tsl.rocks/corp/50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6/) |
| ❌ | 2024/12/11 | 1-4 | [AlyTec Sys\.](https://ws.tsl.rocks/corp/4f98eeb43077d5c00a32f9810352931d8778fb5b24d8b49c318953d489f07df0/) |
| ✅ | 2024/08/23 | 7-0 | [𝖕𝖎𝖗𝖆𝖙𝖊𝖘](https://ws.tsl.rocks/corp/dfa303324f73956393169d9ab02646eb1f9492b8ec55b01c604befbd33461821/) |
| ✅ | 2024/08/18 | 13-1 | [超新星联盟](https://ws.tsl.rocks/corp/c3667794c88fd0a09f565dc3b4fed5325f131a616d01d0f6890755b44997d0a1/) |
| ❌ | 2024/08/13 | 0-4 | [Brasil](https://ws.tsl.rocks/corp/c1d98a4e0a9c522aff7cb4156b0dc139eb54566269c2203b2eae6fe1827fc6c3/) |
| ✅ | 2024/08/11 | 10-0 | [使命白星分团](https://ws.tsl.rocks/corp/756b9e1ef6c71e6a6b21c9859364c3bb6db5b24082327b1ea0f2b790cb49ef75/) |
| ✅ | 2024/08/08 | 7-3 | [Armored Union ](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ✅ | 2024/08/02 | 7-3 | [Red Suns](https://ws.tsl.rocks/corp/4723a7ddfdf84d63bb4a6e897d77183874e4abd0d5f04c8c6470cb3141dd8629/) |
| ❌ | 2024/07/28 | 0-24 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |

---
Corporation ID: b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1741917430"></span>
</div>