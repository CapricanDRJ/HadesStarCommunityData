---
title: ​共联·世界
description: W:34 L:21 D:2 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 14 - 1 **Z\. O\. V\.**
date: 2026-07-22T14:05:34.000Z
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
| ELO Regular | 1329 🔺  (18)|
| ELO Competitive | 1528 🔺  (25)|
| Total Matches | 57 |
| Wins | 34 |
| Losses | 21 |
| Draws | 2 |
| Streak | 3 |
| Streak Record | 4 |
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
        let timestamps = [1784297134,1784294129,1783863918,1783860912,1783426799,1783416585,1782970450,1782531822,1782531521,1782098863,1782085046,1781663201,1781623241,1781187003,1781174383,1780754091,1780724951,1780312185,1779992837,1779879551,1779511479,1779445673,1778943925,1778942122,1778503192,1778212949,1778043806,1777743685,1777528572,1777147608,1777087504,1776533803,1776165470,1776080447,1775661937,1775646310,1775213666,1774723655,1774263970,1773746006,1773289941,1772808357,1772366825,1771925391,1771920285,1771311313,1771248820,1770829401,1770807166,1770370626,1770244122,1769936477,1769602946,1769502889,1769028154,1768547419,1768031231];

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
| [民主团](https://ws.tsl.rocks/corp/900529bbc3b52d519c9af29a274b6bb263137509cbf25f73d82a2c0190d0bd53/) | 2 | 0 | 0 | 2 |
| [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) | 0 | 2 | 0 | 2 |
| [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) | 1 | 1 | 0 | 2 |
| [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) | 2 | 0 | 0 | 2 |
| [Spanish Fury](https://ws.tsl.rocks/corp/e16f59927214f5305835d80bd094d95754b0d02e26d6b4e3f6b654688cc48dad/) | 0 | 2 | 0 | 2 |
| [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) | 2 | 0 | 0 | 2 |
| [GermanSpaceDuo](https://ws.tsl.rocks/corp/4845b9c456dec1856ed2c9bdcf6e1cf6d0d18460e78de1d40daf20df8ff99933/) | 2 | 0 | 0 | 2 |
| [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) | 0 | 2 | 0 | 2 |
| [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/07/22 | 14-1 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2026/07/22 | 10-3 | [民主团](https://ws.tsl.rocks/corp/900529bbc3b52d519c9af29a274b6bb263137509cbf25f73d82a2c0190d0bd53/) |
| ✅ | 2026/07/17 | 22-3 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2026/07/17 | 0-6 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ↔️ | 2026/07/12 | 0-0 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ❌ | 2026/07/12 | 7-18 | [第三舰队](https://ws.tsl.rocks/corp/5c221ea6be2f8e437f63c736ee45290cb3304543c57a4a1ea677e5e24e121f89/) |
| ❌ | 2026/07/07 | 3-6 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ✅ | 2026/07/02 | 19-4 | [\(\_\(\_Vossk\_\)\_\)](https://ws.tsl.rocks/corp/6db23201f00670abe532f02a8fc28e109f95d673ef31ca1df7362c0a6c45dd2f/) |
| ✅ | 2026/07/02 | 4-0 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ✅ | 2026/06/27 | 7-3 | [U\.P\.E](https://ws.tsl.rocks/corp/fc06e2f3477d57f180521828616b988b58c6e5f6359dcfdc34b2e1fea93d309d/) |
| ✅ | 2026/06/26 | 24-0 | [1st/Ave/Junkie2](https://ws.tsl.rocks/corp/b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1/) |
| ❌ | 2026/06/22 | 3-5 | [imperio viltrum](https://ws.tsl.rocks/corp/1a05510a2d3a1b3ace3e9e8a00750bf17d53a3cd2d4c6d846f98d54658ffd17f/) |
| ✅ | 2026/06/21 | 20-0 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2026/06/16 | 5-12 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ✅ | 2026/06/16 | 3-0 | [WALRUS](https://ws.tsl.rocks/corp/6a6f8dddc019ed7feb25ee8e5152e3137ab79d3a60b1057a398b7282a0613e6b/) |
| ✅ | 2026/06/11 | 27-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2026/06/11 | 3-7 | [ༀᅗBAR ESTELARᅗༀ](https://ws.tsl.rocks/corp/874716e0cba92e65a541f6751246b0fa1d503d7ee2b00dcde1ab424af30190be/) |
| ✅ | 2026/06/06 | 13-6 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2026/06/02 | 0-14 | [Spanish Fury](https://ws.tsl.rocks/corp/e16f59927214f5305835d80bd094d95754b0d02e26d6b4e3f6b654688cc48dad/) |
| ✅ | 2026/06/01 | 27-5 | [Анархия\-7](https://ws.tsl.rocks/corp/b9838f299ae85a0bf4c2e0b0c98fb49f3377aa314dcaa3eee4dc6fb9986cb176/) |
| ✅ | 2026/05/28 | 2-1 | [先和先知](https://ws.tsl.rocks/corp/54c8fbf9e85f95a3e28c0b3d2833d49a40758d5340c6de6d6822c6c48aa070eb/) |
| ✅ | 2026/05/27 | 15-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2026/05/21 | 21-0 | [GermanSpaceDuo](https://ws.tsl.rocks/corp/4845b9c456dec1856ed2c9bdcf6e1cf6d0d18460e78de1d40daf20df8ff99933/) |
| ❌ | 2026/05/21 | 0-3 | [The GrandEmpire](https://ws.tsl.rocks/corp/0d4252df331791965c93ff99c057aea397c7984feb074fe617bc8951245503fa/) |
| ✅ | 2026/05/16 | 14-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ❌ | 2026/05/13 | 0-1 | [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) |
| ✅ | 2026/05/11 | 10-0 | [testims](https://ws.tsl.rocks/corp/c358e8882c6f46c273e2ee7fde12917d0fb89607a41cf7ef05f35332ee4c845e/) |
| ✅ | 2026/05/07 | 3-0 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ✅ | 2026/05/05 | 20-0 | [Space lover](https://ws.tsl.rocks/corp/05ae9e7fe28126b7508df0081f0d22db119cc2184a95e0c12e263272bbccc6b2/) |
| ❌ | 2026/04/30 | 1-11 | [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) |
| ✅ | 2026/04/30 | 12-9 | [奇点教会](https://ws.tsl.rocks/corp/f78adf8daad3bc332d628d2ff252182fb5e0dd48f5fa2c02220fd3c3ecc856bb/) |
| ✅ | 2026/04/23 | 10-1 | [民主团](https://ws.tsl.rocks/corp/900529bbc3b52d519c9af29a274b6bb263137509cbf25f73d82a2c0190d0bd53/) |
| ❌ | 2026/04/19 | 0-2 | [中华五千年](https://ws.tsl.rocks/corp/c386df71c7dd8a60eec01472189e0b470eeeed5ac48646cd153516aa4349aee3/) |
| ❌ | 2026/04/18 | 5-14 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ✅ | 2026/04/13 | 3-0 | [Экватор](https://ws.tsl.rocks/corp/53fa2893f5be7a758b9acc7250a6d1fc6becb145e24287ab980c841f61b0312d/) |
| ✅ | 2026/04/13 | 13-1 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ✅ | 2026/04/08 | 21-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2026/04/02 | 10-2 | [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) |
| ❌ | 2026/03/28 | 5-21 | [Wolf Hunters](https://ws.tsl.rocks/corp/a760896a66a9a99c4645eda30f3f5ac5da834e6b5a6c61da7866cf789ef6ec50/) |
| ✅ | 2026/03/22 | 8-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2026/03/17 | 8-0 | [GermanSpaceDuo](https://ws.tsl.rocks/corp/4845b9c456dec1856ed2c9bdcf6e1cf6d0d18460e78de1d40daf20df8ff99933/) |
| ✅ | 2026/03/11 | 10-0 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ✅ | 2026/03/06 | 7-0 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ❌ | 2026/03/01 | 0-8 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ✅ | 2026/03/01 | 9-0 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ✅ | 2026/02/22 | 3-2 | [Raptor Armada](https://ws.tsl.rocks/corp/5964326e22b48ad60773cb2b0c3bc3650edca9d8e23962ec4ac9981c052d2b7b/) |
| ↔️ | 2026/02/21 | 0-0 | [维埃星云氮氢钨钽](https://ws.tsl.rocks/corp/4f76f07e3376e9848983a4effbb2deca1f3d4602a1ed8c0346183dc7a589c40a/) |
| ❌ | 2026/02/16 | 7-8 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ❌ | 2026/02/16 | 0-4 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |
| ✅ | 2026/02/11 | 9-2 | [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) |
| ❌ | 2026/02/09 | 0-9 | [Академия Д](https://ws.tsl.rocks/corp/b1abd18d521db3f91ca83e4b49f5ecc132514e77c54c875dc0d08b977292c470/) |
| ✅ | 2026/02/06 | 9-0 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ❌ | 2026/02/02 | 1-4 | [星空社会主义共和国](https://ws.tsl.rocks/corp/38c08f04a2ca92d80139f8b0461c7dc786c257fe8072260c4a128313c1b54c5e/) |
| ❌ | 2026/02/01 | 3-7 | [Spanish Fury](https://ws.tsl.rocks/corp/e16f59927214f5305835d80bd094d95754b0d02e26d6b4e3f6b654688cc48dad/) |
| ❌ | 2026/01/26 | 3-11 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ✅ | 2026/01/21 | 7-3 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2026/01/15 | 2-10 | [CERBERUS SYSTEM](https://ws.tsl.rocks/corp/84ca35f0e6e24150613333f78670b8bb6e27010a69920dd6ee7cf671087a3976/) |

---
Corporation ID: 27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1784729134"></span>
</div>