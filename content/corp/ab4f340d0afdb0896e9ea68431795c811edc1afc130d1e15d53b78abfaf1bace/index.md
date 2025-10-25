---
title: ​Страж Галактики
description: W:7 L:13 D:5 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 0 - 11 **Darknova**
date: 2025-10-07T20:02:14.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Добро пожаловать в мой мир
```
<br>

### [Discord](https://discord.gg/https://discord.com/invite/WRdbp8Xg)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1125 🔻  (-12)|
| ELO Competitive | 1141 🔻  (-12)|
| Total Matches | 25 |
| Wins | 7 |
| Losses | 13 |
| Draws | 5 |
| Streak Record | 2 |
| Flagship | 1 |

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
        let timestamps = [1759435334,1758985181,1758223527,1757655118,1757125973,1756571925,1755850965,1755380094,1753896562,1753384236,1751668110,1751114672,1750499709,1749104056,1748466422,1748034334,1747596788,1747127525,1746649326,1746105592,1745670065,1745230649,1744737637,1710024150,1700626584];

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
| [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) | 0 | 2 | 0 | 2 |
| [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/10/07 | 0-11 | [Darknova](https://ws.tsl.rocks/corp/2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7/) |
| ❌ | 2025/10/02 | 1-5 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |
| ❌ | 2025/09/23 | 0-14 | [Stargate Sg7](https://ws.tsl.rocks/corp/f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81/) |
| ✅ | 2025/09/17 | 5-0 | [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) |
| ✅ | 2025/09/11 | 5-0 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ❌ | 2025/09/04 | 2-3 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ❌ | 2025/08/27 | 0-21 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ❌ | 2025/08/21 | 3-7 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |
| ❌ | 2025/08/04 | 2-8 | [CAEDRUS \[<o\>\]](https://ws.tsl.rocks/corp/b3c982613964d8287b8f57e57ececf5b9497766670fc306d9827c85fbcdb2887/) |
| ❌ | 2025/07/29 | 3-5 | [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) |
| ↔️ | 2025/07/09 | 0-0 | [边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ✅ | 2025/07/03 | 2-0 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/06/26 | 2-0 | [出入り自由](https://ws.tsl.rocks/corp/daf4851a492fbf57ed1ab085e686bf23827078a6a11ce78cd1ea77d355668704/) |
| ↔️ | 2025/06/10 | 0-0 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ❌ | 2025/06/02 | 0-10 | [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) |
| ✅ | 2025/05/28 | 1-0 | [百万繁星](https://ws.tsl.rocks/corp/4ddca7117df39403f5055b55a86d5a97490a720792aa5efc7d35c5356fbdd4c8/) |
| ↔️ | 2025/05/23 | 3-3 | [pérola negra](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ❌ | 2025/05/18 | 0-10 | [新星工程](https://ws.tsl.rocks/corp/22f9ba6fe47854adceeccbf19b9818b2338270bc2711f18dc2238d12e40f7b32/) |
| ↔️ | 2025/05/12 | 2-2 | [Prosperity](https://ws.tsl.rocks/corp/a78b903885754b355b532fb47d983aa5725cb7c73c25e75dbfe4c440cdfffec0/) |
| ❌ | 2025/05/06 | 0-9 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/05/01 | 1-0 | [The Foundation](https://ws.tsl.rocks/corp/dc528cdac6ee1f7bf4a20eeb16e7eea80e03a004a5fea4cd97727f6d57c0e9fe/) |
| ❌ | 2025/04/26 | 1-3 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ❌ | 2025/04/20 | 0-1 | [empire](https://ws.tsl.rocks/corp/c59bf8dfb57f9bfc0a87735b00299b45d32d3607628d7879e2bd9711fec3e90f/) |
| ↔️ | 2024/03/14 | 0-0 | [U\.Y\.E\.U\.](https://ws.tsl.rocks/corp/504f779e55c2d1bc5ff35b4540c0bb60421bd8bce70c3eb0caf45fd73915ec86/) |
| ✅ | 2023/11/27 | 1-0 | [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) |

---
Corporation ID: ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1759867334"></span>
</div>