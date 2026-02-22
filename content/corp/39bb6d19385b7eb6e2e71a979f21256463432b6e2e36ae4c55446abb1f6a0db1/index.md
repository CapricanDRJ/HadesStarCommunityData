---
title: ​First Squad
description: W:12 L:25 D:2 Bonus ❌ 12%
image: ./favicon.png
Summary: ❌ 4 - 32 **Halcon español**
date: 2026-02-21T10:43:25.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
well... just join and give it a try. casual and idle is tolerated, ac
tivity and participation very welcome
```
<br>

### [Discord](https://discord.gg/Dtk4Pcg)
### Whitestar Bonus ❌ 12%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1131 🔻  (-10)|
| ELO Competitive | 1254 🔻  (-8)|
| Total Matches | 39 |
| Wins | 12 |
| Losses | 25 |
| Draws | 2 |
| Streak Record | 4 |
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
        let timestamps = [1771238605,1769360479,1768825345,1767888817,1766449683,1765708764,1765121672,1764672163,1764186570,1763420443,1762977885,1762363144,1761903750,1761119510,1760576511,1739914399,1737144651,1733221081,1729809827,1729030009,1728550004,1728546098,1728010869,1727988335,1727429379,1727419465,1726780935,1726780635,1726174902,1726174302,1725013784,1717527346,1716602003,1714325677,1710971228,1707487273,1704271635,1701628552,1700869973];

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
| [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) | 0 | 2 | 0 | 2 |
| [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) | 0 | 2 | 0 | 2 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/21 | 4-32 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ❌ | 2026/01/30 | 3-17 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2026/01/24 | 29-3 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2026/01/13 | 25-1 | [Тишина](https://ws.tsl.rocks/corp/c01132c3ce96835d1c14e411dc68417ed6fc0536d57de0f9e2a4ce86f1a739ca/) |
| ❌ | 2025/12/28 | 9-24 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2025/12/19 | 3-17 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2025/12/12 | 12-0 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ❌ | 2025/12/07 | 6-24 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ✅ | 2025/12/01 | 29-0 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2025/11/22 | 4-17 | [White Star Inc\.](https://ws.tsl.rocks/corp/b5bdfb5e81eac1263ce48131806cc733ec699336043c0f7af090fbe8ff21d26e/) |
| ↔️ | 2025/11/17 | 14-14 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2025/11/10 | 15-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2025/11/05 | 8-6 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/10/27 | 4-24 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2025/10/21 | 19-0 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2025/02/23 | 3-22 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2025/01/22 | 0-39 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2024/12/08 | 3-21 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2024/10/29 | 3-19 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ❌ | 2024/10/20 | 8-16 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2024/10/15 | 19-27 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2024/10/15 | 4-7 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ❌ | 2024/10/09 | 4-45 | [Croce del Sud](https://ws.tsl.rocks/corp/d0899d3aea0aaed6c7d87de378c6c82274ff8dcdabad391d44c2f08f98039af1/) |
| ❌ | 2024/10/08 | 6-16 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ❌ | 2024/10/02 | 9-43 | [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) |
| ↔️ | 2024/10/02 | 3-3 | [Alpha](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) |
| ❌ | 2024/09/24 | 3-17 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ✅ | 2024/09/24 | 38-3 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ✅ | 2024/09/17 | 8-6 | [Galaktika corp](https://ws.tsl.rocks/corp/c37872d1ea085402bf536c707a895610f72dafda4bede848405b7908b4523985/) |
| ✅ | 2024/09/17 | 26-0 | [Aggronauten](https://ws.tsl.rocks/corp/3bc8488b4cde8d611cbc48bac64a708c40e9954bc2c221dddafb0240b734c679/) |
| ✅ | 2024/09/04 | 37-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2024/06/09 | 5-32 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ❌ | 2024/05/30 | 11-49 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2024/05/03 | 3-33 | [White Dwarf](https://ws.tsl.rocks/corp/02293e0ec2e4f96dcdcf4551de1cfa6a278a4c53ac62e80c4212912fa4eda15b/) |
| ❌ | 2024/03/25 | 1-30 | [death squadron](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |
| ✅ | 2024/02/14 | 22-0 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2024/01/08 | 6-27 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2023/12/08 | 14-27 | [Спутник](https://ws.tsl.rocks/corp/0ae15c4db6dc8c3f4bf3eb6aa93bffd4ea9281b06b721ab103c0078646bfe58c/) |
| ❌ | 2023/11/29 | 14-18 | [SYNDICATE](https://ws.tsl.rocks/corp/340a8194f62a11308a6d79b913d48312fa37e3b250fb4b241cc2c5d69549a912/) |

---
Corporation ID: 39bb6d19385b7eb6e2e71a979f21256463432b6e2e36ae4c55446abb1f6a0db1

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771670605"></span>
</div>