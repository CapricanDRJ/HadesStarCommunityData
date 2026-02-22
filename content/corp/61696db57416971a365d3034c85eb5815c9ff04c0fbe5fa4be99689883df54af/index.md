---
title: ​Ƭιтαηѕ Ф тєʀʀσƦ
description: W:99 L:71 D:3 Bonus ✅ 48%
image: ./favicon.png
Summary: ❌ 7 - 9 **GDZ**
date: 2026-02-22T15:30:58.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
ＴＩＴΛＮＳ  ᴴᵉʳᵉ ᶠᵒʳ ᵛⁱᶜᵗᵒʳⁱᵉˢ ᵃⁿᵈ ᶠᵘⁿ• ᴳʳᵉᵃᵗ ᵖᵉᵒᵖˡᵉ ᶠʳᵒᵐ ᵃᶜʳᵒˢˢ ᵗʰᵉ ʷᵒʳˡ
ᵈ ᶠᵒʳ ᵃ ᶜᵒᵐᵐᵒⁿ ᵍᵒᵃˡ• ᵀᵒ ᵏⁱˡˡ ᶜᵉʳᵇˢ ᵃⁿᵈ ʷⁱⁿ😁😄•visit hadestitans.com.
 We are in an alliance with Spaceballs & the Warriorlords.
```
<br>

### [Discord](https://discord.gg/N9PNB6NVCZ)
### Whitestar Bonus ✅ 48%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1388 🔻  (-15)|
| ELO Competitive | 1804 🔺  (19)|
| Total Matches | 173 |
| Wins | 99 |
| Losses | 71 |
| Draws | 3 |
| Streak Record | 9 |
| Flagship | 7 |

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
        let timestamps = [1771342258,1771326333,1770731459,1770678287,1770070496,1770059979,1769457828,1769451516,1768898356,1768890847,1768234348,1768231042,1767638565,1767635859,1767034349,1767027438,1766449382,1766448481,1765821134,1765820533,1765216323,1765210613,1764710031,1764612075,1764063989,1764060384,1763377169,1762792819,1762247173,1762201812,1761614726,1761614126,1761026078,1760990932,1760399854,1760388739,1759805215,1759779078,1759202474,1759200371,1758736169,1758556202,1757961244,1757955835,1757357634,1757356432,1756788261,1756788073,1756135808,1756135508,1755522821,1754928139,1754922428,1754404674,1754374025,1753824450,1753189514,1752607134,1752046485,1751306705,1751304902,1750727082,1750109541,1750106235,1749522641,1748903045,1748894630,1748305367,1747723803,1747703462,1747096465,1747095864,1746471135,1746466926,1745854326,1745852823,1745294469,1745286359,1744680845,1744678442,1744011905,1743995380,1743461956,1743451138,1742775222,1742765607,1742183477,1742166054,1741635983,1741635983,1741048217,1741035297,1740427674,1740420762,1739918906,1739918905,1739248791,1739223856,1738697065,1738079806,1738079505,1737506762,1737495044,1736887102,1736879887,1736222616,1736207894,1735618561,1734997795,1734419689,1733780592,1733157688,1732679578,1731978239,1731465890,1731006106,1730733561,1730063159,1730049633,1729419481,1729415273,1728842473,1728838263,1728232664,1728230861,1727651460,1727650258,1727036053,1727034250,1726510586,1726510586,1725927904,1725927603,1725297467,1725291455,1724714490,1724084021,1724062380,1723411761,1723411160,1722884066,1722877453,1722303881,1722281246,1721661262,1721098102,1721097200,1720506316,1720387016,1719817211,1719803990,1719252268,1718644328,1718091522,1717511411,1716816270,1716231570,1715637282,1715614143,1715025558,1714418220,1714418220,1713751809,1713748806,1713290015,1713290015,1712694174,1712689366,1712087203,1711473920,1710928258,1710913538,1710373898];

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
| [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) | 4 | 0 | 0 | 4 |
| [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) | 3 | 5 | 0 | 8 |
| [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) | 2 | 2 | 0 | 4 |
| [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) | 0 | 3 | 0 | 3 |
| [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) | 2 | 1 | 0 | 3 |
| [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) | 2 | 1 | 0 | 3 |
| [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) | 2 | 1 | 0 | 3 |
| [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) | 1 | 1 | 0 | 2 |
| [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) | 4 | 1 | 0 | 5 |
| [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) | 2 | 0 | 0 | 2 |
| [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) | 2 | 1 | 0 | 3 |
| [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) | 1 | 3 | 0 | 4 |
| [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) | 0 | 2 | 0 | 2 |
| [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) | 1 | 1 | 0 | 2 |
| [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) | 1 | 1 | 0 | 2 |
| [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) | 2 | 1 | 0 | 3 |
| [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) | 1 | 1 | 0 | 2 |
| [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) | 0 | 2 | 0 | 2 |
| [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) | 1 | 1 | 0 | 2 |
| [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) | 3 | 0 | 0 | 3 |
| [KINETIC](https://ws.tsl.rocks/corp/8ca3f039e6be383f0ea4ebcb6314c8bcd82c93ef833974580f0f9b76d06ef069/) | 0 | 2 | 0 | 2 |
| [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) | 0 | 2 | 0 | 2 |
| [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) | 0 | 2 | 0 | 2 |
| [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) | 0 | 2 | 0 | 2 |
| [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) | 1 | 2 | 0 | 3 |
| [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) | 1 | 1 | 0 | 2 |
| [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) | 1 | 1 | 0 | 2 |
| [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) | 2 | 0 | 0 | 2 |
| [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) | 2 | 1 | 0 | 3 |
| [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) | 1 | 0 | 1 | 2 |
| [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) | 1 | 1 | 0 | 2 |
| [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) | 2 | 0 | 0 | 2 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 2 | 0 | 0 | 2 |
| [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) | 3 | 0 | 0 | 3 |
| [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) | 1 | 0 | 1 | 2 |
| [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/22 | 7-9 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ✅ | 2026/02/22 | 14-5 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ✅ | 2026/02/15 | 24-0 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2026/02/14 | 32-3 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2026/02/07 | 6-27 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2026/02/07 | 8-9 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2026/01/31 | 2-46 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2026/01/31 | 6-16 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2026/01/25 | 16-3 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ✅ | 2026/01/25 | 18-3 | [Auscorp](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2026/01/17 | 20-3 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ✅ | 2026/01/17 | 27-4 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2026/01/10 | 16-39 | [The Star League](https://ws.tsl.rocks/corp/f8b4a4ab48d0f4dc8e2d35c049289e4cd31960c34c0d114426164f223cdb5140/) |
| ✅ | 2026/01/10 | 10-6 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2026/01/03 | 25-3 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2026/01/03 | 12-7 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ✅ | 2025/12/28 | 39-3 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2025/12/28 | 29-6 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2025/12/20 | 30-31 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2025/12/20 | 33-9 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ✅ | 2025/12/13 | 62-0 | [Best](https://ws.tsl.rocks/corp/bd123b7fcde92215ca4105138efc2319522ee5f2e23c925a0f2aa73adf49261a/) |
| ✅ | 2025/12/13 | 15-9 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2025/12/07 | 13-5 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2025/12/06 | 2-31 | [Corp with No FS](https://ws.tsl.rocks/corp/d8fcfc5c5e4444817b2776dc8f4e6c6f30f0a2c0e7bb535f63c480c50f0d2396/) |
| ❌ | 2025/11/30 | 0-27 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2025/11/30 | 2-13 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2025/11/22 | 30-3 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2025/11/15 | 0-34 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2025/11/09 | 29-10 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2025/11/08 | 6-22 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2025/11/02 | 13-20 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ❌ | 2025/11/02 | 1-47 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2025/10/26 | 37-7 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2025/10/25 | 25-5 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ✅ | 2025/10/18 | 18-4 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ❌ | 2025/10/18 | 0-32 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2025/10/12 | 37-3 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/10/11 | 11-20 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2025/10/05 | 1-31 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2025/10/05 | 16-10 | [Star Wars](https://ws.tsl.rocks/corp/2dd3aee3667c5c190079cc378773d809ece1b146bc0a16fce6c46663fc3b6992/) |
| ❌ | 2025/09/29 | 4-43 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2025/09/27 | 48-4 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2025/09/20 | 34-6 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ✅ | 2025/09/20 | 22-8 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2025/09/13 | 55-0 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2025/09/13 | 25-0 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2025/09/07 | 41-13 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ✅ | 2025/09/07 | 35-3 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ✅ | 2025/08/30 | 27-0 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2025/08/30 | 52-27 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ❌ | 2025/08/23 | 9-31 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2025/08/16 | 24-47 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2025/08/16 | 46-0 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ❌ | 2025/08/10 | 21-32 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ↔️ | 2025/08/10 | 38-38 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ✅ | 2025/08/03 | 29-17 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ✅ | 2025/07/27 | 42-12 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2025/07/20 | 33-39 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2025/07/14 | 2-38 | [Ark Summit](https://ws.tsl.rocks/corp/5940b759f3f833f4c6b35733e1f642a64d5589c1c692e34d030383be08e95e02/) |
| ❌ | 2025/07/05 | 18-19 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ✅ | 2025/07/05 | 27-11 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ✅ | 2025/06/29 | 48-21 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2025/06/21 | 44-18 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2025/06/21 | 25-48 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2025/06/15 | 25-48 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ❌ | 2025/06/07 | 26-31 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ✅ | 2025/06/07 | 50-35 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ✅ | 2025/06/01 | 38-5 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2025/05/25 | 14-24 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ✅ | 2025/05/25 | 57-8 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ✅ | 2025/05/18 | 42-11 | [SNSS](https://ws.tsl.rocks/corp/ce1ae2e5f50044147f2bd8f656c00124d925211038e4ecd23d79c1bd724a8b45/) |
| ❌ | 2025/05/18 | 23-35 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ✅ | 2025/05/10 | 54-9 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2025/05/10 | 18-41 | [KINETIC](https://ws.tsl.rocks/corp/8ca3f039e6be383f0ea4ebcb6314c8bcd82c93ef833974580f0f9b76d06ef069/) |
| ❌ | 2025/05/03 | 4-33 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ❌ | 2025/05/03 | 20-21 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2025/04/27 | 22-33 | [USSR](https://ws.tsl.rocks/corp/775ec12999c2bb5396801268de447d30104b470d9f093ec4afea9c9db71d7690/) |
| ❌ | 2025/04/27 | 27-29 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ✅ | 2025/04/20 | 44-15 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ✅ | 2025/04/20 | 41-0 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ❌ | 2025/04/12 | 23-35 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2025/04/12 | 9-29 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2025/04/05 | 34-43 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2025/04/05 | 29-48 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ✅ | 2025/03/29 | 63-0 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2025/03/28 | 4-38 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ❌ | 2025/03/22 | 5-23 | [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) |
| ❌ | 2025/03/21 | 20-21 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/03/15 | 24-28 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2025/03/15 | 10-34 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2025/03/09 | 15-17 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2025/03/08 | 31-24 | [Hamburg AG 2](https://ws.tsl.rocks/corp/d4075195191cabef801494d3accc0e6cc8c09f534fd9203f6e43c9930acffa56/) |
| ❌ | 2025/03/01 | 11-14 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ✅ | 2025/03/01 | 45-25 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2025/02/23 | 47-12 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2025/02/23 | 17-7 | [ItaFederalFleet](https://ws.tsl.rocks/corp/02f7ac2b406e46cbb3e1f7fa3a0fb0dc2c32f9bc8afc54c299cd54757463ddbe/) |
| ❌ | 2025/02/16 | 14-63 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ✅ | 2025/02/15 | 37-1 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2025/02/09 | 0-25 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2025/02/02 | 33-30 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2025/02/02 | 0-36 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ✅ | 2025/01/27 | 21-12 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ✅ | 2025/01/26 | 17-9 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/01/19 | 35-15 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |
| ✅ | 2025/01/19 | 32-6 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ❌ | 2025/01/12 | 4-15 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ❌ | 2025/01/11 | 3-21 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ✅ | 2025/01/05 | 36-11 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ✅ | 2024/12/28 | 11-3 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2024/12/22 | 20-3 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ✅ | 2024/12/14 | 41-4 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ❌ | 2024/12/07 | 20-28 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ✅ | 2024/12/02 | 28-5 | [Ещё один Миф](https://ws.tsl.rocks/corp/b091930b1e7a5540c2cfaa75d184dc82314a1248bbd6e4daae0867f3f248a19f/) |
| ✅ | 2024/11/24 | 25-5 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ❌ | 2024/11/18 | 27-28 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2024/11/12 | 4-16 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ❌ | 2024/11/09 | 18-19 | [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) |
| ❌ | 2024/11/01 | 11-15 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ✅ | 2024/11/01 | 23-11 | [Orden Estelar](https://ws.tsl.rocks/corp/1da0142a6cc2fcab35a82ff4d7b591f4ffa96761419c6bf39154afded7ef7c2d/) |
| ✅ | 2024/10/25 | 26-3 | [Out landers](https://ws.tsl.rocks/corp/4d949404db40dec4e95e786811959954fc9e2b1361f3bf0d33af2279ff86d23a/) |
| ✅ | 2024/10/25 | 23-21 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2024/10/18 | 21-16 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ✅ | 2024/10/18 | 31-6 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ✅ | 2024/10/11 | 25-0 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ✅ | 2024/10/11 | 32-1 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ✅ | 2024/10/04 | 17-5 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/10/04 | 34-0 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ❌ | 2024/09/27 | 6-14 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/09/27 | 28-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/09/21 | 25-5 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |
| ↔️ | 2024/09/21 | 10-10 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/09/15 | 4-15 | [Helion Prime](https://ws.tsl.rocks/corp/1a09ce5efe86add0a6f0344bc2a12e27c898c0d21641a3f29a450c6d4c4db3f2/) |
| ✅ | 2024/09/15 | 27-8 | [Tormenta](https://ws.tsl.rocks/corp/537807f41149f54b040d4f2bc983c7f1fbfa2242ec5566371330e4996e33a195/) |
| ❌ | 2024/09/07 | 15-23 | [KINETIC](https://ws.tsl.rocks/corp/8ca3f039e6be383f0ea4ebcb6314c8bcd82c93ef833974580f0f9b76d06ef069/) |
| ✅ | 2024/09/07 | 20-2 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ↔️ | 2024/08/31 | 15-15 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2024/08/24 | 15-9 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2024/08/24 | 28-1 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/08/16 | 16-5 | [DeutschlandGmbH](https://ws.tsl.rocks/corp/7f4550924e4740a47b7d66c9ddf38d65c37590507caab29eecc74f81a4ae2895/) |
| ✅ | 2024/08/16 | 36-3 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2024/08/10 | 9-16 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ❌ | 2024/08/10 | 15-19 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ❌ | 2024/08/04 | 1-12 | [Galaktika corp](https://ws.tsl.rocks/corp/c37872d1ea085402bf536c707a895610f72dafda4bede848405b7908b4523985/) |
| ✅ | 2024/08/03 | 30-4 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2024/07/27 | 37-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/07/21 | 21-5 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ❌ | 2024/07/21 | 0-14 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ❌ | 2024/07/14 | 0-26 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ✅ | 2024/07/12 | 20-0 | [Casual Joe](https://ws.tsl.rocks/corp/e1c03f1f49b5c4811c4b06c5e55361f2e824f95b24421bee6204708d4106b6c7/) |
| ✅ | 2024/07/06 | 11-2 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/07/06 | 4-29 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ✅ | 2024/06/29 | 13-3 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2024/06/22 | 17-3 | [Looping](https://ws.tsl.rocks/corp/08524086f45f2e6109e583baf940197663aa3e155c32fcdbb04f319343a5eb0c/) |
| ✅ | 2024/06/16 | 13-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/06/09 | 6-5 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2024/06/01 | 4-14 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ✅ | 2024/05/25 | 30-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/05/18 | 2-4 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2024/05/18 | 8-22 | [GalaxyNova](https://ws.tsl.rocks/corp/d3df4ca63632d4113f93581cd3629f93a8b06733db25c5ea94da3e7889cd8b94/) |
| ❌ | 2024/05/11 | 3-28 | [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) |
| ✅ | 2024/05/04 | 9-0 | [咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕](https://ws.tsl.rocks/corp/038bc19b50c066831931ddd822ae2c29f8d40279e3ef920b8574839c6e3ab35d/) |
| ✅ | 2024/05/04 | 25-0 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/04/27 | 2-27 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ❌ | 2024/04/27 | 2-13 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2024/04/21 | 35-0 | [夢幻之星\*分盟\*](https://ws.tsl.rocks/corp/25ac58a842783eb85413a2cb4896100bd1bdad3b64dbbc3b2d2c9bdf3f878c96/) |
| ✅ | 2024/04/21 | 7-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2024/04/14 | 2-0 | [Armored Union](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ✅ | 2024/04/14 | 34-0 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2024/04/07 | 22-3 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ❌ | 2024/03/31 | 8-24 | [✡天启✡](https://ws.tsl.rocks/corp/f2d70a86d32ea3a8226afc6d465a6c6540acec572b1c7232994523cdfb299c53/) |
| ✅ | 2024/03/25 | 4-2 | [challenger corp](https://ws.tsl.rocks/corp/7c39adae75191c15a3bab070d08a4cf21efb3b5ec37d69363b7c1060f272d80d/) |
| ✅ | 2024/03/25 | 11-6 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ✅ | 2024/03/18 | 18-2 | [The Mini Elite](https://ws.tsl.rocks/corp/326c171e00430611fcd6534040ac09d702c8a3b5a0c607da4a5cbaf22260bfe8/) |

---
Corporation ID: 61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771774258"></span>
</div>