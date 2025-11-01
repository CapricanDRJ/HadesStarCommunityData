---
title: ​Russian Style
description: W:11 L:12 D:1 Bonus ❌ 7%
image: ./favicon.png
Summary: ✅ 19 - 0 **U\.S\. SpaceForce**
date: 2025-10-23T17:02:46.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Желание участвовать на БЗ приветствуются)). За участие БЗ повышаю в з
вании
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1231 🔺  (14)|
| ELO Competitive | 1252 🔺  (13)|
| Total Matches | 24 |
| Wins | 11 |
| Losses | 12 |
| Draws | 1 |
| Streak | 7 |
| Streak Record | 7 |
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
        let timestamps = [1760806966,1759893551,1759136069,1757996694,1757440554,1756878996,1756294147,1755833240,1755316068,1754363137,1753339856,1751784454,1734768294,1734242172,1730614862,1710346551,1708061078,1705820781,1704736148,1702900152,1701848214,1700794832,1699838434,1698696389];

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
| [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/10/23 | 19-0 | [U\.S\. SpaceForce](https://ws.tsl.rocks/corp/01e8723b9f204f944886b60122f5eece37a9658814780d032e522d6427a7b2ad/) |
| ✅ | 2025/10/13 | 20-3 | [BlankBoosters](https://ws.tsl.rocks/corp/4785b4fb166ccb4b23d12d1041a31d9b52b59e5284bdf5965805338cbc1c2e33/) |
| ✅ | 2025/10/04 | 6-0 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2025/09/21 | 7-3 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ✅ | 2025/09/14 | 12-3 | [BrbroZ](https://ws.tsl.rocks/corp/30b4148a5831c38d4e258cd0a3e21598dcb3cab51ae585e7035c8900b836d2ba/) |
| ✅ | 2025/09/08 | 10-3 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2025/09/01 | 5-2 | [群星舰队](https://ws.tsl.rocks/corp/ddfc1c2c4548e736216c4c967100647f11ebc33e0a96a3e94c57143df67c8f2e/) |
| ❌ | 2025/08/27 | 8-14 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ❌ | 2025/08/21 | 0-9 | [第五星际](https://ws.tsl.rocks/corp/8f0d25fe4c802f32f4d3d4ad1a84583c5ae98e4a788a1fa260ef9bd70268818b/) |
| ✅ | 2025/08/10 | 10-0 | [love pro 🆗😇😇](https://ws.tsl.rocks/corp/8d77a4c9fb790db4ae3b90e81d6f9ee371645a7f10ef1e5c446fabdb0a7d0cab/) |
| ❌ | 2025/07/29 | 0-21 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2025/07/11 | 0-21 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ❌ | 2024/12/26 | 3-22 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ❌ | 2024/12/20 | 0-10 | [星际联盟（中国）](https://ws.tsl.rocks/corp/1deb8ab45257a86051f9c285bbbe06652a56d93118d8e442a0a30ddd179f4256/) |
| ↔️ | 2024/11/08 | 0-0 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2024/03/18 | 0-6 | [한국인](https://ws.tsl.rocks/corp/f2b2c144f02ec69dfe3bd7fb8d4d1db10d7e3954a2f45937f16daafb0266490e/) |
| ❌ | 2024/02/21 | 0-18 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2024/01/26 | 3-10 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ❌ | 2024/01/13 | 2-5 | [TECH CO](https://ws.tsl.rocks/corp/49f9afe365665b0d622f99306a23e7a2ebd9cf7022ee79c25e08917977ab9d7a/) |
| ❌ | 2023/12/23 | 5-16 | [Cerulean Nebula](https://ws.tsl.rocks/corp/b76233469d1b4590ef63daba47aeb4239d428cb0804768d58f7e891418b91f81/) |
| ✅ | 2023/12/11 | 3-2 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2023/11/29 | 4-0 | [Cygnus X\-1](https://ws.tsl.rocks/corp/d6f95ce95cfaaae99dac0957cbc2a511a7316a779eb62d3938e153687987d791/) |
| ❌ | 2023/11/18 | 3-22 | [Wompwompway](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2023/11/04 | 6-3 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |

---
Corporation ID: db02701745537e2b055f660e59bd465567c4e4b322c16ade37245ed4a40699c8

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1761238966"></span>
</div>