---
title: ​九州·华夏
description: W:38 L:17 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 16 - 1 **Terran empire **
date: 2025-07-23T11:10:06.000Z
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
| ELO Regular | 1430 🔺  (60)|
| ELO Competitive | 1535 🔺  (86)|
| Total Matches | 56 |
| Wins | 38 |
| Losses | 17 |
| Draws | 1 |
| Streak Record | 8 |
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
        let timestamps = [1752837006,1752813270,1752402490,1752376425,1751958144,1751943422,1751315721,1751295885,1750864093,1750863191,1750430767,1750419647,1749981510,1749969050,1749532255,1749531354,1748936090,1748913860,1748477722,1748473332,1748028282,1748011149,1747564628,1747563426,1747113289,1747107279,1746541445,1746539642,1746091300,1746085291,1745610595,1745605186,1745171773,1745163449,1744715696,1744714194,1744264644,1744156470,1743822268,1743516340,1743389828,1743047192,1742913154,1742591112,1742468663,1742137199,1742031115,1741695171,1741483928,1741233907,1740734474,1740185173,1739530041,1739360871,1739018301,1738545311];

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
| [Terran empire ](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) | 3 | 0 | 0 | 3 |
| [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) | 3 | 0 | 0 | 3 |
| [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) | 2 | 1 | 0 | 3 |
| [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) | 2 | 0 | 0 | 2 |
| [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/07/23 | 16-1 | [Terran empire ](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2025/07/23 | 8-10 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/07/18 | 9-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2025/07/18 | 12-10 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ❌ | 2025/07/13 | 12-17 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ✅ | 2025/07/13 | 18-0 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2025/07/05 | 7-29 | [Orden Estelar ](https://ws.tsl.rocks/corp/1da0142a6cc2fcab35a82ff4d7b591f4ffa96761419c6bf39154afded7ef7c2d/) |
| ✅ | 2025/07/05 | 6-3 | [Terran empire ](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2025/06/30 | 3-20 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ✅ | 2025/06/30 | 12-2 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ✅ | 2025/06/25 | 14-0 | [Bey○nd](https://ws.tsl.rocks/corp/cdf595b5b26005e90eabaf16deb2b99a460c6ae1dcdadfd7e275352456bc440f/) |
| ✅ | 2025/06/25 | 2-0 | [Черное солнце](https://ws.tsl.rocks/corp/963c510edfd1a89603e4c253f389cc603a707689fab0617c954c3a5d1856e1b4/) |
| ✅ | 2025/06/20 | 12-1 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2025/06/20 | 0-3 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/06/15 | 7-0 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/06/15 | 14-4 | [АарнСарт ](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |
| ✅ | 2025/06/08 | 13-5 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ✅ | 2025/06/08 | 8-3 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2025/06/03 | 7-1 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/06/02 | 16-4 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ✅ | 2025/05/28 | 18-3 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2025/05/28 | 0-29 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/05/23 | 15-0 | [Prosperity](https://ws.tsl.rocks/corp/a78b903885754b355b532fb47d983aa5725cb7c73c25e75dbfe4c440cdfffec0/) |
| ✅ | 2025/05/23 | 12-0 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ✅ | 2025/05/18 | 14-3 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/05/18 | 11-3 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/05/11 | 11-6 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ❌ | 2025/05/11 | 3-27 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ✅ | 2025/05/06 | 4-0 | [新星工程](https://ws.tsl.rocks/corp/22f9ba6fe47854adceeccbf19b9818b2338270bc2711f18dc2238d12e40f7b32/) |
| ✅ | 2025/05/06 | 5-1 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ✅ | 2025/04/30 | 8-0 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/04/30 | 9-1 | [Hungary First](https://ws.tsl.rocks/corp/d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b/) |
| ✅ | 2025/04/25 | 7-1 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/04/25 | 7-1 | [Terran empire ](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/04/20 | 9-3 | [IA5](https://ws.tsl.rocks/corp/a86622f7625d40a3455992647e02c761e639c1b172e6f5c87ae6d31f6dda7223/) |
| ✅ | 2025/04/20 | 5-4 | [星际造梦](https://ws.tsl.rocks/corp/aa25ebf7f012818b7ee0d4ed4bef10a7f6c2a22b528584e91d5b3a78355eeabd/) |
| ❌ | 2025/04/15 | 0-22 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2025/04/13 | 0-18 | [Starships](https://ws.tsl.rocks/corp/b75dd27a38d238b4d9cd11637820796c7df082496dc05190e61fc675f71b05db/) |
| ❌ | 2025/04/10 | 0-41 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ↔️ | 2025/04/06 | 3-3 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/04/05 | 0-37 | [Млечный путь](https://ws.tsl.rocks/corp/a9a3b102b3698bf7db8cd106adda02cee0033bfc03f681b667b2991e10049a25/) |
| ✅ | 2025/04/01 | 10-1 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ❌ | 2025/03/30 | 0-51 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2025/03/26 | 8-2 | [银河护卫队](https://ws.tsl.rocks/corp/e522df7ad34eabee08393efb864d53bdc897d0ad187170616d6ef924df5c7267/) |
| ❌ | 2025/03/25 | 0-40 | [Planet Express](https://ws.tsl.rocks/corp/be13b17a002cf203ab2a5a31d6c8024e7458b8eac569eb576be7f30844979c99/) |
| ✅ | 2025/03/21 | 13-0 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/03/20 | 12-3 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2025/03/16 | 11-0 | [ALPHA SQUADRON](https://ws.tsl.rocks/corp/4094b09d12cf0e2a8ea4d956e09a22d832da882bddeabf25d9b674b68ce165ed/) |
| ❌ | 2025/03/14 | 1-6 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ✅ | 2025/03/11 | 8-2 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/03/05 | 0-12 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2025/02/27 | 2-3 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ❌ | 2025/02/19 | 0-7 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ✅ | 2025/02/17 | 4-3 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2025/02/13 | 6-4 | [Империя ситхов](https://ws.tsl.rocks/corp/9e1f0256de13abfba9df4dc3a3c4937a5ee55e5371d60ec8a92ec386e75b0007/) |
| ✅ | 2025/02/08 | 3-0 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |

---
Corporation ID: b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1753269006"></span>
</div>