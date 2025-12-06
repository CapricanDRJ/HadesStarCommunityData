---
title: ​Nebulae Traders
description: W:25 L:89 D:6 Bonus ✅ 42%
image: ./favicon.png
Summary: ↔️ 0 - 0 **Prodexus Domino**
date: 2025-12-05T23:33:20.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
 https://discord.gg/5a4CpEq7
```
<br>

### [Discord](https://discord.gg/https://discord.gg/5a4CpEq7)
### Whitestar Bonus ✅ 42%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1084 🔺  (9)|
| ELO Competitive | 1249 🔺  (23)|
| Total Matches | 120 |
| Wins | 25 |
| Losses | 89 |
| Draws | 6 |
| Streak Record | 2 |
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
        let timestamps = [1764545600,1764529745,1764045366,1764045065,1763555032,1763545418,1763061099,1762605916,1762082225,1761629745,1761112301,1760631790,1760173877,1759738807,1759303122,1758835918,1758391254,1757927891,1756792166,1756195122,1755700398,1754371321,1753525155,1753014015,1752349214,1751808796,1751137534,1750693125,1750047328,1749514530,1748844138,1748332706,1747743720,1747114490,1746287527,1746042323,1745531865,1744976225,1744974723,1744535698,1744059414,1743472170,1743449719,1742492109,1742490606,1741828291,1741811765,1741217686,1741021772,1740477249,1739755433,1739223856,1739212134,1738623580,1738599097,1737898906,1737890487,1735593024,1735591221,1734999598,1734999297,1734141150,1734126429,1733530269,1733527265,1732819941,1732819941,1732371270,1732370068,1731317445,1731313239,1729585108,1729565528,1728822625,1728815109,1728314701,1728001255,1727764746,1727303782,1727283645,1726691394,1726227778,1726226876,1725401792,1725398730,1724906805,1724883973,1724451240,1724445530,1723831868,1723826760,1723303219,1723294856,1722856529,1722851304,1722391227,1722390025,1721902869,1721897461,1721342121,1721197578,1720897630,1720387617,1719897145,1719433774,1718823133,1716078338,1715637282,1715113291,1713788760,1713203176,1712437860,1711409023,1710035723,1709402172,1707263531,1707260655,1706121534,1705966840,1698725548];

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
| [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) | 0 | 2 | 0 | 2 |
| [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) | 1 | 1 | 0 | 2 |
| [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) | 0 | 2 | 0 | 2 |
| [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) | 0 | 2 | 0 | 2 |
| [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) | 3 | 0 | 0 | 3 |
| [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) | 2 | 0 | 0 | 2 |
| [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) | 0 | 2 | 0 | 2 |
| [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) | 0 | 1 | 1 | 2 |
| [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) | 1 | 1 | 0 | 2 |
| [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) | 1 | 1 | 0 | 2 |
| [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) | 0 | 2 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 0 | 2 | 0 | 2 |
| [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) | 0 | 2 | 0 | 2 |
| [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) | 0 | 2 | 0 | 2 |
| [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ↔️ | 2025/12/05 | 0-0 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |
| ✅ | 2025/12/05 | 25-0 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2025/11/30 | 17-0 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2025/11/30 | 0-1 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ❌ | 2025/11/24 | 0-2 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ✅ | 2025/11/24 | 23-6 | [We R Bad](https://ws.tsl.rocks/corp/f5cb2c2ba88483bac00f814e32a0d862e4f3a0a10cc614b33ecb9e846766aae0/) |
| ❌ | 2025/11/18 | 6-8 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2025/11/13 | 22-4 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2025/11/07 | 5-20 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2025/11/02 | 0-8 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/10/27 | 16-8 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2025/10/21 | 9-12 | [S\.U\.N](https://ws.tsl.rocks/corp/916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2/) |
| ❌ | 2025/10/16 | 0-2 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2025/10/11 | 5-9 | [HUN TERS](https://ws.tsl.rocks/corp/99c45cb17fdcbf89bf806b294ebe42a042ff774e913c216800fb7b1435d255a1/) |
| ❌ | 2025/10/06 | 4-35 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/09/30 | 20-2 | [Alpha](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) |
| ❌ | 2025/09/25 | 7-9 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2025/09/20 | 3-22 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ❌ | 2025/09/07 | 4-6 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ❌ | 2025/08/31 | 3-27 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ❌ | 2025/08/25 | 27-36 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ❌ | 2025/08/10 | 3-18 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/07/31 | 3-28 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/07/25 | 3-26 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ✅ | 2025/07/17 | 24-0 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2025/07/11 | 19-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ❌ | 2025/07/03 | 2-48 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ❌ | 2025/06/28 | 0-49 | [alienigenas](https://ws.tsl.rocks/corp/1c092f1b0e9645193eac68e27b29b2b9fef39474fd8924495abec6754857a8f9/) |
| ❌ | 2025/06/21 | 3-21 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/06/15 | 2-47 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ❌ | 2025/06/07 | 0-24 | [Млечный путь](https://ws.tsl.rocks/corp/a9a3b102b3698bf7db8cd106adda02cee0033bfc03f681b667b2991e10049a25/) |
| ✅ | 2025/06/01 | 16-3 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2025/05/25 | 15-0 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ❌ | 2025/05/18 | 18-27 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2025/05/08 | 0-10 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2025/05/05 | 2-20 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ❌ | 2025/04/29 | 6-23 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ❌ | 2025/04/23 | 0-20 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ✅ | 2025/04/23 | 19-2 | [Stardust](https://ws.tsl.rocks/corp/304ad360ced8ec5a0e12a9955f3dd8f8ac2476f48d98a379beda41221e5a1c1c/) |
| ✅ | 2025/04/18 | 15-9 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ❌ | 2025/04/12 | 0-10 | [C'est pas faux\!](https://ws.tsl.rocks/corp/fa08ee3e0496d13b55f0058cc61560c3e8e5b91628ee583c9eca31ef10c7749b/) |
| ✅ | 2025/04/06 | 15-0 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ↔️ | 2025/04/05 | 0-0 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2025/03/25 | 11-14 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ✅ | 2025/03/25 | 3-0 | [UGSS](https://ws.tsl.rocks/corp/06eb95447520936bc87ea4f7c64539563c77a74948291fc7a65b190f2752b4c7/) |
| ✅ | 2025/03/18 | 8-7 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ❌ | 2025/03/17 | 0-15 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2025/03/10 | 1-18 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ❌ | 2025/03/08 | 4-18 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ❌ | 2025/03/02 | 3-21 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |
| ❌ | 2025/02/22 | 0-39 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ❌ | 2025/02/15 | 1-37 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/02/15 | 1-31 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/02/08 | 3-14 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ❌ | 2025/02/08 | 4-25 | [Pixies](https://ws.tsl.rocks/corp/fe3875cc3bc7cd97ee3d418bb35d69d8ec90da355cbec2dfb7a364387e021240/) |
| ❌ | 2025/01/31 | 3-16 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ❌ | 2025/01/31 | 0-29 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2025/01/04 | 1-19 | [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) |
| ❌ | 2025/01/04 | 0-46 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ❌ | 2024/12/29 | 4-14 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/12/29 | 0-3 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/12/19 | 0-20 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ❌ | 2024/12/18 | 0-38 | [Wompwompway](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ❌ | 2024/12/12 | 0-8 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/12/11 | 3-24 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2024/12/03 | 0-34 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ✅ | 2024/12/03 | 2-0 | [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) |
| ✅ | 2024/11/28 | 3-0 | [Phoenix Nest](https://ws.tsl.rocks/corp/e63d7fd60c26387fe662f9dc27945060df85b5e1ee07ca68033376e92ecc65b6/) |
| ❌ | 2024/11/28 | 0-42 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2024/11/16 | 3-38 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2024/11/16 | 1-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ❌ | 2024/10/27 | 0-32 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ❌ | 2024/10/27 | 3-21 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2024/10/18 | 6-30 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/10/18 | 3-15 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ❌ | 2024/10/12 | 3-30 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2024/10/09 | 0-3 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ❌ | 2024/10/06 | 8-21 | [第三舰队](https://ws.tsl.rocks/corp/5c221ea6be2f8e437f63c736ee45290cb3304543c57a4a1ea677e5e24e121f89/) |
| ❌ | 2024/09/30 | 0-19 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ↔️ | 2024/09/30 | 3-3 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ❌ | 2024/09/23 | 5-18 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/09/18 | 0-20 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2024/09/18 | 1-15 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ↔️ | 2024/09/08 | 0-0 | [Сибиряки](https://ws.tsl.rocks/corp/8292ba421cc8d81ce0a483ceaedafeff0966e8afc1c1c689517971a223e2aaa8/) |
| ❌ | 2024/09/08 | 0-19 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ❌ | 2024/09/03 | 0-12 | [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) |
| ❌ | 2024/09/02 | 0-45 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ❌ | 2024/08/28 | 0-10 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ❌ | 2024/08/28 | 0-27 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2024/08/21 | 3-4 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ❌ | 2024/08/21 | 3-17 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/08/15 | 3-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2024/08/15 | 14-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2024/08/10 | 0-8 | [Axiom](https://ws.tsl.rocks/corp/4000a010c205d318c766ba14fe1836eaab6652f1738a88cce8a8c69d0283e1b0/) |
| ❌ | 2024/08/10 | 3-10 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2024/08/05 | 2-14 | [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) |
| ❌ | 2024/08/05 | 0-27 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ❌ | 2024/07/30 | 0-19 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ✅ | 2024/07/30 | 16-13 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ❌ | 2024/07/23 | 1-9 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ❌ | 2024/07/22 | 0-14 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2024/07/18 | 3-26 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ❌ | 2024/07/12 | 0-28 | [Corporation](https://ws.tsl.rocks/corp/51bbfdd5693e8227e63dbd5161e8fb1a5fa3e93d1f67c7d565d82f080bbeb007/) |
| ✅ | 2024/07/07 | 5-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/07/01 | 5-1 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/06/24 | 0-24 | [Galaktika corp](https://ws.tsl.rocks/corp/c37872d1ea085402bf536c707a895610f72dafda4bede848405b7908b4523985/) |
| ❌ | 2024/05/24 | 0-19 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2024/05/18 | 4-2 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2024/05/12 | 3-15 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ❌ | 2024/04/27 | 3-18 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ❌ | 2024/04/20 | 2-9 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ❌ | 2024/04/11 | 2-22 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ❌ | 2024/03/30 | 0-3 | [Los Unidos](https://ws.tsl.rocks/corp/963d98b9a64c86c9edc86daabe201f5d7e1f42bbeb0f45671b44a87e0b288e91/) |
| ❌ | 2024/03/15 | 0-34 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2024/03/07 | 3-32 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ↔️ | 2024/02/11 | 0-0 | [E\.T\.A 二营](https://ws.tsl.rocks/corp/2f6b0bc6bf0f932bfd9c75dd559a659a45b515277f167f2cd9938a941769a093/) |
| ❌ | 2024/02/11 | 0-6 | [Hun Avengers](https://ws.tsl.rocks/corp/e728eecfe4a9589a7c127d52ed2a958ca92aad43a37efd0d91ac0efb1a474854/) |
| ↔️ | 2024/01/29 | 1-1 | [Peak Extraction](https://ws.tsl.rocks/corp/b656a84b60d6de62745eb9059a703b44cca76b6247beeceef5f856f89e4c2d0d/) |
| ❌ | 2024/01/27 | 0-27 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ✅ | 2023/11/05 | 10-6 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |

---
Corporation ID: bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1764977600"></span>
</div>