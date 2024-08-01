---
layout: page
title: ​Krasse Bros
description: W:5 L:1 D:0 Bonus ❌
date: 1702976615
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1256 🔺  (200)|
| ELO Competitive | 1259 🔺  (287)|
| Total Matches | 6 |
| Wins | 5 |
| Losses | 1 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 3 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2023/12/19 | 3-1 | [Dark Sun](https://ws.tsl.rocks/corp/41ffd72a8eba70ea3f7f69ce602194b0ee84c7e65be6d2e08b87181de24cc9cf/) |
| ✅ | 2023/12/13 | 6-3 | [Ascalon](https://ws.tsl.rocks/corp/419d15ad4ef8d71b318a3969624acedc85fa9a6e07381e2c8f2fc9d7633a0e23/) |
| ❌ | 2023/12/07 | 0-17 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2023/11/29 | 7-0 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ✅ | 2023/11/24 | 3-0 | [Cowboys](https://ws.tsl.rocks/corp/f461f65e85a43e0b855a525f6995505fc1cc5ae6f85be50470c9dacbb955fc21/) |
| ✅ | 2023/11/18 | 4-0 | [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) |

Corporation ID: ec8df719929b564225592da878034621da81f0c95a84a1afdee1b2c8389374fb

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
        let timestamps = [1702544615,1702014143,1701508029,1700831194,1700362349,1699867883];

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
    