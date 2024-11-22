---
layout: page
title: ​ALPHA
description: W:15 L:6 D:0 Bonus ❌
date: 1731995544
---
<div style="float: right; margin: 0 0 1em 1em; clear: right;">
<img src="./qr.png" alt="QR Code" style="width: 100px; height: auto;">
</div>

### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1313 🔻  (126)|
| ELO Competitive | 1343 🔻  (190)|
| Total Matches | 21 |
| Wins | 15 |
| Losses | 6 |
| Draws | 0 |
| Streak Record | 8 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1731563544,1731119691,1730668660,1730226928,1729731699,1729295670,1728837963,1728389218,1727924013,1727489487,1727056182,1726581499,1726146649,1726135830,1725684789,1725231962,1724551308,1724093939,1723595973,1723125969,1716139331];

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
    

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/11/19 | 0-11 | [Equinox](https://ws.tsl.rocks/corp/d6f4702c0a85549d019474868a68ecc1a6c546d73fa31f9336ee639a906ff0fe/) |
| ✅ | 2024/11/14 | 11-1 | [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) |
| ✅ | 2024/11/08 | 8-1 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ✅ | 2024/11/03 | 12-1 | [华夏联盟](https://ws.tsl.rocks/corp/2c648f8c6a0963f1a86b1a1ca787f67c02ee58838a809427b68d3546b89078ac/) |
| ✅ | 2024/10/29 | 6-5 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ✅ | 2024/10/23 | 13-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2024/10/18 | 16-2 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ✅ | 2024/10/13 | 11-2 | [小号营地](https://ws.tsl.rocks/corp/e716da4b59355078ca6f014735de218d3fa5e832805efb942d1299b899f2d8b9/) |
| ✅ | 2024/10/08 | 14-0 | [欢迎国人](https://ws.tsl.rocks/corp/f32abd112fe2b826948a3538a51097b9114815930ec77ad11ada1b24ce34578d/) |
| ❌ | 2024/10/03 | 3-9 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2024/09/28 | 12-2 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2024/09/22 | 13-1 | [情谊永存](https://ws.tsl.rocks/corp/a3fee40ae9e62b95f50c653b7acf4990fee7b21461807dc90da90d429063a98c/) |
| ❌ | 2024/09/17 | 0-6 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ✅ | 2024/09/17 | 7-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2024/09/12 | 7-0 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2024/09/06 | 8-0 | [₩\.BRASIL\.₩](https://ws.tsl.rocks/corp/ff7f01b2f1db7b9c75e49da4c7367325905c020eba282a97f69f33d8c19419aa/) |
| ✅ | 2024/08/30 | 7-4 | [梨山养老院](https://ws.tsl.rocks/corp/4b0da5a03088d82acb8566ed943c7737a389ee702df4473438eec3f77f2c20c1/) |
| ✅ | 2024/08/24 | 4-0 | [神圣罗马帝国](https://ws.tsl.rocks/corp/2a71af44aaef82175cd8dfd86c9e3f218a438a7c7e748bae20d8a0d964a984ab/) |
| ❌ | 2024/08/19 | 4-5 | [无聊不过](https://ws.tsl.rocks/corp/6099bd39cf8510ea3ef2be0fe05df95266b12acfdcbe1bd58a4c33e9c3f25934/) |
| ❌ | 2024/08/13 | 3-17 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2024/05/24 | 2-15 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |

Corporation ID: e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>