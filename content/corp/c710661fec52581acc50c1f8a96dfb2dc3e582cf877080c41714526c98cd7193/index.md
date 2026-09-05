---
title: ​Eternal empire
description: W:7 L:15 D:0 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 11 **ЧВК "Котики"**
date: 2024-05-04T07:40:50.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Welcome Eternal Empire, laid back take your time.. it's a game right.
. I love White Stars, but getting a posse together's like pulling tee
th.. so plz, a good show of hands & I'll start one 🖐️
```
<br>

### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1102 🔻  (-9)|
| ELO Competitive | 1176 🔻  (-11)|
| Total Matches | 22 |
| Wins | 7 |
| Losses | 15 |
| Draws | 0 |
| Streak Record | 2 |
| Flagship | 4 |

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
        let timestamps = [1714376450,1712574578,1712065263,1711578486,1711123557,1710698408,1710686387,1710243490,1710017539,1709810205,1709365807,1708896159,1708698728,1708438043,1708020813,1707981445,1707557285,1707519731,1707017428,1707002106,1706484024,1706037759];

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
| [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/05/04 | 0-11 | [ЧВК "Котики"](https://ws.tsl.rocks/corp/b770b833fe257bc6accd1bbe82a887971291dd0038f8aa627a47f3ce063265c0/) |
| ❌ | 2024/04/13 | 0-13 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/04/07 | 0-23 | [The Elite](https://ws.tsl.rocks/corp/a2df28ce949920025afb16d0229e0c14aed7832c217d142307a62622634d395c/) |
| ❌ | 2024/04/01 | 0-19 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2024/03/27 | 2-11 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/03/22 | 0-10 | [Red Suns](https://ws.tsl.rocks/corp/4723a7ddfdf84d63bb4a6e897d77183874e4abd0d5f04c8c6470cb3141dd8629/) |
| ❌ | 2024/03/22 | 0-12 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ✅ | 2024/03/17 | 6-3 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ❌ | 2024/03/14 | 0-6 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ✅ | 2024/03/12 | 7-1 | [探索舰队](https://ws.tsl.rocks/corp/c18acd17d6d643817b2bf8f28c2bf82cae881f0dd6d41528c9cfbe3292a7de29/) |
| ✅ | 2024/03/07 | 2-0 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ❌ | 2024/03/01 | 0-12 | [V0RTEX](https://ws.tsl.rocks/corp/22a12c757b3e065e8ec7a839b80e33339317bb277aeee145f6cde6f473e06f8f/) |
| ❌ | 2024/02/28 | 0-7 | [新兴帝国](https://ws.tsl.rocks/corp/9fa462f31ce0b962d9b98aa9b68477e4a7ad4a97b1b3c0bfcbe3d258ccbafd8b/) |
| ✅ | 2024/02/25 | 5-0 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2024/02/20 | 0-13 | [ShadowSpaceCult](https://ws.tsl.rocks/corp/2a0dfd09353bfa78a5958fa753f7a17a2e76ea4fcb92a2c6a860eae24cde03d6/) |
| ❌ | 2024/02/20 | 1-12 | [Prospectors](https://ws.tsl.rocks/corp/7919c3c38ee794a50b54a2d7a4d0aa78e36cf5a6e35d3e3d6a0c68db2841c167/) |
| ❌ | 2024/02/15 | 0-15 | [Ul'Adri](https://ws.tsl.rocks/corp/d44796a95a2cc6f93a92af4d701a9c6325eff22633f874f43945a1b1d77b5fe7/) |
| ✅ | 2024/02/14 | 6-2 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ❌ | 2024/02/09 | 0-5 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ✅ | 2024/02/08 | 2-0 | [Anarchy G13](https://ws.tsl.rocks/corp/59b3aa9bf4f8cf4944a729f7f72218416d173a0a02ff8e3e2945985eaccf52a4/) |
| ❌ | 2024/02/02 | 1-7 | [N\.P\.C](https://ws.tsl.rocks/corp/e937e643b7c3834e9f8cea1ddf38c5299596fa4b8820bc82f928e45575b6b84b/) |
| ✅ | 2024/01/28 | 2-0 | [titan tv](https://ws.tsl.rocks/corp/30ba418a884a4c2f888c814c6adfd9f30d995c155ccdc8aafa74ae4dc30f1c39/) |

---
Corporation ID: c710661fec52581acc50c1f8a96dfb2dc3e582cf877080c41714526c98cd7193

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1714808450"></span>
</div>