---
title: ​hades star萌新指引站
description: W:18 L:16 D:3 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 0 - 8 **对，进就进人少的（分团）**
date: 2026-01-07T13:20:15.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
欢迎萌新和大佬们的加入Q群852308177
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1228 🔻  (-9)|
| ELO Competitive | 1284 🔻  (-9)|
| Total Matches | 37 |
| Wins | 18 |
| Losses | 16 |
| Draws | 3 |
| Streak Record | 5 |
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
        let timestamps = [1767360015,1763198997,1762680412,1761829437,1761143244,1760705997,1759926446,1754729592,1743744731,1743081749,1742554613,1741774797,1738848814,1738814859,1738382103,1737870655,1737382354,1736869366,1732920208,1732057764,1731415404,1731232695,1730811688,1730208894,1729731699,1729205216,1728772928,1727960677,1727445008,1727010203,1726486839,1726044786,1725544157,1725078905,1724639060,1724206625,1723733000];

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
| [斯比纳兰](https://ws.tsl.rocks/corp/ce756ff97542e6fa8d518319e6575aae1d01eb23dd906fee3e3cbb98b442b68f/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/01/07 | 0-8 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2025/11/20 | 4-9 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ✅ | 2025/11/14 | 6-0 | [Солярис Рус](https://ws.tsl.rocks/corp/53c9a1a8499380eaf4082161ea9ef9bd7dda1c711f76153ea033738d1a663997/) |
| ✅ | 2025/11/04 | 3-0 | [ATI\!](https://ws.tsl.rocks/corp/e2af1f831ad94fa090a386a2ec8acbd012009626ab6f179b207489a10bb05139/) |
| ↔️ | 2025/10/27 | 0-0 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ❌ | 2025/10/22 | 3-4 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2025/10/13 | 0-7 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ↔️ | 2025/08/14 | 0-0 | [27rus](https://ws.tsl.rocks/corp/923fd2244430f309d52a73ea98d10efde744e908940809f2b3c2b7b456e7082a/) |
| ✅ | 2025/04/09 | 5-4 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/04/01 | 3-0 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2025/03/26 | 0-29 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/03/17 | 18-0 | [Черное солнце](https://ws.tsl.rocks/corp/963c510edfd1a89603e4c253f389cc603a707689fab0617c954c3a5d1856e1b4/) |
| ❌ | 2025/02/11 | 0-4 | [ALPHA SQUADRON](https://ws.tsl.rocks/corp/4094b09d12cf0e2a8ea4d956e09a22d832da882bddeabf25d9b674b68ce165ed/) |
| ❌ | 2025/02/11 | 5-8 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/02/06 | 13-4 | [中国家民](https://ws.tsl.rocks/corp/af75be08923f73af2bd3821bcfbdef3e3abbcbc0b9aaeacfeae528cfbf972f5f/) |
| ✅ | 2025/01/31 | 13-1 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ✅ | 2025/01/25 | 14-0 | [星光滨岸](https://ws.tsl.rocks/corp/75dfe9299a63edce44f4604dc0bbe19eca157df4838e6e3a46621b7f14a89c39/) |
| ✅ | 2025/01/19 | 14-0 | [Stargroup](https://ws.tsl.rocks/corp/cf430206a6a585f302ac5d76adf50b780f002f52ebbb82b323f933f5a0a25c4f/) |
| ❌ | 2024/12/04 | 0-4 | [太阳系集团](https://ws.tsl.rocks/corp/50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6/) |
| ❌ | 2024/11/24 | 9-12 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ❌ | 2024/11/17 | 3-22 | [Imperium](https://ws.tsl.rocks/corp/9e2ab6b52a6e6684059b31f08966101f380a17c9a782d2a39434093e835fb17d/) |
| ❌ | 2024/11/15 | 0-13 | [Zeta Division](https://ws.tsl.rocks/corp/29335e52f4b0c4ae92db98c395d2f4969201d0ddc31bb7f112bd6d3eeb97182c/) |
| ❌ | 2024/11/10 | 0-13 | [ДИᏰEPℂДℍTᏰℓ](https://ws.tsl.rocks/corp/a1dad8a2a2c5ab935169d168bc19f8a1db7f12b099358e079cb7221a340345ed/) |
| ❌ | 2024/11/03 | 2-8 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ❌ | 2024/10/29 | 5-6 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2024/10/22 | 6-2 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2024/10/17 | 17-1 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ✅ | 2024/10/08 | 6-1 | [麻雀集团](https://ws.tsl.rocks/corp/bf5e5ea02e24918ed66d543902f4315f957c79c9bc1bd434c034158e9f648abe/) |
| ❌ | 2024/10/02 | 0-6 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2024/09/27 | 2-5 | [斯比纳兰](https://ws.tsl.rocks/corp/ce756ff97542e6fa8d518319e6575aae1d01eb23dd906fee3e3cbb98b442b68f/) |
| ✅ | 2024/09/21 | 7-0 | [CCCP](https://ws.tsl.rocks/corp/34cd422237fc59472ea900588e5416892c4cceeae033e28f8352b61524a92ac7/) |
| ✅ | 2024/09/16 | 8-0 | [数字星际集团](https://ws.tsl.rocks/corp/ccbf6be33652cb1b91bc9047b966ffdd6b313cc569d1e0a9fb832e6e8dc1d361/) |
| ✅ | 2024/09/10 | 7-3 | [斯比纳兰](https://ws.tsl.rocks/corp/ce756ff97542e6fa8d518319e6575aae1d01eb23dd906fee3e3cbb98b442b68f/) |
| ✅ | 2024/09/05 | 11-0 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ✅ | 2024/08/31 | 9-3 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ↔️ | 2024/08/26 | 6-6 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2024/08/20 | 13-0 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |

---
Corporation ID: 06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1767792015"></span>
</div>