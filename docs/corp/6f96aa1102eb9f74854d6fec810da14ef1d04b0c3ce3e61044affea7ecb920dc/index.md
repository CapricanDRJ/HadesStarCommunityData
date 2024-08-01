---
layout: page
title: ​северный шторм
description: W:0 L:3 D:0 Bonus ❌
date: 1716748294
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1167 🔻  (904)|
| ELO Competitive | 1177 🔻  (875)|
| Total Matches | 3 |
| Wins | 0 |
| Losses | 3 |
| Draws | 0 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/05/26 | 0-22 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2024/05/26 | 0-11 | [BoomTech](https://ws.tsl.rocks/corp/97c4db179d3ea995d3a56227f87c501f4baa4abbece2b25e09b636f0aa264bd7/) |
| ❌ | 2023/12/09 | 0-2 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |

Corporation ID: 6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc

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
        let timestamps = [1716316294,1716308181,1701709695];

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
    