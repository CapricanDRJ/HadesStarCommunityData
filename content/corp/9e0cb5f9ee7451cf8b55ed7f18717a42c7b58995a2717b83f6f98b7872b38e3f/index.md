---
title: ​Farland Ind\.
description: W:21 L:39 D:1 Bonus ❌ 15%
image: ./favicon.png
Summary: ❌ 34 - 35 **Nearland Ind**
date: 2026-02-01T15:45:30.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=white><color=yellow>Proud member of the UIH Family.</color>

Friendly & active rs9 - 11.
Weekly comp & casual WS.

Join via Discord: N3uPEvsFY9</color>
```
<br>

### [Discord](https://discord.gg/vPsNNxs)
### Whitestar Bonus ❌ 15%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1125 🔻  (-4)|
| ELO Competitive | 1339 🔻  (-1)|
| Total Matches | 61 |
| Wins | 21 |
| Losses | 39 |
| Draws | 1 |
| Streak Record | 6 |
| Flagship | 12 |

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
        let timestamps = [1769528730,1768873726,1767655690,1767081515,1766549130,1765986074,1765360538,1765316682,1764536057,1764100345,1763511476,1762922605,1762179574,1761637856,1761636654,1761055819,1760535648,1759994500,1759330466,1758537569,1758056184,1757590767,1757008794,1756396012,1755781826,1754581663,1754099081,1753294389,1752042579,1751494200,1750849667,1749562003,1748499169,1740983912,1720825201,1713172222,1712564663,1711273201,1710792458,1710671960,1710092962,1710061707,1709410887,1708909679,1708879029,1707124709,1706510764,1705924460,1705314117,1704624138,1704016501,1703505614,1703434998,1702908869,1702805182,1701622539,1700992898,1700383085,1699799052,1699366541,1698824736];

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
| [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) | 1 | 1 | 0 | 2 |
| [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) | 0 | 2 | 0 | 2 |
| [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) | 0 | 2 | 0 | 2 |
| [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) | 2 | 0 | 0 | 2 |
| [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) | 0 | 2 | 0 | 2 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 3 | 0 | 0 | 3 |
| [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) | 1 | 1 | 0 | 2 |
| [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) | 0 | 3 | 0 | 3 |
| [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) | 0 | 2 | 0 | 2 |
| [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) | 0 | 3 | 0 | 3 |
| [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) | 2 | 2 | 0 | 4 |
| [Orion](https://ws.tsl.rocks/corp/3d5598faa0e14983b9b97d4a0fe14d2a611045dea7e68f22834d7038493c8f39/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/01 | 34-35 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2026/01/25 | 3-26 | [Auscorp](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ❌ | 2026/01/10 | 8-16 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2026/01/04 | 21-50 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2025/12/29 | 3-35 | [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) |
| ✅ | 2025/12/22 | 35-6 | [EZCO](https://ws.tsl.rocks/corp/cfad990cabcdc1326c0aa3f93a57d1f0e6ec3cd2949e01e6b08443c3af8282f1/) |
| ❌ | 2025/12/15 | 4-47 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2025/12/14 | 44-10 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2025/12/05 | 6-8 | [Спутник](https://ws.tsl.rocks/corp/0ae15c4db6dc8c3f4bf3eb6aa93bffd4ea9281b06b721ab103c0078646bfe58c/) |
| ❌ | 2025/11/30 | 8-35 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ✅ | 2025/11/24 | 45-0 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ✅ | 2025/11/17 | 34-0 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2025/11/08 | 10-14 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2025/11/02 | 8-18 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ❌ | 2025/11/02 | 13-29 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/10/26 | 3-14 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2025/10/20 | 6-8 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2025/10/14 | 21-4 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/10/06 | 10-14 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2025/09/27 | 51-6 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ✅ | 2025/09/21 | 25-6 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ✅ | 2025/09/16 | 33-8 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2025/09/09 | 33-0 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2025/09/02 | 47-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2025/08/26 | 32-6 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2025/08/12 | 9-68 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2025/08/07 | 4-19 | [莫比乌斯\-星环](https://ws.tsl.rocks/corp/f880db6adc517a83cc7c539551b160f5a90ac67a8ac62f8ae1edcbb40fff043c/) |
| ❌ | 2025/07/28 | 17-36 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ✅ | 2025/07/14 | 16-11 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ❌ | 2025/07/07 | 6-39 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ✅ | 2025/06/30 | 24-3 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/06/15 | 20-36 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ✅ | 2025/06/03 | 19-11 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2025/03/08 | 21-30 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/07/17 | 17-32 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2024/04/20 | 33-46 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2024/04/13 | 29-36 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2024/03/29 | 24-0 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ❌ | 2024/03/23 | 16-44 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ↔️ | 2024/03/22 | 29-29 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ✅ | 2024/03/15 | 21-4 | [The Watchers](https://ws.tsl.rocks/corp/62a08ec3521bd62e5c8fbfc03c7d99fbf3e30fd1df80716485c9b989b27771e6/) |
| ❌ | 2024/03/15 | 29-33 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ✅ | 2024/03/07 | 34-9 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2024/03/02 | 0-41 | [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) |
| ❌ | 2024/03/01 | 12-32 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/02/10 | 22-31 | [Polish Pirates](https://ws.tsl.rocks/corp/e73d410a73bca6a1161056891e484b32cac940c0d94d20c92ed085683524652b/) |
| ❌ | 2024/02/03 | 22-30 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2024/01/27 | 40-53 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2024/01/20 | 30-25 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2024/01/12 | 13-22 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ❌ | 2024/01/05 | 45-51 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2023/12/30 | 21-41 | [Orion](https://ws.tsl.rocks/corp/3d5598faa0e14983b9b97d4a0fe14d2a611045dea7e68f22834d7038493c8f39/) |
| ❌ | 2023/12/29 | 0-31 | [Black Sun](https://ws.tsl.rocks/corp/696ca774d5aafa8bb17ba1f82e16b8751b9775c85e733177827be58093cd7b9e/) |
| ❌ | 2023/12/23 | 12-40 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2023/12/22 | 46-1 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2023/12/08 | 21-33 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2023/12/01 | 3-37 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ✅ | 2023/11/24 | 37-18 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ❌ | 2023/11/17 | 30-66 | [Orion](https://ws.tsl.rocks/corp/3d5598faa0e14983b9b97d4a0fe14d2a611045dea7e68f22834d7038493c8f39/) |
| ✅ | 2023/11/12 | 33-23 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ❌ | 2023/11/06 | 17-34 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |

---
Corporation ID: 9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1769960730"></span>
</div>