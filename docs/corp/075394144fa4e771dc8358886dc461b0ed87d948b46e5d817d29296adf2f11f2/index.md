---
layout: page
title: ​СНГ — РОССИЯ
description: W:4 L:8 D:3 Bonus ❌
date: 1720924493
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1139 🔻  (1058)|
| ELO Competitive | 1182 🔻  (878)|
| Total Matches | 15 |
| Wins | 4 |
| Losses | 8 |
| Draws | 3 |
| Streak Record | 2 |


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
        let timestamps = [1720492493,1720192874,1719890534,1714279399,1712776499,1711325494,1711313476,1709156201,1707311731,1707311731,1706691317,1706662331,1706095816,1705588264,1704842321];

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
| ❌ | 2024/07/14 | 2-9 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2024/07/10 | 0-3 | [星舰国际](https://ws.tsl.rocks/corp/2142b75cc6d1c522c423a860fbda7616d7745f8fee25121ec3a8f26068b0f3b5/) |
| ↔️ | 2024/07/07 | 3-3 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ❌ | 2024/05/03 | 0-28 | [Battle Academy](https://ws.tsl.rocks/corp/a4e315e22ea2a592f43efe95a9e53ab2cdbd9f0dc733c9fdde20079d8fabaddd/) |
| ❌ | 2024/04/15 | 0-22 | [Galaktika corp](https://ws.tsl.rocks/corp/c37872d1ea085402bf536c707a895610f72dafda4bede848405b7908b4523985/) |
| ❌ | 2024/03/30 | 0-8 | [Jalisco México](https://ws.tsl.rocks/corp/495236ab2171ccbcdad0da5529f080405b1ddd081eda98c7255a8cffe5b114e4/) |
| ❌ | 2024/03/29 | 0-12 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ✅ | 2024/03/04 | 1-0 | [The Galxey █](https://ws.tsl.rocks/corp/d52cda2701dd013db91403bab0ff5972e0d9f3a13f842daf8d633025835a6b19/) |
| ✅ | 2024/02/12 | 2-0 | [探索舰队](https://ws.tsl.rocks/corp/c18acd17d6d643817b2bf8f28c2bf82cae881f0dd6d41528c9cfbe3292a7de29/) |
| ❌ | 2024/02/12 | 0-10 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ↔️ | 2024/02/05 | 0-0 | [萌新收留所](https://ws.tsl.rocks/corp/c71b7f7455104472969a9e2632e182bf01b3b7aa8b1fa75dcfc75cd2733a54a9/) |
| ↔️ | 2024/02/05 | 0-0 | [The Red Dwarves](https://ws.tsl.rocks/corp/4cecdcd329a545deb9c2a292081f9220114f37e845dbea6dd1ec326390e296dd/) |
| ✅ | 2024/01/29 | 1-0 | [Imperium of man](https://ws.tsl.rocks/corp/6a10b69b71318fce90ab3182f39c2c1270187710c7a959a5e0cd1e75522407a2/) |
| ✅ | 2024/01/23 | 4-0 | [Чистое Небо](https://ws.tsl.rocks/corp/82c64f0d4483d056037e3a43e597d4b1730ac0cd84bae8307fadef28fd6c202f/) |
| ❌ | 2024/01/14 | 0-3 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |

Corporation ID: 075394144fa4e771dc8358886dc461b0ed87d948b46e5d817d29296adf2f11f2

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>