---
layout: page
title: ​Brasil
description: W:0 L:2 D:0 Bonus ❌
date: 1721878090
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1171 🔻  (867)|
| ELO Competitive | 1178 🔻  (871)|
| Total Matches | 2 |
| Wins | 0 |
| Losses | 2 |
| Draws | 0 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/07/25 | 4-7 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ❌ | 2024/07/15 | 4-5 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |

Corporation ID: c1d98a4e0a9c522aff7cb4156b0dc139eb54566269c2203b2eae6fe1827fc6c3

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>

# Dynamic Bar Chart Example

This example dynamically creates a bar chart based on Unix timestamps using Chart.js loaded from a CDN.

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1721446090,1720655683];

        if (timestamps.length === 0) {
            // Handle empty data case, e.g., display a message
            document.getElementById('myChart').style.display = 'none';
            const message = document.createElement('p');
            message.textContent = 'No data available to display the chart.';
            document.body.appendChild(message);
            return;
        }

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
                borderWidth: 1
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
    