---
title: ​ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ
description: W:52 L:73 D:0 Bonus ❌ 15%
image: ./favicon.png
Summary: ❌ 0 - 33 **Españoles**
date: 2026-01-26T08:46:23.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Willkommen bei <color=red>ʙṢ</color>!
Allianz mit Sternenflotte, Diss Liga & Stern Wächter!

<color=#0E967F>"Die einzige Konstante im Universum ist die Veränderun
g." 

Zum Server->95WWyXqrhQ</color>
```
<br>

### [Discord](https://discord.gg/95WWyXqrhQ)
### Whitestar Bonus ❌ 15%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1264 🔻  (-17)|
| ELO Competitive | 1606 🔻  (-9)|
| Total Matches | 125 |
| Wins | 52 |
| Losses | 73 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1768985183,1768984882,1766449382,1766449382,1765912470,1765841269,1765204903,1764675768,1764072400,1760924560,1759354208,1756796372,1756795340,1756113871,1755537546,1755500287,1754281176,1753740951,1753093656,1752469505,1751956342,1751952764,1751317825,1750729185,1750112846,1749616094,1749530152,1748900942,1748321590,1747682430,1747121701,1747121701,1745819168,1744695859,1744694064,1743988469,1743461956,1742793248,1742163650,1741584480,1741031089,1740976198,1740357359,1739918906,1739819738,1739138516,1738651685,1738026621,1737410909,1736736534,1735626071,1735599635,1735075611,1734386345,1733883947,1733214472,1732587633,1731977638,1731313840,1730232339,1729629837,1729543298,1728943460,1728939854,1728337844,1728336041,1727754229,1727734702,1727084721,1727079314,1726476923,1726473018,1725875310,1723504319,1723464043,1722849200,1722844994,1721039188,1720461841,1720445909,1719841852,1719829529,1719307855,1719224315,1718630500,1717397803,1717397202,1716797938,1716797337,1716300067,1715596114,1714984992,1714389669,1713798676,1713181236,1712564663,1712051741,1711357036,1710756395,1710192718,1710178894,1709538587,1709535282,1708933111,1708928905,1707119000,1706564262,1706532099,1705910036,1705901022,1705328541,1705318324,1704617526,1704605807,1704035737,1704016501,1703410652,1703407947,1702803078,1702286144,1701622539,1701077956,1700467539,1699476524,1698880939];

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
| [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) | 0 | 2 | 0 | 2 |
| [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) | 5 | 0 | 0 | 5 |
| [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) | 1 | 2 | 0 | 3 |
| [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) | 0 | 2 | 0 | 2 |
| [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) | 2 | 5 | 0 | 7 |
| [Auscorp](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) | 0 | 2 | 0 | 2 |
| [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) | 2 | 3 | 0 | 5 |
| [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) | 2 | 4 | 0 | 6 |
| [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) | 1 | 3 | 0 | 4 |
| [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) | 0 | 3 | 0 | 3 |
| [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) | 1 | 3 | 0 | 4 |
| [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) | 5 | 1 | 0 | 6 |
| [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) | 2 | 2 | 0 | 4 |
| [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) | 1 | 1 | 0 | 2 |
| [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) | 1 | 6 | 0 | 7 |
| [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) | 1 | 2 | 0 | 3 |
| [The Star League](https://ws.tsl.rocks/corp/f8b4a4ab48d0f4dc8e2d35c049289e4cd31960c34c0d114426164f223cdb5140/) | 2 | 1 | 0 | 3 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 0 | 2 | 0 | 2 |
| [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) | 2 | 0 | 0 | 2 |
| [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) | 1 | 1 | 0 | 2 |
| [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) | 1 | 4 | 0 | 5 |
| [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) | 0 | 2 | 0 | 2 |
| [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) | 1 | 1 | 0 | 2 |
| [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) | 1 | 1 | 0 | 2 |
| [EZCO](https://ws.tsl.rocks/corp/cfad990cabcdc1326c0aa3f93a57d1f0e6ec3cd2949e01e6b08443c3af8282f1/) | 2 | 0 | 0 | 2 |
| [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) | 3 | 0 | 0 | 3 |
| [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/01/26 | 0-33 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2026/01/26 | 1-25 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ✅ | 2025/12/28 | 82-49 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2025/12/28 | 3-39 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/12/21 | 3-46 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2025/12/20 | 76-59 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2025/12/13 | 46-93 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2025/12/07 | 0-23 | [Auscorp](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ❌ | 2025/11/30 | 6-13 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2025/10/25 | 15-7 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2025/10/06 | 9-32 | [Croce del Sud](https://ws.tsl.rocks/corp/d0899d3aea0aaed6c7d87de378c6c82274ff8dcdabad391d44c2f08f98039af1/) |
| ✅ | 2025/09/07 | 13-6 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ✅ | 2025/09/07 | 59-0 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ❌ | 2025/08/30 | 3-59 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2025/08/23 | 45-0 | [柯伊伯带远征军](https://ws.tsl.rocks/corp/32398adc922cc794e11a465894d7c05b991a9fa42402fad019eab4cdf1e6fc57/) |
| ❌ | 2025/08/23 | 11-42 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2025/08/09 | 38-39 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2025/08/02 | 30-14 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2025/07/26 | 54-11 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2025/07/19 | 38-1 | [Gummibärenbande](https://ws.tsl.rocks/corp/7111d11716d236254b3fe2fdc0df09519cbed1ee9cc2c7691983534a3d8e1366/) |
| ❌ | 2025/07/13 | 13-55 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2025/07/13 | 32-23 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2025/07/05 | 43-1 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ✅ | 2025/06/29 | 38-13 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2025/06/21 | 7-21 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/06/16 | 0-32 | [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) |
| ✅ | 2025/06/15 | 49-33 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ✅ | 2025/06/07 | 49-21 | [The Star League](https://ws.tsl.rocks/corp/f8b4a4ab48d0f4dc8e2d35c049289e4cd31960c34c0d114426164f223cdb5140/) |
| ✅ | 2025/06/01 | 26-20 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ❌ | 2025/05/24 | 19-24 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ❌ | 2025/05/18 | 51-66 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2025/05/18 | 73-46 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2025/05/03 | 3-39 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2025/04/20 | 11-36 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ✅ | 2025/04/20 | 37-17 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2025/04/12 | 41-12 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2025/04/05 | 43-34 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/03/29 | 41-56 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ✅ | 2025/03/21 | 55-11 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2025/03/15 | 36-10 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2025/03/08 | 3-44 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ✅ | 2025/03/08 | 42-18 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/03/01 | 35-36 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2025/02/23 | 12-47 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/02/22 | 20-38 | [System Shocker](https://ws.tsl.rocks/corp/ef611dc637eb934f6336d5c7ff8dbe60e251355c55569f1b26300aed1798757f/) |
| ✅ | 2025/02/14 | 34-9 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/02/09 | 31-43 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2025/02/02 | 24-4 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ✅ | 2025/01/25 | 36-3 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ✅ | 2025/01/18 | 53-3 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2025/01/05 | 7-54 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2025/01/04 | 15-33 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2024/12/29 | 38-2 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2024/12/21 | 59-9 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/12/16 | 24-35 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ❌ | 2024/12/08 | 16-63 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2024/12/01 | 22-38 | [Auscorp](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/11/24 | 33-10 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |
| ❌ | 2024/11/16 | 3-31 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2024/11/03 | 0-63 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2024/10/27 | 0-47 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ❌ | 2024/10/26 | 4-63 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/10/19 | 8-29 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |
| ❌ | 2024/10/19 | 16-40 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ✅ | 2024/10/12 | 39-6 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2024/10/12 | 0-54 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2024/10/06 | 10-68 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ❌ | 2024/10/05 | 7-32 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2024/09/28 | 1-36 | [GermanIndustrie](https://ws.tsl.rocks/corp/5d5954b2c9b2decd8836f2b7b9aa404e2f4386ae4fa682b54654459282852986/) |
| ✅ | 2024/09/28 | 36-17 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2024/09/21 | 36-12 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/09/21 | 2-27 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/09/14 | 33-47 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2024/08/17 | 8-24 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ❌ | 2024/08/17 | 1-40 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2024/08/10 | 12-37 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2024/08/10 | 10-30 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/07/20 | 19-25 | [Hamburg AG 2](https://ws.tsl.rocks/corp/d4075195191cabef801494d3accc0e6cc8c09f534fd9203f6e43c9930acffa56/) |
| ❌ | 2024/07/13 | 4-41 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2024/07/13 | 19-63 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2024/07/06 | 3-51 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2024/07/06 | 51-16 | [EZCO](https://ws.tsl.rocks/corp/cfad990cabcdc1326c0aa3f93a57d1f0e6ec3cd2949e01e6b08443c3af8282f1/) |
| ❌ | 2024/06/30 | 10-22 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2024/06/29 | 40-22 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2024/06/22 | 52-59 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ✅ | 2024/06/08 | 18-4 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2024/06/08 | 49-18 | [EZCO](https://ws.tsl.rocks/corp/cfad990cabcdc1326c0aa3f93a57d1f0e6ec3cd2949e01e6b08443c3af8282f1/) |
| ✅ | 2024/06/01 | 30-17 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2024/06/01 | 10-58 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2024/05/26 | 43-14 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2024/05/18 | 18-47 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2024/05/11 | 0-70 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ❌ | 2024/05/04 | 0-47 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ❌ | 2024/04/27 | 22-43 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2024/04/20 | 25-55 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2024/04/13 | 36-29 | [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) |
| ✅ | 2024/04/07 | 22-17 | [Polish Pirates](https://ws.tsl.rocks/corp/e73d410a73bca6a1161056891e484b32cac940c0d94d20c92ed085683524652b/) |
| ✅ | 2024/03/30 | 37-5 | [The Star League](https://ws.tsl.rocks/corp/f8b4a4ab48d0f4dc8e2d35c049289e4cd31960c34c0d114426164f223cdb5140/) |
| ✅ | 2024/03/23 | 50-10 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2024/03/16 | 0-36 | [Trade Station](https://ws.tsl.rocks/corp/7003e286fe1a04aaa63e3aa318c164856c07e251a94b0496757140f5eda72cd7/) |
| ✅ | 2024/03/16 | 38-25 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2024/03/09 | 8-48 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/03/09 | 27-5 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ❌ | 2024/03/02 | 10-42 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ✅ | 2024/03/02 | 50-3 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2024/02/10 | 16-41 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/02/03 | 0-45 | [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) |
| ❌ | 2024/02/03 | 20-41 | [Orion](https://ws.tsl.rocks/corp/3d5598faa0e14983b9b97d4a0fe14d2a611045dea7e68f22834d7038493c8f39/) |
| ❌ | 2024/01/27 | 9-35 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2024/01/27 | 5-21 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ✅ | 2024/01/20 | 46-0 | [Urban Legends](https://ws.tsl.rocks/corp/03bfbe3df58b13546a651bc45ed306b09b2875f4813f6d5954a8868a23138fd9/) |
| ❌ | 2024/01/20 | 28-48 | [The Star League](https://ws.tsl.rocks/corp/f8b4a4ab48d0f4dc8e2d35c049289e4cd31960c34c0d114426164f223cdb5140/) |
| ❌ | 2024/01/12 | 10-18 | [Titan Corp\.](https://ws.tsl.rocks/corp/c87b86a6baab08254d7226396a20c74fe0972f64fab6fee405914076e111193c/) |
| ❌ | 2024/01/12 | 10-41 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2024/01/05 | 12-31 | [Black Sun](https://ws.tsl.rocks/corp/696ca774d5aafa8bb17ba1f82e16b8751b9775c85e733177827be58093cd7b9e/) |
| ✅ | 2024/01/05 | 51-45 | [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) |
| ✅ | 2023/12/29 | 38-10 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2023/12/29 | 7-40 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ✅ | 2023/12/22 | 60-0 | [龙门训练营](https://ws.tsl.rocks/corp/1409829bbf951ca641274ef39dad828f2b4989e603fbe05e5765204058c13923/) |
| ✅ | 2023/12/16 | 42-11 | [ITA](https://ws.tsl.rocks/corp/4b7ed90565c5e7d463f7a7dcecab17ae3f6c93cd6b75b77bece4bfad9cfe9626/) |
| ✅ | 2023/12/08 | 33-21 | [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) |
| ✅ | 2023/12/02 | 21-2 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2023/11/25 | 38-43 | [TROLL SQUAD](https://ws.tsl.rocks/corp/91daecf0251a6a1eee3d92820695d021c1f949e194cc5003d7cdebe59ef4502e/) |
| ❌ | 2023/11/13 | 5-22 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |
| ❌ | 2023/11/06 | 24-37 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |

---
Corporation ID: 85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1769417183"></span>
</div>