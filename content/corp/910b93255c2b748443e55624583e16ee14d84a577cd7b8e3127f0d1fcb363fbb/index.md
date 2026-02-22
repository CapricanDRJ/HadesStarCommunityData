---
title: ​viCIOus
description: W:57 L:22 D:1 Bonus ✅ 42%
image: ./favicon.png
Summary: ✅ 4 - 3 **TheBasics**
date: 2026-02-16T20:28:43.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
New!!! Join to expand!
```
<br>

### Whitestar Bonus ✅ 42%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1313 🔺  (15)|
| ELO Competitive | 1483 🔺  (23)|
| Total Matches | 80 |
| Wins | 57 |
| Losses | 22 |
| Draws | 1 |
| Streak | 2 |
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
        let timestamps = [1770841723,1770226117,1769625182,1769034765,1768435356,1767810401,1767197184,1766611629,1766002384,1765390585,1764786347,1764203995,1763585984,1762971273,1762385680,1761773067,1761051311,1760035066,1759260763,1758666469,1758064596,1757542104,1756851360,1756258695,1755548365,1755025196,1754507144,1753906179,1753370111,1752861050,1752257132,1751307606,1750700639,1750126605,1749521839,1748921971,1747846489,1747156561,1746605447,1746073871,1745523751,1745023730,1744480408,1743900710,1743348650,1742746369,1742138101,1741537119,1741055126,1740543068,1740064659,1739581433,1739102442,1738558315,1738102949,1737588498,1737095662,1736641260,1736180543,1735742349,1735231544,1734378231,1733794111,1733348489,1732888142,1732338299,1731856535,1731278090,1730450484,1729985622,1729587172,1729543598,1729108447,1728772928,1728661206,1728222142,1727772858,1727255994,1726803718,1726362718];

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
| [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) | 0 | 3 | 0 | 3 |
| [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) | 1 | 1 | 0 | 2 |
| [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) | 2 | 0 | 0 | 2 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 1 | 1 | 0 | 2 |
| [繁星一夢](https://ws.tsl.rocks/corp/aa5c727d4c474affdae1b8a4ceaa1a4d1749c24368741cfaf77e72e2bef86764/) | 0 | 2 | 0 | 2 |
| [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) | 1 | 1 | 0 | 2 |
| [骊珠洞天](https://ws.tsl.rocks/corp/b4d7d82bf1a40a19c41bf51fdc6f938a1b111dfa8869d3008ae91d248485253c/) | 2 | 0 | 0 | 2 |
| [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) | 0 | 2 | 0 | 2 |
| [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) | 2 | 0 | 0 | 2 |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 3 | 0 | 0 | 3 |
| [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) | 2 | 0 | 0 | 2 |
| [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/16 | 4-3 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2026/02/09 | 10-0 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ❌ | 2026/02/02 | 3-6 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2026/01/26 | 3-19 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2026/01/20 | 0-34 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2026/01/12 | 23-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ❌ | 2026/01/05 | 6-8 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/12/29 | 2-16 | [繁星一夢](https://ws.tsl.rocks/corp/aa5c727d4c474affdae1b8a4ceaa1a4d1749c24368741cfaf77e72e2bef86764/) |
| ✅ | 2025/12/22 | 39-0 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ❌ | 2025/12/15 | 4-5 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/12/08 | 20-1 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ✅ | 2025/12/02 | 4-3 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2025/11/24 | 15-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/11/17 | 34-1 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2025/11/10 | 6-5 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/11/03 | 25-0 | [骊珠洞天](https://ws.tsl.rocks/corp/b4d7d82bf1a40a19c41bf51fdc6f938a1b111dfa8869d3008ae91d248485253c/) |
| ❌ | 2025/10/26 | 3-15 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2025/10/14 | 1-9 | [繁星一夢](https://ws.tsl.rocks/corp/aa5c727d4c474affdae1b8a4ceaa1a4d1749c24368741cfaf77e72e2bef86764/) |
| ❌ | 2025/10/05 | 7-9 | [Peaky Blinders](https://ws.tsl.rocks/corp/307baf1ef2e91ed992cd24bce234e347905a566f98db4845cb026b89e7ef0816/) |
| ✅ | 2025/09/28 | 17-0 | [日月星辰](https://ws.tsl.rocks/corp/d4f02aae2e03f6d0af99e1291b59b8bc7ea9c5baae99fc2eff5afe1e4baedc30/) |
| ✅ | 2025/09/21 | 5-2 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2025/09/15 | 21-0 | [骊珠洞天](https://ws.tsl.rocks/corp/b4d7d82bf1a40a19c41bf51fdc6f938a1b111dfa8869d3008ae91d248485253c/) |
| ✅ | 2025/09/07 | 19-10 | [Kobol](https://ws.tsl.rocks/corp/cddf348d817603361afcf0dff01448937863b586e921963a8085f059a14b945a/) |
| ✅ | 2025/09/01 | 23-1 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/08/23 | 0-11 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ✅ | 2025/08/17 | 16-0 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ✅ | 2025/08/11 | 16-2 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ✅ | 2025/08/04 | 10-0 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2025/07/29 | 0-36 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ❌ | 2025/07/23 | 0-12 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2025/07/16 | 3-6 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ❌ | 2025/07/05 | 3-29 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2025/06/28 | 22-0 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ✅ | 2025/06/22 | 32-0 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ✅ | 2025/06/15 | 23-0 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2025/06/08 | 12-3 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2025/05/26 | 1-22 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2025/05/18 | 3-16 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ❌ | 2025/05/12 | 2-14 | [Blazing Stars](https://ws.tsl.rocks/corp/f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff/) |
| ❌ | 2025/05/06 | 4-8 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ✅ | 2025/04/29 | 25-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/04/24 | 8-0 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ✅ | 2025/04/17 | 16-3 | [Hungary First](https://ws.tsl.rocks/corp/d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b/) |
| ✅ | 2025/04/11 | 19-0 | [DarkSide](https://ws.tsl.rocks/corp/557178dd3a3d43ff1751021bfc2d8c1d4261336a45f90d392f3dd275d8a0a941/) |
| ✅ | 2025/04/04 | 30-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
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
| ✅ | 2025/01/06 | 18-1 | [pérola negra](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
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
  Last updated: <span class="last-updated-date" data-unix-time="1771273723"></span>
</div>