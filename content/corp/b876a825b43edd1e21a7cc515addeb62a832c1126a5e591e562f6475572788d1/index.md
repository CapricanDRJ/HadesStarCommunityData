---
title: ​AlSounT
description: W:45 L:69 D:1 Bonus ✅ 46%
image: ./favicon.png
Summary: ✅ 27 - 0 **Hun Generals**
date: 2026-02-21T08:33:14.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Играем в свое удовольствия - Регулярные полеты на БЗ - Связь телеграм
м  - Ищем отважных и надёжных командиров если ты не трус залетай  к н
ам и вместе будем биться у Белых Звёзд
```
<br>

### Whitestar Bonus ✅ 46%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1094 🔺  (7)|
| ELO Competitive | 1418 🔺  (8)|
| Total Matches | 115 |
| Wins | 45 |
| Losses | 69 |
| Draws | 1 |
| Streak Record | 4 |
| Flagship | 6 |

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
        let timestamps = [1771230794,1770732661,1770198473,1769525834,1769523922,1769000504,1768467498,1768467498,1767982257,1767975045,1767473910,1767018422,1766448181,1766383875,1765791387,1765210914,1765210613,1764707326,1764694703,1764209702,1764209702,1763710962,1763050283,1762411812,1761666700,1761065735,1760010122,1759323554,1758698009,1758695607,1758118067,1758110856,1757348617,1757348617,1756702329,1756702029,1756227750,1756227149,1755703404,1755697392,1755183550,1755182649,1754395658,1754395658,1753669178,1753669093,1752615550,1752613145,1752125212,1752114697,1751374004,1751374004,1750772147,1750767039,1750095714,1750092143,1749159048,1749146426,1748528917,1748528617,1748079366,1748078765,1747585968,1747015926,1746170929,1745711937,1745684529,1745219038,1745216334,1744731625,1744730723,1744179303,1743497407,1743496206,1743048994,1743044488,1742570244,1742570244,1742123071,1741529304,1741062336,1740549379,1739634022,1739120780,1738498117,1738062375,1737474006,1736934577,1736435984,1735916935,1734537475,1734094868,1733591579,1732976190,1732515814,1731945484,1731416606,1730963732,1730478435,1730033701,1729514439,1729072073,1728484189,1727945348,1727428178,1726938688,1726246114,1702802778,1702219423,1701334620,1700768686,1700326582,1699867283,1699378564,1698921199];

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
| [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) | 1 | 1 | 0 | 2 |
| [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) | 0 | 2 | 0 | 2 |
| [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) | 0 | 2 | 0 | 2 |
| [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) | 1 | 1 | 0 | 2 |
| [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) | 2 | 0 | 0 | 2 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 1 | 1 | 0 | 2 |
| [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) | 0 | 1 | 1 | 2 |
| [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) | 1 | 3 | 0 | 4 |
| [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) | 2 | 0 | 0 | 2 |
| [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) | 0 | 2 | 0 | 2 |
| [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) | 0 | 2 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 2 | 0 | 0 | 2 |
| [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) | 1 | 2 | 0 | 3 |
| [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) | 0 | 2 | 0 | 2 |
| [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/21 | 27-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2026/02/15 | 3-25 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ✅ | 2026/02/09 | 28-1 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ❌ | 2026/02/01 | 0-20 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ❌ | 2026/02/01 | 4-30 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2026/01/26 | 9-12 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ❌ | 2026/01/20 | 4-23 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2026/01/20 | 0-18 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2026/01/14 | 2-3 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ✅ | 2026/01/14 | 27-10 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ❌ | 2026/01/08 | 0-19 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2026/01/03 | 35-36 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ❌ | 2025/12/28 | 1-12 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ✅ | 2025/12/27 | 33-11 | [Зелёная корпа](https://ws.tsl.rocks/corp/978fbb6cb32789d7057450a2239b1d6e2bc7730bbdd832f816384d45ec44ac57/) |
| ✅ | 2025/12/20 | 27-21 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ✅ | 2025/12/13 | 32-1 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2025/12/13 | 0-31 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2025/12/07 | 0-30 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ❌ | 2025/12/07 | 12-35 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ✅ | 2025/12/02 | 37-3 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2025/12/02 | 0-15 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ↔️ | 2025/11/26 | 27-27 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ❌ | 2025/11/18 | 6-39 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ❌ | 2025/11/11 | 16-20 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2025/11/02 | 0-41 | [" Возрождение "](https://ws.tsl.rocks/corp/4422f581b40217ac99ee97df59d8d887249c4cdc51d2d5fe901f438ab720d26d/) |
| ❌ | 2025/10/26 | 0-31 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/10/14 | 0-30 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2025/10/06 | 32-3 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ❌ | 2025/09/29 | 0-29 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ❌ | 2025/09/29 | 3-32 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/09/22 | 3-8 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/09/22 | 6-28 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2025/09/13 | 6-33 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2025/09/13 | 0-24 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/09/06 | 27-5 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2025/09/06 | 0-21 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2025/08/31 | 47-24 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2025/08/31 | 8-13 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2025/08/25 | 17-18 | [日月星辰](https://ws.tsl.rocks/corp/d4f02aae2e03f6d0af99e1291b59b8bc7ea9c5baae99fc2eff5afe1e4baedc30/) |
| ❌ | 2025/08/25 | 3-14 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2025/08/19 | 0-25 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ❌ | 2025/08/19 | 0-23 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2025/08/10 | 1-22 | [Polaris Corpo](https://ws.tsl.rocks/corp/918db816bc1bb29c5cb1854a5a67b1b240f8835af6f1e584db7fb7070884e346/) |
| ❌ | 2025/08/10 | 0-25 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ❌ | 2025/08/02 | 3-34 | [Wompwompway](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ❌ | 2025/08/02 | 0-30 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ❌ | 2025/07/20 | 7-27 | [Star Wars](https://ws.tsl.rocks/corp/2dd3aee3667c5c190079cc378773d809ece1b146bc0a16fce6c46663fc3b6992/) |
| ❌ | 2025/07/20 | 0-10 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/07/15 | 0-9 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ❌ | 2025/07/15 | 10-22 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ✅ | 2025/07/06 | 38-0 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/07/06 | 0-16 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/06/29 | 26-22 | [Hexwood](https://ws.tsl.rocks/corp/b10084235f689f555f99efd52d9d4ea86dabf662e57f64dd9d86bbdc31b9c3e1/) |
| ✅ | 2025/06/29 | 3-0 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2025/06/21 | 0-26 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ❌ | 2025/06/21 | 0-7 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2025/06/10 | 42-3 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ❌ | 2025/06/10 | 0-17 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ❌ | 2025/06/03 | 6-21 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2025/06/03 | 20-3 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2025/05/29 | 17-0 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ❌ | 2025/05/29 | 7-31 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ✅ | 2025/05/23 | 31-8 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/05/17 | 4-30 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |
| ✅ | 2025/05/07 | 37-4 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ❌ | 2025/05/01 | 0-17 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ✅ | 2025/05/01 | 24-3 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2025/04/26 | 0-11 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ❌ | 2025/04/26 | 1-33 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2025/04/20 | 27-20 | [Planet Express](https://ws.tsl.rocks/corp/be13b17a002cf203ab2a5a31d6c8024e7458b8eac569eb576be7f30844979c99/) |
| ❌ | 2025/04/20 | 0-13 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2025/04/14 | 14-5 | [MiddleOfNowhere](https://ws.tsl.rocks/corp/5533fe0fd0191ec67175c5e7330d8716ef0ce35fdbf47e4c07e41393dcf6eb42/) |
| ❌ | 2025/04/06 | 21-39 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ❌ | 2025/04/06 | 2-6 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ✅ | 2025/04/01 | 39-16 | [Bund von Lykon](https://ws.tsl.rocks/corp/b1a267bb80dd695c75c1996122ff32ca8296c07874376131618d18b4fee0aa5c/) |
| ❌ | 2025/04/01 | 0-16 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/03/26 | 32-24 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2025/03/26 | 6-11 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2025/03/21 | 19-27 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2025/03/14 | 34-9 | [八月政府](https://ws.tsl.rocks/corp/72097ba1b36daa9482410e9d2b442965a1f4bbb7bb7974995521f1a948244424/) |
| ✅ | 2025/03/09 | 31-15 | [青丘湖](https://ws.tsl.rocks/corp/c2d4ace95bc720bbe241ecac77e9a33d3961c881d62fa45e81690b9836a65658/) |
| ✅ | 2025/03/03 | 45-15 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/02/20 | 7-13 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ✅ | 2025/02/14 | 35-8 | [AKA](https://ws.tsl.rocks/corp/5fde3f409facbda701cdf21de0895eb7c7e17e2d472ae52cc0aa178ce2db64d6/) |
| ✅ | 2025/02/07 | 41-13 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ❌ | 2025/02/02 | 9-29 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ✅ | 2025/01/26 | 38-13 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2025/01/20 | 24-33 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2025/01/14 | 39-2 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2025/01/08 | 39-5 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/12/23 | 18-36 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ✅ | 2024/12/18 | 27-21 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2024/12/12 | 5-27 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/12/05 | 0-27 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ✅ | 2024/11/30 | 31-8 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2024/11/23 | 30-16 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2024/11/17 | 29-8 | [UK Armada](https://ws.tsl.rocks/corp/2e3b65146fc90421a8e65a738a443ed67c756396af15a641475928091cb261a4/) |
| ❌ | 2024/11/12 | 0-21 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2024/11/06 | 28-3 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2024/11/01 | 5-20 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ✅ | 2024/10/26 | 26-3 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/10/21 | 14-3 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2024/10/14 | 19-5 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ✅ | 2024/10/08 | 21-3 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ❌ | 2024/10/02 | 2-27 | [Дом Датэ](https://ws.tsl.rocks/corp/10cbcbd91c4084657bdab01ef573cc48170fbc4dd0ab533f96712f1cb6097ff2/) |
| ✅ | 2024/09/26 | 30-0 | [ギャラクシー富士山](https://ws.tsl.rocks/corp/2d5888d985fe8a11b0227ed1ac345ca5be43e105bee9c4694e43c695bfd33649/) |
| ✅ | 2024/09/18 | 23-0 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2023/12/22 | 0-19 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ❌ | 2023/12/15 | 0-26 | [alienigenas](https://ws.tsl.rocks/corp/1c092f1b0e9645193eac68e27b29b2b9fef39474fd8924495abec6754857a8f9/) |
| ✅ | 2023/12/05 | 11-2 | [夢幻之星\*分盟\*](https://ws.tsl.rocks/corp/25ac58a842783eb85413a2cb4896100bd1bdad3b64dbbc3b2d2c9bdf3f878c96/) |
| ❌ | 2023/11/28 | 0-17 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |
| ❌ | 2023/11/23 | 0-21 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2023/11/18 | 13-16 | [White Dwarf](https://ws.tsl.rocks/corp/02293e0ec2e4f96dcdcf4551de1cfa6a278a4c53ac62e80c4212912fa4eda15b/) |
| ✅ | 2023/11/12 | 13-2 | [REFOUNDATION](https://ws.tsl.rocks/corp/eb4ad6c6bd23c3cccc0999765163a6be7fda7844ba4d6e02b7018f2d45c0c29e/) |
| ✅ | 2023/11/07 | 20-0 | [黑色长城](https://ws.tsl.rocks/corp/8494a7ecc96c5cc06e4d9c7824f2c0cf9fde23e2878b0305b618382fb4068005/) |

---
Corporation ID: b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771662794"></span>
</div>