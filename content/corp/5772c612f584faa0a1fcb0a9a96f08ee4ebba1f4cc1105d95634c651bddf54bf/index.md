---
title: ​Empire of Hades
description: W:42 L:10 D:2 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 6 - 19 **\-=Содружество=\-**
date: 2025-08-11T05:09:18.000Z
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
| ELO Regular | 1431 🔻  (57)|
| ELO Competitive | 1490 🔻  (132)|
| Total Matches | 54 |
| Wins | 42 |
| Losses | 10 |
| Draws | 2 |
| Streak Record | 12 |
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
        let timestamps = [1754456958,1753856596,1753258026,1752674741,1752648898,1752057302,1752048889,1751463847,1751451826,1750830139,1750828938,1750234837,1750233034,1749641632,1749621502,1749014816,1748416237,1748406924,1747805922,1747802875,1747225970,1747208917,1746600640,1746592111,1746014071,1746000549,1745410458,1745391528,1744787214,1744184411,1744175698,1743661487,1743656411,1742985875,1742976862,1742365285,1741784113,1741175011,1740489269,1739884639,1739289357,1738770986,1738126683,1737562652,1737101671,1736588656,1736002901,1735649508,1735411530,1734875504,1734875203,1734364407,1733847891,1733304312];

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
| [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) | 1 | 1 | 0 | 2 |
| [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) | 2 | 0 | 0 | 2 |
| [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) | 2 | 0 | 0 | 2 |
| [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) | 1 | 0 | 1 | 2 |
| [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) | 2 | 0 | 0 | 2 |
| [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) | 3 | 0 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/08/11 | 6-19 | [\-=Содружество=\-](https://ws.tsl.rocks/corp/a9493d38afc250d1f8288ca320eb0e5fb1263b1854737d813cdbf575c0e0e2d3/) |
| ✅ | 2025/08/04 | 12-1 | [万顷稻花](https://ws.tsl.rocks/corp/03386ec0080aee6d7af1877f35b017855540984073077164c8d3ac4203042630/) |
| ✅ | 2025/07/28 | 17-7 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ✅ | 2025/07/21 | 18-3 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/07/21 | 15-8 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/07/14 | 14-3 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2025/07/14 | 11-8 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ✅ | 2025/07/07 | 4-3 | [KEPLER\-442  b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |
| ✅ | 2025/07/07 | 17-15 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ❌ | 2025/06/30 | 3-16 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/06/30 | 3-7 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ✅ | 2025/06/23 | 20-3 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2025/06/23 | 7-4 | [Blacksteel Tech](https://ws.tsl.rocks/corp/dfd6e8053747b0abe2de98bfe1d4b8521829fea58e48472835363ff3a0a5fc09/) |
| ❌ | 2025/06/16 | 3-7 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ✅ | 2025/06/16 | 22-3 | [Blazing Stars](https://ws.tsl.rocks/corp/f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff/) |
| ❌ | 2025/06/09 | 7-14 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ↔️ | 2025/06/02 | 10-10 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ✅ | 2025/06/02 | 8-3 | [Hades’ galaxy](https://ws.tsl.rocks/corp/a5161db8db3228457dcd60bba1f4edee3636f916b6d20b3fdedb04a4fb6f117e/) |
| ✅ | 2025/05/26 | 12-1 | [星系联盟](https://ws.tsl.rocks/corp/701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36/) |
| ✅ | 2025/05/26 | 8-5 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ✅ | 2025/05/19 | 16-3 | [UGSS](https://ws.tsl.rocks/corp/06eb95447520936bc87ea4f7c64539563c77a74948291fc7a65b190f2752b4c7/) |
| ✅ | 2025/05/19 | 20-3 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ✅ | 2025/05/12 | 21-10 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/05/12 | 19-0 | [Hands Of God](https://ws.tsl.rocks/corp/737612566d1b11dd779660de211c576dcb421c49df9eb55390e082f496924c9b/) |
| ✅ | 2025/05/05 | 16-1 | [超新星联盟](https://ws.tsl.rocks/corp/c3667794c88fd0a09f565dc3b4fed5325f131a616d01d0f6890755b44997d0a1/) |
| ✅ | 2025/05/05 | 26-16 | [GN星际联合](https://ws.tsl.rocks/corp/5c5e3fb05b422a65fb5ccf8f812dfe45d596f644d8a79d01a5889c9d476f20a7/) |
| ✅ | 2025/04/28 | 15-4 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/04/28 | 20-0 | [彩虹神圣太空队](https://ws.tsl.rocks/corp/65a85756db048115b30d5db1f341e02c1efa0c8baf3a39ae6b57db8b0c52a0d9/) |
| ❌ | 2025/04/21 | 10-23 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2025/04/14 | 6-3 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ✅ | 2025/04/14 | 3-2 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2025/04/08 | 4-1 | [Alpha to Omega](https://ws.tsl.rocks/corp/2b3694014264240c8c0d1bb6a20e9d120dff2b6680c98b4e06e34bfd489f9da6/) |
| ✅ | 2025/04/08 | 7-3 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ❌ | 2025/03/31 | 3-9 | [中国人民联盟](https://ws.tsl.rocks/corp/4fadcca4df7e52a4824f29d77a657e86c6dac7d39f325d3e5ebe5d6128839e47/) |
| ✅ | 2025/03/31 | 13-2 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ✅ | 2025/03/24 | 29-0 | [Z\. O\. V\. ](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2025/03/17 | 18-0 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2025/03/10 | 14-0 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/03/02 | 15-0 | [GermanSpaceDuo](https://ws.tsl.rocks/corp/4845b9c456dec1856ed2c9bdcf6e1cf6d0d18460e78de1d40daf20df8ff99933/) |
| ✅ | 2025/02/23 | 18-0 | [Stargroup](https://ws.tsl.rocks/corp/cf430206a6a585f302ac5d76adf50b780f002f52ebbb82b323f933f5a0a25c4f/) |
| ✅ | 2025/02/16 | 14-0 | [U\.P\.E](https://ws.tsl.rocks/corp/fc06e2f3477d57f180521828616b988b58c6e5f6359dcfdc34b2e1fea93d309d/) |
| ✅ | 2025/02/10 | 8-4 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/02/03 | 11-0 | [复生会](https://ws.tsl.rocks/corp/34d924857b79c9e7dbbefad09df43c3752d80cee3153852a2af3ac365ad5e0f9/) |
| ✅ | 2025/01/27 | 9-4 | [天琴座联邦](https://ws.tsl.rocks/corp/3928bc72ac4a6520e6d501a9b13f0595b3401845fb184b605fa521b90cd01fe9/) |
| ✅ | 2025/01/22 | 15-3 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ✅ | 2025/01/16 | 13-4 | [环星集团](https://ws.tsl.rocks/corp/8a1148b4fbc41d0b26a8a865ec524c7ab8965e7df2c1002344b8cbd075a12fdd/) |
| ↔️ | 2025/01/09 | 6-6 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ❌ | 2025/01/05 | 0-10 | [孤星长城](https://ws.tsl.rocks/corp/af057d9c6c59118dd1a58b74a8ec83db78962a17ae022269292a5fc05693ab83/) |
| ✅ | 2025/01/02 | 9-2 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ❌ | 2024/12/27 | 0-8 | [Air/Free\_ziyou](https://ws.tsl.rocks/corp/97e261fb0c1a22ab5190f97566b57c72921c78dfc9021709ee50d11ac5e1955b/) |
| ✅ | 2024/12/27 | 6-1 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2024/12/21 | 10-3 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ❌ | 2024/12/15 | 6-10 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2024/12/09 | 3-0 | [Корпорация](https://ws.tsl.rocks/corp/1b46f51633e76a78a92c3a74b8ae0afc51df5caea195357b98bb56fa9ee03cfa/) |

---
Corporation ID: 5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1754888958"></span>
</div>