---
title: ​新?的星际集团?
description: W:54 L:44 D:7 Bonus ✅ 42%
image: ./favicon.png
Summary: ✅ 28 - 4 **中国星际联盟**
date: 2026-02-21T09:18:18.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
本集团为<size=150>新星团</size>总团
旗下分团：
<#FAD201>·新?的星际集团?
·探索舰队
·特拉斯丁第二共和国</color>
<#86cecb>常驻可加集团QQ群815066596</color>
<#FAD201>欢迎各路大佬与萌新加入，定期打白</color>
<#EE4B2B>不欢迎全服公敌瓜老板</color>
```
<br>

### [Discord](https://discord.gg/新星团总部)
### Whitestar Bonus ✅ 42%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1203 🔺  (23)|
| ELO Competitive | 1382 🔺  (26)|
| Total Matches | 105 |
| Wins | 54 |
| Losses | 44 |
| Draws | 7 |
| Streak | 3 |
| Streak Record | 20 |
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
        let timestamps = [1771233498,1771215772,1770779831,1770743480,1770098134,1770091521,1769641600,1769569599,1769089442,1769087338,1768554311,1768503557,1767434675,1767378649,1766946386,1766937609,1766503433,1766490236,1757825129,1756830325,1756391054,1755924581,1753592465,1751946126,1751940719,1751370398,1750764034,1750260689,1749788881,1749787399,1749336035,1749313496,1748878999,1748445684,1747111185,1746657138,1746621373,1746223789,1745852823,1745320009,1744730723,1744722898,1744160676,1743666024,1743526561,1743094073,1743076639,1742434713,1741971010,1741970710,1741537119,1741103802,1741075255,1740577022,1739903876,1739890350,1739456728,1739452821,1737465891,1737296111,1736788527,1736695659,1736273103,1735711999,1735692774,1735050671,1735049769,1733909780,1732333105,1731733924,1729951060,1729949858,1729493105,1729484993,1729015883,1728293662,1728129282,1727706447,1727649357,1727263807,1727216220,1726460796,1725945629,1725942623,1725483411,1725461825,1725010052,1724982534,1724507734,1724496011,1724056371,1724044052,1723605588,1723547587,1723037622,1723029506,1722595265,1722593762,1722161630,1721657655,1721652544,1721219212,1721092693,1720591966,1719722998];

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
| [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) | 0 | 2 | 0 | 2 |
| [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) | 0 | 2 | 0 | 2 |
| [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) | 2 | 0 | 1 | 3 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 1 | 1 | 0 | 2 |
| [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) | 1 | 1 | 0 | 2 |
| [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) | 2 | 0 | 0 | 2 |
| [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) | 1 | 1 | 0 | 2 |
| [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) | 0 | 1 | 1 | 2 |
| [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) | 0 | 2 | 0 | 2 |
| [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) | 1 | 1 | 0 | 2 |
| [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/21 | 28-4 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2026/02/21 | 2-0 | [Czech Wolfs](https://ws.tsl.rocks/corp/e854a37644d7c494d729a690872d859bb3800e41da641b6a53ff42e137ae2ad2/) |
| ✅ | 2026/02/16 | 13-3 | [维埃星云氮氢钨钽](https://ws.tsl.rocks/corp/4f76f07e3376e9848983a4effbb2deca1f3d4602a1ed8c0346183dc7a589c40a/) |
| ❌ | 2026/02/15 | 3-19 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2026/02/08 | 0-2 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ❌ | 2026/02/08 | 0-20 | [Orden Estelar](https://ws.tsl.rocks/corp/1da0142a6cc2fcab35a82ff4d7b591f4ffa96761419c6bf39154afded7ef7c2d/) |
| ❌ | 2026/02/02 | 0-9 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ❌ | 2026/02/02 | 3-6 | [Kingdom Of Meow](https://ws.tsl.rocks/corp/bb7b30afd9a7e5c035d0ba19b9aa388cea55098d375174faf86523618929f856/) |
| ❌ | 2026/01/27 | 0-3 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2026/01/27 | 0-37 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ↔️ | 2026/01/21 | 0-0 | [O\.E\.B\.](https://ws.tsl.rocks/corp/b5582fa160e45f10e3d6e680da5adee9481d8253e7a2fff79e09d0ff90da961c/) |
| ❌ | 2026/01/20 | 0-27 | [Stargate Sg7](https://ws.tsl.rocks/corp/f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81/) |
| ↔️ | 2026/01/08 | 0-0 | [Stargroup](https://ws.tsl.rocks/corp/cf430206a6a585f302ac5d76adf50b780f002f52ebbb82b323f933f5a0a25c4f/) |
| ❌ | 2026/01/07 | 1-6 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ↔️ | 2026/01/02 | 0-0 | [阿特拉斯](https://ws.tsl.rocks/corp/100eb9ada4da0f1abf6a3216aaf72cd173d3d2b114d827af8ad137a62de7c641/) |
| ❌ | 2026/01/02 | 3-20 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ↔️ | 2025/12/28 | 0-0 | [0 NEGATIV](https://ws.tsl.rocks/corp/c948981095903059ed0fdad53564948b7fa389ccabcd3d546b30ca085a2a9ee5/) |
| ❌ | 2025/12/28 | 0-3 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/09/19 | 0-25 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2025/09/07 | 2-6 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ❌ | 2025/09/02 | 3-16 | [QuantumDrift](https://ws.tsl.rocks/corp/6b976a5cc4450c6b5c8a52b762982560b6d5551146a01c0b659deb8eb5043359/) |
| ✅ | 2025/08/28 | 10-5 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/08/01 | 0-18 | [深域](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ❌ | 2025/07/13 | 2-11 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ❌ | 2025/07/13 | 0-29 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2025/07/06 | 0-21 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ✅ | 2025/06/29 | 9-5 | [幻想乡](https://ws.tsl.rocks/corp/441e1a0c14268ad15932035c1fb348ea3532c5927ced7f058e6ca74a186f77be/) |
| ✅ | 2025/06/23 | 8-2 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ❌ | 2025/06/18 | 0-20 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/06/18 | 3-40 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/06/12 | 7-2 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/06/12 | 12-10 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/06/07 | 6-0 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2025/06/02 | 8-1 | [Bow Down](https://ws.tsl.rocks/corp/402b459520fde5ca47dbb493e4f75201464ab1d46cc1b8dad2f321217265bef4/) |
| ❌ | 2025/05/18 | 2-22 | [АарнСарт](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |
| ❌ | 2025/05/12 | 0-22 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ✅ | 2025/05/12 | 8-0 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2025/05/07 | 7-0 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ↔️ | 2025/05/03 | 34-34 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/04/27 | 10-3 | [青丘湖](https://ws.tsl.rocks/corp/c2d4ace95bc720bbe241ecac77e9a33d3961c881d62fa45e81690b9836a65658/) |
| ✅ | 2025/04/20 | 13-0 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ✅ | 2025/04/20 | 3-0 | [GermanSpaceDuo](https://ws.tsl.rocks/corp/4845b9c456dec1856ed2c9bdcf6e1cf6d0d18460e78de1d40daf20df8ff99933/) |
| ✅ | 2025/04/14 | 10-0 | [titan tv](https://ws.tsl.rocks/corp/30ba418a884a4c2f888c814c6adfd9f30d995c155ccdc8aafa74ae4dc30f1c39/) |
| ✅ | 2025/04/08 | 13-5 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/04/06 | 19-0 | [Prosperity](https://ws.tsl.rocks/corp/a78b903885754b355b532fb47d983aa5725cb7c73c25e75dbfe4c440cdfffec0/) |
| ✅ | 2025/04/01 | 1-0 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ✅ | 2025/04/01 | 14-0 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ✅ | 2025/03/25 | 15-1 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/03/19 | 10-6 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ✅ | 2025/03/19 | 17-14 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ✅ | 2025/03/14 | 12-4 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ✅ | 2025/03/09 | 17-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2025/03/09 | 28-0 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2025/03/03 | 6-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/02/23 | 9-0 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/02/23 | 19-3 | [Alterra Corp](https://ws.tsl.rocks/corp/2994ab783b4971d838bcc4741de8562ba674bf412d43f879bccadbc9f91eee2a/) |
| ✅ | 2025/02/18 | 10-0 | [REY DE REYES](https://ws.tsl.rocks/corp/3400c8c832317ae214792a1e1ce914867af247bc0b4f021bd71a18e977cb60cb/) |
| ✅ | 2025/02/18 | 16-0 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2025/01/26 | 3-2 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ❌ | 2025/01/24 | 0-19 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/01/18 | 4-2 | [SUSSY IMPOSTER](https://ws.tsl.rocks/corp/a911a678e68cd459e46553ec76a2a13753ff26a485a716e12e0c873abe6b4a40/) |
| ✅ | 2025/01/17 | 24-6 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ❌ | 2025/01/12 | 0-16 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2025/01/06 | 0-2 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/01/06 | 0-18 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2024/12/29 | 0-11 | [八月政府](https://ws.tsl.rocks/corp/72097ba1b36daa9482410e9d2b442965a1f4bbb7bb7974995521f1a948244424/) |
| ❌ | 2024/12/29 | 0-9 | [Cerberus](https://ws.tsl.rocks/corp/a1a5b11461becdc8a3e81f7d2a9bf5f284f3906a9b41c846cd83f68dc40ccdca/) |
| ↔️ | 2024/12/16 | 0-0 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2024/11/28 | 2-29 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2024/11/21 | 1-8 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ❌ | 2024/10/31 | 0-24 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/10/31 | 3-7 | [아베노노](https://ws.tsl.rocks/corp/b6a4ffffbabc8bf90d3ae19467aa6ce98c4a3ceb136af04fd24a43406f8f830f/) |
| ❌ | 2024/10/26 | 0-20 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ✅ | 2024/10/26 | 8-3 | [ДИᏰEPℂДℍTᏰℓ](https://ws.tsl.rocks/corp/a1dad8a2a2c5ab935169d168bc19f8a1db7f12b099358e079cb7221a340345ed/) |
| ❌ | 2024/10/20 | 3-5 | [SiriusStrawMoo](https://ws.tsl.rocks/corp/c83a5744ea256d2c1fa59660bc0e18e8d01a2a467bc13fec27a8b30f689e220b/) |
| ❌ | 2024/10/12 | 3-5 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ✅ | 2024/10/10 | 16-8 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ↔️ | 2024/10/05 | 5-5 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/10/04 | 1-0 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2024/09/30 | 10-3 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2024/09/29 | 14-0 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ❌ | 2024/09/21 | 0-24 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ✅ | 2024/09/15 | 8-3 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/09/15 | 17-5 | [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) |
| ✅ | 2024/09/09 | 13-0 | [koalition](https://ws.tsl.rocks/corp/68d721684ab83df28cba0a58c608e5dd3c58df79369abffa67da4e8956ef2695/) |
| ❌ | 2024/09/09 | 3-13 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2024/09/04 | 0-11 | [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) |
| ✅ | 2024/09/04 | 14-3 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ❌ | 2024/08/29 | 2-11 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2024/08/29 | 21-4 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2024/08/24 | 20-3 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2024/08/24 | 4-3 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ✅ | 2024/08/19 | 7-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/08/18 | 14-1 | [电磁脉冲集团](https://ws.tsl.rocks/corp/dcb1da78498db8641adb123c1a92ba9ab5f4a68b2a22e41fd8694b912a6d3482/) |
| ❌ | 2024/08/12 | 3-13 | [无聊不过](https://ws.tsl.rocks/corp/6099bd39cf8510ea3ef2be0fe05df95266b12acfdcbe1bd58a4c33e9c3f25934/) |
| ✅ | 2024/08/12 | 21-0 | [Danish Oil](https://ws.tsl.rocks/corp/f836c8a9410599558f58138318bf3aa93a3eea49dd41e376d521ec13cc1ab967/) |
| ❌ | 2024/08/07 | 0-7 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2024/08/07 | 25-2 | [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) |
| ❌ | 2024/08/02 | 3-23 | [Lofty Mountain](https://ws.tsl.rocks/corp/1cfc6606e17d524ba0388b273ad6a9e86b23838eb529a2659f03a40702affbf7/) |
| ✅ | 2024/07/27 | 2-0 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ✅ | 2024/07/27 | 15-2 | [银星舰队SSF](https://ws.tsl.rocks/corp/c02d97cc37c082739a7828b6669ee67e2108bbf3d9f33628c650ced9fe04dd06/) |
| ✅ | 2024/07/22 | 15-4 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2024/07/21 | 0-6 | [Gastro](https://ws.tsl.rocks/corp/97fa80cbbd78ba0187b5fe3310f441eae5bae995b37c17cd740f62a630d8303e/) |
| ❌ | 2024/07/15 | 1-21 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ✅ | 2024/07/05 | 3-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |

---
Corporation ID: 22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771665498"></span>
</div>