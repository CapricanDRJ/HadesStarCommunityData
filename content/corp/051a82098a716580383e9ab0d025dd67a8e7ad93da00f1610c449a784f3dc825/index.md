---
title: ​ RELAX CZ/SK
description: W:93 L:58 D:0 Bonus ✅ 46%
image: ./favicon.png
Summary: ✅ 43 - 7 **ГОРИЗОНТ**
date: 2025-04-25T22:18:13.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
CZ/SK klan,<br>pro vsechny, kteri chteji pohodovou hru<br><br>WS,  RS
 a DRS<br><br>https://userxinos.github.io/HadesSpace/ 
```
<br>

### [Discord](https://discord.gg/d3bTgrEYmr)
### Whitestar Bonus ✅ 46%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1220 🔺  (396)|
| ELO Competitive | 1600 🔺  (33)|
| Total Matches | 151 |
| Wins | 93 |
| Losses | 58 |
| Draws | 0 |
| Streak Record | 14 |
| Flagship | 10 |

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
        let timestamps = [1745187493,1745177275,1744690158,1744686311,1743988469,1743972547,1743390676,1743374507,1742775823,1742769814,1742166054,1742163650,1741568074,1741566572,1740976198,1740949964,1740369075,1740346243,1739742816,1739739810,1739138516,1739135209,1738535997,1738534795,1737919646,1737918744,1737324065,1737322863,1736728423,1736725118,1736122248,1736110826,1735532623,1735526614,1734919676,1734895340,1734300411,1734292296,1733691654,1733687446,1733118923,1733094892,1732491180,1732479160,1731903113,1731885088,1731296716,1731275084,1730664753,1730549051,1730079684,1730063760,1729452546,1729451344,1728872228,1728849992,1728249496,1728244688,1727636435,1727531256,1727048972,1727036354,1726441471,1726431854,1725830245,1725826038,1725231662,1725221446,1724644385,1724633653,1724015207,1724010698,1723413864,1723403646,1722818668,1722806835,1722239171,1722210026,1721598457,1721596355,1721008881,1720988704,1720410751,1720400836,1719810300,1719802187,1719174139,1719172336,1718571609,1718568603,1717960501,1717960501,1717365352,1717356935,1716751968,1716747459,1716151352,1716145341,1715540235,1715540235,1714939030,1714935424,1714337697,1714331387,1713726274,1713723569,1713124153,1712987122,1712514185,1712513885,1711931855,1711913526,1711308667,1711306262,1710708027,1710707726,1710101077,1710098973,1709494722,1709494722,1708892553,1708892253,1708320709,1708284654,1707719405,1707688461,1707119000,1707076333,1706508060,1706476511,1705866467,1705865265,1705265143,1705258530,1704672530,1704660810,1704056474,1704056173,1703452429,1703452128,1702840951,1702839448,1702237160,1702237160,1701637270,1701629153,1701063091,1701033784,1700422162,1699830922,1699209692];

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
| [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) | 2 | 0 | 0 | 2 |
| [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) | 1 | 1 | 0 | 2 |
| [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) | 3 | 0 | 0 | 3 |
| [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) | 0 | 4 | 0 | 4 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 0 | 2 | 0 | 2 |
| [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) | 4 | 2 | 0 | 6 |
| [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) | 1 | 2 | 0 | 3 |
| [русь ](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) | 0 | 2 | 0 | 2 |
| [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) | 2 | 1 | 0 | 3 |
| [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) | 2 | 5 | 0 | 7 |
| [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) | 2 | 3 | 0 | 5 |
| [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) | 2 | 4 | 0 | 6 |
| [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) | 4 | 4 | 0 | 8 |
| [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) | 4 | 0 | 0 | 4 |
| [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) | 4 | 2 | 0 | 6 |
| [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) | 8 | 0 | 0 | 8 |
| [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) | 3 | 0 | 0 | 3 |
| [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) | 1 | 1 | 0 | 2 |
| [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) | 0 | 2 | 0 | 2 |
| [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) | 3 | 1 | 0 | 4 |
| [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) | 2 | 2 | 0 | 4 |
| [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) | 2 | 0 | 0 | 2 |
| [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) | 1 | 2 | 0 | 3 |
| [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) | 1 | 2 | 0 | 3 |
| [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) | 2 | 0 | 0 | 2 |
| [Любители Пива](https://ws.tsl.rocks/corp/3926c7dd9f82737737ee85bc4f013285cb75f1ef90f5bf4822bf624616570764/) | 2 | 0 | 0 | 2 |
| [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/04/25 | 43-7 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2025/04/25 | 31-40 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2025/04/20 | 12-35 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2025/04/20 | 30-6 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2025/04/12 | 12-41 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2025/04/11 | 14-45 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2025/04/05 | 14-49 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2025/04/04 | 40-4 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ✅ | 2025/03/29 | 34-13 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2025/03/28 | 11-28 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2025/03/21 | 21-20 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/03/21 | 11-55 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2025/03/15 | 53-10 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ❌ | 2025/03/15 | 36-39 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2025/03/08 | 18-42 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2025/03/07 | 13-22 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ❌ | 2025/03/01 | 5-45 | [русь ](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2025/02/28 | 32-13 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2025/02/21 | 39-2 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2025/02/21 | 19-45 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2025/02/14 | 9-34 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2025/02/14 | 14-37 | [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) |
| ❌ | 2025/02/07 | 14-24 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2025/02/07 | 15-27 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2025/01/31 | 36-10 | [The trade pub](https://ws.tsl.rocks/corp/43689e4266357d8b8d3d66d371109d9aed82ee6df47dc6fa0a7c5da735b9863b/) |
| ✅ | 2025/01/31 | 17-7 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2025/01/24 | 14-42 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2025/01/24 | 11-27 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2025/01/18 | 44-6 | [Polaris](https://ws.tsl.rocks/corp/4802fe8a63e61d18eb0407dc5121d8e0e6a81117a7f47998566752e0f8d846f3/) |
| ❌ | 2025/01/17 | 16-17 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2025/01/11 | 28-3 | [ANZAC Warriors](https://ws.tsl.rocks/corp/dbb190c3127dbab2a3d6d58f1f8f63425f1dbd1949f6442fb2d162e66246b484/) |
| ❌ | 2025/01/10 | 8-57 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2025/01/04 | 13-23 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ✅ | 2025/01/04 | 23-11 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2024/12/28 | 19-9 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2024/12/27 | 31-14 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ✅ | 2024/12/20 | 23-4 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2024/12/20 | 26-0 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2024/12/13 | 14-21 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ✅ | 2024/12/13 | 33-8 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/12/07 | 39-18 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2024/12/06 | 23-13 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ❌ | 2024/11/29 | 19-25 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2024/11/29 | 41-8 | [Winged Pheonix](https://ws.tsl.rocks/corp/6b9f3e0b419f79343ffd4a8134703379db0e4591879151cbc3ef6a3ff825a2d3/) |
| ✅ | 2024/11/23 | 50-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/11/22 | 37-22 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ❌ | 2024/11/16 | 7-13 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ❌ | 2024/11/15 | 9-43 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/11/08 | 22-4 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ✅ | 2024/11/07 | 44-8 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2024/11/02 | 10-28 | [русь ](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2024/11/01 | 36-41 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2024/10/25 | 28-10 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2024/10/25 | 21-52 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/10/19 | 24-3 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2024/10/18 | 21-45 | [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) |
| ❌ | 2024/10/11 | 17-39 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2024/10/11 | 22-14 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2024/10/04 | 7-31 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ✅ | 2024/10/03 | 27-6 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ❌ | 2024/09/27 | 12-27 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ❌ | 2024/09/27 | 12-21 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2024/09/20 | 9-43 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ✅ | 2024/09/20 | 62-0 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ❌ | 2024/09/13 | 8-40 | [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) |
| ✅ | 2024/09/13 | 46-0 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ✅ | 2024/09/06 | 39-9 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2024/09/06 | 19-18 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ✅ | 2024/08/31 | 34-5 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2024/08/31 | 23-24 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ✅ | 2024/08/23 | 54-6 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ✅ | 2024/08/23 | 39-11 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ✅ | 2024/08/16 | 46-22 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ✅ | 2024/08/16 | 34-26 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/08/10 | 16-52 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2024/08/09 | 35-25 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2024/08/03 | 13-48 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2024/08/02 | 44-20 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2024/07/26 | 28-24 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ✅ | 2024/07/26 | 46-2 | [Lacuna Holdings](https://ws.tsl.rocks/corp/17f4ece94ed033805ed258868416020d302254e2e3becbd1e25381be7933be76/) |
| ✅ | 2024/07/20 | 59-3 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2024/07/19 | 56-1 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ❌ | 2024/07/13 | 10-19 | [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) |
| ✅ | 2024/07/13 | 55-0 | [Peace Keepers](https://ws.tsl.rocks/corp/7ac71c394c017639785b3ecaa8087bd3b9a9d134e05d22703a3e18217da3380d/) |
| ✅ | 2024/07/06 | 38-8 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ❌ | 2024/07/06 | 19-26 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ❌ | 2024/06/28 | 6-21 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ✅ | 2024/06/28 | 54-0 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ✅ | 2024/06/21 | 44-20 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ✅ | 2024/06/21 | 47-3 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2024/06/14 | 17-21 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2024/06/14 | 34-26 | [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) |
| ✅ | 2024/06/07 | 32-7 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ✅ | 2024/06/07 | 53-0 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ✅ | 2024/05/31 | 58-0 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |
| ✅ | 2024/05/31 | 61-1 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2024/05/24 | 45-11 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2024/05/24 | 11-23 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ✅ | 2024/05/17 | 17-14 | [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) |
| ✅ | 2024/05/17 | 48-4 | [Rogue Corp](https://ws.tsl.rocks/corp/6ad28ede21f9fa3aa044f0af41c7ed474fc432adf4ca1923fa02f6f9ded0028f/) |
| ✅ | 2024/05/10 | 45-0 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ✅ | 2024/05/10 | 28-7 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ❌ | 2024/05/03 | 16-17 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2024/05/03 | 42-36 | [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) |
| ✅ | 2024/04/26 | 44-13 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ✅ | 2024/04/26 | 36-3 | [The Goonies](https://ws.tsl.rocks/corp/12ebe9e9a1c71d9a15f622670c299d2b2193e3e7a9ef18b1773c8b5965cb68ab/) |
| ✅ | 2024/04/19 | 45-2 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ✅ | 2024/04/18 | 38-0 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ❌ | 2024/04/12 | 8-31 | [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) |
| ❌ | 2024/04/12 | 7-19 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2024/04/06 | 2-10 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ❌ | 2024/04/05 | 35-41 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ✅ | 2024/03/29 | 44-6 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ✅ | 2024/03/29 | 41-4 | [CommCody & LPA](https://ws.tsl.rocks/corp/211f33fe81910ba6692148af7d2bc4fe851f48bec79ca579ed16aa0ca50b36bb/) |
| ✅ | 2024/03/22 | 31-3 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2024/03/22 | 44-4 | [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) |
| ✅ | 2024/03/15 | 36-27 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ✅ | 2024/03/15 | 13-8 | [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) |
| ✅ | 2024/03/08 | 47-0 | [Любители Пива](https://ws.tsl.rocks/corp/3926c7dd9f82737737ee85bc4f013285cb75f1ef90f5bf4822bf624616570764/) |
| ✅ | 2024/03/08 | 21-3 | [Odessa](https://ws.tsl.rocks/corp/f509f71fafc573fb7aad51ddd9d82668162fe80073506ca5dc2e68cb795cffea/) |
| ✅ | 2024/03/01 | 43-2 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ✅ | 2024/03/01 | 55-3 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ✅ | 2024/02/24 | 32-6 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ✅ | 2024/02/23 | 41-2 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ✅ | 2024/02/17 | 28-26 | [Enigma](https://ws.tsl.rocks/corp/d901fe833fb2f84db2321a90a63d0466d4288c8c727fb177afdc6bf2c7c56f25/) |
| ✅ | 2024/02/16 | 42-1 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ❌ | 2024/02/10 | 6-21 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2024/02/09 | 43-3 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2024/02/03 | 12-18 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/02/02 | 44-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/01/26 | 19-6 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2024/01/26 | 19-6 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2024/01/19 | 35-10 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2024/01/19 | 26-33 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ✅ | 2024/01/13 | 30-0 | [Gallaecia](https://ws.tsl.rocks/corp/4ab98cfc4948a6b1706e3527686ce3fd29eead3cdf4cf00ee2dfde925ba55515/) |
| ✅ | 2024/01/12 | 41-8 | [TheSpacingGuild](https://ws.tsl.rocks/corp/81148f4d84461a0810381baa8a5c2d755c0aeb635fa98fdc3ca775fbcc255ea7/) |
| ✅ | 2024/01/05 | 39-5 | [The Picard](https://ws.tsl.rocks/corp/e9a6cae99e308f9c70625e04162b887239bea0d52463d7a3ed53464fdd906d0b/) |
| ❌ | 2024/01/05 | 4-14 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ❌ | 2023/12/29 | 8-26 | [On en a Gros \! ](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2023/12/29 | 8-34 | [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) |
| ✅ | 2023/12/22 | 23-12 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2023/12/22 | 7-0 | [We R Bad](https://ws.tsl.rocks/corp/f5cb2c2ba88483bac00f814e32a0d862e4f3a0a10cc614b33ecb9e846766aae0/) |
| ❌ | 2023/12/15 | 2-31 | [Корпорация Миф](https://ws.tsl.rocks/corp/605aa7df348e96fcaa0cb9dc5c1f37a87fb8991ae0694b9ff21d1f4fee54aa88/) |
| ❌ | 2023/12/15 | 4-10 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ✅ | 2023/12/08 | 7-0 | [SveaEmpire](https://ws.tsl.rocks/corp/0b7b0db6324bd57c90679186bee968ca5a59c7d4662630bf60d7e97691af2bed/) |
| ✅ | 2023/12/08 | 33-21 | [Любители Пива](https://ws.tsl.rocks/corp/3926c7dd9f82737737ee85bc4f013285cb75f1ef90f5bf4822bf624616570764/) |
| ❌ | 2023/12/02 | 3-14 | [Sternenflotte](https://ws.tsl.rocks/corp/6273be8c33cae6938fe5608aa5cf5a78e740f71dd888477b437e47ec106c0a0d/) |
| ✅ | 2023/12/01 | 39-8 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2023/11/24 | 46-3 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ✅ | 2023/11/17 | 30-7 | [USSR](https://ws.tsl.rocks/corp/775ec12999c2bb5396801268de447d30104b470d9f093ec4afea9c9db71d7690/) |
| ❌ | 2023/11/10 | 13-27 | [No Orbit©](https://ws.tsl.rocks/corp/15831bc11de2a279f369118ffb2cd889844a6992e769889ad9e64f8ac15a410f/) |

---
Corporation ID: 051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1745619493"></span>
</div>