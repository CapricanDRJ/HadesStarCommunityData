---
title: ​荣耀之星
description: W:20 L:19 D:5 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 4 - 12 **Lupus Regnum**
date: 2025-01-31T14:41:53.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
欢迎大家加入我们团队。我们每周四上午开白周末参加即可。请勿长时间不上号。添加QQ 3465737977 /游戏内 fqy 好友以方便交流。
招募成员！
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1230 🔻  (-14)|
| ELO Competitive | 1292 🔻  (-16)|
| Total Matches | 44 |
| Wins | 20 |
| Losses | 19 |
| Draws | 5 |
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
        let timestamps = [1737902513,1733929913,1733349377,1732759827,1732165436,1731545819,1730940035,1730352527,1729785784,1728864718,1728396433,1727920584,1727433886,1726988869,1726532451,1726069429,1725684789,1725625888,1725192589,1725171553,1724682335,1724682035,1724206916,1724206625,1723705352,1723679812,1723242325,1722595265,1722130976,1721446090,1720952326,1720946916,1720041406,1720013954,1719486355,1719479744,1718973975,1718964659,1715335013,1714576269,1709946624,1708563853,1708080307,1707284089];

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
| [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) | 1 | 1 | 0 | 2 |
| [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) | 0 | 2 | 0 | 2 |
| [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) | 1 | 0 | 1 | 2 |
| [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) | 0 | 0 | 2 | 2 |
| [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) | 2 | 0 | 0 | 2 |
| [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/01/31 | 4-12 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2024/12/16 | 3-12 | [Imperium](https://ws.tsl.rocks/corp/9e2ab6b52a6e6684059b31f08966101f380a17c9a782d2a39434093e835fb17d/) |
| ✅ | 2024/12/09 | 18-0 | [HYDRA](https://ws.tsl.rocks/corp/af8e07c712d53e12787c748d60f8380614730fa89774d6c59ed792f71b1449ab/) |
| ❌ | 2024/12/03 | 7-10 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ❌ | 2024/11/26 | 2-15 | [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) |
| ❌ | 2024/11/19 | 3-5 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2024/11/12 | 15-0 | [Snack Empire](https://ws.tsl.rocks/corp/e7b912cdbd535c7bae1a2176819caef605c402607aa368b529db6b36d746036b/) |
| ✅ | 2024/11/05 | 5-2 | [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) |
| ✅ | 2024/10/29 | 5-3 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ❌ | 2024/10/19 | 0-18 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ✅ | 2024/10/13 | 13-0 | [麻雀集团](https://ws.tsl.rocks/corp/bf5e5ea02e24918ed66d543902f4315f957c79c9bc1bd434c034158e9f648abe/) |
| ✅ | 2024/10/08 | 19-1 | [DeutschlandGmbH](https://ws.tsl.rocks/corp/7f4550924e4740a47b7d66c9ddf38d65c37590507caab29eecc74f81a4ae2895/) |
| ✅ | 2024/10/02 | 18-1 | [小号营地](https://ws.tsl.rocks/corp/e716da4b59355078ca6f014735de218d3fa5e832805efb942d1299b899f2d8b9/) |
| ❌ | 2024/09/27 | 0-12 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |
| ✅ | 2024/09/22 | 13-1 | [绛紫星云](https://ws.tsl.rocks/corp/5a3a9602bef85f5409788b6ae18f372599736e4be470dee01f373a17865f07d9/) |
| ↔️ | 2024/09/16 | 1-1 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2024/09/12 | 0-7 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2024/09/11 | 3-2 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ❌ | 2024/09/06 | 6-16 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2024/09/06 | 0-6 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ❌ | 2024/08/31 | 0-9 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2024/08/31 | 7-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ↔️ | 2024/08/26 | 0-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ↔️ | 2024/08/26 | 6-6 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ✅ | 2024/08/20 | 5-0 | [雪月永恒](https://ws.tsl.rocks/corp/3b30781263716daadc217687009247bd0acb28c7eb4a8ebfe37daa11142622c2/) |
| ✅ | 2024/08/19 | 11-0 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ✅ | 2024/08/14 | 9-2 | [The Base](https://ws.tsl.rocks/corp/c81c136682863e2c4470a00fb4b9839924b5986df008b0a8ac9a7f2756e2ed66/) |
| ✅ | 2024/08/07 | 7-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2024/08/02 | 4-8 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2024/07/25 | 7-4 | [Brasil](https://ws.tsl.rocks/corp/c1d98a4e0a9c522aff7cb4156b0dc139eb54566269c2203b2eae6fe1827fc6c3/) |
| ✅ | 2024/07/19 | 10-1 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ❌ | 2024/07/19 | 0-5 | [星光舰队](https://ws.tsl.rocks/corp/e48d364ccf6d36f1f00db66d6bbae7b5d5aee09d90aeee03264b3a6cede3252c/) |
| ✅ | 2024/07/08 | 4-3 | [Jalisco México](https://ws.tsl.rocks/corp/495236ab2171ccbcdad0da5529f080405b1ddd081eda98c7255a8cffe5b114e4/) |
| ↔️ | 2024/07/08 | 1-1 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ✅ | 2024/07/02 | 3-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ❌ | 2024/07/02 | 0-18 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2024/06/26 | 0-7 | [星海扬帆](https://ws.tsl.rocks/corp/9cf2d9a2c07a0b8030f9a8275f9ebd3973759c2b60bed95ccb9a3f152aa0b1e4/) |
| ↔️ | 2024/06/26 | 3-3 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ❌ | 2024/05/15 | 0-15 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/05/06 | 2-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2024/03/14 | 0-6 | [Weyland Yutani](https://ws.tsl.rocks/corp/9799c33a0ecdcf321ad446a18f4e7f520610d26ec5f13e0c6b7a411dec2e2e46/) |
| ❌ | 2024/02/27 | 3-26 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ❌ | 2024/02/21 | 0-29 | [第五星际](https://ws.tsl.rocks/corp/8f0d25fe4c802f32f4d3d4ad1a84583c5ae98e4a788a1fa260ef9bd70268818b/) |
| ✅ | 2024/02/12 | 3-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |

---
Corporation ID: 4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1738334513"></span>
</div>