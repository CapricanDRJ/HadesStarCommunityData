---
title: ​清霄阁（防御协会）
description: W:12 L:20 D:4 Bonus ❌ 7%
image: ./favicon.png
Summary: ↔️ 0 - 0 **Alpha Galaxy**
date: 2026-02-04T11:27:51.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
我们不属于任何集团的分团，<#DCF>我们的总执行官：Cyka <#ACF>欢迎你的加入～～～ <#FFF>来到这里大于6t且在团一个月并
可以打白星了，我们会给你80%左右的R7 ！来者请捐点旗舰，我们非常感谢！我们在努力的招人！！！建立于2024.9.7 Q群号：99396
4380 大群Q号：597444221
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1158 🔺  (1)|
| ELO Competitive | 1225 🔻  (-2)|
| Total Matches | 36 |
| Wins | 12 |
| Losses | 20 |
| Draws | 4 |
| Streak Record | 4 |
| Flagship | 2 |

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
        let timestamps = [1769772471,1763057494,1762240264,1761112301,1759040348,1756167730,1752023351,1749030137,1748015523,1746213302,1744854528,1743339251,1743336022,1742475576,1741863740,1741425384,1740283493,1739745820,1739202216,1738731320,1738201205,1737726413,1737179546,1736490079,1735734534,1735287426,1734682895,1734220178,1733718991,1733405871,1733251433,1732932875,1732721946,1732272702,1731664805,1731230592];

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
| [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) | 1 | 1 | 0 | 2 |
| [The Foundation](https://ws.tsl.rocks/corp/279f86b28e83ff2e41b798bf93f59b0803e62aecd6e7f0caa5c8be3efecf8728/) | 0 | 2 | 0 | 2 |
| [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ↔️ | 2026/02/04 | 0-0 | [Alpha Galaxy](https://ws.tsl.rocks/corp/9abcb558e094026cc6bd9a73f98a9d957a5fa21d3c43ea80848419c844a83775/) |
| ↔️ | 2025/11/18 | 3-3 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2025/11/09 | 5-0 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/10/27 | 1-0 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ❌ | 2025/10/03 | 3-8 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ↔️ | 2025/08/31 | 0-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2025/07/14 | 0-7 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2025/06/09 | 1-11 | [KEPLER\-442 b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |
| ✅ | 2025/05/28 | 3-0 | [Best room](https://ws.tsl.rocks/corp/90dfc27511ed8d424f462a2161b45c7a0676a09204b2497575bd19391b326f5b/) |
| ❌ | 2025/05/07 | 1-7 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2025/04/22 | 3-4 | [The Foundation](https://ws.tsl.rocks/corp/279f86b28e83ff2e41b798bf93f59b0803e62aecd6e7f0caa5c8be3efecf8728/) |
| ❌ | 2025/04/04 | 0-7 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/04/04 | 0-3 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/03/25 | 8-0 | [Valholl](https://ws.tsl.rocks/corp/c50b6c9e3d2e2b9da27a3d0d7365012560d1dcd340e89518225559ea80edbee4/) |
| ❌ | 2025/03/18 | 0-19 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ❌ | 2025/03/13 | 2-3 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2025/02/28 | 0-6 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/02/21 | 0-15 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/02/15 | 0-9 | [Cerberus](https://ws.tsl.rocks/corp/a1a5b11461becdc8a3e81f7d2a9bf5f284f3906a9b41c846cd83f68dc40ccdca/) |
| ↔️ | 2025/02/10 | 5-5 | [Dark Halo](https://ws.tsl.rocks/corp/f6ed7c780faf133d3fe411b9ed88480608a56064328539891d1b4348242954f6/) |
| ❌ | 2025/02/04 | 3-6 | [The Foundation](https://ws.tsl.rocks/corp/279f86b28e83ff2e41b798bf93f59b0803e62aecd6e7f0caa5c8be3efecf8728/) |
| ✅ | 2025/01/29 | 8-0 | [Archangels BR](https://ws.tsl.rocks/corp/9f0b92fa53a4e1b97659c0c2df1ee74fe5ffcca2d272419c4d585bb39a86338f/) |
| ✅ | 2025/01/23 | 5-1 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2025/01/15 | 8-1 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ✅ | 2025/01/06 | 4-3 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2025/01/01 | 0-8 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ❌ | 2024/12/25 | 1-9 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ❌ | 2024/12/19 | 3-4 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2024/12/14 | 0-2 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2024/12/10 | 0-5 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2024/12/08 | 5-3 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ✅ | 2024/12/05 | 1-0 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ❌ | 2024/12/02 | 3-12 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2024/11/27 | 7-0 | [TRAPSTAR¹](https://ws.tsl.rocks/corp/41cff3569548da10a9cf4c36b91a525ec982349fa4a35a59b047ea22dcf0f48f/) |
| ✅ | 2024/11/20 | 5-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2024/11/15 | 2-5 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |

---
Corporation ID: a263c037c5b59f1816ad75738a21141c689baee193b386b2ddbbcf79e959612d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1770204471"></span>
</div>