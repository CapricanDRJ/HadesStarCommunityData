---
layout: page
title: ​Warp Dominion
description: W:3 L:2 D:0 Bonus ❌
date: 1708320893
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1212 🔻  (387)|
| ELO Competitive | 1217 🔻  (425)|
| Total Matches | 5 |
| Wins | 3 |
| Losses | 2 |
| Draws | 0 |
| Streak Record | 3 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/02/19 | 1-16 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ❌ | 2024/01/18 | 5-6 | [하데스 스타 코리아](https://ws.tsl.rocks/corp/36ae3ca01b555bd695500062530b53a2b19cc9d4bab087051ea8775124723e94/) |
| ✅ | 2024/01/12 | 7-0 | [地球星际集团](https://ws.tsl.rocks/corp/05094116a999d8e077c5e53dc2241a870c7dc2e68e016455c606ada0dcb40b62/) |
| ✅ | 2024/01/04 | 12-2 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ✅ | 2023/12/28 | 5-1 | [V0RTEX](https://ws.tsl.rocks/corp/22a12c757b3e065e8ec7a839b80e33339317bb277aeee145f6cde6f473e06f8f/) |

Corporation ID: ccd60dbdf5091bcb2d6b0f011ba1a3645e89baed985e2e455b2e1de1412769c5

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>

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
        let timestamps = [1707888893,1705177388,1704660810,1703919731,1703368283];

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
                label: 'Events by Day of the Week',
                data: dayCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
                minBarLength: 5 // Ensure bars have at least this many pixels in height
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    