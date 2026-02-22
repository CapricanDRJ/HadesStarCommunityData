---
title: ​Star Destroyers
description: W:49 L:63 D:2 Bonus ✅ 46%
image: ./favicon.png
Summary: ✅ 13 - 2 **VoidRunners**
date: 2026-02-16T15:48:14.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
7 day inactivity kick. Discord is optional but strongly encouraged. W
e usually do WS once a week with a day in between searches. If you in
dicate you will participate and dont you will be kicked.
```
<br>

### [Discord](https://discord.gg/Fhks7wPV)
### Whitestar Bonus ✅ 46%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1133 🔺  (14)|
| ELO Competitive | 1299 🔺  (25)|
| Total Matches | 114 |
| Wins | 49 |
| Losses | 63 |
| Draws | 2 |
| Streak | 2 |
| Streak Record | 10 |
| Flagship | 6 |

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
        let timestamps = [1770824894,1769395631,1768868294,1768372557,1767931480,1767378048,1766898852,1766281425,1765408917,1764511411,1763823935,1763153334,1762532899,1762031754,1761242760,1760654027,1759966264,1759365022,1758341674,1757721463,1757083907,1756566215,1755523722,1754953986,1753462058,1752937383,1752342774,1751668173,1751058508,1750451461,1749849285,1749224548,1748624471,1747875034,1747193522,1746568796,1745771689,1745010490,1744377628,1743804542,1743120222,1742333437,1741272366,1740753407,1740060751,1739338336,1738648680,1738131790,1737549427,1736897922,1736378291,1735760080,1735203595,1734589454,1734034180,1733404969,1732801589,1732266392,1731752554,1731191827,1730628683,1730023483,1729363890,1728815109,1728238977,1727625615,1727070301,1726547624,1725750906,1725075693,1724477080,1723879348,1723401841,1722958591,1722404748,1721964776,1721315073,1720766585,1720129770,1719546458,1718912081,1718822231,1718208425,1717595562,1717496982,1716884189,1716883288,1716444276,1715880940,1715320893,1714662500,1714041435,1713506050,1712960982,1712398792,1711724215,1711230535,1710690895,1710142836,1709440029,1708713456,1708141009,1707487874,1706737659,1706214759,1705632659,1705094144,1704486204,1703895393,1703117641,1703113435,1702226338,1701005524,1698948246];

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
| [地球联合](https://ws.tsl.rocks/corp/600f9edf51df1f1afe62db4c64e95b969ac6824a6a08d1a483beaec015ba2e25/) | 0 | 2 | 0 | 2 |
| [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) | 0 | 2 | 0 | 2 |
| [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) | 0 | 2 | 0 | 2 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 1 | 1 | 0 | 2 |
| [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) | 1 | 2 | 0 | 3 |
| [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) | 2 | 0 | 0 | 2 |
| [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) | 1 | 1 | 0 | 2 |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 1 | 1 | 0 | 2 |
| [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) | 2 | 0 | 0 | 2 |
| [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) | 0 | 2 | 0 | 2 |
| [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) | 1 | 1 | 1 | 3 |
| [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) | 0 | 2 | 0 | 2 |
| [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) | 0 | 2 | 0 | 2 |
| [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) | 0 | 2 | 0 | 2 |
| [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) | 1 | 1 | 0 | 2 |
| [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) | 3 | 0 | 0 | 3 |
| [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) | 1 | 1 | 0 | 2 |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/16 | 13-2 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2026/01/31 | 6-0 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2026/01/25 | 7-20 | [地球联合](https://ws.tsl.rocks/corp/600f9edf51df1f1afe62db4c64e95b969ac6824a6a08d1a483beaec015ba2e25/) |
| ❌ | 2026/01/19 | 6-25 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2026/01/14 | 6-14 | [HUN TERS](https://ws.tsl.rocks/corp/99c45cb17fdcbf89bf806b294ebe42a042ff774e913c216800fb7b1435d255a1/) |
| ❌ | 2026/01/07 | 5-27 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2026/01/02 | 3-7 | [地球联合](https://ws.tsl.rocks/corp/600f9edf51df1f1afe62db4c64e95b969ac6824a6a08d1a483beaec015ba2e25/) |
| ✅ | 2025/12/26 | 9-5 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2025/12/15 | 3-10 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ✅ | 2025/12/05 | 12-2 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2025/11/27 | 5-13 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2025/11/19 | 0-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/11/12 | 17-0 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ❌ | 2025/11/06 | 3-9 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2025/10/28 | 21-0 | [SMH](https://ws.tsl.rocks/corp/a49f2ea5985187cf528d99e346b4bd74512f4a36568c9ec70705ed97b49cd7e7/) |
| ❌ | 2025/10/21 | 6-32 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2025/10/13 | 3-19 | [DrunkenMiningCo](https://ws.tsl.rocks/corp/1a156e07acaab026bac031e9dcd275d128fa8c26bca53b12a6f16046075c5536/) |
| ❌ | 2025/10/07 | 16-30 | [Sad Panda 2\.0](https://ws.tsl.rocks/corp/74aed8be82b78aae23f7cdb815f2124496aee03eb68115e20ce9073444d3430c/) |
| ✅ | 2025/09/25 | 21-0 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2025/09/17 | 0-17 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2025/09/10 | 0-25 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ❌ | 2025/09/04 | 1-30 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ✅ | 2025/08/23 | 20-3 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2025/08/16 | 8-11 | [Бороская Имерия](https://ws.tsl.rocks/corp/13a4b881c81a63721b98078aeed9b4970eae55034b2a55cb345dc7a8fb2ff541/) |
| ✅ | 2025/07/30 | 12-3 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2025/07/24 | 3-20 | [OKC THUNDER](https://ws.tsl.rocks/corp/e0d10ea9212daec497d7fbfc5e33cb87a175d27e7024ea9da117385db5dbf3c2/) |
| ❌ | 2025/07/17 | 5-30 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ❌ | 2025/07/09 | 3-18 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/07/02 | 1-5 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/06/25 | 18-0 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ✅ | 2025/06/18 | 7-1 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ❌ | 2025/06/11 | 4-8 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/06/04 | 5-21 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2025/05/27 | 0-18 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ❌ | 2025/05/19 | 3-22 | [Omega Nation](https://ws.tsl.rocks/corp/daf6da11d2b76129fa12c5d3d20894ed2f7f9b67eca3439c3e5f952e5d74bb5b/) |
| ❌ | 2025/05/11 | 2-9 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2025/05/02 | 5-15 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ❌ | 2025/04/23 | 3-14 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2025/04/16 | 3-31 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2025/04/09 | 3-15 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2025/04/02 | 4-18 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ❌ | 2025/03/23 | 6-26 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ❌ | 2025/03/11 | 6-41 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ❌ | 2025/03/05 | 10-14 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2025/02/25 | 5-32 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2025/02/17 | 3-31 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/02/09 | 4-40 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2025/02/03 | 3-15 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/01/27 | 23-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2025/01/19 | 4-35 | [" Возрождение "](https://ws.tsl.rocks/corp/4422f581b40217ac99ee97df59d8d887249c4cdc51d2d5fe901f438ab720d26d/) |
| ✅ | 2025/01/13 | 20-1 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/01/06 | 14-11 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ✅ | 2024/12/31 | 25-1 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/12/24 | 8-25 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ❌ | 2024/12/17 | 1-23 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2024/12/10 | 10-0 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2024/12/03 | 1-5 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ❌ | 2024/11/27 | 2-19 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ✅ | 2024/11/21 | 6-0 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ❌ | 2024/11/14 | 7-11 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/11/08 | 9-21 | [Vega Conflict](https://ws.tsl.rocks/corp/396ceafad44127f2e9dfb94934dc27154c6f97f6bc60832af6cb17791fd7369b/) |
| ✅ | 2024/11/01 | 10-6 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ↔️ | 2024/10/24 | 4-4 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/10/18 | 15-3 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2024/10/11 | 14-28 | [Czech Legion](https://ws.tsl.rocks/corp/b4453b41cf7b1c019648ed14db493a47c8a64347e689013b2c969bf97e251ec8/) |
| ❌ | 2024/10/04 | 6-9 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ✅ | 2024/09/28 | 25-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/09/22 | 22-0 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ✅ | 2024/09/12 | 24-1 | [\(\_\(\_Vossk\_\)\_\)](https://ws.tsl.rocks/corp/6db23201f00670abe532f02a8fc28e109f95d673ef31ca1df7362c0a6c45dd2f/) |
| ✅ | 2024/09/05 | 15-4 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ✅ | 2024/08/29 | 20-19 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ✅ | 2024/08/22 | 20-4 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/08/16 | 2-10 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2024/08/11 | 20-26 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ✅ | 2024/08/05 | 15-11 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ❌ | 2024/07/31 | 4-19 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ✅ | 2024/07/23 | 26-6 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ✅ | 2024/07/17 | 21-11 | [Galaktika corp](https://ws.tsl.rocks/corp/c37872d1ea085402bf536c707a895610f72dafda4bede848405b7908b4523985/) |
| ✅ | 2024/07/09 | 14-0 | [Angel Dragon](https://ws.tsl.rocks/corp/2f2e44c159dc8f4e15e2dabda533d9db8697d2c6c06735d926d180b3aa056dcf/) |
| ✅ | 2024/07/03 | 14-3 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/06/25 | 15-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/06/24 | 25-3 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ✅ | 2024/06/17 | 31-1 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2024/06/10 | 29-1 | [The Elite](https://ws.tsl.rocks/corp/a2df28ce949920025afb16d0229e0c14aed7832c217d142307a62622634d395c/) |
| ✅ | 2024/06/09 | 30-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2024/06/02 | 32-0 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/06/02 | 7-18 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/05/28 | 14-22 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ✅ | 2024/05/21 | 19-0 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/05/15 | 28-0 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2024/05/07 | 16-9 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ✅ | 2024/04/30 | 31-0 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ✅ | 2024/04/24 | 22-3 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2024/04/17 | 28-1 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/04/11 | 29-0 | [Тёмный Феникс](https://ws.tsl.rocks/corp/7558698da6213ab97789830842ad4baa89467edc584a6c8594ab04b521ae3488/) |
| ✅ | 2024/04/03 | 14-3 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2024/03/28 | 3-19 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ✅ | 2024/03/22 | 11-4 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ✅ | 2024/03/16 | 7-3 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |
| ✅ | 2024/03/08 | 14-3 | [Red Star Corp\.](https://ws.tsl.rocks/corp/7ac87486823e26635a2f3887927b19b3a14a7875d38042200045204c418d9ac1/) |
| ✅ | 2024/02/28 | 12-5 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/02/22 | 2-15 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2024/02/14 | 7-12 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ↔️ | 2024/02/05 | 8-8 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ❌ | 2024/01/30 | 8-24 | [Wompwompway](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2024/01/24 | 18-14 | [Antioch](https://ws.tsl.rocks/corp/6cf52926568f845a630c3fba8370e8afa3a75d315af0f6d0bd891085e6e4425f/) |
| ❌ | 2024/01/17 | 4-13 | [Space Monkeys](https://ws.tsl.rocks/corp/bf0f92381dd40d43b1326fd6cb3455bfd466b0f876fec8c6d9fa885d25d757f9/) |
| ❌ | 2024/01/10 | 10-26 | [Гарри Поттер](https://ws.tsl.rocks/corp/f6776b51b0578a0ec96f8674d12c88c324a9e087c9053c0d42153a1a5090a665/) |
| ❌ | 2024/01/04 | 0-18 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2023/12/26 | 0-31 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2023/12/25 | 2-27 | [BSO Academy](https://ws.tsl.rocks/corp/d032f0193d9b3acb579e4e6525a5c8b68f5ec9526dd9644bd45fda747013e876/) |
| ❌ | 2023/12/15 | 3-31 | [Highland Ind\.](https://ws.tsl.rocks/corp/ba78f9ff67f8944bf4b0152d98968e0ad6c9c86cc2fc518284c0745060e90e2c/) |
| ❌ | 2023/12/01 | 4-20 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2023/11/07 | 0-26 | [Green Dwarf](https://ws.tsl.rocks/corp/dbfbd1738d98b2f1a9419727fde30070aae0f158a0aa36a78561489c2bb3283a/) |

---
Corporation ID: 32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771256894"></span>
</div>