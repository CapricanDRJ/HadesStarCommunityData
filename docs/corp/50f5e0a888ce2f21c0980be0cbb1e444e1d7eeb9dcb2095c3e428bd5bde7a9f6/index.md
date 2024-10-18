---
layout: page
title: ​太阳系集团
description: W:9 L:1 D:1 Bonus ✅
date: 1729255828
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1320 🔺  (111)|
| ELO Competitive | 1314 🔺  (219)|
| Total Matches | 11 |
| Wins | 9 |
| Losses | 1 |
| Draws | 1 |
| Streak Record | 5 |


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
        let timestamps = [1728823828,1728369988,1727891861,1727883446,1727441099,1727239771,1726834112,1726375938,1725930607,1725451004,1724983135];

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
| ✅ | 2024/10/18 | 18-3 | [蓝星集团](https://ws.tsl.rocks/corp/9d718b80beaf9682ccde175169372b72f70b75bb593770762dfc9e990cbd098a/) |
| ❌ | 2024/10/13 | 0-40 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ✅ | 2024/10/07 | 5-0 | [舰队联邦\[FF\]](https://ws.tsl.rocks/corp/a416c5b53512093490461bf0dab583fbb401f5850470774f6de02dafe6ca3655/) |
| ✅ | 2024/10/07 | 22-0 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ✅ | 2024/10/02 | 29-0 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2024/09/30 | 6-0 | [  边界  ](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ✅ | 2024/09/25 | 13-2 | [Hungary First](https://ws.tsl.rocks/corp/d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b/) |
| ↔️ | 2024/09/20 | 3-3 | [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) |
| ✅ | 2024/09/15 | 7-3 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2024/09/09 | 6-1 | [QONQR ](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ✅ | 2024/09/04 | 7-0 | [WHITE NOVA](https://ws.tsl.rocks/corp/0a44ab86ca49a02fb932607f1095f0b5411c556bb9bb95aa1f20908be0b45d51/) |

Corporation ID: 50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>