---
title: ​Зелёная корпа
description: W:6 L:11 D:0 Bonus ❌ 13%
image: ./favicon.png
Summary: ✅ 34 - 0 **云霄宫**
date: 2026-02-02T09:34:08.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Приходишь, вытирай ноги у входа и здоровайся)
```
<br>

### [Discord](https://discord.gg/fsD7Nfv)
### Whitestar Bonus ❌ 13%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1165 🔺  (11)|
| ELO Competitive | 1221 🔺  (13)|
| Total Matches | 17 |
| Wins | 6 |
| Losses | 11 |
| Draws | 0 |
| Streak Record | 3 |
| Flagship | 10 |

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
        let timestamps = [1769592848,1768750896,1768309459,1767866579,1766991984,1766383875,1753264936,1752487533,1751785056,1709580656,1709056919,1701376097,1701364118,1700928580,1700462431,1699781315,1699275190];

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
| [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/02 | 34-0 | [云霄宫](https://ws.tsl.rocks/corp/c319ac731957c1d658994ab5727dec3d0ccfdcd31b00ee66efbf07be25bdc3e1/) |
| ❌ | 2026/01/23 | 3-34 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2026/01/18 | 0-51 | [Últimafronteira](https://ws.tsl.rocks/corp/27e96f432a078f197bb5e4c34480ccabc05a9ee48e7bb04d95288fda15e94d3c/) |
| ❌ | 2026/01/13 | 3-38 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ✅ | 2026/01/03 | 31-6 | [Odyssee Ltd\.](https://ws.tsl.rocks/corp/c6c54aab0c6efd7dd798f7a71b6091a11a021c385d9d7c901f2c5037f0120322/) |
| ❌ | 2025/12/27 | 11-33 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ❌ | 2025/07/28 | 5-26 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2025/07/19 | 0-40 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2025/07/11 | 3-49 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2024/03/09 | 16-31 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2024/03/03 | 5-2 | [Solysis](https://ws.tsl.rocks/corp/1dd3b30d4fba97df035310d43fa05c50aa4f77867aa67090be08e245b840b1cf/) |
| ❌ | 2023/12/05 | 0-36 | [Proteus Tech](https://ws.tsl.rocks/corp/a9abf464e4301045ae4dbba7a5889a4e49d10e7e21f2e1011d9507cc5c45012b/) |
| ❌ | 2023/12/05 | 10-15 | [Madison Holding](https://ws.tsl.rocks/corp/94722af3fa4392e52b6bb7af15c2225968543a3de313ace4aa939d138600dd17/) |
| ✅ | 2023/11/30 | 13-3 | [Elite](https://ws.tsl.rocks/corp/4ef70b4cf666928ffd82d4e5278e42bb9edc22aa4a1e9d4e3c08ce9865d59fd9/) |
| ✅ | 2023/11/25 | 30-2 | [Dansk](https://ws.tsl.rocks/corp/6c06d5bbfd511f773338e49569cea4f952af347df4bfe875778a0ccf574f65d7/) |
| ✅ | 2023/11/17 | 29-3 | [Star Dust](https://ws.tsl.rocks/corp/b533dfd525b3f3f64aeec35ea69fb8c8ffe7d067243f58e16bc1280ade45fb4f/) |
| ❌ | 2023/11/11 | 10-39 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |

---
Corporation ID: 978fbb6cb32789d7057450a2239b1d6e2bc7730bbdd832f816384d45ec44ac57

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1770024848"></span>
</div>