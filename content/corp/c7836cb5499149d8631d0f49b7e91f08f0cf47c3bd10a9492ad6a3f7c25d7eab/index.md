---
title: ​Hellfire Club
description: W:95 L:89 D:1 Bonus ❌ 16%
image: ./favicon.png
Summary: ✅ 28 - 7 **ГОРИЗОНТ**
date: 2026-02-15T04:55:13.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Wir bieten: gemeinsame rr/drr bis 11, wöchentliche WZ, Spaß, Tipps, H
ilfe, Spiele mit Ingamepreisen und einen sehr gut genutzten Discordse
rver. Anfänger willkommen, wir helfen dir gerne! Okt/24
```
<br>

### [Discord](https://discord.gg/https://discord.com/invite/a5t3JQP2hM)
### Whitestar Bonus ❌ 16%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1405 🔺  (4)|
| ELO Competitive | 1777 🔺  (4)|
| Total Matches | 185 |
| Wins | 95 |
| Losses | 89 |
| Draws | 1 |
| Streak | 7 |
| Streak Record | 7 |
| Flagship | 8 |

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
        let timestamps = [1770699313,1770695170,1770070496,1770059979,1769481862,1769455724,1768945833,1768933812,1768245167,1768238855,1767646676,1767627747,1767035552,1767034349,1766520291,1766486331,1765826543,1765821134,1765204602,1765192883,1764594642,1764586829,1764088025,1764083818,1763393096,1763385883,1762781400,1762774789,1762201812,1762179574,1761643563,1761640259,1760963499,1760947275,1760426589,1760422382,1759779078,1759764951,1759257157,1759256856,1758570629,1758566421,1757970862,1757357634,1757356432,1756797874,1756797574,1756229252,1756218734,1755496382,1755495480,1754906199,1754903494,1754393554,1754389348,1753777569,1753682914,1753128519,1753093656,1752542829,1752532614,1751971664,1751969260,1751364690,1751358981,1750755021,1750743906,1750089402,1750079481,1749546076,1749543673,1748870883,1748854053,1748274715,1748264796,1747657178,1747651769,1747121701,1747121701,1746440776,1746429659,1745835092,1745323014,1744714795,1744700373,1744029335,1743429794,1742813383,1742212322,1741612239,1740994426,1740402126,1739791184,1739183882,1738582867,1737977935,1737476111,1737379047,1736928869,1736767482,1736260780,1736246952,1735751365,1735308160,1734352685,1733738518,1733133043,1732530535,1731935264,1731918435,1731334876,1731325258,1730722138,1730711620,1730108827,1730063760,1729509030,1728889956,1728305682,1728290057,1727775862,1727670386,1727075708,1726484735,1725879517,1725867498,1725272820,1724660996,1724059677,1723450220,1722843191,1722241874,1721657354,1721034980,1720423071,1719823219,1719307855,1718604957,1718004973,1718003470,1717439285,1716829799,1716802145,1716200619,1715590707,1714998812,1714390871,1713772837,1713172222,1712565564,1712562860,1712032814,1711962499,1711446574,1711399107,1710796365,1710759701,1710158459,1709558417,1708953543,1708946932,1708340540,1708336633,1707734728,1707731123,1707125611,1707125310,1706526990,1706525187,1705939187,1705912741,1705328241,1705317723,1704716097,1704706480,1704108454,1703505915,1702889934,1702280133,1701535681,1701069242,1700469943,1699862774,1699257764,1698695788];

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
| [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) | 4 | 0 | 0 | 4 |
| [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) | 5 | 3 | 0 | 8 |
| [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) | 1 | 1 | 0 | 2 |
| [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) | 4 | 0 | 0 | 4 |
| [WinterComes](https://ws.tsl.rocks/corp/a8f3bbc084fca4434869893ccbfca6c52960e64ee5db87ef257d706194a2f596/) | 2 | 0 | 0 | 2 |
| [ANZAC Warriors](https://ws.tsl.rocks/corp/dbb190c3127dbab2a3d6d58f1f8f63425f1dbd1949f6442fb2d162e66246b484/) | 0 | 2 | 0 | 2 |
| [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) | 1 | 1 | 0 | 2 |
| [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) | 1 | 1 | 0 | 2 |
| [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) | 1 | 2 | 0 | 3 |
| [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) | 2 | 1 | 0 | 3 |
| [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) | 0 | 2 | 0 | 2 |
| [Best](https://ws.tsl.rocks/corp/bd123b7fcde92215ca4105138efc2319522ee5f2e23c925a0f2aa73adf49261a/) | 2 | 0 | 0 | 2 |
| [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) | 1 | 2 | 0 | 3 |
| [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) | 3 | 7 | 0 | 10 |
| [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) | 3 | 1 | 0 | 4 |
| [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) | 2 | 0 | 0 | 2 |
| [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) | 1 | 1 | 0 | 2 |
| [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) | 1 | 4 | 0 | 5 |
| [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) | 1 | 3 | 0 | 4 |
| [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) | 0 | 4 | 0 | 4 |
| [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) | 1 | 1 | 0 | 2 |
| [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) | 0 | 6 | 0 | 6 |
| [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) | 2 | 0 | 0 | 2 |
| [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) | 1 | 1 | 0 | 2 |
| [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) | 2 | 0 | 0 | 2 |
| [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) | 2 | 2 | 0 | 4 |
| [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) | 2 | 2 | 0 | 4 |
| [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) | 1 | 2 | 0 | 3 |
| [No Orbit©](https://ws.tsl.rocks/corp/15831bc11de2a279f369118ffb2cd889844a6992e769889ad9e64f8ac15a410f/) | 1 | 1 | 0 | 2 |
| [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) | 1 | 3 | 0 | 4 |
| [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) | 2 | 2 | 0 | 4 |
| [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) | 2 | 1 | 0 | 3 |
| [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) | 0 | 4 | 0 | 4 |
| [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) | 0 | 3 | 0 | 3 |
| [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) | 0 | 4 | 0 | 4 |
| [New Horizons](https://ws.tsl.rocks/corp/35fd5f8a42c94496c737f097b09c66f0bcbdd0fe32fdf71009568e283922d37c/) | 2 | 1 | 0 | 3 |
| [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) | 2 | 0 | 0 | 2 |
| [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) | 1 | 1 | 0 | 2 |
| [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) | 2 | 1 | 0 | 3 |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 2 | 0 | 0 | 2 |
| [Game of Stars](https://ws.tsl.rocks/corp/ad5bb68e6076ee70e6715ecead226fc9880b66a87b68acb3098843f723c1562e/) | 2 | 0 | 0 | 2 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 2 | 0 | 0 | 2 |
| [Hamburg AG 2](https://ws.tsl.rocks/corp/d4075195191cabef801494d3accc0e6cc8c09f534fd9203f6e43c9930acffa56/) | 0 | 2 | 0 | 2 |
| [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) | 2 | 0 | 0 | 2 |
| [Lights Off](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) | 1 | 2 | 0 | 3 |
| [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) | 0 | 3 | 0 | 3 |
| [Space Oddity](https://ws.tsl.rocks/corp/a6d7cf2a6e8e92b03bf941f153a423ecc9483e3acb878d8658a1ca7f33abad81/) | 3 | 1 | 0 | 4 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/15 | 28-7 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ✅ | 2026/02/15 | 36-3 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2026/02/07 | 27-6 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2026/02/07 | 9-8 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2026/02/01 | 8-6 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2026/01/31 | 52-0 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ✅ | 2026/01/25 | 24-5 | [WinterComes](https://ws.tsl.rocks/corp/a8f3bbc084fca4434869893ccbfca6c52960e64ee5db87ef257d706194a2f596/) |
| ❌ | 2026/01/25 | 5-31 | [ANZAC Warriors](https://ws.tsl.rocks/corp/dbb190c3127dbab2a3d6d58f1f8f63425f1dbd1949f6442fb2d162e66246b484/) |
| ✅ | 2026/01/17 | 38-7 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ✅ | 2026/01/17 | 32-0 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ↔️ | 2026/01/10 | 10-10 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ✅ | 2026/01/10 | 32-23 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ✅ | 2026/01/03 | 23-0 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ❌ | 2026/01/03 | 3-25 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2025/12/28 | 11-3 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2025/12/28 | 3-27 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2025/12/20 | 32-6 | [Best](https://ws.tsl.rocks/corp/bd123b7fcde92215ca4105138efc2319522ee5f2e23c925a0f2aa73adf49261a/) |
| ✅ | 2025/12/20 | 31-30 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2025/12/13 | 42-26 | [SNSS](https://ws.tsl.rocks/corp/ce1ae2e5f50044147f2bd8f656c00124d925211038e4ecd23d79c1bd724a8b45/) |
| ❌ | 2025/12/13 | 7-71 | [Gummibärenbande](https://ws.tsl.rocks/corp/7111d11716d236254b3fe2fdc0df09519cbed1ee9cc2c7691983534a3d8e1366/) |
| ✅ | 2025/12/06 | 16-8 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2025/12/06 | 3-17 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2025/11/30 | 18-19 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ✅ | 2025/11/30 | 32-3 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ✅ | 2025/11/22 | 36-2 | [Best](https://ws.tsl.rocks/corp/bd123b7fcde92215ca4105138efc2319522ee5f2e23c925a0f2aa73adf49261a/) |
| ❌ | 2025/11/22 | 4-13 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ✅ | 2025/11/15 | 37-3 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2025/11/15 | 26-3 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ✅ | 2025/11/08 | 22-6 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2025/11/08 | 14-10 | [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) |
| ✅ | 2025/11/02 | 34-6 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2025/11/02 | 1-21 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2025/10/25 | 19-3 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ✅ | 2025/10/25 | 11-4 | [WinterComes](https://ws.tsl.rocks/corp/a8f3bbc084fca4434869893ccbfca6c52960e64ee5db87ef257d706194a2f596/) |
| ✅ | 2025/10/19 | 18-3 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2025/10/19 | 7-31 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ✅ | 2025/10/11 | 20-11 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2025/10/11 | 12-5 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |
| ❌ | 2025/10/05 | 14-33 | [The Star League](https://ws.tsl.rocks/corp/f8b4a4ab48d0f4dc8e2d35c049289e4cd31960c34c0d114426164f223cdb5140/) |
| ❌ | 2025/10/05 | 27-32 | [ANZAC Warriors](https://ws.tsl.rocks/corp/dbb190c3127dbab2a3d6d58f1f8f63425f1dbd1949f6442fb2d162e66246b484/) |
| ❌ | 2025/09/27 | 4-43 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ✅ | 2025/09/27 | 33-6 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2025/09/20 | 23-0 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ❌ | 2025/09/13 | 0-55 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/09/13 | 0-25 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/09/07 | 15-39 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ❌ | 2025/09/07 | 8-40 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2025/08/31 | 0-46 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ✅ | 2025/08/31 | 21-17 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2025/08/23 | 32-33 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/08/23 | 15-51 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2025/08/16 | 32-12 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2025/08/16 | 24-31 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2025/08/10 | 49-23 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2025/08/10 | 3-49 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ❌ | 2025/08/03 | 14-58 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2025/08/02 | 16-32 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2025/07/26 | 25-35 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ❌ | 2025/07/26 | 11-54 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2025/07/20 | 49-10 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2025/07/19 | 12-45 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2025/07/13 | 30-47 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2025/07/13 | 7-49 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ❌ | 2025/07/06 | 0-40 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2025/07/06 | 13-38 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ❌ | 2025/06/29 | 9-63 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2025/06/29 | 10-20 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2025/06/21 | 14-32 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2025/06/21 | 13-38 | [No Orbit©](https://ws.tsl.rocks/corp/15831bc11de2a279f369118ffb2cd889844a6992e769889ad9e64f8ac15a410f/) |
| ✅ | 2025/06/15 | 43-4 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2025/06/15 | 44-25 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ❌ | 2025/06/07 | 0-45 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2025/06/07 | 23-58 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2025/05/31 | 29-8 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ❌ | 2025/05/31 | 9-44 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ❌ | 2025/05/24 | 12-50 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2025/05/24 | 0-51 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2025/05/18 | 66-51 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2025/05/18 | 46-73 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2025/05/10 | 6-50 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2025/05/10 | 28-30 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ✅ | 2025/05/03 | 44-40 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2025/04/27 | 39-41 | [New Horizons](https://ws.tsl.rocks/corp/35fd5f8a42c94496c737f097b09c66f0bcbdd0fe32fdf71009568e283922d37c/) |
| ❌ | 2025/04/20 | 35-36 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ❌ | 2025/04/20 | 25-30 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ❌ | 2025/04/12 | 16-26 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2025/04/05 | 30-21 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ❌ | 2025/03/29 | 7-28 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2025/03/22 | 28-41 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2025/03/15 | 38-32 | [No Orbit©](https://ws.tsl.rocks/corp/15831bc11de2a279f369118ffb2cd889844a6992e769889ad9e64f8ac15a410f/) |
| ✅ | 2025/03/08 | 36-27 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2025/03/01 | 12-35 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ✅ | 2025/02/22 | 51-18 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2025/02/15 | 37-29 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2025/02/08 | 40-32 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2025/02/01 | 0-35 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2025/01/26 | 29-13 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ✅ | 2025/01/25 | 48-43 | [New Horizons](https://ws.tsl.rocks/corp/35fd5f8a42c94496c737f097b09c66f0bcbdd0fe32fdf71009568e283922d37c/) |
| ❌ | 2025/01/20 | 19-42 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2025/01/18 | 28-32 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2025/01/12 | 11-28 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ❌ | 2025/01/12 | 4-21 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2025/01/06 | 70-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2025/01/01 | 31-28 | [Widow Makers](https://ws.tsl.rocks/corp/ac1ddcbbd45ccdfa74185d7f40b3a67b0b5b477f7b0bd6f3d7a5a7821ee55bdd/) |
| ✅ | 2024/12/21 | 38-16 | [Game of Stars](https://ws.tsl.rocks/corp/ad5bb68e6076ee70e6715ecead226fc9880b66a87b68acb3098843f723c1562e/) |
| ✅ | 2024/12/14 | 46-30 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ✅ | 2024/12/07 | 41-20 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ✅ | 2024/11/30 | 32-26 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2024/11/23 | 17-16 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2024/11/23 | 0-60 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2024/11/16 | 22-4 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2024/11/16 | 31-25 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2024/11/09 | 52-1 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ❌ | 2024/11/09 | 6-22 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2024/11/02 | 32-24 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ✅ | 2024/11/01 | 41-36 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/10/26 | 10-28 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2024/10/19 | 34-19 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2024/10/12 | 6-15 | [Hamburg AG 2](https://ws.tsl.rocks/corp/d4075195191cabef801494d3accc0e6cc8c09f534fd9203f6e43c9930acffa56/) |
| ✅ | 2024/10/12 | 41-14 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ❌ | 2024/10/06 | 19-43 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2024/10/05 | 40-11 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2024/09/28 | 34-23 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2024/09/21 | 23-8 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2024/09/14 | 41-54 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ❌ | 2024/09/14 | 18-41 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ❌ | 2024/09/07 | 9-49 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2024/08/31 | 10-24 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ✅ | 2024/08/24 | 33-3 | [Game of Stars](https://ws.tsl.rocks/corp/ad5bb68e6076ee70e6715ecead226fc9880b66a87b68acb3098843f723c1562e/) |
| ❌ | 2024/08/17 | 20-37 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2024/08/10 | 42-19 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/08/03 | 21-50 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2024/07/27 | 21-24 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ✅ | 2024/07/20 | 40-12 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2024/07/13 | 6-30 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2024/07/06 | 36-40 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ✅ | 2024/06/30 | 22-10 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2024/06/22 | 2-33 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/06/15 | 35-40 | [Hamburg AG 2](https://ws.tsl.rocks/corp/d4075195191cabef801494d3accc0e6cc8c09f534fd9203f6e43c9930acffa56/) |
| ✅ | 2024/06/15 | 42-30 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ❌ | 2024/06/08 | 0-44 | [Helion Prime](https://ws.tsl.rocks/corp/1a09ce5efe86add0a6f0344bc2a12e27c898c0d21641a3f29a450c6d4c4db3f2/) |
| ✅ | 2024/06/01 | 41-34 | [Lights Off](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) |
| ❌ | 2024/06/01 | 10-34 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/05/25 | 58-20 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ❌ | 2024/05/18 | 22-23 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2024/05/11 | 20-19 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2024/05/04 | 16-31 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2024/04/27 | 43-9 | [Winged Pheonix](https://ws.tsl.rocks/corp/6b9f3e0b419f79343ffd4a8134703379db0e4591879151cbc3ef6a3ff825a2d3/) |
| ❌ | 2024/04/20 | 22-41 | [Lights Off](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) |
| ✅ | 2024/04/13 | 53-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/04/13 | 18-26 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ✅ | 2024/04/07 | 29-22 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ✅ | 2024/04/06 | 31-8 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/03/31 | 0-31 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ✅ | 2024/03/30 | 34-27 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ❌ | 2024/03/23 | 11-29 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2024/03/23 | 6-30 | [Lights Off](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) |
| ✅ | 2024/03/16 | 32-28 | [Eligius](https://ws.tsl.rocks/corp/13948b7eb67a9511aa63c250d6c965b3e15d71e2641d5909b11917a199e8312e/) |
| ✅ | 2024/03/09 | 41-3 | [Free Thinkers 2](https://ws.tsl.rocks/corp/9fc879b45c4053ac93d6eebdb14d856a828df8fd85800df616cdd3332683a695/) |
| ✅ | 2024/03/02 | 36-27 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ❌ | 2024/03/02 | 9-30 | [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) |
| ❌ | 2024/02/24 | 7-39 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ❌ | 2024/02/24 | 3-14 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2024/02/17 | 50-4 | [RUSSIAN TEAM](https://ws.tsl.rocks/corp/ddbe305c7b079ebdf054b4483e2d445276c9a95fb7beea61ba9e35cabdef0162/) |
| ✅ | 2024/02/17 | 51-1 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2024/02/10 | 21-13 | [Space Oddity](https://ws.tsl.rocks/corp/a6d7cf2a6e8e92b03bf941f153a423ecc9483e3acb878d8658a1ca7f33abad81/) |
| ✅ | 2024/02/10 | 48-43 | [Space Oddity](https://ws.tsl.rocks/corp/a6d7cf2a6e8e92b03bf941f153a423ecc9483e3acb878d8658a1ca7f33abad81/) |
| ❌ | 2024/02/03 | 7-34 | [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) |
| ❌ | 2024/02/03 | 17-20 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2024/01/27 | 28-1 | [Greek Warriors](https://ws.tsl.rocks/corp/0ebbf2228c6b86ec5117c216d8909c8e6f32f1a59b8f9b586bcdbbb85f603bc6/) |
| ✅ | 2024/01/27 | 6-4 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ✅ | 2024/01/20 | 44-16 | [The Picard](https://ws.tsl.rocks/corp/e9a6cae99e308f9c70625e04162b887239bea0d52463d7a3ed53464fdd906d0b/) |
| ✅ | 2024/01/20 | 34-0 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2024/01/13 | 28-24 | [New Horizons](https://ws.tsl.rocks/corp/35fd5f8a42c94496c737f097b09c66f0bcbdd0fe32fdf71009568e283922d37c/) |
| ❌ | 2024/01/13 | 34-38 | [Space Oddity](https://ws.tsl.rocks/corp/a6d7cf2a6e8e92b03bf941f153a423ecc9483e3acb878d8658a1ca7f33abad81/) |
| ❌ | 2024/01/06 | 13-22 | [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) |
| ❌ | 2023/12/30 | 0-22 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2023/12/23 | 26-15 | [Space Oddity](https://ws.tsl.rocks/corp/a6d7cf2a6e8e92b03bf941f153a423ecc9483e3acb878d8658a1ca7f33abad81/) |
| ✅ | 2023/12/16 | 49-5 | [Gallaecia](https://ws.tsl.rocks/corp/4ab98cfc4948a6b1706e3527686ce3fd29eead3cdf4cf00ee2dfde925ba55515/) |
| ❌ | 2023/12/07 | 3-33 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2023/12/02 | 30-8 | [Ещё один Миф](https://ws.tsl.rocks/corp/b091930b1e7a5540c2cfaa75d184dc82314a1248bbd6e4daae0867f3f248a19f/) |
| ✅ | 2023/11/25 | 32-26 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2023/11/18 | 14-35 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ✅ | 2023/11/11 | 33-17 | [Nooooobs](https://ws.tsl.rocks/corp/d857c0fdf48324a3b81263ef8d86c0cc65ae61eb530193b36ce2a146c85c6aa2/) |
| ✅ | 2023/11/04 | 12-5 | [Любители Пива](https://ws.tsl.rocks/corp/3926c7dd9f82737737ee85bc4f013285cb75f1ef90f5bf4822bf624616570764/) |

---
Corporation ID: c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771131313"></span>
</div>