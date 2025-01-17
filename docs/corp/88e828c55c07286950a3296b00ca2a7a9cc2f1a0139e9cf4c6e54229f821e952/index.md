---
layout: page
title: ​使命白星
description: W:14 L:9 D:2 Bonus ✅ 32%
image: ./favicon.png
date: 1737029973
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
欢迎大家的加入，入团考虑升干事。QQ： 985034854语言文明，不骂人，违者踢！严重者直接上黑名单。白星要求:经常上线，听从指挥。黑名
单：［土土 ］不活跃踢，有事请假。欢迎捐旗舰。<size=700><color=red>集团睡觉了
```
### Whitestar Bonus ✅ 32%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1243 🔺  (280)|
| ELO Competitive | 1309 🔺  (261)|
| Total Matches | 25 |
| Wins | 14 |
| Losses | 9 |
| Draws | 2 |
| Streak Record | 4 |
| Flagship | 3 |

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
        let timestamps = [1736597973,1736145381,1727216220,1726669030,1726147251,1725697540,1725207619,1724758657,1724279050,1723929849,1723819847,1723469754,1723384109,1723024999,1722951377,1722509622,1722041705,1721543454,1721096900,1720741343,1720660792,1720226530,1719706027,1718839661,1718404217];

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
| [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/01/16 | 8-3 | [莫比乌斯\-星环](https://ws.tsl.rocks/corp/f880db6adc517a83cc7c539551b160f5a90ac67a8ac62f8ae1edcbb40fff043c/) |
| ❌ | 2025/01/11 | 0-18 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2024/09/29 | 0-14 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2024/09/23 | 13-0 | [地球星际集团](https://ws.tsl.rocks/corp/05094116a999d8e077c5e53dc2241a870c7dc2e68e016455c606ada0dcb40b62/) |
| ↔️ | 2024/09/17 | 5-5 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ✅ | 2024/09/12 | 9-4 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ✅ | 2024/09/06 | 9-2 | [Spaceforce](https://ws.tsl.rocks/corp/24c4541d371aa6efad58f5141355ec6ad643e45d05957800075cdefc583cb805/) |
| ✅ | 2024/09/01 | 7-0 | [SiriusStrawMoo](https://ws.tsl.rocks/corp/c83a5744ea256d2c1fa59660bc0e18e8d01a2a467bc13fec27a8b30f689e220b/) |
| ✅ | 2024/08/26 | 14-1 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2024/08/22 | 0-40 | [Lofty Mountain](https://ws.tsl.rocks/corp/1cfc6606e17d524ba0388b273ad6a9e86b23838eb529a2659f03a40702affbf7/) |
| ✅ | 2024/08/21 | 10-0 | [海澜之家](https://ws.tsl.rocks/corp/36caebb92bc1cc49fc7be123dd38469d478c6ac42831a25a4a20ba590c73631d/) |
| ❌ | 2024/08/17 | 0-9 | [青鸾殿](https://ws.tsl.rocks/corp/d92c939be23b35542ca2d0ae7cdc4b1288d5d5e78be2dfb74cb0360f5524d01c/) |
| ✅ | 2024/08/16 | 10-2 | [欢迎国人](https://ws.tsl.rocks/corp/f32abd112fe2b826948a3538a51097b9114815930ec77ad11ada1b24ce34578d/) |
| ❌ | 2024/08/12 | 0-5 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2024/08/11 | 16-1 | [Final Space](https://ws.tsl.rocks/corp/762914fc1846e6b284609274f8f9515959110b5db098a53be8048ffd45d98fdd/) |
| ↔️ | 2024/08/06 | 2-2 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ✅ | 2024/08/01 | 13-0 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ❌ | 2024/07/26 | 1-12 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |
| ✅ | 2024/07/21 | 10-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2024/07/16 | 0-23 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ✅ | 2024/07/16 | 3-1 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2024/07/11 | 6-2 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ❌ | 2024/07/05 | 4-7 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2024/06/24 | 4-0 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ❌ | 2024/06/19 | 7-8 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |

---
Corporation ID: 88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>