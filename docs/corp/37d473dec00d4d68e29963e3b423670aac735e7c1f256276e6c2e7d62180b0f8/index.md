---
layout: page
title: ​Dumpster Fire 2
description: W:43 L:58 D:2 Bonus ✅ 42%
image: ./favicon.png
date: 1737816759
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
   (\)＾／)/)/^(\ノ)
   |\______________\
   \|Dumpster Fire 2| 
  \[|      —    .    —     |]
   \|_______________|™
<b>Easy going Dumpster Fire with Discord—Free White Star</b>
```
### Whitestar Bonus ✅ 42%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1133 🔺  (1204)|
| ELO Competitive | 1270 🔺  (359)|
| Total Matches | 103 |
| Wins | 43 |
| Losses | 58 |
| Draws | 2 |
| Streak Record | 5 |
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
        let timestamps = [1737384759,1736170623,1735457801,1734456952,1733909179,1733137249,1732503796,1731676224,1730747387,1730129866,1729212426,1728623036,1728112154,1727678197,1727157441,1726634778,1726146277,1725699813,1725260201,1724794423,1724311798,1723874840,1723337831,1722336832,1721861106,1721373067,1720856150,1720324498,1719847262,1719846361,1719345124,1719290428,1718836357,1718832151,1718345454,1717898583,1717873642,1717391492,1716938595,1716485737,1716415739,1716019746,1715949439,1715545946,1715322996,1714789099,1714785779,1714339500,1714339500,1713863570,1713726574,1713250048,1713247945,1712782209,1712782209,1712327279,1712325175,1711884672,1711883771,1711421039,1711412027,1710972129,1710960710,1710523519,1710520814,1710086049,1710081841,1709631731,1709623319,1709155477,1709155177,1708698728,1708698728,1708223347,1708219442,1707757869,1707756366,1707322551,1707318644,1706829915,1706826091,1706378839,1706369220,1705936182,1705935881,1705496225,1705494422,1705025028,1705018118,1704583873,1704575759,1704137309,1703703962,1703271811,1702834038,1702390134,1701929393,1701470768,1701004922,1700553193,1700103278,1699635217,1699005035];

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
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
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
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
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
| [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) | 0 | 2 | 0 | 2 |
| [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) | 0 | 2 | 0 | 2 |
| [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) | 2 | 0 | 0 | 2 |
| [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) | 0 | 4 | 0 | 4 |
| [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) | 1 | 3 | 0 | 4 |
| [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) | 1 | 1 | 0 | 2 |
| [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) | 0 | 2 | 0 | 2 |
| [Space Monkeys](https://ws.tsl.rocks/corp/bf0f92381dd40d43b1326fd6cb3455bfd466b0f876fec8c6d9fa885d25d757f9/) | 2 | 0 | 0 | 2 |
| [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) | 1 | 1 | 0 | 2 |
| [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) | 0 | 2 | 0 | 2 |
| [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) | 0 | 1 | 1 | 2 |
| [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) | 2 | 0 | 0 | 2 |
| [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) | 2 | 0 | 0 | 2 |
| [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) | 1 | 1 | 0 | 2 |
| [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) | 1 | 0 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/01/25 | 16-3 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ❌ | 2025/01/11 | 5-13 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ❌ | 2025/01/03 | 14-17 | [Z\. O\. V\. ](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2024/12/22 | 2-9 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/12/16 | 2-27 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2024/12/07 | 18-8 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ❌ | 2024/11/30 | 3-37 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ✅ | 2024/11/20 | 13-5 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ❌ | 2024/11/09 | 5-28 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ✅ | 2024/11/02 | 14-0 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ❌ | 2024/10/23 | 3-4 | [SUN OF 3LANDS](https://ws.tsl.rocks/corp/874f472303f6616789f5df41609dba8d64b95e8b9291aaf23a05e4c397a2f44a/) |
| ❌ | 2024/10/16 | 6-32 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2024/10/10 | 2-8 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ❌ | 2024/10/05 | 0-4 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/09/29 | 25-1 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/09/23 | 2-24 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ❌ | 2024/09/17 | 1-26 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ❌ | 2024/09/12 | 3-22 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2024/09/07 | 17-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/09/01 | 14-1 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2024/08/27 | 3-27 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ❌ | 2024/08/22 | 1-23 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2024/08/16 | 0-80 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ❌ | 2024/08/04 | 1-30 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/07/29 | 10-25 | [元素联邦](https://ws.tsl.rocks/corp/e9d602d617d5c81270107c15a6d1f1717c5016abad802d3629f7f4301a58e95e/) |
| ❌ | 2024/07/24 | 4-22 | [ЧВК "Котики"](https://ws.tsl.rocks/corp/b770b833fe257bc6accd1bbe82a887971291dd0038f8aa627a47f3ce063265c0/) |
| ❌ | 2024/07/18 | 9-36 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2024/07/12 | 0-26 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ❌ | 2024/07/06 | 14-25 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |
| ✅ | 2024/07/06 | 22-0 | [Quin Armarda 2](https://ws.tsl.rocks/corp/529de2f6f4f84d776caefa1e49ce587d581b86c0659533f7fab2eb642b04a928/) |
| ❌ | 2024/06/30 | 1-35 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2024/06/30 | 11-12 | [Sternenflotte](https://ws.tsl.rocks/corp/6273be8c33cae6938fe5608aa5cf5a78e740f71dd888477b437e47ec106c0a0d/) |
| ✅ | 2024/06/24 | 31-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2024/06/24 | 16-14 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2024/06/19 | 6-3 | [death squadron ](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |
| ❌ | 2024/06/14 | 6-30 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/06/13 | 4-15 | [Angel Dragon](https://ws.tsl.rocks/corp/2f2e44c159dc8f4e15e2dabda533d9db8697d2c6c06735d926d180b3aa056dcf/) |
| ❌ | 2024/06/08 | 5-38 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ❌ | 2024/06/02 | 0-23 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ✅ | 2024/05/28 | 23-3 | [lost souls](https://ws.tsl.rocks/corp/64cf1f6ce9001bcd1d03fd1aaecafc1b7d88cd36316892a52a1b19d5e85bd793/) |
| ❌ | 2024/05/27 | 2-14 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/05/23 | 12-31 | [Free Ag3nts](https://ws.tsl.rocks/corp/66c873438b165344dbdac371b45825f9c818ee1e77e128f101f2660f4b0c7b70/) |
| ❌ | 2024/05/22 | 1-25 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2024/05/17 | 2-21 | [Медведи](https://ws.tsl.rocks/corp/b3b0cac2c48761153afa1dcad7a4048103ffc3ec2ca6d477a6bd744922fce075/) |
| ✅ | 2024/05/15 | 19-5 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/05/09 | 4-26 | [United Stars ](https://ws.tsl.rocks/corp/312c90cac9a249b2179da8891f78c1a90bd16d0bf3391509d6a3d8e9a35a3d36/) |
| ✅ | 2024/05/09 | 25-0 | [BR Gear](https://ws.tsl.rocks/corp/8b23b08409bdebed03646b6e5e5d3c0a7a45d20e80f7c663ac21071310081ab8/) |
| ❌ | 2024/05/03 | 9-14 | [Redd Armada](https://ws.tsl.rocks/corp/a4d427cc014d6a9fa6ea2b1411437bf933b471b6979d6f3f309e96fee2527b5c/) |
| ✅ | 2024/05/03 | 27-1 | [Nebula](https://ws.tsl.rocks/corp/38bd8c92bc5f2d4ff240d58da260855d87eb4c2c4a241735c5d72215d4a191fb/) |
| ✅ | 2024/04/28 | 23-5 | [Green Dwarf](https://ws.tsl.rocks/corp/dbfbd1738d98b2f1a9419727fde30070aae0f158a0aa36a78561489c2bb3283a/) |
| ❌ | 2024/04/26 | 5-29 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ✅ | 2024/04/21 | 10-1 | [Space Monkeys](https://ws.tsl.rocks/corp/bf0f92381dd40d43b1326fd6cb3455bfd466b0f876fec8c6d9fa885d25d757f9/) |
| ✅ | 2024/04/21 | 14-7 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ❌ | 2024/04/15 | 2-11 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ✅ | 2024/04/15 | 16-0 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ✅ | 2024/04/10 | 18-0 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2024/04/10 | 5-17 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ✅ | 2024/04/05 | 26-14 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/04/05 | 10-3 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/03/31 | 19-0 | [Space Monkeys](https://ws.tsl.rocks/corp/bf0f92381dd40d43b1326fd6cb3455bfd466b0f876fec8c6d9fa885d25d757f9/) |
| ❌ | 2024/03/31 | 20-26 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2024/03/25 | 0-35 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/03/25 | 4-8 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2024/03/20 | 11-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ❌ | 2024/03/20 | 3-13 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ✅ | 2024/03/15 | 27-5 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ❌ | 2024/03/15 | 1-36 | [BSO Academy](https://ws.tsl.rocks/corp/d032f0193d9b3acb579e4e6525a5c8b68f5ec9526dd9644bd45fda747013e876/) |
| ❌ | 2024/03/10 | 9-17 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2024/03/10 | 1-19 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ❌ | 2024/03/04 | 8-15 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/03/04 | 16-0 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/02/28 | 8-30 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/02/28 | 19-0 | [神圣罗马帝国](https://ws.tsl.rocks/corp/2a71af44aaef82175cd8dfd86c9e3f218a438a7c7e748bae20d8a0d964a984ab/) |
| ❌ | 2024/02/23 | 0-4 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/02/23 | 22-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/02/17 | 22-1 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2024/02/17 | 15-0 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ❌ | 2024/02/12 | 0-44 | [Spica​](https://ws.tsl.rocks/corp/df96d6d34c4906312183050c8aa7a502678ab2902b7c23112aa9fda827bb4191/) |
| ✅ | 2024/02/12 | 31-0 | [Highland Ind\. ](https://ws.tsl.rocks/corp/ba78f9ff67f8944bf4b0152d98968e0ad6c9c86cc2fc518284c0745060e90e2c/) |
| ✅ | 2024/02/06 | 30-0 | [Russia](https://ws.tsl.rocks/corp/8a6254c757d7124a5a23df1b60ae058486cc79ca0c2c006241d319b8d5d815db/) |
| ❌ | 2024/02/06 | 3-29 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2024/02/01 | 2-20 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ❌ | 2024/02/01 | 3-8 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ❌ | 2024/01/27 | 5-6 | [ES Gaming ](https://ws.tsl.rocks/corp/1bbc4390e9fa60fe312b23c8fa8d8f9eb499307607a4c3304e33bd05bd58f981/) |
| ↔️ | 2024/01/27 | 8-8 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ❌ | 2024/01/22 | 5-25 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ✅ | 2024/01/22 | 21-2 | [Gemini↕     ☁](https://ws.tsl.rocks/corp/e4ad99f1420e8e1fca3363f6a3fae37de7f090a51076858f5be146343099c088/) |
| ❌ | 2024/01/17 | 0-18 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ✅ | 2024/01/17 | 23-1 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2024/01/11 | 7-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/01/11 | 12-5 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2024/01/06 | 23-16 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/01/01 | 18-0 | [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) |
| ↔️ | 2023/12/27 | 4-4 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2023/12/22 | 19-7 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2023/12/17 | 23-6 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2023/12/12 | 5-7 | [Galaxian](https://ws.tsl.rocks/corp/5dcf6b30fe7412dfe10c7f88aacc5e5ec1d63a2ea3df0084c393b9e20c34ee97/) |
| ❌ | 2023/12/06 | 3-20 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2023/12/01 | 10-36 | [Dacia Chill](https://ws.tsl.rocks/corp/b38c6a1ce87d3b7937da53dddc33cbdfc7152ab1e5023f2308ee9c81a1633208/) |
| ❌ | 2023/11/26 | 4-16 | [Looping](https://ws.tsl.rocks/corp/08524086f45f2e6109e583baf940197663aa3e155c32fcdbb04f319343a5eb0c/) |
| ✅ | 2023/11/21 | 15-3 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ✅ | 2023/11/15 | 19-2 | [КВАЗАР](https://ws.tsl.rocks/corp/d27b02c96ddf32f83c727a329774e46f3cdaa648d1c4ea06883997c3b9a11394/) |
| ✅ | 2023/11/08 | 17-7 | [Imperio Tortuga](https://ws.tsl.rocks/corp/f6a55d248e49087c7f24bd1ffa5fddbeb4c64697f4fa485d2a8e350c1c067f79/) |

---
Corporation ID: 37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>