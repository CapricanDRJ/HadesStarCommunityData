---
title: ​对，进就进人少的
description: W:63 L:58 D:4 Bonus ✅ 40%
image: ./favicon.png
Summary: ✅ 11 - 0 **阿尔特拉太空港**
date: 2025-03-11T13:15:56.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
征求富团强军之策，尽管游戏环境不太好，这边氛围很不错，我们欢迎各国玩家，international集团。在这边等级不是问题，J103、he
ltas一白指挥官，二白指挥YONG（后改名为湘），44Q群管理员，新闻播报，我们集团承诺不抛弃每个团员。  前提：1不要小号2开扫强征3
只要常驻4三天上线           黑名单集团：云梦鱼，九州分团，逐光起航 q群：767311697
```
<br>

### [Discord](https://discord.gg/dqW4bytGPe)
### Whitestar Bonus ✅ 40%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1258 🔺  (254)|
| ELO Competitive | 1489 🔺  (82)|
| Total Matches | 125 |
| Wins | 63 |
| Losses | 58 |
| Draws | 4 |
| Streak | 2 |
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
        let timestamps = [1741266956,1741257941,1740717348,1740647633,1740125068,1740052633,1739433290,1739279739,1738926943,1738579261,1738483689,1738146212,1737978836,1737639274,1737545820,1737122708,1737089353,1736518328,1736486473,1735914830,1735875763,1735394399,1735270002,1734664871,1734649852,1734083750,1734057614,1733397457,1732618275,1732078596,1732013388,1731575560,1731524185,1731008557,1730900630,1730478435,1730383178,1730008155,1729929121,1729565528,1729261106,1728954575,1728373893,1727752727,1727689314,1727318502,1726971438,1726712423,1726108191,1725511403,1724919125,1724384822,1723749832,1723733902,1723287342,1723285839,1722843792,1722834176,1722267119,1722266518,1721810615,1721806409,1721364352,1721362850,1720800251,1720800251,1720366274,1720200988,1719898948,1719750498,1719306653,1719305451,1718722159,1718194898,1718179873,1717595261,1717588347,1717116746,1716983362,1716379680,1716375774,1715899871,1715867117,1715264410,1715258099,1714562446,1714535104,1714095522,1714083206,1713449564,1713447761,1712981412,1712979609,1712162618,1712162317,1711724215,1711723013,1711155110,1711114542,1710505789,1710497677,1709300301,1709291587,1708274736,1707716100,1707698675,1707264261,1707230900,1706795651,1706790843,1706360804,1706358399,1705877888,1705416891,1704981450,1704510844,1704078708,1703629134,1703163917,1703152797,1702631770,1702483605,1701960648,1701095688,1700299529];

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
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
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
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
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
| [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) | 1 | 1 | 0 | 2 |
| [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) | 1 | 2 | 0 | 3 |
| [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) | 2 | 0 | 0 | 2 |
| [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) | 0 | 2 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 4 | 1 | 0 | 5 |
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 1 | 1 | 0 | 2 |
| [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) | 2 | 0 | 0 | 2 |
| [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) | 0 | 2 | 0 | 2 |
| [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) | 1 | 1 | 0 | 2 |
| [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) | 0 | 2 | 0 | 2 |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 2 | 1 | 0 | 3 |
| [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) | 2 | 1 | 0 | 3 |
| [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) | 1 | 1 | 0 | 2 |
| [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) | 2 | 0 | 0 | 2 |
| [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) | 0 | 2 | 0 | 2 |
| [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) | 2 | 0 | 0 | 2 |
| [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) | 1 | 1 | 0 | 2 |
| [BSO Academy](https://ws.tsl.rocks/corp/d032f0193d9b3acb579e4e6525a5c8b68f5ec9526dd9644bd45fda747013e876/) | 0 | 2 | 0 | 2 |
| [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) | 2 | 0 | 0 | 2 |
| [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/03/11 | 11-0 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ✅ | 2025/03/11 | 27-3 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2025/03/05 | 0-25 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2025/03/04 | 19-1 | [Z\. O\. V\. ](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2025/02/26 | 2-12 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ❌ | 2025/02/25 | 3-32 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2025/02/18 | 1-18 | [The Foundation](https://ws.tsl.rocks/corp/279f86b28e83ff2e41b798bf93f59b0803e62aecd6e7f0caa5c8be3efecf8728/) |
| ❌ | 2025/02/16 | 5-26 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/02/12 | 11-2 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ✅ | 2025/02/08 | 19-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2025/02/07 | 10-1 | [新星汇聚](https://ws.tsl.rocks/corp/7e61cd500818e2d3a3714d8a775a407e2ce8d9bf1ece36171778536aa8ca7078/) |
| ❌ | 2025/02/03 | 0-24 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ✅ | 2025/02/01 | 29-0 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2025/01/28 | 18-3 | [Quin Armarda](https://ws.tsl.rocks/corp/281e5fa5950e49cecfe76d2adb80613499a0bb841567f92040bfeaea5f4ac218/) |
| ✅ | 2025/01/27 | 21-0 | [大舰队がな](https://ws.tsl.rocks/corp/31c613a73fedabefb27a1d68ac5b662b294e86a0afaaddec87084b04d7791dbc/) |
| ✅ | 2025/01/22 | 13-3 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2025/01/22 | 9-3 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ❌ | 2025/01/15 | 1-13 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/01/15 | 26-4 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ↔️ | 2025/01/08 | 6-6 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ❌ | 2025/01/08 | 3-16 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/01/02 | 2-24 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ✅ | 2025/01/01 | 14-3 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |
| ✅ | 2024/12/25 | 11-0 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ✅ | 2024/12/24 | 18-3 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2024/12/18 | 3-20 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ✅ | 2024/12/18 | 19-0 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2024/12/10 | 19-1 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/12/01 | 14-8 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/11/25 | 4-11 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ❌ | 2024/11/24 | 5-15 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2024/11/19 | 4-5 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2024/11/18 | 6-9 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2024/11/12 | 0-19 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ❌ | 2024/11/11 | 12-17 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ❌ | 2024/11/06 | 3-28 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ❌ | 2024/11/05 | 3-8 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2024/11/01 | 4-16 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2024/10/31 | 10-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ❌ | 2024/10/27 | 3-58 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ↔️ | 2024/10/23 | 9-9 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ✅ | 2024/10/20 | 17-4 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2024/10/13 | 26-3 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/10/06 | 7-2 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/10/05 | 3-17 | [  边界  ](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ❌ | 2024/10/01 | 13-16 | [Quantum Cats](https://ws.tsl.rocks/corp/0b6309a414bde261db3ee5592ae72168ca48d02558f5bc597950f11e55f92ae6/) |
| ❌ | 2024/09/27 | 0-1 | [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) |
| ✅ | 2024/09/24 | 12-11 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ❌ | 2024/09/17 | 10-23 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ✅ | 2024/09/10 | 14-2 | [第四星际](https://ws.tsl.rocks/corp/42d38d5f95c493cb1822f0c89a5366e532a9dc30c0019e03cf7ddd280bf55040/) |
| ❌ | 2024/09/03 | 3-18 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ❌ | 2024/08/28 | 2-18 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2024/08/20 | 7-20 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ✅ | 2024/08/20 | 4-1 | [企鹅帝国](https://ws.tsl.rocks/corp/53f5c71ba84d7adb312f2f45919553d71769bce6acb74e18973f8c9127499807/) |
| ✅ | 2024/08/15 | 16-7 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ✅ | 2024/08/15 | 7-3 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ✅ | 2024/08/10 | 21-0 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/08/10 | 1-42 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ❌ | 2024/08/03 | 9-22 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ❌ | 2024/08/03 | 2-12 | [Grater T](https://ws.tsl.rocks/corp/2044ad2bb7831118aae299744191230a33d196c7997f9516a20c3d0a321ba669/) |
| ❌ | 2024/07/29 | 3-16 | [AKA](https://ws.tsl.rocks/corp/5fde3f409facbda701cdf21de0895eb7c7e17e2d472ae52cc0aa178ce2db64d6/) |
| ✅ | 2024/07/29 | 15-6 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |
| ✅ | 2024/07/24 | 25-0 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ✅ | 2024/07/24 | 7-0 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2024/07/17 | 4-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/07/17 | 15-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/07/12 | 0-12 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2024/07/10 | 8-1 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/07/07 | 10-3 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ❌ | 2024/07/05 | 3-20 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ❌ | 2024/06/30 | 5-21 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ✅ | 2024/06/30 | 7-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2024/06/23 | 8-0 | [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) |
| ✅ | 2024/06/17 | 7-2 | [SiriusStrawMoo](https://ws.tsl.rocks/corp/c83a5744ea256d2c1fa59660bc0e18e8d01a2a467bc13fec27a8b30f689e220b/) |
| ✅ | 2024/06/17 | 17-3 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2024/06/10 | 17-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/06/10 | 5-0 | [德意志第三帝国奥米加分部](https://ws.tsl.rocks/corp/b5f35e30b2dea2621e854b5011a9f9d07ca3585cd26bd9ac92aa7b06c0a522b1/) |
| ✅ | 2024/06/05 | 6-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ✅ | 2024/06/03 | 7-3 | [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) |
| ❌ | 2024/05/27 | 3-11 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ✅ | 2024/05/27 | 15-0 | [You Win](https://ws.tsl.rocks/corp/972debff8c750fc5774a5af41280e0796ef1e0d306bde0558cd116522d9b7c43/) |
| ✅ | 2024/05/21 | 4-3 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/05/21 | 6-7 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/05/14 | 3-2 | [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) |
| ✅ | 2024/05/14 | 20-3 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/05/06 | 5-2 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2024/05/06 | 17-3 | [korea](https://ws.tsl.rocks/corp/2071b0b6ab886c36f36fb357ab33234b4d364e79aae36f5d3387e8ada44962ac/) |
| ✅ | 2024/05/01 | 6-2 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ❌ | 2024/04/30 | 1-10 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ✅ | 2024/04/23 | 13-5 | [星际联盟（中国）](https://ws.tsl.rocks/corp/1deb8ab45257a86051f9c285bbbe06652a56d93118d8e442a0a30ddd179f4256/) |
| ❌ | 2024/04/23 | 3-6 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/04/18 | 10-0 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/04/18 | 5-11 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2024/04/08 | 0-28 | [BSO Academy](https://ws.tsl.rocks/corp/d032f0193d9b3acb579e4e6525a5c8b68f5ec9526dd9644bd45fda747013e876/) |
| ✅ | 2024/04/08 | 7-2 | [Highland Ind\. ](https://ws.tsl.rocks/corp/ba78f9ff67f8944bf4b0152d98968e0ad6c9c86cc2fc518284c0745060e90e2c/) |
| ❌ | 2024/04/03 | 3-14 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ❌ | 2024/04/03 | 0-23 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ↔️ | 2024/03/28 | 4-4 | [RACNAROK](https://ws.tsl.rocks/corp/925ee28e565a662efccf71b5762e6a40b9eacdff2237454dc0e5aa1dcbd44294/) |
| ✅ | 2024/03/27 | 12-0 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/03/20 | 0-16 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2024/03/20 | 18-1 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2024/03/06 | 0-19 | [The Elite](https://ws.tsl.rocks/corp/a2df28ce949920025afb16d0229e0c14aed7832c217d142307a62622634d395c/) |
| ✅ | 2024/03/06 | 8-4 | [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) |
| ❌ | 2024/02/23 | 3-21 | [Sternenflotte](https://ws.tsl.rocks/corp/6273be8c33cae6938fe5608aa5cf5a78e740f71dd888477b437e47ec106c0a0d/) |
| ❌ | 2024/02/17 | 1-2 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/02/17 | 6-25 | [元素联邦](https://ws.tsl.rocks/corp/e9d602d617d5c81270107c15a6d1f1717c5016abad802d3629f7f4301a58e95e/) |
| ❌ | 2024/02/12 | 3-16 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ↔️ | 2024/02/11 | 10-10 | [Sektion 32](https://ws.tsl.rocks/corp/16e8d18e4c51a9154959f8d3cd2417d11695210bb12baf2773eb12dea2f5966e/) |
| ✅ | 2024/02/06 | 4-1 | [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) |
| ✅ | 2024/02/06 | 7-1 | [СлАвЯнСкИй СоЮз](https://ws.tsl.rocks/corp/74a0e9ceb3b48af60580382b0ee5e8712d9a468b4f947302b81b999cfde3f86a/) |
| ❌ | 2024/02/01 | 3-33 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ✅ | 2024/02/01 | 17-2 | [TECH CO](https://ws.tsl.rocks/corp/49f9afe365665b0d622f99306a23e7a2ebd9cf7022ee79c25e08917977ab9d7a/) |
| ❌ | 2024/01/26 | 3-26 | [BSO Academy](https://ws.tsl.rocks/corp/d032f0193d9b3acb579e4e6525a5c8b68f5ec9526dd9644bd45fda747013e876/) |
| ✅ | 2024/01/21 | 14-0 | [universe leader](https://ws.tsl.rocks/corp/8d7722faac1d00f0aaa58497484f9b84b89bdf263ab2dc48b2ae14dedf6388f0/) |
| ❌ | 2024/01/16 | 4-22 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/01/11 | 5-6 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/01/06 | 9-0 | [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) |
| ❌ | 2023/12/31 | 2-5 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2023/12/26 | 6-0 | [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) |
| ❌ | 2023/12/26 | 1-24 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ❌ | 2023/12/20 | 3-8 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ✅ | 2023/12/18 | 11-0 | [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) |
| ❌ | 2023/12/12 | 0-19 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2023/12/02 | 2-9 | [Dark Sun](https://ws.tsl.rocks/corp/41ffd72a8eba70ea3f7f69ce602194b0ee84c7e65be6d2e08b87181de24cc9cf/) |
| ❌ | 2023/11/23 | 2-4 | [Br Stark Corps](https://ws.tsl.rocks/corp/bb363d47e9cd8710d6808f6dcc2d270bdf33614e63ea6e0943bb739cde625f27/) |

---
Corporation ID: 2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1741698956"></span>
</div>