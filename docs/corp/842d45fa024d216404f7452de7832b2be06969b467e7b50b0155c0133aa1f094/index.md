---
layout: page
title: ​HighSociety
description: W:2 L:1 D:0 Bonus ❌
date: 1706828870
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1214 🔺  (371)|
| ELO Competitive | 1214 🔺  (458)|
| Total Matches | 3 |
| Wins | 2 |
| Losses | 1 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 2 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/02/01 | 3-0 | [₩\.BRASIL\.₩](https://ws.tsl.rocks/corp/ff7f01b2f1db7b9c75e49da4c7367325905c020eba282a97f69f33d8c19419aa/) |
| ✅ | 2024/01/01 | 6-3 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ❌ | 2023/12/02 | 0-4 | [하데스 스타 코리아](https://ws.tsl.rocks/corp/36ae3ca01b555bd695500062530b53a2b19cc9d4bab087051ea8775124723e94/) |

Corporation ID: 842d45fa024d216404f7452de7832b2be06969b467e7b50b0155c0133aa1f094

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
        let timestamps = [1706396870,1703647462,1701057523];

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
    