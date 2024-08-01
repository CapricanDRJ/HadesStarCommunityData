---
layout: page
title: ​CAEDRUS [<o>]
description: W:2 L:2 D:1 Bonus ❌
date: 1702291873
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1198 🔻  (470)|
| ELO Competitive | 1199 🔻  (561)|
| Total Matches | 5 |
| Wins | 2 |
| Losses | 2 |
| Draws | 1 |
| Streak Record | 2 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2023/12/11 | 0-3 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ↔️ | 2023/12/06 | 4-4 | [Survivors](https://ws.tsl.rocks/corp/10eb3bf190162d1f8373394a774ca9fe65faf64b1e98400cceadb7f37028d7b0/) |
| ✅ | 2023/11/29 | 3-1 | [星光禁卫](https://ws.tsl.rocks/corp/8a3e5d55227ad679805b549aca87a2bc5acb1215ccd2af913592418385eccd25/) |
| ✅ | 2023/11/24 | 10-0 | [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) |
| ❌ | 2023/11/18 | 2-8 | [Альянс звезд](https://ws.tsl.rocks/corp/c406351fec6349034d9ae58aec3da43a5507ad86ff9a89b4654a20eb10e6de95/) |

Corporation ID: b3c982613964d8287b8f57e57ececf5b9497766670fc306d9827c85fbcdb2887

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
        let timestamps = [1701859873,1701391726,1700855544,1700414325,1699875397];

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
    