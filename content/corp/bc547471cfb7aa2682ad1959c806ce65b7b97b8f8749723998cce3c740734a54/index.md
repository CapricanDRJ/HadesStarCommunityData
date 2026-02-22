---
title: ​Star War School
description: W:0 L:24 D:7 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 4 **Darknova**
date: 2026-02-03T19:45:17.000Z
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
| ELO Regular | 988 🔻  (-5)|
| ELO Competitive | 1026 🔻  (-5)|
| Total Matches | 31 |
| Wins | 0 |
| Losses | 24 |
| Draws | 7 |
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
        let timestamps = [1769715917,1767485028,1766873622,1766415907,1765763752,1764966705,1764451016,1763999461,1763321892,1762592993,1762084328,1761619657,1761074149,1760629081,1759883569,1759198869,1758717758,1758191674,1757538499,1756647617,1755868694,1755191966,1754591882,1753970217,1753239998,1752616631,1752145386,1750780863,1750117424,1749499507,1749067103];

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
| [Darknova](https://ws.tsl.rocks/corp/2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7/) | 0 | 2 | 0 | 2 |
| [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) | 0 | 1 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/03 | 0-4 | [Darknova](https://ws.tsl.rocks/corp/2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7/) |
| ↔️ | 2026/01/09 | 0-0 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2026/01/01 | 0-11 | [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) |
| ❌ | 2025/12/27 | 0-1 | [沐星楼](https://ws.tsl.rocks/corp/8dc700398a6a7fa7f9903b0ddea4181ff7eb16833cc774d5a1441f81cfcd3538/) |
| ❌ | 2025/12/20 | 0-9 | [TSS](https://ws.tsl.rocks/corp/fd64fa0e5337edc1df77d01d8678148fa49835790f770924f1b6df6daaeac554/) |
| ❌ | 2025/12/10 | 0-3 | [ua online](https://ws.tsl.rocks/corp/44b08e73701f4c4f27862a999db8466f21cb2d041006906eb9d101fe30bdbc91/) |
| ❌ | 2025/12/04 | 0-17 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ❌ | 2025/11/29 | 0-3 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ❌ | 2025/11/21 | 0-15 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ❌ | 2025/11/13 | 0-5 | [Darknova](https://ws.tsl.rocks/corp/2badefc535747c4b2d431ed2e3d48983575a349ac4d5c361576a24521b0accf7/) |
| ❌ | 2025/11/07 | 0-7 | [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) |
| ❌ | 2025/11/02 | 0-6 | [\.\- \.\-\.\. \.\-\.\. \.\-](https://ws.tsl.rocks/corp/f71612c31faaae770d61fd8b88f0fc3e0d2c13e7fc8851439ff4c12c0205fda6/) |
| ↔️ | 2025/10/26 | 0-0 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ↔️ | 2025/10/21 | 0-0 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ↔️ | 2025/10/13 | 0-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ❌ | 2025/10/05 | 0-14 | [宇宙警察](https://ws.tsl.rocks/corp/e351af3589315207a50dad0eefdf5309943c39b25656f0870904e6be9302a082/) |
| ❌ | 2025/09/29 | 0-3 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ❌ | 2025/09/23 | 0-25 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ❌ | 2025/09/15 | 0-3 | [Star Hunters](https://ws.tsl.rocks/corp/55caab6fc860d293950fbff3b0ec848a38a19bea2c3c637c110790f7cb8706e5/) |
| ↔️ | 2025/09/05 | 0-0 | [\[ ВАЛЬГАЛЛА \]](https://ws.tsl.rocks/corp/ed205511f531fc373aa53fbd69d356aa8a18345ee27ac32298610265aee67613/) |
| ❌ | 2025/08/27 | 0-3 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/08/19 | 0-7 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ❌ | 2025/08/12 | 0-16 | [Chiasmus](https://ws.tsl.rocks/corp/5e1e520f8c04bfa18e2f0bdad432fd5788b965dbcbd47d9f351c3d3074aca34d/) |
| ↔️ | 2025/08/05 | 0-0 | [dark news](https://ws.tsl.rocks/corp/392d4555432e2fb7c77ddf78c077aaab6d8cb3da0e36551e8eac0f2d98081d2c/) |
| ❌ | 2025/07/28 | 0-17 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/07/20 | 0-17 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ❌ | 2025/07/15 | 0-3 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ❌ | 2025/06/29 | 0-5 | [Lemmejustwin\!](https://ws.tsl.rocks/corp/3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899/) |
| ↔️ | 2025/06/21 | 0-0 | [避难所](https://ws.tsl.rocks/corp/e2cec33caaaef7f020ed5fb31cb29a2804d8b5ab3a781ab69b08fadac88f7102/) |
| ❌ | 2025/06/14 | 0-8 | [Grand Impire](https://ws.tsl.rocks/corp/951e0a6117eb48cf35f1928c5445d7d509d927d4c6883bcd5b5384430c2e206b/) |
| ❌ | 2025/06/09 | 0-24 | [ONIONS \!\!\!](https://ws.tsl.rocks/corp/8b6a7d0a772cb8d4a888eb3e6d1bb085acef76ec87bf8bb3c72b2d564f796444/) |

---
Corporation ID: bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1770147917"></span>
</div>