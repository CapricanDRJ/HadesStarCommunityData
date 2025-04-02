---
title: ​viCIOus
description: W:30 L:4 D:1 Bonus ✅ 36%
image: ./favicon.png
Summary: ✅ 17 - 10 **Lupus Regnum**
date: 2025-03-28T16:12:49.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
New!!! Join to expand!
```
<br>

### Whitestar Bonus ✅ 36%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1409 🔺  (56)|
| ELO Competitive | 1457 🔺  (106)|
| Total Matches | 35 |
| Wins | 30 |
| Losses | 4 |
| Draws | 1 |
| Streak Record | 19 |
| Flagship | 2 |

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
        let timestamps = [1742746369,1742138101,1741537119,1741055126,1740543068,1740064659,1739581433,1739102442,1738558315,1738102949,1737588498,1737095662,1736641260,1736180543,1735742349,1735231544,1734378231,1733794111,1733348489,1732888142,1732338299,1731856535,1731278090,1730450484,1729985622,1729587172,1729543598,1729108447,1728772928,1728661206,1728222142,1727772858,1727255994,1726803718,1726362718];

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
| [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) | 2 | 0 | 0 | 2 |
| [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) | 2 | 0 | 0 | 2 |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/03/28 | 17-10 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/03/21 | 3-11 | [Interestelar](https://ws.tsl.rocks/corp/cc9ed2698988a35d6dbb9e9762d6575b28204ab15fd7208b64e8108878a4b8f9/) |
| ❌ | 2025/03/14 | 4-12 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2025/03/09 | 21-0 | [藏锋府](https://ws.tsl.rocks/corp/8a6ebb9fc9c600eaff20a0c3412ffe6587128f871fcf51982046843ff4e7acc4/) |
| ✅ | 2025/03/03 | 9-0 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2025/02/25 | 10-1 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ✅ | 2025/02/20 | 24-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/02/14 | 22-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2025/02/08 | 23-0 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ✅ | 2025/02/02 | 20-3 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ✅ | 2025/01/27 | 23-0 | [复生会](https://ws.tsl.rocks/corp/34d924857b79c9e7dbbefad09df43c3752d80cee3153852a2af3ac365ad5e0f9/) |
| ✅ | 2025/01/22 | 13-3 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ✅ | 2025/01/17 | 19-0 | [Prosperity](https://ws.tsl.rocks/corp/a78b903885754b355b532fb47d983aa5725cb7c73c25e75dbfe4c440cdfffec0/) |
| ✅ | 2025/01/11 | 24-0 | [Стальная крыса](https://ws.tsl.rocks/corp/cc253c6c109e50b129297a1f56fa3c05a6e0f0b3f7673fcb619358625ab8bdf6/) |
| ✅ | 2025/01/06 | 18-1 | [pérola negra ](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ✅ | 2024/12/31 | 21-1 | [银河护卫队](https://ws.tsl.rocks/corp/e522df7ad34eabee08393efb864d53bdc897d0ad187170616d6ef924df5c7267/) |
| ✅ | 2024/12/21 | 21-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/12/15 | 11-3 | [Planet Express](https://ws.tsl.rocks/corp/6076486f3dce07118a180607ff9893eb5686dc57f65f7ed66d5e473007bd838c/) |
| ✅ | 2024/12/09 | 15-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/12/04 | 11-2 | [分子集团](https://ws.tsl.rocks/corp/5b9f14a83989065d411d1e21d908ce3fc4939d48e815ffc39b1b18b6752c827b/) |
| ✅ | 2024/11/28 | 11-0 | [₩\.BRASIL\.₩](https://ws.tsl.rocks/corp/ff7f01b2f1db7b9c75e49da4c7367325905c020eba282a97f69f33d8c19419aa/) |
| ✅ | 2024/11/22 | 14-0 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ↔️ | 2024/11/15 | 4-4 | [Winter Star llc](https://ws.tsl.rocks/corp/89b20821cb6e619dced74a6e153a1d3ceafa70b1035fb7d61a6920d375e49f50/) |
| ✅ | 2024/11/06 | 9-0 | [小号营地](https://ws.tsl.rocks/corp/e716da4b59355078ca6f014735de218d3fa5e832805efb942d1299b899f2d8b9/) |
| ✅ | 2024/10/31 | 7-0 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2024/10/27 | 0-5 | [Splendid](https://ws.tsl.rocks/corp/8d0fd2cb62785c9876643edf419b241f0f86e339052e5d3e4fab40b0416828dd/) |
| ✅ | 2024/10/26 | 9-0 | [WHITE NOVA](https://ws.tsl.rocks/corp/0a44ab86ca49a02fb932607f1095f0b5411c556bb9bb95aa1f20908be0b45d51/) |
| ✅ | 2024/10/21 | 7-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2024/10/17 | 1-17 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ✅ | 2024/10/16 | 10-0 | [Диванные Стражи](https://ws.tsl.rocks/corp/49a7a7928d290fab1d2ee186755298adfde800efed6f3ef9703c06bbb4b8482d/) |
| ✅ | 2024/10/11 | 4-0 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ✅ | 2024/10/06 | 8-2 | [Devourers](https://ws.tsl.rocks/corp/8b11fb529b6388e78677d5025d5973063a49ee25a297a52cda3859faa20ee5ca/) |
| ✅ | 2024/09/30 | 9-2 | [AntiCerberus](https://ws.tsl.rocks/corp/05549095de4dbbeb78175abda32e043bd7c0afada2bba974c17c41674469da29/) |
| ✅ | 2024/09/25 | 8-0 | [蓝星集团](https://ws.tsl.rocks/corp/9d718b80beaf9682ccde175169372b72f70b75bb593770762dfc9e990cbd098a/) |
| ✅ | 2024/09/20 | 7-0 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |

---
Corporation ID: 910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1743178369"></span>
</div>