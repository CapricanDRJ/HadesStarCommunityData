---
title: ​Berlin
description: W:0 L:7 D:3 Bonus ❌ 5%
image: ./favicon.png
Summary: ↔️ 0 - 0 **UMBRELLA**
date: 2026-02-18T15:03:46.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1125 🔺  (3)|
| ELO Competitive | 1143 🔺  (3)|
| Total Matches | 10 |
| Wins | 0 |
| Losses | 7 |
| Draws | 3 |
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
        let timestamps = [1770995026,1770463163,1770006499,1769559018,1769104467,1768443166,1767826627,1767378649,1761093076,1719476739];

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
| ↔️ | 2026/02/18 | 0-0 | [UMBRELLA](https://ws.tsl.rocks/corp/7f156c2e7d5abff02ab9d495f00b6801cbde3e694e655d51a4f2848b53a9519f/) |
| ❌ | 2026/02/12 | 0-7 | [вавилон 5](https://ws.tsl.rocks/corp/9fb82c905e6843abf36a6911b09a7bbe345d48e4e2a0073f1cfb65e8cc164ae5/) |
| ❌ | 2026/02/07 | 0-21 | [万顷稻花](https://ws.tsl.rocks/corp/03386ec0080aee6d7af1877f35b017855540984073077164c8d3ac4203042630/) |
| ❌ | 2026/02/02 | 0-6 | [亚斯特星际集团公司](https://ws.tsl.rocks/corp/b0bc70120c9a3105f31a71a9177edfb73785d4b86fb76655d1fd3acef0b7fcc2/) |
| ↔️ | 2026/01/27 | 0-0 | [Gravitron](https://ws.tsl.rocks/corp/bdb20e0f37f91779fcd17b218e84b6c8ddf5686c5daf7f4444c3b1f267133139/) |
| ❌ | 2026/01/20 | 0-12 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2026/01/12 | 0-10 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ❌ | 2026/01/07 | 0-11 | [QuantumDrift](https://ws.tsl.rocks/corp/6b976a5cc4450c6b5c8a52b762982560b6d5551146a01c0b659deb8eb5043359/) |
| ↔️ | 2025/10/27 | 0-0 | [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) |
| ❌ | 2024/07/02 | 0-1 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |

---
Corporation ID: 4be397f158a4ac8851b4d6f871cfb1b3994de1e41f67d7710ad6e32e271f6034

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771427026"></span>
</div>