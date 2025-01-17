---
layout: page
title: ​●Black•Sails●
description: W:20 L:23 D:0 Bonus ❌ 7%
image: ./favicon.png
date: 1736272005
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
Together We Can Achieve More.
```
### [Discord](https://discord.gg/https://discord.com/invite/hayZVDBK)
### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1186 🔺  (691)|
| ELO Competitive | 1245 🔺  (422)|
| Total Matches | 43 |
| Wins | 20 |
| Losses | 23 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1735840005,1734069330,1733426608,1732780256,1731570753,1730360639,1729751827,1729147206,1728546098,1727937534,1727334125,1726734785,1726125316,1725520417,1724928440,1724404590,1723708657,1723135586,1722512928,1721913387,1721293136,1720680625,1720082574,1719476739,1718894948,1718264017,1717679112,1717052179,1716446679,1715842181,1715237669,1714631853,1714033324,1713425528,1712822464,1711696869,1711031915,1708681900,1704916245,1704223858,1703719591,1702939230,1702327626];

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
| [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) | 1 | 1 | 0 | 2 |
| [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) | 0 | 2 | 0 | 2 |
| [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) | 0 | 2 | 0 | 2 |
| [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) | 0 | 2 | 0 | 2 |
| [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) | 0 | 2 | 0 | 2 |
| [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) | 2 | 0 | 0 | 2 |
| [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/01/07 | 10-0 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2024/12/18 | 3-19 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ❌ | 2024/12/10 | 6-32 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2024/12/03 | 8-6 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2024/11/19 | 2-21 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2024/11/05 | 0-16 | [德意志第三帝国奥米加分部](https://ws.tsl.rocks/corp/b5f35e30b2dea2621e854b5011a9f9d07ca3585cd26bd9ac92aa7b06c0a522b1/) |
| ❌ | 2024/10/29 | 0-21 | [Quantum Cats](https://ws.tsl.rocks/corp/0b6309a414bde261db3ee5592ae72168ca48d02558f5bc597950f11e55f92ae6/) |
| ✅ | 2024/10/22 | 12-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ✅ | 2024/10/15 | 7-4 | [First Squad](https://ws.tsl.rocks/corp/39bb6d19385b7eb6e2e71a979f21256463432b6e2e36ae4c55446abb1f6a0db1/) |
| ❌ | 2024/10/08 | 3-20 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2024/10/01 | 0-36 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ❌ | 2024/09/24 | 2-21 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ❌ | 2024/09/17 | 1-16 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ✅ | 2024/09/10 | 11-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2024/09/03 | 4-0 | [落雨观花](https://ws.tsl.rocks/corp/565a6d89fc5107e86669d7f8910a1c4ae1fbb156fa0b5e81dbc917c341cc9ff0/) |
| ✅ | 2024/08/28 | 5-4 | [sk cz nebula](https://ws.tsl.rocks/corp/6ed29f74bee91a7aad75a64196918993de6cec070ce8c65d1132ed6b0e79005d/) |
| ❌ | 2024/08/20 | 0-19 | [United Stars ](https://ws.tsl.rocks/corp/312c90cac9a249b2179da8891f78c1a90bd16d0bf3391509d6a3d8e9a35a3d36/) |
| ❌ | 2024/08/13 | 10-14 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ❌ | 2024/08/06 | 2-3 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ❌ | 2024/07/30 | 7-8 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ❌ | 2024/07/23 | 8-12 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2024/07/16 | 12-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2024/07/09 | 9-3 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ✅ | 2024/07/02 | 1-0 | [Berlin](https://ws.tsl.rocks/corp/4be397f158a4ac8851b4d6f871cfb1b3994de1e41f67d7710ad6e32e271f6034/) |
| ❌ | 2024/06/25 | 3-20 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2024/06/18 | 0-13 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ❌ | 2024/06/11 | 2-28 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ✅ | 2024/06/04 | 14-3 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/05/28 | 12-4 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ✅ | 2024/05/21 | 14-0 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/05/14 | 2-31 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ❌ | 2024/05/07 | 5-12 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2024/04/30 | 5-11 | [1st/Ave/Junkie2](https://ws.tsl.rocks/corp/b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1/) |
| ✅ | 2024/04/23 | 16-0 | [深空补给港](https://ws.tsl.rocks/corp/6113fcbe4739d68f06b6a167df2788aa4582546dd0e0de38a088dd7797e0b501/) |
| ✅ | 2024/04/16 | 17-1 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/04/03 | 9-7 | [Hungary First](https://ws.tsl.rocks/corp/d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b/) |
| ❌ | 2024/03/26 | 2-25 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ❌ | 2024/02/28 | 2-21 | [共产星际](https://ws.tsl.rocks/corp/5cb42bdae108ad850e61479922e7d8cb4d5b7be7b8ac2f64fc828d3b88046737/) |
| ❌ | 2024/01/15 | 2-11 | [ItaFederalFleet](https://ws.tsl.rocks/corp/02f7ac2b406e46cbb3e1f7fa3a0fb0dc2c32f9bc8afc54c299cd54757463ddbe/) |
| ✅ | 2024/01/07 | 20-0 | [JPR\. Pretorians](https://ws.tsl.rocks/corp/7144c7cdb9f369d9e56199379429b01172d00a5142f6ceda71031de9bf6e0d25/) |
| ✅ | 2024/01/01 | 22-2 | [ES Gaming ](https://ws.tsl.rocks/corp/1bbc4390e9fa60fe312b23c8fa8d8f9eb499307607a4c3304e33bd05bd58f981/) |
| ✅ | 2023/12/23 | 19-2 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2023/12/16 | 13-4 | [Elite2\.0](https://ws.tsl.rocks/corp/7a039367a683ac04f22e6292d73d5bf2088245f47c411e6a7befd45a11740637/) |

---
Corporation ID: fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>