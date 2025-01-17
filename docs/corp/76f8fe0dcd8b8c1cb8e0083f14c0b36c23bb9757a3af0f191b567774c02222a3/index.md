---
layout: page
title: ​Bl@ck/Galaxy 
description: W:31 L:21 D:2 Bonus ✅ 36%
image: ./favicon.png
date: 1736657319
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
<size=90><b><color=red>Aquí hay dragones</color></b></size>  Estrella
s blancas semanales. Indispensable participar y aportar. Si no es así
, te buscas otra. O vuelves con mas tiempo y ganas. 
```
### Whitestar Bonus ✅ 36%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1338 🔺  (112)|
| ELO Competitive | 1406 🔺  (140)|
| Total Matches | 54 |
| Wins | 31 |
| Losses | 21 |
| Draws | 2 |
| Streak Record | 17 |
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
        let timestamps = [1736225319,1735618561,1734980970,1734375527,1733790807,1733161594,1732587933,1731978239,1731348402,1730738069,1730135577,1729526765,1728936547,1728326122,1727717571,1727134910,1726505176,1725902963,1725318803,1724690150,1724088829,1723489293,1722877453,1722268021,1721680500,1721049108,1720488887,1719849667,1719261136,1718657855,1718038637,1717428460,1716833406,1716222255,1715627967,1715013237,1714410407,1713804386,1713204679,1712591409,1711989246,1711480531,1710787048,1710181599,1709584863,1708993815,1708512123,1706563661,1705956021,1705364608,1704780410,1702944038,1702198382,1700640348];

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
| [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) | 1 | 1 | 0 | 2 |
| [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) | 1 | 2 | 0 | 3 |
| [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) | 2 | 4 | 0 | 6 |
| [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) | 0 | 2 | 0 | 2 |
| [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) | 1 | 0 | 1 | 2 |
| [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) | 3 | 0 | 0 | 3 |
| [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) | 2 | 0 | 0 | 2 |
| [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) | 0 | 2 | 0 | 2 |
| [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/01/12 | 30-4 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2025/01/05 | 11-36 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2024/12/28 | 14-23 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ❌ | 2024/12/21 | 4-30 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ❌ | 2024/12/15 | 1-6 | [Млечный путь](https://ws.tsl.rocks/corp/a9a3b102b3698bf7db8cd106adda02cee0033bfc03f681b667b2991e10049a25/) |
| ✅ | 2024/12/07 | 25-3 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2024/12/01 | 12-3 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ❌ | 2024/11/24 | 5-25 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2024/11/16 | 3-22 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2024/11/09 | 33-3 | [Antioch](https://ws.tsl.rocks/corp/6cf52926568f845a630c3fba8370e8afa3a75d315af0f6d0bd891085e6e4425f/) |
| ❌ | 2024/11/02 | 2-27 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ❌ | 2024/10/26 | 3-21 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ↔️ | 2024/10/19 | 31-31 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ✅ | 2024/10/12 | 33-18 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2024/10/05 | 25-10 | [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) |
| ✅ | 2024/09/28 | 36-14 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/09/21 | 26-5 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2024/09/14 | 32-0 | [Equinox](https://ws.tsl.rocks/corp/666001c1d87fbfcf6a3d8614e2b5b9f0e4aa96fa4c098c004bea9fb92ed330c2/) |
| ✅ | 2024/09/07 | 38-1 | [Tormenta](https://ws.tsl.rocks/corp/537807f41149f54b040d4f2bc983c7f1fbfa2242ec5566371330e4996e33a195/) |
| ✅ | 2024/08/31 | 30-29 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2024/08/24 | 39-7 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2024/08/17 | 26-6 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ✅ | 2024/08/10 | 19-15 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2024/08/03 | 22-9 | [Grater T](https://ws.tsl.rocks/corp/2044ad2bb7831118aae299744191230a33d196c7997f9516a20c3d0a321ba669/) |
| ✅ | 2024/07/27 | 25-9 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ✅ | 2024/07/20 | 22-7 | [Helion Prime](https://ws.tsl.rocks/corp/1a09ce5efe86add0a6f0344bc2a12e27c898c0d21641a3f29a450c6d4c4db3f2/) |
| ✅ | 2024/07/14 | 35-3 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ✅ | 2024/07/06 | 20-14 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/06/29 | 30-3 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/06/22 | 40-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2024/06/15 | 13-19 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2024/06/08 | 32-0 | [Destroyers](https://ws.tsl.rocks/corp/3756333f55f58944372cf785b972da55796cc179c0ce5f10244e90e3c4355a23/) |
| ✅ | 2024/06/01 | 45-0 | [Тёмный Феникс](https://ws.tsl.rocks/corp/7558698da6213ab97789830842ad4baa89467edc584a6c8594ab04b521ae3488/) |
| ✅ | 2024/05/25 | 22-7 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/05/18 | 21-25 | [Got Nothing](https://ws.tsl.rocks/corp/ea7879fd9cbed37b260ec2bf39339786942fb34216036a90e107ba525f5924e1/) |
| ✅ | 2024/05/11 | 32-1 | [lost souls](https://ws.tsl.rocks/corp/64cf1f6ce9001bcd1d03fd1aaecafc1b7d88cd36316892a52a1b19d5e85bd793/) |
| ❌ | 2024/05/04 | 3-17 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ✅ | 2024/04/27 | 30-0 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2024/04/20 | 29-0 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |
| ❌ | 2024/04/13 | 16-20 | [РОДНЫЕ\.](https://ws.tsl.rocks/corp/64c5cb7cd357c68809a13e9a1f99c7e8b29bdb1f448796c8262cec88b825aabb/) |
| ❌ | 2024/04/06 | 4-12 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ↔️ | 2024/03/31 | 20-20 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/03/23 | 20-6 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/03/16 | 21-0 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |
| ❌ | 2024/03/09 | 10-15 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ❌ | 2024/03/03 | 13-28 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ❌ | 2024/02/26 | 0-14 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2024/02/03 | 0-22 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ✅ | 2024/01/27 | 27-0 | [Slovensko\-Activ](https://ws.tsl.rocks/corp/1b9254941b8239a2cb7067c51e8806c4922f1d033fa8d4506c0b705f51322939/) |
| ❌ | 2024/01/21 | 8-9 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ✅ | 2024/01/14 | 20-3 | [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) |
| ❌ | 2023/12/24 | 4-18 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2023/12/15 | 3-13 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ❌ | 2023/11/27 | 0-3 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |

---
Corporation ID: 76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>