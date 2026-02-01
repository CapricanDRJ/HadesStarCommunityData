---
title: ​苏维埃联邦
description: W:0 L:19 D:3 Bonus ❌ 4%
image: ./favicon.png
Summary: ❌ 0 - 2 **One True Empire**
date: 2025-07-10T04:25:43.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
要求：1．和平2．建国．2023年11·13早上·34．（2024年，5月太阳帝国.取代苏联
```
<br>

### [Discord](https://discord.gg/11)
### Whitestar Bonus ❌ 4%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1009 🔻  (-10)|
| ELO Competitive | 1022 🔻  (-8)|
| Total Matches | 22 |
| Wins | 0 |
| Losses | 19 |
| Draws | 3 |
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
        let timestamps = [1751689543,1738658895,1737537948,1737022420,1723445412,1721359845,1720887218,1720183555,1711360691,1710579607,1707908123,1707346050,1706299803,1705762481,1705113074,1704215141,1702977389,1702535600,1702046301,1701578657,1700973364,1700485871];

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
| ❌ | 2025/07/10 | 0-2 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ❌ | 2025/02/09 | 0-9 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/01/27 | 0-4 | [边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ❌ | 2025/01/21 | 0-2 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2024/08/17 | 0-13 | [电磁脉冲集团](https://ws.tsl.rocks/corp/dcb1da78498db8641adb123c1a92ba9ab5f4a68b2a22e41fd8694b912a6d3482/) |
| ↔️ | 2024/07/24 | 0-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2024/07/18 | 0-1 | [银星舰队SSF](https://ws.tsl.rocks/corp/c02d97cc37c082739a7828b6669ee67e2108bbf3d9f33628c650ced9fe04dd06/) |
| ❌ | 2024/07/10 | 0-4 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ↔️ | 2024/03/30 | 0-0 | [Uniones](https://ws.tsl.rocks/corp/9e4f39f6ed94be4c0af3fd6132fb2b757679ee938f7d6faa2ca50fea9f90f443/) |
| ❌ | 2024/03/21 | 0-10 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ❌ | 2024/02/19 | 0-3 | [Weyland Yutani](https://ws.tsl.rocks/corp/9799c33a0ecdcf321ad446a18f4e7f520610d26ec5f13e0c6b7a411dec2e2e46/) |
| ❌ | 2024/02/12 | 0-4 | [星际集团](https://ws.tsl.rocks/corp/5487e6c91bbb3348790aa90be274a471189edab52d1567d86412023e0e501871/) |
| ❌ | 2024/01/31 | 0-7 | [Crucible](https://ws.tsl.rocks/corp/778178a7255ba7f4c8e2fdeb41fb777fb90ecf6e84a3ba79431f055f869521c6/) |
| ❌ | 2024/01/25 | 0-8 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ↔️ | 2024/01/18 | 0-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ❌ | 2024/01/07 | 0-3 | [Nueva Hyperion](https://ws.tsl.rocks/corp/f24b80c3fe753053bd3914fb8921f08ca134d9deba33bf17c73726fe3829ea75/) |
| ❌ | 2023/12/24 | 0-6 | [아베노노](https://ws.tsl.rocks/corp/b6a4ffffbabc8bf90d3ae19467aa6ce98c4a3ceb136af04fd24a43406f8f830f/) |
| ❌ | 2023/12/19 | 0-2 | [Elite2\.0](https://ws.tsl.rocks/corp/7a039367a683ac04f22e6292d73d5bf2088245f47c411e6a7befd45a11740637/) |
| ❌ | 2023/12/13 | 0-7 | [Spacey Bois](https://ws.tsl.rocks/corp/101cbb78dd4a183b76f993a196783666ce03ef19f7b15add41f4608c5082ade5/) |
| ❌ | 2023/12/08 | 0-1 | [korea](https://ws.tsl.rocks/corp/2071b0b6ab886c36f36fb357ab33234b4d364e79aae36f5d3387e8ada44962ac/) |
| ❌ | 2023/12/01 | 0-3 | [Disintegrators](https://ws.tsl.rocks/corp/cbdef8da60308e24e459a21944778e7c06fa40927f67ecbbf136e3c899f717ae/) |
| ❌ | 2023/11/25 | 0-5 | [Ul'Adri](https://ws.tsl.rocks/corp/d44796a95a2cc6f93a92af4d701a9c6325eff22633f874f43945a1b1d77b5fe7/) |

---
Corporation ID: 4b067d39aa68bf846ec24a1af1a1038844cfa78699d1190f74a77b1745e148ac

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1752121543"></span>
</div>