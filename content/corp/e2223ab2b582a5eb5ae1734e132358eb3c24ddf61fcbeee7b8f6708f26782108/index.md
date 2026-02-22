---
title: ​Galactic Empire
description: W:47 L:48 D:1 Bonus ❌ 11%
image: ./favicon.png
Summary: ❌ 0 - 19 **Terran empire**
date: 2026-02-12T19:10:10.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
"Venimus, Vidimus, Vicimus!"
Welcome to the Galactic Empire recruit, an active corp that does ws a
nd rs welcoming all players! Rs on weekends mainly. Inactive players 
will be kicked! Founder: Emperor 
```
<br>

### [Discord](https://discord.gg/Red4yqWn3F)
### Whitestar Bonus ❌ 11%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1192 🔻  (-4)|
| ELO Competitive | 1478 🔻  (-8)|
| Total Matches | 96 |
| Wins | 47 |
| Losses | 48 |
| Draws | 1 |
| Streak Record | 8 |
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
        let timestamps = [1770491410,1770487203,1769448210,1769448210,1768987583,1768983681,1767692332,1767007905,1767007905,1766512176,1766512176,1764529745,1764525537,1764074504,1764064590,1762933718,1762930113,1762327992,1762319881,1761585278,1760104166,1760099659,1759168523,1759166719,1758518643,1758513836,1757826030,1757825129,1757259684,1757251569,1756651550,1756628411,1756064903,1756051379,1755542054,1755378284,1754993641,1754626438,1754269759,1753720478,1753664887,1752861951,1752102981,1752023351,1751530710,1751490321,1750443390,1750154006,1749981510,1749445713,1748800867,1748107325,1747242803,1746392705,1736644048,1736639156,1731556333,1731544017,1729533981,1726703711,1724786910,1724183791,1722564015,1721150100,1720367477,1719215602,1717623221,1716892202,1716242388,1715460908,1714756047,1714116551,1713124755,1712302640,1711565563,1709542192,1708548487,1707694770,1707067917,1706446451,1705831901,1705186706,1704666821,1704553515,1703851814,1703098707,1702662127,1702415100,1701513248,1700598879,1700208464,1700013353,1699549838,1699432649,1698701803,1698696389];

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
| [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) | 0 | 2 | 0 | 2 |
| [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) | 0 | 2 | 0 | 2 |
| [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) | 0 | 2 | 0 | 2 |
| [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) | 1 | 0 | 1 | 2 |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 1 | 1 | 0 | 2 |
| [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) | 0 | 2 | 0 | 2 |
| [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) | 0 | 2 | 0 | 2 |
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 1 | 1 | 0 | 2 |
| [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) | 2 | 0 | 0 | 2 |
| [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) | 2 | 0 | 0 | 2 |
| [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) | 1 | 2 | 0 | 3 |
| [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) | 0 | 2 | 0 | 2 |
| [Galactic Trade](https://ws.tsl.rocks/corp/11f216ded6a66748fec41f81ff0eae46ed3f149e39301e31c7977db9897e7d21/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/12 | 0-19 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2026/02/12 | 3-23 | [Crucible](https://ws.tsl.rocks/corp/778178a7255ba7f4c8e2fdeb41fb777fb90ecf6e84a3ba79431f055f869521c6/) |
| ❌ | 2026/01/31 | 3-32 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ❌ | 2026/01/31 | 1-13 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ↔️ | 2026/01/26 | 0-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2026/01/26 | 27-4 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ❌ | 2026/01/11 | 0-4 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ✅ | 2026/01/03 | 3-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2026/01/03 | 9-3 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2025/12/28 | 0-20 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2025/12/28 | 33-0 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2025/12/05 | 0-25 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2025/12/05 | 3-20 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ❌ | 2025/11/30 | 3-18 | [Сварожичи](https://ws.tsl.rocks/corp/756e76b1fa697e8ab2f40b1c5c5c93f69beeee26898a3ca128da2a7b69589093/) |
| ❌ | 2025/11/30 | 4-6 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/11/17 | 7-0 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2025/11/17 | 2-25 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ❌ | 2025/11/10 | 6-19 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ❌ | 2025/11/10 | 8-11 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/11/01 | 4-30 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/10/15 | 5-0 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2025/10/15 | 6-26 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ✅ | 2025/10/04 | 10-6 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2025/10/04 | 1-9 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/09/27 | 14-6 | [Bastille FR](https://ws.tsl.rocks/corp/910f3de039463150a8be5828e846a65c435f5ee4a5ae8ec2d27ab040614e5aa8/) |
| ❌ | 2025/09/27 | 0-15 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/09/19 | 6-3 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2025/09/19 | 25-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2025/09/12 | 0-18 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ✅ | 2025/09/12 | 5-3 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ✅ | 2025/09/05 | 29-0 | [Unknown](https://ws.tsl.rocks/corp/9caff988441b5eed61746f0c4adce4802f5ac887a71a8bca865f6efb131c3853/) |
| ❌ | 2025/09/05 | 2-24 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ✅ | 2025/08/29 | 9-0 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ✅ | 2025/08/29 | 33-0 | [万顷稻花](https://ws.tsl.rocks/corp/03386ec0080aee6d7af1877f35b017855540984073077164c8d3ac4203042630/) |
| ❌ | 2025/08/23 | 0-16 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2025/08/21 | 10-17 | [Peaky Blinders](https://ws.tsl.rocks/corp/307baf1ef2e91ed992cd24bce234e347905a566f98db4845cb026b89e7ef0816/) |
| ✅ | 2025/08/17 | 20-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2025/08/13 | 18-3 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ✅ | 2025/08/09 | 14-3 | [太宇天宫](https://ws.tsl.rocks/corp/f5c304e2c7f35d7c6dd11f65212748d4877c297f5b8efcca091e60634ef56bd4/) |
| ✅ | 2025/08/02 | 18-3 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ✅ | 2025/08/02 | 13-0 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ✅ | 2025/07/23 | 3-2 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/07/14 | 4-17 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/07/14 | 7-0 | [清霄阁（防御协会）](https://ws.tsl.rocks/corp/a263c037c5b59f1816ad75738a21141c689baee193b386b2ddbbcf79e959612d/) |
| ❌ | 2025/07/08 | 2-19 | [星域](https://ws.tsl.rocks/corp/9dbe1728c2be44c8cfe8025f7ad859d31ee0c7012aca463d85de8c21953e814f/) |
| ✅ | 2025/07/07 | 24-0 | [Prosperity](https://ws.tsl.rocks/corp/a78b903885754b355b532fb47d983aa5725cb7c73c25e75dbfe4c440cdfffec0/) |
| ✅ | 2025/06/25 | 12-0 | [Winter Star llc](https://ws.tsl.rocks/corp/89b20821cb6e619dced74a6e153a1d3ceafa70b1035fb7d61a6920d375e49f50/) |
| ❌ | 2025/06/22 | 0-21 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/06/20 | 1-12 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/06/14 | 21-0 | [The Force](https://ws.tsl.rocks/corp/390920dccbfdf60b3441d21d85abef74c3d9ac2f5a772f86252f8928d5728e1a/) |
| ✅ | 2025/06/06 | 17-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ❌ | 2025/05/29 | 0-23 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2025/05/19 | 0-12 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ❌ | 2025/05/09 | 0-18 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ❌ | 2025/01/17 | 0-10 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ❌ | 2025/01/16 | 0-17 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2024/11/19 | 1-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/11/19 | 15-41 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2024/10/26 | 0-24 | [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) |
| ❌ | 2024/09/23 | 0-37 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ❌ | 2024/09/01 | 3-10 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/08/25 | 1-29 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/08/07 | 7-16 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/07/21 | 11-5 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/07/12 | 0-34 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/06/29 | 22-0 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/06/10 | 5-24 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ✅ | 2024/06/02 | 5-3 | [绛紫星](https://ws.tsl.rocks/corp/8c2109279ceb01bcca0aa5e85c151d5877831ac54199285743750e2ed343b407/) |
| ✅ | 2024/05/25 | 18-11 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ✅ | 2024/05/16 | 6-3 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ✅ | 2024/05/08 | 29-0 | [Peak Extraction](https://ws.tsl.rocks/corp/b656a84b60d6de62745eb9059a703b44cca76b6247beeceef5f856f89e4c2d0d/) |
| ✅ | 2024/05/01 | 22-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2024/04/19 | 13-9 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/04/10 | 6-1 | [Sektion 32](https://ws.tsl.rocks/corp/16e8d18e4c51a9154959f8d3cd2417d11695210bb12baf2773eb12dea2f5966e/) |
| ✅ | 2024/04/01 | 16-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2024/03/09 | 4-9 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/02/26 | 9-4 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2024/02/16 | 21-2 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ❌ | 2024/02/09 | 5-28 | [Interestelar](https://ws.tsl.rocks/corp/cc9ed2698988a35d6dbb9e9762d6575b28204ab15fd7208b64e8108878a4b8f9/) |
| ❌ | 2024/02/02 | 2-14 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ✅ | 2024/01/26 | 23-3 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2024/01/18 | 13-10 | [Red Star Corp\.](https://ws.tsl.rocks/corp/7ac87486823e26635a2f3887927b19b3a14a7875d38042200045204c418d9ac1/) |
| ❌ | 2024/01/12 | 0-26 | [BSO Academy](https://ws.tsl.rocks/corp/d032f0193d9b3acb579e4e6525a5c8b68f5ec9526dd9644bd45fda747013e876/) |
| ✅ | 2024/01/11 | 6-3 | [Killer Shadow](https://ws.tsl.rocks/corp/e90d22a90153c1fd6c2f02d7d408f1cba9abb2de7f76c38fe7b1aa769df23de7/) |
| ✅ | 2024/01/03 | 11-3 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ❌ | 2023/12/25 | 3-22 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2023/12/20 | 0-14 | [Angel Dragon](https://ws.tsl.rocks/corp/2f2e44c159dc8f4e15e2dabda533d9db8697d2c6c06735d926d180b3aa056dcf/) |
| ✅ | 2023/12/17 | 6-3 | [边际的文明](https://ws.tsl.rocks/corp/4e21eaedc914a082c3bbb48fc00a00db0993fa6da46c25db658dfdc2857e7eb9/) |
| ✅ | 2023/12/07 | 8-2 | [Galactic Trade](https://ws.tsl.rocks/corp/11f216ded6a66748fec41f81ff0eae46ed3f149e39301e31c7977db9897e7d21/) |
| ❌ | 2023/11/26 | 3-7 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ❌ | 2023/11/22 | 0-6 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2023/11/20 | 13-4 | [Orphans Of Kos](https://ws.tsl.rocks/corp/f4fc42714515d58b6fabb87fd87c01baadb59e219e725bfdc6cf70b21a292054/) |
| ✅ | 2023/11/14 | 4-3 | [Galactic Trade](https://ws.tsl.rocks/corp/11f216ded6a66748fec41f81ff0eae46ed3f149e39301e31c7977db9897e7d21/) |
| ❌ | 2023/11/13 | 10-11 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ✅ | 2023/11/04 | 8-3 | [神圣罗马帝国](https://ws.tsl.rocks/corp/2a71af44aaef82175cd8dfd86c9e3f218a438a7c7e748bae20d8a0d964a984ab/) |
| ❌ | 2023/11/04 | 3-6 | [Russian Style](https://ws.tsl.rocks/corp/db02701745537e2b055f660e59bd465567c4e4b322c16ade37245ed4a40699c8/) |

---
Corporation ID: e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1770923410"></span>
</div>