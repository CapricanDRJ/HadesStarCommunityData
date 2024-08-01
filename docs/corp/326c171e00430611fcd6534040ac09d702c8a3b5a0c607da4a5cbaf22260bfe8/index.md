---
layout: page
title: ​The Mini Elite
description: W:0 L:4 D:0 Bonus ❌
date: 1714047703
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1145 🔻  (1011)|
| ELO Competitive | 1146 🔻  (1077)|
| Total Matches | 4 |
| Wins | 0 |
| Losses | 4 |
| Draws | 0 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/04/25 | 0-20 | [柯伊伯带伊甸园](https://ws.tsl.rocks/corp/4eea992d73d29d14f33b0acc0b240ba7c71162f6e6a453f3771b7365d18616f6/) |
| ❌ | 2024/04/18 | 0-7 | [星环建设集团](https://ws.tsl.rocks/corp/85422294545c4561b468821bbbbe277a0d7f09c6ab45fedb2a43cbaa36d32f63/) |
| ❌ | 2024/03/24 | 1-10 | [Nexland Ind\.](https://ws.tsl.rocks/corp/d944d7c48fcdf12fbe80bbfaec82482895285c344a643e8e679fc22617a2c44a/) |
| ❌ | 2024/03/18 | 2-18 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |

Corporation ID: 326c171e00430611fcd6534040ac09d702c8a3b5a0c607da4a5cbaf22260bfe8

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
        let timestamps = [1713615703,1713018673,1710825633,1710373898];

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
    