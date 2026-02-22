---
title: ​萌新集团
description: W:25 L:12 D:3 Bonus ❌ 
image: ./favicon.png
Summary: ↔️ 0 - 0 **uDS**
date: 2026-02-21T05:16:50.000Z
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
| ELO Regular | 1268 🔻  (-5)|
| ELO Competitive | 1373 🔻  (-9)|
| Total Matches | 40 |
| Wins | 25 |
| Losses | 12 |
| Draws | 3 |
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
        let timestamps = [1771219010,1770212026,1769936477,1769665737,1769415157,1769203626,1767754222,1766642870,1765587081,1764384298,1763198997,1762513667,1761921631,1761052257,1760452726,1759883337,1759306127,1759247455,1758636721,1758177399,1758117767,1757598881,1757597979,1757089562,1757077295,1756181477,1756180276,1755560224,1755554182,1755049832,1754975315,1754485804,1754298302,1753988207,1753767354,1753438316,1753321132,1752993315,1752545833,1752437056];

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
| [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) | 2 | 0 | 0 | 2 |
| [Lemmejustwin\!](https://ws.tsl.rocks/corp/3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899/) | 0 | 1 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ↔️ | 2026/02/21 | 0-0 | [uDS](https://ws.tsl.rocks/corp/c120f3bc94740ef16cf2e075afe14212a63d35c19798ef6a191623fb76d4dd0f/) |
| ✅ | 2026/02/09 | 10-0 | [Time Lords](https://ws.tsl.rocks/corp/06eba4a8b3bd20f31d7b2ae6d3a738c8aef0793e59b6642804ddad5d8a419d47/) |
| ❌ | 2026/02/06 | 0-9 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ❌ | 2026/02/03 | 0-22 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2026/01/31 | 0-3 | [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) |
| ✅ | 2026/01/28 | 14-1 | [Grand Mechanism](https://ws.tsl.rocks/corp/cdae35a4dff3b9b84fa6e79966de8f58259e9ea95a366abeaa8a103815dfa7b3/) |
| ❌ | 2026/01/12 | 2-19 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/12/30 | 5-4 | [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) |
| ❌ | 2025/12/18 | 0-4 | [The Howlers](https://ws.tsl.rocks/corp/f340524c85b89f1c62bba68156ba169e8f45fedd4b1be29c6ccb461a32f23189/) |
| ✅ | 2025/12/04 | 7-0 | [ALIANZA ACADEMI](https://ws.tsl.rocks/corp/4a29eb9896c7a4ff7d365a8876d68e86c266782d1e5cd4d09356f5c50f62c007/) |
| ✅ | 2025/11/20 | 9-4 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ↔️ | 2025/11/12 | 9-9 | [宇宙警察](https://ws.tsl.rocks/corp/e351af3589315207a50dad0eefdf5309943c39b25656f0870904e6be9302a082/) |
| ✅ | 2025/11/05 | 12-0 | [Core Systems](https://ws.tsl.rocks/corp/66dfd39587403b544abf2908638162e60a09ff0dfdfebee6265d41ba2a6ab00a/) |
| ✅ | 2025/10/26 | 3-0 | [Jedi Federation](https://ws.tsl.rocks/corp/48b7757bfe264d0c79a98bfd317b35917d8bfcdcc5d4f297fc7a103f4dcff83d/) |
| ❌ | 2025/10/19 | 3-19 | [Spanish Apes](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ✅ | 2025/10/13 | 10-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2025/10/06 | 15-0 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ❌ | 2025/10/05 | 0-3 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ✅ | 2025/09/28 | 8-0 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ❌ | 2025/09/23 | 0-8 | [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) |
| ✅ | 2025/09/22 | 10-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2025/09/16 | 15-2 | [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) |
| ✅ | 2025/09/16 | 3-1 | [Солярис Рус](https://ws.tsl.rocks/corp/53c9a1a8499380eaf4082161ea9ef9bd7dda1c711f76153ea033738d1a663997/) |
| ✅ | 2025/09/10 | 3-0 | [Simply Uranus](https://ws.tsl.rocks/corp/951c4b2ef77de2b24b3e3b3cd962679643a8fae1131e289d4ed60482d10aff45/) |
| ❌ | 2025/09/10 | 4-10 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2025/08/31 | 0-5 | [Lemmejustwin\!](https://ws.tsl.rocks/corp/3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899/) |
| ✅ | 2025/08/31 | 15-0 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ✅ | 2025/08/23 | 12-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/08/23 | 2-0 | [避难所](https://ws.tsl.rocks/corp/e2cec33caaaef7f020ed5fb31cb29a2804d8b5ab3a781ab69b08fadac88f7102/) |
| ✅ | 2025/08/18 | 8-0 | [ws destroyer](https://ws.tsl.rocks/corp/6e49e458a0b4d8e84bbe31cfc515a393f22b447c43b01047d795455900618574/) |
| ✅ | 2025/08/17 | 8-2 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ✅ | 2025/08/11 | 8-1 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ✅ | 2025/08/09 | 4-0 | [jatnniel 团队](https://ws.tsl.rocks/corp/fb2a90ff4c918e808029246b88573a0b283bd3b67f1831aaab89f03720e9ebb2/) |
| ↔️ | 2025/08/05 | 5-5 | [Lemmejustwin\!](https://ws.tsl.rocks/corp/3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899/) |
| ✅ | 2025/08/03 | 4-0 | [雪月永恒](https://ws.tsl.rocks/corp/3b30781263716daadc217687009247bd0acb28c7eb4a8ebfe37daa11142622c2/) |
| ✅ | 2025/07/30 | 10-0 | [AlyTec Sys\.](https://ws.tsl.rocks/corp/4f98eeb43077d5c00a32f9810352931d8778fb5b24d8b49c318953d489f07df0/) |
| ❌ | 2025/07/29 | 2-7 | [\+SATELLITE•卫星联\+](https://ws.tsl.rocks/corp/0435e7afc53ca549df7205484bd692be15c4e4773b36a0cdebae12a40149efc9/) |
| ✅ | 2025/07/25 | 6-0 | [dark news](https://ws.tsl.rocks/corp/392d4555432e2fb7c77ddf78c077aaab6d8cb3da0e36551e8eac0f2d98081d2c/) |
| ✅ | 2025/07/20 | 7-0 | [ДИᏰEPℂДℍTᏰℓ](https://ws.tsl.rocks/corp/a1dad8a2a2c5ab935169d168bc19f8a1db7f12b099358e079cb7221a340345ed/) |
| ❌ | 2025/07/18 | 0-20 | [星域](https://ws.tsl.rocks/corp/9dbe1728c2be44c8cfe8025f7ad859d31ee0c7012aca463d85de8c21953e814f/) |

---
Corporation ID: ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771651010"></span>
</div>