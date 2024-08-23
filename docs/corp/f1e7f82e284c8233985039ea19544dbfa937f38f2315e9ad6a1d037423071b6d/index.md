---
layout: page
title: ​RUFORS
description: W:6 L:5 D:0 Bonus ❌
date: 1723798677
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1228 🔺  (289)|
| ELO Competitive | 1247 🔺  (328)|
| Total Matches | 11 |
| Wins | 6 |
| Losses | 5 |
| Draws | 0 |
| Streak Record | 2 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched.

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1723366677,1722176660,1721042795,1719493267,1712995534,1711104325,1706962435,1706100860,1702198382,1701465358,1700598879];

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
| ✅ | 2024/08/16 | 7-6 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2024/08/02 | 8-11 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/07/20 | 9-0 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2024/07/02 | 12-3 | [青鸾殿](https://ws.tsl.rocks/corp/d92c939be23b35542ca2d0ae7cdc4b1288d5d5e78be2dfb74cb0360f5524d01c/) |
| ❌ | 2024/04/18 | 1-12 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2024/03/27 | 4-29 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2024/02/08 | 2-31 | [共产星际](https://ws.tsl.rocks/corp/5cb42bdae108ad850e61479922e7d8cb4d5b7be7b8ac2f64fc828d3b88046737/) |
| ✅ | 2024/01/29 | 7-1 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ✅ | 2023/12/15 | 13-3 | [Bl@ck/Galaxy ](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ❌ | 2023/12/06 | 1-21 | [Galaxian](https://ws.tsl.rocks/corp/5dcf6b30fe7412dfe10c7f88aacc5e5ec1d63a2ea3df0084c393b9e20c34ee97/) |
| ✅ | 2023/11/26 | 7-3 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |

Corporation ID: f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>