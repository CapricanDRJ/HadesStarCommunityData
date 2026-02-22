---
title: ​Halcon español
description: W:61 L:48 D:1 Bonus ✅ 40%
image: ./favicon.png
Summary: ❌ 2 - 14 **RED STAR**
date: 2026-02-21T10:43:26.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Estr. blanca lunes a las 14:00h. Si no participas desactivate. Si par
ticipas la asistencia es obligada, no participar = expulsión. Rojas d
e L a V a las 22:00. Discord recomendado, tenemos comunidad.
```
<br>

### [Discord](https://discord.gg/https://discord.gg/MZDNrGyav9)
### Whitestar Bonus ✅ 40%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1261 🔻  (-15)|
| ELO Competitive | 1457 🔺  (8)|
| Total Matches | 110 |
| Wins | 61 |
| Losses | 48 |
| Draws | 1 |
| Streak Record | 9 |
| Flagship | 5 |

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
        let timestamps = [1771238606,1771238605,1770635616,1770635015,1770032634,1769481262,1769428075,1768833760,1768225031,1767635559,1767027138,1766416925,1765804606,1765180265,1764588632,1764010817,1763390090,1762788912,1762169056,1761566645,1760954485,1760358082,1759749023,1759144180,1758537569,1757927891,1757329385,1756742592,1756124687,1755515609,1754914012,1754322042,1753696434,1753111088,1752488434,1751894137,1751395343,1750713863,1750141787,1749477865,1748881704,1748257583,1747648764,1747091058,1746446485,1745864546,1745231358,1744637268,1744029034,1743424683,1742825102,1742214726,1741609835,1741010352,1740399120,1739813426,1739191395,1738577759,1737976733,1737383256,1736763876,1736182948,1735563870,1734356893,1733746631,1733137249,1732562995,1731922942,1729511211,1728923620,1728315903,1727700435,1727096441,1726489845,1725890338,1725283639,1724055170,1723460737,1722845294,1722259603,1721650140,1721071356,1720442602,1719835239,1719219508,1718638015,1718031723,1717409823,1716815068,1716217447,1715609034,1714997310,1714391172,1713777343,1713170419,1712573376,1711875959,1711370256,1710925254,1710271739,1709743806,1709131735,1708525947,1707892499,1707311731,1706533903,1705835507,1704894002,1704201315,1703231537];

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
| [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) | 1 | 1 | 0 | 2 |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 1 | 3 | 0 | 4 |
| [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) | 1 | 1 | 0 | 2 |
| [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) | 3 | 0 | 0 | 3 |
| [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) | 0 | 3 | 0 | 3 |
| [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) | 2 | 1 | 0 | 3 |
| [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) | 1 | 1 | 0 | 2 |
| [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) | 3 | 0 | 0 | 3 |
| [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) | 2 | 0 | 0 | 2 |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 2 | 0 | 0 | 2 |
| [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) | 1 | 1 | 0 | 2 |
| [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) | 2 | 0 | 0 | 2 |
| [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) | 1 | 1 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/21 | 2-14 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2026/02/21 | 32-4 | [First Squad](https://ws.tsl.rocks/corp/39bb6d19385b7eb6e2e71a979f21256463432b6e2e36ae4c55446abb1f6a0db1/) |
| ✅ | 2026/02/14 | 23-6 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2026/02/14 | 4-0 | [Небула Рока](https://ws.tsl.rocks/corp/22875f3ae77efabcd56b4683dee31b7e35d927cb86876f8f587b5f048dfe68f9/) |
| ✅ | 2026/02/07 | 31-0 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2026/02/01 | 0-22 | [Star Union](https://ws.tsl.rocks/corp/16aeed26660a5028dc9e88424937008a88a424b3220afac0731d6fd85d4746be/) |
| ❌ | 2026/01/31 | 0-29 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ✅ | 2026/01/24 | 32-2 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2026/01/17 | 2-26 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ❌ | 2026/01/10 | 6-32 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ❌ | 2026/01/03 | 3-25 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/12/27 | 21-15 | [Lololol](https://ws.tsl.rocks/corp/38d38bd656b1fe9bad738f05bbe6779f5bd57bf4420e737a65292da9da037531/) |
| ✅ | 2025/12/20 | 36-2 | [Schwermetall](https://ws.tsl.rocks/corp/e1b124e8bdb48553b0276800acf15a530e72104b006bd4dd401f23bd87bdbbf0/) |
| ❌ | 2025/12/13 | 16-25 | [Aconitum](https://ws.tsl.rocks/corp/a78154f5b970193636f3d13d3f6d3dd98e975ba876810f1bfb84c90e778986db/) |
| ❌ | 2025/12/06 | 3-23 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2025/11/29 | 1-22 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2025/11/22 | 6-20 | [alienigenas](https://ws.tsl.rocks/corp/1c092f1b0e9645193eac68e27b29b2b9fef39474fd8924495abec6754857a8f9/) |
| ✅ | 2025/11/15 | 33-1 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2025/11/08 | 20-3 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2025/11/01 | 35-0 | [Rogue Hero's](https://ws.tsl.rocks/corp/a1c2437de3e0bbe4c42481ff156cf7b2b96231991aa3d337180fbe30d254857b/) |
| ✅ | 2025/10/25 | 23-12 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ❌ | 2025/10/18 | 0-19 | [深域](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ❌ | 2025/10/11 | 9-20 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/10/04 | 28-0 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2025/09/27 | 20-0 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2025/09/20 | 22-3 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2025/09/13 | 6-9 | [Polaris Corpo](https://ws.tsl.rocks/corp/918db816bc1bb29c5cb1854a5a67b1b240f8835af6f1e584db7fb7070884e346/) |
| ✅ | 2025/09/06 | 22-1 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/08/30 | 20-3 | [Бороская Имерия](https://ws.tsl.rocks/corp/13a4b881c81a63721b98078aeed9b4970eae55034b2a55cb345dc7a8fb2ff541/) |
| ❌ | 2025/08/23 | 6-19 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/08/16 | 16-20 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ✅ | 2025/08/09 | 20-19 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ❌ | 2025/08/02 | 15-27 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ❌ | 2025/07/26 | 6-20 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2025/07/19 | 19-21 | [White Star Inc\.](https://ws.tsl.rocks/corp/b5bdfb5e81eac1263ce48131806cc733ec699336043c0f7af090fbe8ff21d26e/) |
| ✅ | 2025/07/12 | 5-1 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |
| ✅ | 2025/07/06 | 20-3 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/06/28 | 15-13 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2025/06/22 | 2-21 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/06/14 | 4-27 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ❌ | 2025/06/07 | 8-16 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ❌ | 2025/05/31 | 0-17 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/05/24 | 6-10 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ✅ | 2025/05/17 | 18-0 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ✅ | 2025/05/10 | 16-4 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2025/05/03 | 12-14 | [C'est pas faux\!](https://ws.tsl.rocks/corp/fa08ee3e0496d13b55f0058cc61560c3e8e5b91628ee583c9eca31ef10c7749b/) |
| ✅ | 2025/04/26 | 22-6 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ✅ | 2025/04/19 | 25-4 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2025/04/12 | 3-20 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2025/04/05 | 8-44 | [Interestelar](https://ws.tsl.rocks/corp/cc9ed2698988a35d6dbb9e9762d6575b28204ab15fd7208b64e8108878a4b8f9/) |
| ✅ | 2025/03/29 | 23-3 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2025/03/22 | 4-32 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2025/03/15 | 8-21 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ✅ | 2025/03/08 | 30-4 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2025/03/01 | 17-11 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2025/02/22 | 15-25 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ✅ | 2025/02/15 | 31-0 | [Bund von Lykon](https://ws.tsl.rocks/corp/b1a267bb80dd695c75c1996122ff32ca8296c07874376131618d18b4fee0aa5c/) |
| ❌ | 2025/02/08 | 0-19 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ✅ | 2025/02/01 | 23-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2025/01/25 | 8-7 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ❌ | 2025/01/18 | 6-18 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/01/11 | 10-4 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2025/01/04 | 10-2 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2024/12/21 | 31-3 | [Angel Dragon](https://ws.tsl.rocks/corp/2f2e44c159dc8f4e15e2dabda533d9db8697d2c6c06735d926d180b3aa056dcf/) |
| ✅ | 2024/12/14 | 18-2 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/12/07 | 8-18 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2024/11/30 | 2-21 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2024/11/23 | 22-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2024/10/26 | 3-31 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2024/10/19 | 13-8 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ↔️ | 2024/10/12 | 3-3 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ❌ | 2024/10/05 | 12-18 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ✅ | 2024/09/28 | 8-5 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ✅ | 2024/09/21 | 30-0 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ❌ | 2024/09/14 | 7-18 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ✅ | 2024/09/07 | 15-1 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ❌ | 2024/08/24 | 9-16 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2024/08/17 | 25-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/08/10 | 16-0 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ❌ | 2024/08/03 | 9-11 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2024/07/27 | 10-14 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/07/20 | 5-15 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ❌ | 2024/07/13 | 9-23 | [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) |
| ❌ | 2024/07/06 | 0-11 | [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) |
| ✅ | 2024/06/29 | 15-0 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2024/06/22 | 12-10 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2024/06/15 | 18-1 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/06/08 | 5-8 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ✅ | 2024/06/01 | 13-0 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2024/05/25 | 20-1 | [初始之音](https://ws.tsl.rocks/corp/79f48676f0ad15541a751311b97bae91c977d65480891a675585fc396c20bdb9/) |
| ✅ | 2024/05/18 | 7-3 | [银星舰队SSF](https://ws.tsl.rocks/corp/c02d97cc37c082739a7828b6669ee67e2108bbf3d9f33628c650ced9fe04dd06/) |
| ❌ | 2024/05/11 | 7-19 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2024/05/04 | 8-13 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2024/04/27 | 19-0 | [cikopo](https://ws.tsl.rocks/corp/523cdd29cdccf7732fed590e941edb3ad2c4e7130ef6b474e9ae7a0855af8cc7/) |
| ✅ | 2024/04/20 | 14-0 | [Quadra FR](https://ws.tsl.rocks/corp/e87ef7b09a57216e03405e0f951199ff8b37dd4397d2f7da36bd269fe42ba974/) |
| ✅ | 2024/04/13 | 10-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/04/05 | 9-13 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2024/03/30 | 9-6 | [Mandalorians](https://ws.tsl.rocks/corp/c02d28803fca7e05e20ff959e4809e2b387097a58bbc34432aacbbeb01b6d81c/) |
| ✅ | 2024/03/25 | 16-0 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2024/03/17 | 5-4 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/03/11 | 7-5 | [RACNAROK](https://ws.tsl.rocks/corp/925ee28e565a662efccf71b5762e6a40b9eacdff2237454dc0e5aa1dcbd44294/) |
| ✅ | 2024/03/04 | 15-0 | [Warriors union](https://ws.tsl.rocks/corp/414b486648e1871ce70a5ac9f1a65f02a15d6a38eebc99c23ab68016ba988ea8/) |
| ✅ | 2024/02/26 | 9-0 | [德意志第三帝国阿尔法分部](https://ws.tsl.rocks/corp/83f745abaa8bed335f0cba2f66fdbafa4b226d40d8ad145db66795d7c051fb60/) |
| ✅ | 2024/02/19 | 4-3 | [universe leader](https://ws.tsl.rocks/corp/8d7722faac1d00f0aaa58497484f9b84b89bdf263ab2dc48b2ae14dedf6388f0/) |
| ✅ | 2024/02/12 | 10-0 | [СНГ — РОССИЯ](https://ws.tsl.rocks/corp/075394144fa4e771dc8358886dc461b0ed87d948b46e5d817d29296adf2f11f2/) |
| ✅ | 2024/02/03 | 9-0 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ❌ | 2024/01/26 | 3-13 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/01/15 | 4-6 | [纸鸢台](https://ws.tsl.rocks/corp/c4be34dcc0fcf9c2c0cef9c6f2ce31798d5435dadefaccbcb2502e65252ae677/) |
| ✅ | 2024/01/07 | 7-0 | [Paramedic ICU](https://ws.tsl.rocks/corp/2b046351c951cf9e05492ee383c44783b21c628831f51b1a04c9e5404b9b9fa3/) |
| ✅ | 2023/12/27 | 3-0 | [TRAPSTAR¹](https://ws.tsl.rocks/corp/41cff3569548da10a9cf4c36b91a525ec982349fa4a35a59b047ea22dcf0f48f/) |

---
Corporation ID: ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771670606"></span>
</div>