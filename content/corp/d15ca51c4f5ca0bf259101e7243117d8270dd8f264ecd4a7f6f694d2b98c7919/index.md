---
title: ​WSC\(no DISCORD\)
description: W:65 L:86 D:11 Bonus ❌ 12%
image: ./favicon.png
Summary: ❌ 3 - 19 **The Pichu team**
date: 2026-02-21T16:13:56.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 12%

| Statistic | Value |
| --- | --- |
| ELO Regular | 997 🔻  (-7)|
| ELO Competitive | 1134 🔻  (-13)|
| Total Matches | 162 |
| Wins | 65 |
| Losses | 86 |
| Draws | 11 |
| Streak Record | 10 |
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
        let timestamps = [1771258436,1770399170,1769963227,1769507996,1768976471,1768502054,1768054238,1767594279,1767072804,1766599310,1766149515,1765701001,1765215215,1764738270,1764225021,1763748219,1763281625,1762798901,1762363144,1761927790,1761494021,1761028210,1760520867,1760075324,1759640545,1759200296,1758764410,1758276699,1757826030,1757000680,1756567117,1756056570,1755523722,1755011973,1754559748,1754054034,1753598431,1753102071,1752159467,1751649542,1751127918,1750599364,1750069864,1749554489,1749068005,1748528617,1748043605,1747532807,1747065208,1746622876,1746115943,1745671301,1745172165,1744728018,1744286278,1743790113,1743348650,1742827976,1742821495,1742306683,1741813869,1741301219,1740849278,1740394766,1740392209,1739933427,1739916803,1739476864,1739031644,1739012290,1738572050,1738139602,1737676838,1737199941,1736707384,1736273103,1735829787,1735382679,1734944609,1734447635,1734014945,1733582560,1733150473,1732710825,1732265191,1731811538,1731809656,1731346899,1731333974,1730838438,1730824011,1730379571,1730375062,1729881040,1729873225,1729440822,1729436313,1728996040,1728996040,1728495012,1728486293,1728034121,1728032205,1727553798,1727539673,1727092534,1727088516,1726632268,1726590215,1726135831,1726135830,1725667063,1725641218,1725127083,1725124379,1724660996,1724660395,1724057272,1724056371,1723511529,1723486588,1723015985,1723008172,1722546889,1722545387,1722056431,1722052825,1721575013,1721573004,1721129831,1721129657,1720616607,1719987301,1719479744,1718991431,1718987802,1718472135,1717917516,1717484962,1717161261,1716961428,1716543132,1716361957,1715990757,1715888754,1715493656,1715429053,1715010532,1714578373,1714576269,1714139685,1714135178,1713652064,1713640946,1713189350,1713185743,1712751856,1712671934,1712319656,1712173137,1711725116,1711233841];

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
| [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) | 2 | 0 | 0 | 2 |
| [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) | 0 | 2 | 0 | 2 |
| [Nox Imperium](https://ws.tsl.rocks/corp/b60fb003fae650d1de18e7bca4fad04f9805501f4568d07ceb47bffdfeb613c1/) | 0 | 2 | 0 | 2 |
| [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) | 0 | 2 | 0 | 2 |
| [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) | 2 | 0 | 0 | 2 |
| [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) | 0 | 4 | 0 | 4 |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 0 | 1 | 1 | 2 |
| [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) | 0 | 2 | 0 | 2 |
| [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) | 0 | 2 | 0 | 2 |
| [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) | 1 | 1 | 0 | 2 |
| [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) | 1 | 1 | 0 | 2 |
| [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) | 0 | 2 | 0 | 2 |
| [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) | 1 | 0 | 1 | 2 |
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 2 | 1 | 0 | 3 |
| [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) | 0 | 2 | 0 | 2 |
| [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) | 0 | 2 | 0 | 2 |
| [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) | 1 | 1 | 0 | 2 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 1 | 0 | 1 | 2 |
| [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) | 1 | 0 | 1 | 2 |
| [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) | 0 | 2 | 0 | 2 |
| [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) | 1 | 1 | 0 | 2 |
| [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) | 1 | 1 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 2 | 0 | 0 | 2 |
| [ItaFederalFleet](https://ws.tsl.rocks/corp/02f7ac2b406e46cbb3e1f7fa3a0fb0dc2c32f9bc8afc54c299cd54757463ddbe/) | 2 | 0 | 0 | 2 |
| [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) | 1 | 0 | 1 | 2 |
| [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) | 1 | 1 | 0 | 2 |
| [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) | 1 | 1 | 0 | 2 |
| [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) | 0 | 2 | 0 | 2 |
| [德意志第三帝国奥米加分部](https://ws.tsl.rocks/corp/b5f35e30b2dea2621e854b5011a9f9d07ca3585cd26bd9ac92aa7b06c0a522b1/) | 1 | 1 | 0 | 2 |
| [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) | 2 | 0 | 0 | 2 |
| [Prometheus ESP](https://ws.tsl.rocks/corp/59ccf92b03fb4dbcd047d2425f6dd687367bd70088956249e0255554e81fe949/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/21 | 3-19 | [The Pichu team](https://ws.tsl.rocks/corp/c282831a6684fdb262ccbad4fec59fe715dd48b7565335f7b7cbc9d54e541d26/) |
| ❌ | 2026/02/11 | 3-26 | [第二序列](https://ws.tsl.rocks/corp/9c896c190373624429cea28887369599197907f85402590a3adbe1f16f804e07/) |
| ❌ | 2026/02/06 | 0-28 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ✅ | 2026/02/01 | 5-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ❌ | 2026/01/26 | 3-27 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ❌ | 2026/01/20 | 3-17 | [Chiasmus](https://ws.tsl.rocks/corp/5e1e520f8c04bfa18e2f0bdad432fd5788b965dbcbd47d9f351c3d3074aca34d/) |
| ❌ | 2026/01/15 | 3-16 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ❌ | 2026/01/10 | 3-31 | [Nox Imperium](https://ws.tsl.rocks/corp/b60fb003fae650d1de18e7bca4fad04f9805501f4568d07ceb47bffdfeb613c1/) |
| ❌ | 2026/01/04 | 2-43 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ❌ | 2025/12/29 | 4-9 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ✅ | 2025/12/24 | 5-3 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2025/12/19 | 0-13 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ✅ | 2025/12/13 | 3-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ❌ | 2025/12/08 | 0-13 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ❌ | 2025/12/02 | 3-6 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2025/11/26 | 3-30 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/11/21 | 3-21 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2025/11/15 | 3-13 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ❌ | 2025/11/10 | 0-15 | [First Squad](https://ws.tsl.rocks/corp/39bb6d19385b7eb6e2e71a979f21256463432b6e2e36ae4c55446abb1f6a0db1/) |
| ❌ | 2025/11/05 | 3-22 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ✅ | 2025/10/31 | 3-0 | [Enigma](https://ws.tsl.rocks/corp/b090292814af4e2f0c44d130ddd9ef8f56c0f42990900a3bb4f8ae48970c907d/) |
| ✅ | 2025/10/26 | 3-0 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ✅ | 2025/10/20 | 5-3 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ❌ | 2025/10/15 | 3-40 | [DOMOVINA](https://ws.tsl.rocks/corp/00af6c9318ddf16a1bb684310776fee9681a22f01c1649941b799556a0bb6fb6/) |
| ❌ | 2025/10/10 | 3-14 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2025/10/05 | 3-7 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/09/30 | 0-22 | [Winter Star llc](https://ws.tsl.rocks/corp/89b20821cb6e619dced74a6e153a1d3ceafa70b1035fb7d61a6920d375e49f50/) |
| ❌ | 2025/09/24 | 0-14 | [深域](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ❌ | 2025/09/19 | 3-6 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2025/09/09 | 0-10 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ❌ | 2025/09/04 | 3-20 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ❌ | 2025/08/29 | 3-19 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/08/23 | 3-20 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ❌ | 2025/08/17 | 0-26 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2025/08/12 | 0-15 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ✅ | 2025/08/06 | 12-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ❌ | 2025/08/01 | 4-20 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2025/07/26 | 1-7 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ❌ | 2025/07/15 | 0-17 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2025/07/09 | 6-17 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2025/07/03 | 0-6 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ❌ | 2025/06/27 | 5-13 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2025/06/21 | 0-24 | [Бороская Имерия](https://ws.tsl.rocks/corp/13a4b881c81a63721b98078aeed9b4970eae55034b2a55cb345dc7a8fb2ff541/) |
| ↔️ | 2025/06/15 | 5-5 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2025/06/09 | 3-29 | [暮光之城](https://ws.tsl.rocks/corp/be2dfac4257d290ffabebcc20a392f92a3f426be3cde09b2c78fd85691499ba9/) |
| ❌ | 2025/06/03 | 3-20 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ↔️ | 2025/05/28 | 3-3 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/05/23 | 13-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ↔️ | 2025/05/17 | 8-8 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2025/05/12 | 0-21 | [Lololol](https://ws.tsl.rocks/corp/38d38bd656b1fe9bad738f05bbe6779f5bd57bf4420e737a65292da9da037531/) |
| ❌ | 2025/05/06 | 3-18 | [Day Light](https://ws.tsl.rocks/corp/4edb005e2b465cb1d13e8f7f061ba06ce526ff36be7e4e28def7c54790dbe87c/) |
| ✅ | 2025/05/01 | 6-0 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ❌ | 2025/04/25 | 5-17 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ❌ | 2025/04/20 | 1-21 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ❌ | 2025/04/15 | 0-26 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2025/04/09 | 3-25 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ❌ | 2025/04/04 | 0-30 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ❌ | 2025/03/29 | 0-1 | [星约组织：基地分团](https://ws.tsl.rocks/corp/65d5754facd0f6a7ee7bd84567ea263d8002e24a754d36c982598d5552b1830b/) |
| ❌ | 2025/03/29 | 3-22 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/03/23 | 3-13 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2025/03/17 | 3-0 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ❌ | 2025/03/11 | 11-15 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ❌ | 2025/03/06 | 7-9 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ↔️ | 2025/03/01 | 0-0 | [Stargroup](https://ws.tsl.rocks/corp/cf430206a6a585f302ac5d76adf50b780f002f52ebbb82b323f933f5a0a25c4f/) |
| ✅ | 2025/03/01 | 7-0 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ❌ | 2025/02/24 | 0-27 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ❌ | 2025/02/23 | 0-10 | [AlyTec Sys\.](https://ws.tsl.rocks/corp/4f98eeb43077d5c00a32f9810352931d8778fb5b24d8b49c318953d489f07df0/) |
| ✅ | 2025/02/18 | 3-2 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ✅ | 2025/02/13 | 1-0 | [Sun light](https://ws.tsl.rocks/corp/668a9100e61ce2b71bda851beb8ae9a6aa3ce9f2d64681f29f29c4233adc104c/) |
| ❌ | 2025/02/13 | 5-19 | [火洋之心](https://ws.tsl.rocks/corp/99cb105316e2715545c205443c4e331cd11832753eac1c21e11ae3d532e36bcb/) |
| ✅ | 2025/02/08 | 11-0 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2025/02/03 | 4-13 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2025/01/29 | 3-16 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ✅ | 2025/01/23 | 14-4 | [Quin Armarda](https://ws.tsl.rocks/corp/281e5fa5950e49cecfe76d2adb80613499a0bb841567f92040bfeaea5f4ac218/) |
| ✅ | 2025/01/17 | 8-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2025/01/12 | 16-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2025/01/07 | 9-22 | [kryptonium](https://ws.tsl.rocks/corp/3ab8a0750af3d31465bbec7699fcf1dbf1d69c2e49b07b52491e50181ca2c7ed/) |
| ✅ | 2025/01/02 | 13-11 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ✅ | 2024/12/28 | 14-8 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/12/22 | 16-3 | [新星汇聚](https://ws.tsl.rocks/corp/7e61cd500818e2d3a3714d8a775a407e2ce8d9bf1ece36171778536aa8ca7078/) |
| ✅ | 2024/12/17 | 16-5 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/12/12 | 30-0 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2024/12/07 | 21-2 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ✅ | 2024/12/02 | 20-0 | [墨痕](https://ws.tsl.rocks/corp/1beef0498f07b07217c6e0727dffd066947edc54ee6d09dc63c031def52cdd60/) |
| ✅ | 2024/11/27 | 10-4 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ↔️ | 2024/11/22 | 0-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/11/22 | 12-0 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ❌ | 2024/11/16 | 0-17 | [Nox Imperium](https://ws.tsl.rocks/corp/b60fb003fae650d1de18e7bca4fad04f9805501f4568d07ceb47bffdfeb613c1/) |
| ❌ | 2024/11/16 | 4-28 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ↔️ | 2024/11/10 | 0-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/11/10 | 20-0 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ❌ | 2024/11/05 | 0-2 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ❌ | 2024/11/05 | 2-21 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2024/10/30 | 1-9 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2024/10/30 | 5-8 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2024/10/25 | 9-20 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ↔️ | 2024/10/25 | 0-0 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ❌ | 2024/10/20 | 0-6 | [Система Редарфа](https://ws.tsl.rocks/corp/7955df4f6e3d4e40b31e17dd1ae410181ccce8d2f8460b49f6a92ef187042dca/) |
| ❌ | 2024/10/20 | 7-33 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ❌ | 2024/10/14 | 0-7 | [ДИᏰEPℂДℍTᏰℓ](https://ws.tsl.rocks/corp/a1dad8a2a2c5ab935169d168bc19f8a1db7f12b099358e079cb7221a340345ed/) |
| ✅ | 2024/10/14 | 16-3 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2024/10/09 | 3-0 | [情谊永存](https://ws.tsl.rocks/corp/a3fee40ae9e62b95f50c653b7acf4990fee7b21461807dc90da90d429063a98c/) |
| ✅ | 2024/10/09 | 21-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/10/03 | 3-2 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2024/10/03 | 13-5 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2024/09/28 | 14-4 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/09/28 | 8-0 | [Сибиряки](https://ws.tsl.rocks/corp/8292ba421cc8d81ce0a483ceaedafeff0966e8afc1c1c689517971a223e2aaa8/) |
| ✅ | 2024/09/23 | 8-0 | [麻雀集团](https://ws.tsl.rocks/corp/bf5e5ea02e24918ed66d543902f4315f957c79c9bc1bd434c034158e9f648abe/) |
| ✅ | 2024/09/22 | 18-0 | [Летящий орел](https://ws.tsl.rocks/corp/b39cf2a8d810702af7ba4a49d383736861e0c60d0b10c9934ad8414c4b41d8ef/) |
| ✅ | 2024/09/17 | 21-0 | [边界](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ❌ | 2024/09/17 | 0-7 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2024/09/11 | 23-0 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2024/09/11 | 8-0 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ✅ | 2024/09/05 | 3-2 | [Alpha to Omega](https://ws.tsl.rocks/corp/2b3694014264240c8c0d1bb6a20e9d120dff2b6680c98b4e06e34bfd489f9da6/) |
| ✅ | 2024/09/05 | 23-3 | [ItaFederalFleet](https://ws.tsl.rocks/corp/02f7ac2b406e46cbb3e1f7fa3a0fb0dc2c32f9bc8afc54c299cd54757463ddbe/) |
| ❌ | 2024/08/31 | 6-11 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ✅ | 2024/08/31 | 3-0 | [火洋分团](https://ws.tsl.rocks/corp/ea0d68a7bcf311fcf1e564a154f499ce99bd2f907f8b1c9b3da7eb840dba6ac7/) |
| ↔️ | 2024/08/24 | 0-0 | [凛冬重工](https://ws.tsl.rocks/corp/513d81e0236600883fae60f5ad8bc4b54fe7b9787479dd96fb7e0b4dea3ca5eb/) |
| ❌ | 2024/08/24 | 3-20 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2024/08/18 | 0-15 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ✅ | 2024/08/17 | 16-3 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2024/08/12 | 26-1 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ❌ | 2024/08/12 | 0-5 | [电磁脉冲集团](https://ws.tsl.rocks/corp/dcb1da78498db8641adb123c1a92ba9ab5f4a68b2a22e41fd8694b912a6d3482/) |
| ✅ | 2024/08/06 | 7-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/08/06 | 11-2 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/08/01 | 25-3 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ❌ | 2024/08/01 | 0-9 | [萌新的收留所](https://ws.tsl.rocks/corp/1dd3f70c959e32c27cb4c010162be3799b7c0732115d5c2b7ca5979f48b10f7f/) |
| ↔️ | 2024/07/26 | 13-13 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ❌ | 2024/07/26 | 0-3 | [PDC](https://ws.tsl.rocks/corp/3cfc5c94fb18b34d3a1018bfbf6d4211d3cfb18ebb02bf7784cebc1e3627de4a/) |
| ↔️ | 2024/07/21 | 0-0 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2024/07/21 | 18-3 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ✅ | 2024/07/15 | 9-8 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/07/08 | 8-3 | [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) |
| ✅ | 2024/07/02 | 18-0 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ❌ | 2024/06/26 | 0-10 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2024/06/26 | 1-10 | [德意志第三帝国奥米加分部](https://ws.tsl.rocks/corp/b5f35e30b2dea2621e854b5011a9f9d07ca3585cd26bd9ac92aa7b06c0a522b1/) |
| ✅ | 2024/06/20 | 14-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/06/14 | 4-1 | [ItaFederalFleet](https://ws.tsl.rocks/corp/02f7ac2b406e46cbb3e1f7fa3a0fb0dc2c32f9bc8afc54c299cd54757463ddbe/) |
| ✅ | 2024/06/09 | 8-1 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2024/06/05 | 7-8 | [超新星联盟](https://ws.tsl.rocks/corp/c3667794c88fd0a09f565dc3b4fed5325f131a616d01d0f6890755b44997d0a1/) |
| ↔️ | 2024/06/03 | 7-7 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/05/29 | 4-1 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ✅ | 2024/05/27 | 7-3 | [Weyland Yutani](https://ws.tsl.rocks/corp/9799c33a0ecdcf321ad446a18f4e7f520610d26ec5f13e0c6b7a411dec2e2e46/) |
| ✅ | 2024/05/23 | 7-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ✅ | 2024/05/21 | 8-3 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2024/05/17 | 8-0 | [德意志第三帝国奥米加分部](https://ws.tsl.rocks/corp/b5f35e30b2dea2621e854b5011a9f9d07ca3585cd26bd9ac92aa7b06c0a522b1/) |
| ✅ | 2024/05/16 | 9-0 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ✅ | 2024/05/11 | 1-0 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ❌ | 2024/05/06 | 5-6 | [第四星际](https://ws.tsl.rocks/corp/42d38d5f95c493cb1822f0c89a5366e532a9dc30c0019e03cf7ddd280bf55040/) |
| ❌ | 2024/05/06 | 0-2 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2024/05/01 | 6-1 | [避难所](https://ws.tsl.rocks/corp/e2cec33caaaef7f020ed5fb31cb29a2804d8b5ab3a781ab69b08fadac88f7102/) |
| ✅ | 2024/05/01 | 2-0 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ✅ | 2024/04/25 | 4-2 | [Quantum Jumpers](https://ws.tsl.rocks/corp/2c5d82b8370a36c30a396c7a1b894f347a4698e2393f9e0d31e9ad6c465e2ae2/) |
| ❌ | 2024/04/25 | 0-11 | [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) |
| ❌ | 2024/04/20 | 0-3 | [Prometheus ESP](https://ws.tsl.rocks/corp/59ccf92b03fb4dbcd047d2425f6dd687367bd70088956249e0255554e81fe949/) |
| ❌ | 2024/04/20 | 0-2 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2024/04/15 | 0-18 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/04/14 | 3-14 | [BoomTech](https://ws.tsl.rocks/corp/97c4db179d3ea995d3a56227f87c501f4baa4abbece2b25e09b636f0aa264bd7/) |
| ❌ | 2024/04/10 | 0-6 | [数字星际集团](https://ws.tsl.rocks/corp/ccbf6be33652cb1b91bc9047b966ffdd6b313cc569d1e0a9fb832e6e8dc1d361/) |
| ❌ | 2024/04/08 | 1-19 | [Prometheus ESP](https://ws.tsl.rocks/corp/59ccf92b03fb4dbcd047d2425f6dd687367bd70088956249e0255554e81fe949/) |
| ✅ | 2024/04/03 | 2-0 | [初始之音](https://ws.tsl.rocks/corp/79f48676f0ad15541a751311b97bae91c977d65480891a675585fc396c20bdb9/) |
| ❌ | 2024/03/28 | 0-6 | [Saiyan Empire](https://ws.tsl.rocks/corp/6ce5e1ac078a6c9bcc97cd02556b9015bc614c88ed6a48e3681697c0beb4c164/) |

---
Corporation ID: d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771690436"></span>
</div>