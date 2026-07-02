---
title: ​U\.P\.E
description: W:13 L:20 D:3 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 3 - 7 **共联·世界**
date: 2026-06-27T03:27:43.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
United People of Earth.  For the betterment of all people of earth!
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1137 🔻  (-9)|
| ELO Competitive | 1185 🔻  (-5)|
| Total Matches | 36 |
| Wins | 13 |
| Losses | 20 |
| Draws | 3 |
| Streak Record | 3 |
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
        let timestamps = [1782098863,1781571268,1780952451,1780469201,1779943260,1779451001,1778971344,1778387199,1777900595,1777287788,1773072732,1772636326,1763451077,1762441556,1761584677,1760750774,1758802990,1749154841,1747912587,1747388997,1746590267,1745970206,1745277947,1744338868,1743741727,1743264786,1742773119,1741922334,1741087874,1740284383,1739289357,1737210763,1734966546,1734386344,1733843933,1700065946];

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
| ❌ | 2026/06/27 | 3-7 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ❌ | 2026/06/21 | 2-26 | [Ainz ooal gown](https://ws.tsl.rocks/corp/9ddbd46282a5ceb0dad9e05cf8434a9afe6398c4d2f3a4d54113fa6298ae6f2d/) |
| ✅ | 2026/06/13 | 5-2 | [天之始](https://ws.tsl.rocks/corp/74f97ab890d598e052986c864057edf4f04537ea7e142a8dc3aebcf50de4adae/) |
| ↔️ | 2026/06/08 | 0-0 | [Star Reapers](https://ws.tsl.rocks/corp/b40da932df91fbbe241269bc24c7b429685d3faca350523ac1760f5c5dfccbc1/) |
| ❌ | 2026/06/02 | 0-18 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ✅ | 2026/05/27 | 1-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2026/05/21 | 1-0 | [Sky](https://ws.tsl.rocks/corp/9285f76649b8d3ca4faf9a9991522efc7f51d7545a60bc8d12a65e23d548a6f1/) |
| ❌ | 2026/05/15 | 3-8 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2026/05/09 | 5-0 | [001\-23](https://ws.tsl.rocks/corp/790662c2084ccccfc01b7d1639992198be537b4040c21dae0a20e650e0667ffc/) |
| ✅ | 2026/05/02 | 3-0 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ❌ | 2026/03/14 | 0-4 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ❌ | 2026/03/09 | 0-5 | [奇点教会](https://ws.tsl.rocks/corp/f78adf8daad3bc332d628d2ff252182fb5e0dd48f5fa2c02220fd3c3ecc856bb/) |
| ❌ | 2025/11/23 | 0-1 | [YU\-GI\-OH](https://ws.tsl.rocks/corp/28f250641a870cb4c3bc77c2320c4892ec2c7006422ca4530475e1f3f372786a/) |
| ↔️ | 2025/11/11 | 0-0 | [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) |
| ❌ | 2025/11/01 | 0-13 | [Galactic WS](https://ws.tsl.rocks/corp/94fe1094db63493e48b53467ad03e8fe564258524ef970aea141833e429788f2/) |
| ❌ | 2025/10/23 | 0-2 | [Junker Nation](https://ws.tsl.rocks/corp/57f12051efed19092f9dce087e27dd9bc0c568ec40e829548316c0d3376984de/) |
| ❌ | 2025/09/30 | 0-9 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ✅ | 2025/06/10 | 1-0 | [Lemmejustwin\!](https://ws.tsl.rocks/corp/3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899/) |
| ❌ | 2025/05/27 | 3-7 | [Bow Down](https://ws.tsl.rocks/corp/402b459520fde5ca47dbb493e4f75201464ab1d46cc1b8dad2f321217265bef4/) |
| ❌ | 2025/05/21 | 3-8 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/05/12 | 12-0 | [СНГ — РОССИЯ](https://ws.tsl.rocks/corp/075394144fa4e771dc8358886dc461b0ed87d948b46e5d817d29296adf2f11f2/) |
| ❌ | 2025/05/04 | 0-18 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ✅ | 2025/04/26 | 8-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/04/16 | 9-0 | [the kings](https://ws.tsl.rocks/corp/e5401c31454641df970c76a211cb6fa604fcad47f1974d42db317169a796b1cc/) |
| ❌ | 2025/04/09 | 0-13 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/04/03 | 10-1 | [pérola negra](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ❌ | 2025/03/28 | 3-16 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ✅ | 2025/03/19 | 3-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2025/03/09 | 1-0 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ✅ | 2025/02/28 | 3-0 | [✨ Love Room✨](https://ws.tsl.rocks/corp/b450313304cec8103f820ba28f338518c4247a57d2035b582ac3c7b45becbe1b/) |
| ❌ | 2025/02/16 | 0-14 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ❌ | 2025/01/23 | 0-15 | [ℬlackStar Order](https://ws.tsl.rocks/corp/03620dd2b01d0a0c2c7b03cb570214cd6c5872eb043bac01dcadeb6244f8d861/) |
| ❌ | 2024/12/28 | 0-3 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2024/12/21 | 0-23 | [Lofty Mountain](https://ws.tsl.rocks/corp/1cfc6606e17d524ba0388b273ad6a9e86b23838eb529a2659f03a40702affbf7/) |
| ↔️ | 2024/12/15 | 0-0 | [Space Invaders](https://ws.tsl.rocks/corp/aad5929a4d7c718c994b2c0d8de9becca4653d6e22d5b9b66aef4fb88a6caced/) |
| ❌ | 2023/11/20 | 0-4 | [The Galxey █](https://ws.tsl.rocks/corp/d52cda2701dd013db91403bab0ff5972e0d9f3a13f842daf8d633025835a6b19/) |

---
Corporation ID: fc06e2f3477d57f180521828616b988b58c6e5f6359dcfdc34b2e1fea93d309d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1782530863"></span>
</div>