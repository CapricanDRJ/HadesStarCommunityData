---
title: ​Quantum Pioneer
description: W:24 L:18 D:2 Bonus ❌ 
image: ./favicon.png
Summary: ✅ 4 - 0 **63SALVADORES36**
date: 2025-10-01T00:17:11.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1248 🔺  (16)|
| ELO Competitive | 1350 🔺  (20)|
| Total Matches | 44 |
| Wins | 24 |
| Losses | 18 |
| Draws | 2 |
| Streak Record | 7 |
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
        let timestamps = [1758845831,1757428532,1756585494,1755913164,1755356343,1754622112,1753966869,1753413079,1752841214,1752196430,1751558499,1750976179,1750331279,1749743806,1749743505,1749104958,1749104056,1748504838,1747904475,1747306201,1746701000,1746085291,1745407453,1744900802,1744423006,1743957214,1743463158,1743410259,1742944849,1742939005,1742417585,1742417284,1741983335,1741983335,1741427730,1740800285,1740081198,1739530041,1739051061,1738422380,1737870655,1737250134,1736644048,1735733633];

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
| [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) | 2 | 1 | 0 | 3 |
| [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) | 1 | 2 | 0 | 3 |
| [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) | 0 | 2 | 0 | 2 |
| [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) | 0 | 2 | 0 | 2 |
| [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) | 1 | 0 | 1 | 2 |
| [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) | 2 | 0 | 0 | 2 |
| [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/10/01 | 4-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2025/09/14 | 0-21 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2025/09/04 | 0-9 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/08/28 | 9-0 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2025/08/21 | 0-18 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ❌ | 2025/08/13 | 0-19 | [QuantumDrift](https://ws.tsl.rocks/corp/6b976a5cc4450c6b5c8a52b762982560b6d5551146a01c0b659deb8eb5043359/) |
| ❌ | 2025/08/05 | 0-20 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2025/07/30 | 0-17 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/07/23 | 9-25 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ❌ | 2025/07/16 | 3-5 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ↔️ | 2025/07/08 | 3-3 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/07/01 | 8-15 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ✅ | 2025/06/24 | 4-3 | [The Syndicate](https://ws.tsl.rocks/corp/a7da1f6bd313248b8b6e68a1826bffb463c0e4977776708b28d97199f878b88c/) |
| ✅ | 2025/06/17 | 8-0 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/06/17 | 0-11 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/06/10 | 18-0 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ↔️ | 2025/06/10 | 0-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2025/06/03 | 21-0 | [Черное солнце](https://ws.tsl.rocks/corp/963c510edfd1a89603e4c253f389cc603a707689fab0617c954c3a5d1856e1b4/) |
| ✅ | 2025/05/27 | 14-1 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ✅ | 2025/05/20 | 7-3 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/05/13 | 13-0 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ❌ | 2025/05/06 | 1-5 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/04/28 | 4-0 | [复生会](https://ws.tsl.rocks/corp/34d924857b79c9e7dbbefad09df43c3752d80cee3153852a2af3ac365ad5e0f9/) |
| ✅ | 2025/04/22 | 14-0 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ✅ | 2025/04/17 | 14-0 | [彩虹神圣太空队](https://ws.tsl.rocks/corp/65a85756db048115b30d5db1f341e02c1efa0c8baf3a39ae6b57db8b0c52a0d9/) |
| ❌ | 2025/04/11 | 3-14 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/04/05 | 0-16 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/04/05 | 7-5 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2025/03/30 | 0-6 | [QVX](https://ws.tsl.rocks/corp/7332e0f84974c827954677fdba873fd8eaf407e07c4322f503b904a9456b2665/) |
| ✅ | 2025/03/30 | 10-2 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/03/24 | 3-0 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ✅ | 2025/03/24 | 4-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2025/03/19 | 2-0 | [Crastorios](https://ws.tsl.rocks/corp/cf8e92451d31be30383d7359e1e2095ccb8e0c4afe78451b4fd39cb4dab1f3e0/) |
| ✅ | 2025/03/19 | 10-3 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ✅ | 2025/03/13 | 9-0 | [Space Scourge](https://ws.tsl.rocks/corp/04ad48264f0fcb63156d90f6ff6dfd55b1ab9321d56144f671a84c0253bccfc1/) |
| ✅ | 2025/03/06 | 8-2 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/02/25 | 2-21 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2025/02/19 | 7-0 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/02/13 | 1-0 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/02/06 | 0-3 | [银河护卫队](https://ws.tsl.rocks/corp/e522df7ad34eabee08393efb864d53bdc897d0ad187170616d6ef924df5c7267/) |
| ❌ | 2025/01/31 | 1-13 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ❌ | 2025/01/24 | 2-27 | [Free Ag3nts](https://ws.tsl.rocks/corp/66c873438b165344dbdac371b45825f9c818ee1e77e128f101f2660f4b0c7b70/) |
| ✅ | 2025/01/17 | 10-0 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2025/01/06 | 10-7 | [萌新集团](https://ws.tsl.rocks/corp/cda6bb5c1bf595967bd6f4a2e94f7c7fcc50df3774ccee7939822c252b9cd224/) |

---
Corporation ID: fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1759277831"></span>
</div>