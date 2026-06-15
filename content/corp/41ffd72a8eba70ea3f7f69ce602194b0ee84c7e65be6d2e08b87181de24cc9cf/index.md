---
title: ​Dark Sun
description: W:6 L:12 D:2 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 14 **Aeon**
date: 2025-08-31T06:16:28.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
need active players. If you want to participate in WS you have to joi
n the discord. Trading and co-op RS also available.
```
<br>

### [Discord](https://discord.gg/https://discord.gg/DpavCfx8XJ)
### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1126 🔻  (-11)|
| ELO Competitive | 1204 🔻  (-14)|
| Total Matches | 20 |
| Wins | 6 |
| Losses | 12 |
| Draws | 2 |
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
        let timestamps = [1756188988,1705026831,1704442927,1703947381,1703947381,1703514931,1703247765,1703073757,1702544615,1702427407,1702082672,1701816694,1701625546,1701319594,1701095688,1700813162,1700640949,1700369261,1700168797,1699680312];

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
| ❌ | 2025/08/31 | 0-14 | [Aeon](https://ws.tsl.rocks/corp/5e4b3d6d6f08dee95abbb170211af935c564afdbc3039ee0a6f333070688724e/) |
| ❌ | 2024/01/17 | 0-16 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2024/01/10 | 0-13 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ❌ | 2024/01/04 | 11-33 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/01/04 | 0-6 | [하데스 스타 코리아](https://ws.tsl.rocks/corp/36ae3ca01b555bd695500062530b53a2b19cc9d4bab087051ea8775124723e94/) |
| ✅ | 2023/12/30 | 8-0 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ❌ | 2023/12/27 | 1-10 | [ES Gaming](https://ws.tsl.rocks/corp/1bbc4390e9fa60fe312b23c8fa8d8f9eb499307607a4c3304e33bd05bd58f981/) |
| ↔️ | 2023/12/25 | 3-3 | [星光禁卫](https://ws.tsl.rocks/corp/8a3e5d55227ad679805b549aca87a2bc5acb1215ccd2af913592418385eccd25/) |
| ❌ | 2023/12/19 | 1-3 | [Krasse Bros](https://ws.tsl.rocks/corp/ec8df719929b564225592da878034621da81f0c95a84a1afdee1b2c8389374fb/) |
| ❌ | 2023/12/18 | 1-7 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ↔️ | 2023/12/14 | 5-5 | [Axioma](https://ws.tsl.rocks/corp/2ec904c87d0183a49e22dc53508fa5c75d6e638e3a152a30336831697c60e91e/) |
| ❌ | 2023/12/10 | 1-2 | [Br Stark Corps](https://ws.tsl.rocks/corp/bb363d47e9cd8710d6808f6dcc2d270bdf33614e63ea6e0943bb739cde625f27/) |
| ✅ | 2023/12/08 | 7-0 | [SEK\-SPACE ORDER](https://ws.tsl.rocks/corp/de889a16f8f6f7dbd3e87e8810f40b48608df199fe1286e8bf1a8043887e105d/) |
| ❌ | 2023/12/05 | 1-17 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2023/12/02 | 9-2 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2023/11/29 | 0-6 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ✅ | 2023/11/27 | 4-0 | [中国航天科技集团（CASC）](https://ws.tsl.rocks/corp/5024f778d2fe0d25c933dc6e56223693e3ce83954ff4cf6f56e1b5c9f0721763/) |
| ✅ | 2023/11/24 | 3-0 | [Red Star Banker](https://ws.tsl.rocks/corp/47861eafb6c6a5bc72a9dc43f6a29149bcb50ec54bb513e8d5a7c4f8615717ad/) |
| ❌ | 2023/11/21 | 4-5 | [Thurn and Taxis](https://ws.tsl.rocks/corp/939f4ddbd0899d72f9627fd7461a0946778e48ae9b168cf4535b483852de3f36/) |
| ✅ | 2023/11/16 | 2-1 | [星海共同体](https://ws.tsl.rocks/corp/8716d843d76ec96cdd36cd0de81fbfca825b2ca4195be28dd27973962e1a0e7e/) |

---
Corporation ID: 41ffd72a8eba70ea3f7f69ce602194b0ee84c7e65be6d2e08b87181de24cc9cf

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1756620988"></span>
</div>