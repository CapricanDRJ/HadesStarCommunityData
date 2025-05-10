---
title: ​Lupus Regnum
description: W:24 L:12 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ❌ 4 - 20 **Black Pearl FR**
date: 2025-05-04T06:03:32.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1281 🔻  (226)|
| ELO Competitive | 1406 🔺  (173)|
| Total Matches | 36 |
| Wins | 24 |
| Losses | 12 |
| Draws | 0 |
| Streak Record | 6 |
| Flagship | 0 |

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
        let timestamps = [1745906612,1745903907,1745171773,1745154130,1744700073,1744698199,1743940378,1743936771,1743393300,1743344440,1742746369,1742746369,1742130886,1742128180,1741523292,1741518808,1740920501,1740917435,1740333620,1740325505,1739745820,1739710952,1739127694,1739104846,1738501124,1738493308,1737902513,1737900409,1737296111,1737288596,1736739840,1736684533,1736090981,1736079854,1735507087,1735507087];

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
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/05/04 | 4-20 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ✅ | 2025/05/04 | 7-0 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ❌ | 2025/04/25 | 1-7 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2025/04/25 | 2-8 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/04/20 | 6-12 | [Cerberus](https://ws.tsl.rocks/corp/a1a5b11461becdc8a3e81f7d2a9bf5f284f3906a9b41c846cd83f68dc40ccdca/) |
| ✅ | 2025/04/20 | 24-1 | [Млечный путь](https://ws.tsl.rocks/corp/a9a3b102b3698bf7db8cd106adda02cee0033bfc03f681b667b2991e10049a25/) |
| ❌ | 2025/04/11 | 2-7 | [中国人民联盟](https://ws.tsl.rocks/corp/4fadcca4df7e52a4824f29d77a657e86c6dac7d39f325d3e5ebe5d6128839e47/) |
| ✅ | 2025/04/11 | 23-8 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ✅ | 2025/04/05 | 3-0 | [BAB](https://ws.tsl.rocks/corp/d17895c8b0b7003682ed6441ed0a2040355c3b53e6e4609302acccab6a0deaea/) |
| ✅ | 2025/04/04 | 21-1 | [the Rubber Duck](https://ws.tsl.rocks/corp/bfd6a197d72d0b643c6693e66b9a10db61f75ae242a0bd7c09bdd553ae951ee6/) |
| ❌ | 2025/03/28 | 10-17 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ❌ | 2025/03/28 | 4-15 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/03/21 | 16-3 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2025/03/21 | 6-2 | [银河护卫队](https://ws.tsl.rocks/corp/e522df7ad34eabee08393efb864d53bdc897d0ad187170616d6ef924df5c7267/) |
| ❌ | 2025/03/14 | 6-10 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ✅ | 2025/03/14 | 19-3 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2025/03/07 | 5-9 | [Battle Academy](https://ws.tsl.rocks/corp/a4e315e22ea2a592f43efe95a9e53ab2cdbd9f0dc733c9fdde20079d8fabaddd/) |
| ✅ | 2025/03/07 | 4-0 | [AKLife](https://ws.tsl.rocks/corp/390b9e24784a0c11450f170d5c42dfcb21f8f3a3289037afa7b93339d7f1a3cf/) |
| ✅ | 2025/02/28 | 6-1 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/02/28 | 30-3 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ✅ | 2025/02/21 | 15-0 | [清霄阁（防御协会）](https://ws.tsl.rocks/corp/a263c037c5b59f1816ad75738a21141c689baee193b386b2ddbbcf79e959612d/) |
| ✅ | 2025/02/21 | 5-0 | [U\.Y\.E\.U\.](https://ws.tsl.rocks/corp/504f779e55c2d1bc5ff35b4540c0bb60421bd8bce70c3eb0caf45fd73915ec86/) |
| ✅ | 2025/02/14 | 2-0 | [Aquiles ](https://ws.tsl.rocks/corp/303ab147f2fce882b5cb391c0b3006c76bc2222ee409fc17b157cb149bda3c9f/) |
| ❌ | 2025/02/14 | 2-15 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ✅ | 2025/02/07 | 3-1 | [ 边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ✅ | 2025/02/07 | 24-0 | [  边界  ](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ✅ | 2025/01/31 | 12-4 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2025/01/31 | 11-3 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ✅ | 2025/01/24 | 19-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2025/01/24 | 5-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2025/01/18 | 0-7 | [国际联盟](https://ws.tsl.rocks/corp/4b25f449617273077d1898d67e79bfe22c803412bb840eb68412fe0ee7224a95/) |
| ✅ | 2025/01/17 | 15-0 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ✅ | 2025/01/10 | 11-3 | [天琴座联邦](https://ws.tsl.rocks/corp/3928bc72ac4a6520e6d501a9b13f0595b3401845fb184b605fa521b90cd01fe9/) |
| ❌ | 2025/01/10 | 2-6 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ✅ | 2025/01/03 | 5-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/01/03 | 13-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |

---
Corporation ID: 5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1746338612"></span>
</div>