---
title: ​V0RTEX
description: W:10 L:9 D:1 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 1 - 3 **한국인**
date: 2024-04-08T17:23:42.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Be active in WS. Grow 500 power each week. Donate 10k daily to Flagsh
ip. Join Discord for communication purposes. Zero tolerance policy fo
r zero communication.
```
<br>

### [Discord](https://discord.gg/https://discord.gg/waZppQMM)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1220 🔻  (-10)|
| ELO Competitive | 1250 🔻  (-10)|
| Total Matches | 20 |
| Wins | 10 |
| Losses | 9 |
| Draws | 1 |
| Streak Record | 5 |
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
        let timestamps = [1712165022,1710440294,1710006420,1709572241,1708896159,1708408455,1707747650,1707297609,1707262158,1706840130,1706789941,1706380041,1706330452,1705762481,1705320127,1704799641,1704294175,1703368283,1702427707,1702115267];

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
| ❌ | 2024/04/08 | 1-3 | [한국인](https://ws.tsl.rocks/corp/f2b2c144f02ec69dfe3bd7fb8d4d1db10d7e3954a2f45937f16daafb0266490e/) |
| ❌ | 2024/03/19 | 3-5 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/03/14 | 8-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ✅ | 2024/03/09 | 8-0 | [Cerulean Nebula](https://ws.tsl.rocks/corp/b76233469d1b4590ef63daba47aeb4239d428cb0804768d58f7e891418b91f81/) |
| ✅ | 2024/03/01 | 12-0 | [Eternal empire](https://ws.tsl.rocks/corp/c710661fec52581acc50c1f8a96dfb2dc3e582cf877080c41714526c98cd7193/) |
| ✅ | 2024/02/25 | 8-0 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ❌ | 2024/02/17 | 7-22 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2024/02/12 | 1-6 | [universe leader](https://ws.tsl.rocks/corp/8d7722faac1d00f0aaa58497484f9b84b89bdf263ab2dc48b2ae14dedf6388f0/) |
| ❌ | 2024/02/11 | 3-16 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2024/02/07 | 6-0 | [Spacey Bois](https://ws.tsl.rocks/corp/101cbb78dd4a183b76f993a196783666ce03ef19f7b15add41f4608c5082ade5/) |
| ❌ | 2024/02/06 | 5-13 | [共产主义舰队](https://ws.tsl.rocks/corp/120341cde0726631443dbaa98c1192b6703daad0119e6c18061f443d2897831e/) |
| ✅ | 2024/02/01 | 6-3 | [j g f h me t y](https://ws.tsl.rocks/corp/47918aa8890d89fb5fc148ee9fdd940dd60ae73de3f7d05ccc54fabed17e1b5f/) |
| ✅ | 2024/02/01 | 5-2 | [新兴帝国](https://ws.tsl.rocks/corp/9fa462f31ce0b962d9b98aa9b68477e4a7ad4a97b1b3c0bfcbe3d258ccbafd8b/) |
| ✅ | 2024/01/25 | 12-0 | [ToC](https://ws.tsl.rocks/corp/72dc408527c06786fa45851f432da731fd63c063d51f4a180b9ae24216e41765/) |
| ✅ | 2024/01/20 | 5-4 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ✅ | 2024/01/14 | 6-3 | [아베노노](https://ws.tsl.rocks/corp/b6a4ffffbabc8bf90d3ae19467aa6ce98c4a3ceb136af04fd24a43406f8f830f/) |
| ❌ | 2024/01/08 | 3-8 | [墨痕白星分部](https://ws.tsl.rocks/corp/b427cd42ba647399d1a25712254def04083c0a9c2d7faa5c77138050f414c0da/) |
| ❌ | 2023/12/28 | 1-5 | [Warp Dominion](https://ws.tsl.rocks/corp/ccd60dbdf5091bcb2d6b0f011ba1a3645e89baed985e2e455b2e1de1412769c5/) |
| ❌ | 2023/12/18 | 0-12 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ↔️ | 2023/12/14 | 0-0 | [ELITE](https://ws.tsl.rocks/corp/eb139c46c9eaf296b3dadaf953613bd2fb966ec6898536714a7e29d1ba1dd4eb/) |

---
Corporation ID: 22a12c757b3e065e8ec7a839b80e33339317bb277aeee145f6cde6f473e06f8f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1712597022"></span>
</div>