---
layout: page
title: ​Anarchy Nation 
description: W:8 L:3 D:1 Bonus ❌
date: 1725729767
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1256 🔺  (211)|
| ELO Competitive | 1265 🔺  (305)|
| Total Matches | 12 |
| Wins | 8 |
| Losses | 3 |
| Draws | 1 |
| Streak Record | 4 |


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
        let timestamps = [1725297767,1724502322,1723541277,1722384017,1718888936,1716160365,1715345830,1714314555,1713150592,1712200178,1711484138,1710954099];

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
| ✅ | 2024/09/07 | 18-2 | [КРЫЛЯ ФЕНИКСА](https://ws.tsl.rocks/corp/a7852d9224a29d8a8b12b07f0985cf455ee57c9a7b5fed73f08ab733e8de733b/) |
| ❌ | 2024/08/29 | 3-4 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2024/08/18 | 5-4 | [Final Space](https://ws.tsl.rocks/corp/762914fc1846e6b284609274f8f9515959110b5db098a53be8048ffd45d98fdd/) |
| ✅ | 2024/08/05 | 10-0 | [德意志阿尔法帝国](https://ws.tsl.rocks/corp/b67013faae09f023e7b6100ac659b8f6d1793c27ff7e42a5dfc6494fd64bf2c4/) |
| ❌ | 2024/06/25 | 3-5 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ↔️ | 2024/05/24 | 1-1 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ✅ | 2024/05/15 | 12-0 | [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) |
| ❌ | 2024/05/03 | 0-10 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ✅ | 2024/04/20 | 9-0 | [Red Suns](https://ws.tsl.rocks/corp/4723a7ddfdf84d63bb4a6e897d77183874e4abd0d5f04c8c6470cb3141dd8629/) |
| ✅ | 2024/04/09 | 12-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ✅ | 2024/03/31 | 7-0 | [Fr\_Corp](https://ws.tsl.rocks/corp/15cb64e65ca36cfe0587e97943f7949ab81e724a438ff9d31bd466d55199f8da/) |
| ✅ | 2024/03/25 | 5-1 | [KhaOSs](https://ws.tsl.rocks/corp/95c40ecac6f4ca7ecd66a5c1e79c568a9486ba450cf71becee48329599573c88/) |

Corporation ID: 9c456dbf32e22070620021bf0bea4d2ab9deb0ac7ad4be06a4067a9ced5f2f5b

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>