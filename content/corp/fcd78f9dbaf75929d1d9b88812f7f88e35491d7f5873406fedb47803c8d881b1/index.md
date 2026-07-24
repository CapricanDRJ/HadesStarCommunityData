---
title: ​星空夜
description: W:10 L:6 D:2 Bonus ❌ 
image: ./favicon.png
Summary: ↔️ 0 - 0 **九州·养老**
date: 2026-07-22T11:48:40.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1237 🔻  (0)|
| ELO Competitive | 1319 🔺  (3)|
| Total Matches | 18 |
| Wins | 10 |
| Losses | 6 |
| Draws | 2 |
| Streak Record | 4 |
| Flagship | 0 |

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
        let timestamps = [1784288920,1783589930,1783153706,1782703967,1782651694,1782255104,1782209429,1781774361,1781768353,1781335117,1781331812,1780899493,1780448279,1779977812,1779538524,1779087529,1778599932,1778018275];

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
| [自由之地](https://ws.tsl.rocks/corp/9366527781b6e83e1878fe70435b599eca95f395c04484b7862688bfce716c75/) | 1 | 1 | 0 | 2 |
| [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ↔️ | 2026/07/22 | 0-0 | [九州·养老](https://ws.tsl.rocks/corp/3b143b6fd40ce6bbe0369e63a8c4466f2baa4f5346d0bbfc8b9407e58d466763/) |
| ❌ | 2026/07/14 | 0-5 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2026/07/09 | 2-29 | [CubeTech](https://ws.tsl.rocks/corp/87982e2827e90c530babfa485c990438d2387f8999558eb306b678bdf0d11a95/) |
| ✅ | 2026/07/04 | 6-1 | [TheMirrorCorp](https://ws.tsl.rocks/corp/0b6b1efcf003501d33f511ebe6efc06ea16fbdd8a8c51da8b3c79a2be25bb5fd/) |
| ❌ | 2026/07/03 | 3-6 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2026/06/28 | 17-0 | [星瀚协议：守望之城](https://ws.tsl.rocks/corp/8cc8aca54d2881fb3ac64cadf68e0ba57110a758b0f3976e30e19f70dd73cff2/) |
| ✅ | 2026/06/28 | 3-1 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2026/06/23 | 13-0 | [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) |
| ❌ | 2026/06/23 | 0-15 | [自由之地](https://ws.tsl.rocks/corp/9366527781b6e83e1878fe70435b599eca95f395c04484b7862688bfce716c75/) |
| ✅ | 2026/06/18 | 13-2 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2026/06/18 | 0-5 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2026/06/13 | 8-7 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ✅ | 2026/06/08 | 12-0 | [天之始](https://ws.tsl.rocks/corp/74f97ab890d598e052986c864057edf4f04537ea7e142a8dc3aebcf50de4adae/) |
| ✅ | 2026/06/02 | 3-0 | [自由之地](https://ws.tsl.rocks/corp/9366527781b6e83e1878fe70435b599eca95f395c04484b7862688bfce716c75/) |
| ✅ | 2026/05/28 | 6-3 | [Mantle](https://ws.tsl.rocks/corp/a76c018111dc02509e226bf5a45681157183211b818114c21fe78c1f30609eec/) |
| ❌ | 2026/05/23 | 1-9 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2026/05/17 | 4-0 | [Deathwatch](https://ws.tsl.rocks/corp/721ab2f79e826f2b11873555f03672f2e792d867532b453e179dc4dd9cf24704/) |
| ↔️ | 2026/05/10 | 1-1 | [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) |

---
Corporation ID: fcd78f9dbaf75929d1d9b88812f7f88e35491d7f5873406fedb47803c8d881b1

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1784720920"></span>
</div>