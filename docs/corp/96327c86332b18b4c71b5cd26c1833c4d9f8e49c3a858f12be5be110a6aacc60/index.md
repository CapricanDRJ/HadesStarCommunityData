---
layout: page
title: ​Cell Division
description: W:0 L:3 D:0 Bonus ❌
date: 1716452566
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1159 🔻  (950)|
| ELO Competitive | 1164 🔻  (1009)|
| Total Matches | 3 |
| Wins | 0 |
| Losses | 3 |
| Draws | 0 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/05/23 | 0-5 | [雪月永恒](https://ws.tsl.rocks/corp/3b30781263716daadc217687009247bd0acb28c7eb4a8ebfe37daa11142622c2/) |
| ❌ | 2024/05/17 | 0-10 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/05/11 | 0-2 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |

Corporation ID: 96327c86332b18b4c71b5cd26c1833c4d9f8e49c3a858f12be5be110a6aacc60

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
        let timestamps = [1716020566,1715533623,1715009029];

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
                // Custom electric blue/white color scheme for a dark background
                data: dayCounts,
                backgroundColor: [
                    'rgba(0, 255, 255, 0.9)',   // Electric Cyan
                    'rgba(173, 216, 230, 0.9)', // Light Blue
                    'rgba(0, 191, 255, 0.9)',   // Deep Sky Blue
                    'rgba(0, 206, 209, 0.9)',   // Dark Turquoise
                    'rgba(135, 206, 250, 0.9)', // Light Sky Blue
                    'rgba(0, 255, 255, 0.9)',   // Cyan
                    'rgba(30, 144, 255, 0.9)'   // Dodger Blue
                ],
                borderColor: [
                    'rgba(0, 255, 255, 1)',     // Electric Cyan
                    'rgba(173, 216, 230, 1)',   // Light Blue
                    'rgba(0, 191, 255, 1)',     // Deep Sky Blue
                    'rgba(0, 206, 209, 1)',     // Dark Turquoise
                    'rgba(135, 206, 250, 1)',   // Light Sky Blue
                    'rgba(0, 255, 255, 1)',     // Cyan
                    'rgba(30, 144, 255, 1)'     // Dodger Blue
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
                        beginAtZero: true,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)' // Light text for contrast
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)' // Light grid lines for contrast
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)' // Light text for contrast
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)' // Light grid lines for contrast
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide the legend since we don't have a label
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    